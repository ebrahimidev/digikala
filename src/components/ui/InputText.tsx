// "use client";
import { FormValue } from "@/app/(auth)/register/page";
import React from "react";
import { UseFormRegister } from "react-hook-form";

type ArrayInput = {
  title: string;
  type: string;
  name: keyof FormValue;
  register: UseFormRegister<FormValue> ;
};

function InputText({ title, type, name, register }: ArrayInput) {
  return (
    <div className="mb-3.5">
      <label
        htmlFor=""
        className="text-sm text-[#0c0c0c] font-medium mb-2 w-full inline-block"
      >
        {title}
      </label>
      <input
        {...register(name)}
        type={type}
        className="w-full px-3 py-2 border border-solid border-[rgba(0,0,0,0.09)] rounded-lg text-sm font-normal outline-none"
        placeholder={`${title} خود را وراد کنید `}
      />
    </div>
  );
}

export default InputText;
