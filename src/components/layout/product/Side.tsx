import {
  IDPropsProduct,
  ProductDiscount,
} from "@/components/context/DigikalaContext";
import React from "react";
import Basket from "./basket";
import Description from "./Description";

async function Side({ idProduct }: IDPropsProduct) {
  const res = await fetch(`http://localhost:3001/DiscountProduct/${idProduct}`);
  const data = (await res.json()) as ProductDiscount;

  return (
    <div className="col-span-2">
      <div className="flex flex-col gap-2.5">
        <span className="flex gap-1.5 text-xs font-normal text-[#19bfd3]">
          <span>متفرقه</span>
          <span>{"/"}</span>
          <span>دسته بندی مربوطه</span>
        </span>
        <span className="text-xl font-bold text-[#0c0c0c]">{data.title}</span>
      </div>
      <div className="grid grid-cols-5 gap-2 w-full">
        <Description {...data} />
        <Basket />
      </div>
    </div>
  );
}

export default Side;
