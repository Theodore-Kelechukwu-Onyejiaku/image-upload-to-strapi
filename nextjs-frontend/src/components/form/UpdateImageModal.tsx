"use client";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";
import { useFormState } from "react-dom";
import { updateImageAction } from "@/app/actions";
import { ImageEntry } from "@/app/Types";

// Define the props interface for UpdateImageModal
interface UpdateImageModalProps {
  closeModal: () => void;
  imageSelected: ImageEntry;
  handleFetchImages: () => Promise<void>;
}

export function UpdateImageModal({
  closeModal,
  imageSelected,
  handleFetchImages,
}: UpdateImageModalProps) {
  const initialState = {
    uploadError: null,
    uploadSuccess: null,
    imageSelected,
  };

  const [state, formAction] = useFormState(updateImageAction, initialState);

  if (state?.uploadSuccess) {
    toast.success(state?.uploadSuccess);
    handleFetchImages();
    closeModal();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-55 flex flex-col justify-center items-center">
      <div className="w-fit h-fit lg:w-[500px]  border flex flex-col bg-white ">
        <div className="flex justify-end p-2">
          <button
            onClick={() => {
              closeModal();
            }}
            className="relative w-fit border bg-black text-white px-3 py-1 rounded-md"
          >
            close
          </button>
        </div>
        <form className="p-10" action={formAction}>
          <div className="w-full my-5">
            <p className="text-base lg:text-lg">
              Update File Infos: {imageSelected.name.split(".")[0]}{" "}
            </p>
            <span className="text-sm text-[#71717a]">
              Update a specific image in your application.
            </span>
          </div>
          <div className="flex flex-col pt-5 gap-y-7">
            <div className="flex flex-col space-y-2">
              <label htmlFor="cover">Name</label>
              <input
                defaultValue={imageSelected.name?.split(".")[0]}
                placeholder={imageSelected.name?.split(".")[0]}
                type="text"
                name="name"
                className="text-sm text-[#71717a] p-5 lg:p-2  border"
              />
              <span className="text-sm text-[#71717a]">Type in a new name</span>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="cover">Caption</label>
              <input
                defaultValue={imageSelected?.caption?.split(".")[0]}
                placeholder={imageSelected?.caption?.split(".")[0]}
                type="text"
                name="caption"
                className="text-sm text-[#71717a] p-5 lg:p-2  border"
              />
              <span className="text-sm text-[#71717a]">Give it a caption</span>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="">Alternative Text</label>
              <input
                defaultValue={imageSelected?.alternativeText?.split(".")[0]}
                placeholder={imageSelected?.alternativeText?.split(".")[0]}
                type="text"
                name="alternativeText"
                className="text-sm text-[#71717a] p-5 lg:p-2  border"
              />
              <span className="text-sm text-[#71717a]">
                Create an alternative text for your image
              </span>
            </div>
            <input type="hidden" name="imageId" value={imageSelected?.id} />

            {state?.uploadError ? (
              <span className="text-red-500">{state?.uploadError}</span>
            ) : null}
            <SubmitButton title="Update" />
          </div>
        </form>
      </div>
    </div>
  );
}
