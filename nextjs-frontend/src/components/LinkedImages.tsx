"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchFoods } from "@/app/services";
import { FoodEntry } from "@/app/Types";

const STRAPI_URL: string = "http://localhost:1337";

export default function LinkedImages() {
  const [foods, setFoods] = useState<FoodEntry[]>([]);
  const getFoods = async () => {
    const result = await fetchFoods();
    setFoods(result?.data);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className=" w-full">
      <div className="w-full my-5">
        <p className="text-lg font-semibold">Entries with Linked Images</p>
        <span className="text-sm text-[#71717a]">
          This is where you find all uploaded images so as update anyone.
        </span>
      </div>
      {foods?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {foods?.map((food) => (
            <div key={food.id} className="group h-full border">
              <div className="h-full">
                <p className="p-2 font-bold border-b flex flex-col items-center justify-center bg-black text-white">
                  <span>{food?.name}</span>
                </p>
                <div className="h-[200px] w-[400]px">
                  {food?.cover?.url ? (
                    <Image
                      src={`${STRAPI_URL}/${food?.cover?.url}`}
                      alt={food?.cover?.name}
                      width={200}
                      height={300}
                      className="transition-all duration-300 opacity-100 h-full w-full max-w-full rounded-lg group-hover:opacity-50"
                    />
                  ) : (
                    <div className="h-full  flex flex-col justify-center items-center text-sm text-[#71717a]">
                      No linked image
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {foods?.length <= 0 && <p>No foods and images linked</p>}
    </div>
  );
}
