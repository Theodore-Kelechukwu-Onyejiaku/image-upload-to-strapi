"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MultipleOrSingleUpload from "./MultipleOrSingleUpload";
import UploadAtEntryCreation from "./UploadAtEntryCreation";
import LinkToSpecificEntry from "./LinkToSpecificEntry";

import { useState } from "react";
import LinkedImages from "./LinkedImages";
import Gallery from "./Gallery";

enum Tabs {
  MULTIPLE_OR_SINGLE = "multipleOrSingle",
  SPECIFIC_ENTRY = "specificEntry",
  LINKED_IMAGES = "linkedImages",
  ENTRY_CREATION = "entryCreation",
  GALLERY = "gallery",
}

export default function TabsContainer() {
  const [tab, setTab] = useState<string>(Tabs.MULTIPLE_OR_SINGLE);

  return (
    <div>
      <ToastContainer />

      <div className="flex flex-col lg:flex-row w-full h-full lg:p-10 gap-x-10 ">
        <div className="lg:flex  lg:flex-col text-sm items-start h-screen basis-2/6 w-full pt-5 ">
          <button
            className={`${
              tab == Tabs.MULTIPLE_OR_SINGLE
                ? " px-5 lg:px-4 text-red-500 lg:text-inherit  bg-[#f4f4f5] "
                : null
            } px-4 py-2 rounded-lg text-left  w-full`}
            onClick={() => {
              setTab(Tabs.MULTIPLE_OR_SINGLE);
            }}
          >
            Upload Multiple Files
          </button>
          <button
            className={`${
              tab == Tabs.SPECIFIC_ENTRY
                ? " px-5 lg:px-4 text-red-500 lg:text-inherit  bg-[#f4f4f5] "
                : null
            } px-4 py-2 rounded-lg text-left  w-full`}
            onClick={() => {
              setTab(Tabs.SPECIFIC_ENTRY);
            }}
          >
            Link to a Specific Entry
          </button>
          <button
            className={`${
              tab == Tabs.LINKED_IMAGES
                ? " px-5 lg:px-4 text-red-500 lg:text-inherit  bg-[#f4f4f5] "
                : null
            } px-4 py-2 rounded-lg text-left  w-full`}
            onClick={() => {
              setTab(Tabs.LINKED_IMAGES);
            }}
          >
            Linked Images
          </button>
          <button
            className={`${
              tab == Tabs.ENTRY_CREATION
                ? " px-5 lg:px-4 text-red-500 lg:text-inherit  bg-[#f4f4f5] "
                : null
            } px-4 py-2 rounded-lg text-left  w-full`}
            onClick={() => {
              setTab(Tabs.ENTRY_CREATION);
            }}
          >
            Upload at Entry creation
          </button>
          <button
            className={`${
              tab == Tabs.GALLERY
                ? " px-5 lg:px-4 text-red-500 lg:text-inherit  bg-[#f4f4f5] "
                : null
            } px-4 py-2 rounded-lg text-left  w-full`}
            onClick={() => {
              setTab(Tabs.GALLERY);
            }}
          >
            Gallery
          </button>
        </div>

        <div className="h-screen w-full flex flex-col  gap-y-10 basis-4/6">
          {tab === Tabs.MULTIPLE_OR_SINGLE ? (
            <MultipleOrSingleUpload />
          ) : tab === Tabs.SPECIFIC_ENTRY ? (
            <LinkToSpecificEntry />
          ) : tab === Tabs.LINKED_IMAGES ? (
            <LinkedImages />
          ) : tab === Tabs.ENTRY_CREATION ? (
            <UploadAtEntryCreation />
          ) : (
            <Gallery />
          )}
        </div>
      </div>
    </div>
  );
}
