"use client";

import { useState } from "react";

import LinkByUpload from "./form/LinkByUpload";
import LinkByGallery from "./form/LinkByGallery";

enum LinkType {
  UPLOAD = "upload",
  GALLERY = "gallery",
}

export default function LinkToSpecificEntry() {
  const [linkType, setLinkType] = useState<LinkType>(LinkType.UPLOAD);

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
          onClick={() => setLinkType(LinkType.UPLOAD)}
          className={`${
            linkType === LinkType.UPLOAD
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
      {linkType === LinkType.UPLOAD ? <LinkByUpload /> : <LinkByGallery />}
    </div>
  );
}
