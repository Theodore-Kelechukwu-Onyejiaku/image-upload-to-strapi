
"use client";

import SubmitButton from "./SubmitButton";

export default function MultipleOrSingleUpload() {

  return (
    <form className="flex rounded h-screen lg:w-full">
      <div className="divide-y w-full">
        <div className="w-full my-5">
          <p className=" text-base lg:text-lg">Upload Multiple Files</p>
          <span className="text-sm text-[#71717a]">
            Here, you can upload one or more files!
          </span>
        </div>
        <div className="flex flex-col pt-10 gap-y-7">
          <input
            type="file"
            name="files"
            className="text-sm text-[#71717a] p-5 lg:p-0  border"
            multiple
          />
          <SubmitButton title="Upload" />
        </div>
      </div>
    </form>
  );
}