"use client";
import { uploadMultipleOrSingleAction } from "@/app/actions";
import { useFormState } from "react-dom";
import { Ref, useRef } from "react";
import SubmitButton from "./SubmitButton";
import { toast } from "react-toastify";

const initialState = {
  uploadError: null,
  uploadSuccess: null,
};

export default function MultipleOrSingleImageUpload() {
  const [state, formAction] = useFormState(
    uploadMultipleOrSingleAction,
    initialState
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  if (state?.uploadSuccess) {
    formRef?.current?.reset();
    toast.success(state?.uploadSuccess);
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex rounded h-screen lg:w-full"
    >
      <div className="divide-y w-full">
        <div className="w-full my-5">
          <p className=" text-base lg:text-lg">Upload Multiple Files</p>
          <span className="text-sm text-[#71717a]">
            Here, you can upload two or more files!
          </span>
        </div>
        <div className="flex flex-col pt-10 gap-y-7">
          <input
            type="file"
            name="files"
            className="text-sm text-[#71717a] p-5 lg:p-0  border"
            multiple
          />
          {state?.uploadError ? (
            <span className="text-red-500">{state?.uploadError}</span>
          ) : null}
          <SubmitButton title="Upload" />
        </div>
      </div>
    </form>
  );
}
