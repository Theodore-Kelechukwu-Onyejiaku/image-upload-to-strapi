"use client";

import { useEffect, useState } from "react";
import { ImageI } from "@/app/Types";

export default function Gallery() {
  const [images, setImages] = useState<ImageI[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageI | null>(null);
  const [update, setUpdate] = useState<boolean>(false);

  const handleFetchImages = async () => {};

  const closeModal = () => {
    setUpdate(false);
  };

  const onDeleteImage = async (imageId: number) => {};

  useEffect(() => {
    handleFetchImages();
  }, []);

  return (
    <div className=" w-full divide-y">
      <div className="w-full my-5">
        <p className="text-lg font-semibold">Welcome to Gallery</p>
        <span className="text-sm text-[#71717a]">
          This is where all uploaded images can be found.
        </span>
      </div>
    </div>
  );
}
