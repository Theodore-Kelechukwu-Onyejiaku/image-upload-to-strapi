"use client";
import { uploadAtEntryCreationAction } from "@/app/actions";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import SubmitButton from "./SubmitButton";
import { toast } from "react-toastify";

const initialState = {
  uploadError: null,
  uploadSuccess: null,
};

export default function UploadAtEntryCreation() {
  const [state, formAction] = useFormState(
    uploadAtEntryCreationAction,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef?.current?.reset();
    toast.success(state?.uploadSuccess);
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex rounded h-screen lg:w-full"
    >
      <div className="w-full">
        <div className="w-full my-5">
          <p className=" text-base lg:text-lg">
            Upload a File at Entry Creation
          </p>
          <span className="text-sm text-[#71717a]">
            Here, you can create an entry with an image!
          </span>
        </div>
        <div className="flex flex-col pt-10 space-y-2">
          <label htmlFor="cover">Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="text-sm text-[#71717a] p-2 border"
          />
          <span className="text-sm text-[#71717a]">
            Select the image for this entry!
          </span>
        </div>
        <div className="flex flex-col pt-10 gap-y-7">
          <span className="flex flex-col space-y-2">
            <label htmlFor="cover">Cover</label>
            <input
              type="file"
              name="files"
              className="text-sm text-[#71717a] p-5 lg:p-0  border"
            />
            <span className="text-sm text-[#71717a]">
              Here, you can upload two or more files!
            </span>
          </span>
          {state?.uploadError ? (
            <span className="text-red-500">{state?.uploadError}</span>
          ) : null}
          <SubmitButton title="Upload" />
        </div>
      </div>
    </form>
  );
}
