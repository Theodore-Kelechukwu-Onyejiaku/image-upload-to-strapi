"use client";

import { useState, useEffect } from "react";
import { Food } from "@/app/Types";

export default function LinkedImages() {
  const [foods, setFoods] = useState<Food[]>([]);

  const getFoods = async () => {};

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className=" w-full">
      <div className="w-full my-5">
        <p className="text-lg font-semibold">Entries with Linked Images</p>
        <span className="text-sm text-[#71717a]">
          This is where you find all entries along with their linked images.
        </span>
      </div>
    </div>
  );
}
