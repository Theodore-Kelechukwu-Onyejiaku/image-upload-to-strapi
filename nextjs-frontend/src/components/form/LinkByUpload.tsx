import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { LinkByUploadAction } from "@/app/actions";

import SubmitButton from "@/components/SubmitButton";
import { fetchFoods } from "@/app/services";
import { Food } from "@/app/Types";

const initialState = {
  uploadError: null,
  uploadSuccess: null,
};

export default function LinkByUpload() {
  const [state, formAction] = useFormState(LinkByUploadAction, initialState);
  const [foods, setFoods] = useState<Food[]>([]);

  const handleFetchFoods = async () => {
    const result = await fetchFoods();
    setFoods(result?.data);
  };

  useEffect(() => {
    handleFetchFoods();
  }, []);

  if (state?.uploadSuccess) {
    toast.success(state?.uploadSuccess);
  }

  return (
    <div className="w-full">
      <form action={formAction} className="flex rounded w-full">
        <div className="flex flex-col pt-10 gap-y-7 w-full">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Food</label>
            <select name="refId" className="border p-2 text-[#71717a] text-sm">
              {foods.map((food) => {
                return (
                  <option key={food.id} value={food.documentId}>
                    {" "}
                    {food.name}
                  </option>
                );
              })}
            </select>
            <span className="text-sm text-[#71717a]">
              Select the food you want to add Image to
            </span>
            <div className="flex flex-col space-y-2 pt-10">
              <label htmlFor="cover">Cover</label>
              <input
                type="file"
                name="files"
                className="text-sm text-[#71717a] border"
              />
              <span className="text-sm text-[#71717a]">
                Select an image to link to a food
              </span>
            </div>

            {state?.uploadError ? (
              <span className="text-red-500">{state?.uploadError}</span>
            ) : null}
            <input type="hidden" name="ref" value="api::food.food" />
            <input type="hidden" name="field" value="cover" />
            <div className="pt-5">
              <SubmitButton title="Link" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
