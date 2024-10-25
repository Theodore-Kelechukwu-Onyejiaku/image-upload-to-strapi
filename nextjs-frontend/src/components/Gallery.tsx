"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { UpdateImageModal } from "./form/UpdateImageModal";
import { deleteImage, fetchImages } from "@/app/services";
import { toast } from "react-toastify";
import { ImageEntry } from "@/app/Types";

const STRAPI_URL: string = "http://localhost:1337";

export default function Gallery() {
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageEntry | null>(null);
  const [update, setUpdate] = useState<boolean>(false);

  const handleFetchImages = async () => {
    const images = await fetchImages();
    setImages(images);
  };

  const closeModal = () => {
    setUpdate(false);
  };

  const onDeleteImage = async (ImageEntryd: number) => {
    await deleteImage(ImageEntryd);
    const newImages = [...images].filter((image) => image.id !== ImageEntryd);
    setImages(newImages);
    toast.success("Image Deleted");
  };

  useEffect(() => {
    handleFetchImages();
  }, []);

  return (
    <div className=" w-full divide-y">
      <div>
        {update ? (
          <UpdateImageModal
            closeModal={closeModal}
            imageSelected={selectedImage as ImageEntry}
            handleFetchImages={handleFetchImages}
          />
        ) : null}
      </div>

      <div className="w-full my-5">
        <p className="text-lg font-semibold">Update Image Info</p>
        <span className="text-sm text-[#71717a]">
          This is where you find all uploaded images so as update anyone.
        </span>
      </div>

      {images?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pt-10">
          {images?.map((image) => (
            <div className=" group border">
              <div className="h-[200px]">
                <Image
                  src={`${STRAPI_URL}${image?.url}`}
                  alt={image.name}
                  width={400}
                  height={300}
                  className="transition-all duration-300 opacity-100 h-full w-full max-w-full rounded-lg group-hover:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-y-2 border">
                <p className="flex justify-center items-center text-sm text-center text-[#71717a] h-10">
                  {image.name.split(".")[0]?.length > 10
                    ? image.name.split(".")[0].slice(0, 10) + "..."
                    : image.name.split(".")[0]}
                </p>
                <button
                  className="bg-black text-white px-3 py-1 text-sm rounded-md"
                  onClick={() => {
                    setUpdate(true);
                    setSelectedImage(image);
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    onDeleteImage(image.id);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {images?.length <= 0 && (
        <p className="w-full text-orange-300 pt-5">No Images in Gallery.</p>
      )}
    </div>
  );
}
