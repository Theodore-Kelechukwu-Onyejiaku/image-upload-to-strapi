"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ title }: { title: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-black text-sm w-[100px] text-white px-3 py-1 rounded-lg"
    >
      {pending ? `${title}ing...` : title}
    </button>
  );
}
