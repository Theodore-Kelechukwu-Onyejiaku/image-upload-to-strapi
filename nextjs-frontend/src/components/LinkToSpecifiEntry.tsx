"use client";

import { useState } from "react";

enum LinkType {
  UPLOAD_FILE = "file",
  GALLERY = "gallery",
}
export default function LinkToSpecificEntry() {
  const [linkType, setLinkType] = useState<string>(LinkType.UPLOAD_FILE);

  return (
    <div>
      <div className="w-full my-5">
        <p className="text-lg font-semibold">Link to a Food</p>
        <span className="text-sm text-[#71717a]">
          Link to a specific entry and add a cover (image)
        </span>
      </div>
      <div className="flex justify-between items-center w-full border">
        <button
          type="button"
          onClick={() => setLinkType(LinkType.UPLOAD_FILE)}
          className={`${
            linkType === LinkType.UPLOAD_FILE
              ? "bg-black text-white"
              : "bg-white text-black"
          } py-2 basis-1/2 px-3 transition-all duration-500`}
        >
          Link By Upload
        </button>
        <button
          type="button"
          onClick={() => setLinkType(LinkType.GALLERY)}
          className={`${
            linkType === LinkType.GALLERY
              ? "bg-black text-white"
              : "bg-white text-black"
          } py-2 basis-1/2 px-3 transition-all duration-500`}
        >
          Link from Gallery
        </button>
      </div>
    </div>
  );
}
