import { useEffect, useState, useRef } from "react";
import { useFormState } from "react-dom";
import Image from "next/image";
import { fetchFoods, fetchImages } from "@/app/services";
import { toast } from "react-toastify";
import SubmitButton from "@/components/SubmitButton";
import { linkFromGalleryAction } from "@/app/actions";
import { FoodEntry, ImageEntry } from "@/app/Types";

const STRAPI_URL: string = "http://localhost:1337";

const initialState = {
  uploadError: null,
  uploadSuccess: null,
};
export default function LinkByGallery() {
  const [state, formAction] = useFormState(linkFromGalleryAction, initialState);
  const [foods, setFoods] = useState<FoodEntry[]>([]);
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [selectedImageId, setSelectedImageId] = useState<number | string>("");

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleFetchFoods = async () => {
    const result = await fetchFoods();
    setFoods(result?.data);
  };

  const handleFetchImages = async () => {
    const images = await fetchImages();
    setImages(images);
  };

  if (state?.uploadSuccess) {
    formRef?.current?.reset();
    toast.success(state?.uploadSuccess);
    state.uploadSuccess = "";
  }

  useEffect(() => {
    handleFetchFoods();
    handleFetchImages();
  }, []);
  return (
    <div className="w-full">
      <form ref={formRef} action={formAction} className="flex rounded w-full">
        <div className="w-full">
          <div className="flex flex-col pt-10 gap-y-7">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Food</label>
              <select
                name="refId"
                className="border p-2 text-[#71717a] text-sm w-full"
                id="food"
              >
                {foods.map((food) => {
                  return <option value={food.documentId}>{food.name}</option>;
                })}
              </select>
              <span className="text-sm text-[#71717a]">
                Select the food you want to add Image to
              </span>
            </div>
          </div>
          {images?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pt-10">
              {images?.map((image) => (
                <div
                  className={`${
                    selectedImageId === image?.id ? "border-2 border-black" : ""
                  } h-[200px] w-[400]px group relative`}
                  onClick={() => setSelectedImageId(image?.id)}
                >
                  {selectedImageId === image?.id && (
                    <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
                      <span className="absolute z-50 text-white font-extrabold">
                        selected
                      </span>
                    </div>
                  )}
                  <Image
                    src={`${STRAPI_URL}${image?.url}`}
                    alt={image.name}
                    width={400}
                    height={100}
                    className={` ${
                      selectedImageId === image?.id ? " opacity-50 " : " "
                    } transition-all duration-300 opacity-100 h-full w-full max-w-full rounded-lg group-hover:opacity-50`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="w-full text-orange-300 pt-5">No Images in Gallery.</p>
          )}
          <p className="pt-2">
            {state?.uploadError ? (
              <span className="text-red-500">{state?.uploadError}</span>
            ) : null}
          </p>
          <input type="hidden" name="imageId" value={selectedImageId} />
          <div className="pt-5">
            <SubmitButton title="Link" />
          </div>
        </div>
      </form>
    </div>
  );
}
