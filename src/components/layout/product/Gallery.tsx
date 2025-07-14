// "use client"

import { ProductDiscount } from "@/components/context/DigikalaContext";

export interface Props {
  idProduct : string ;
}

async function Gallery({ idProduct }:Props) {
  const resDetailProduct = await fetch(
    `http://localhost:3001/DiscountProduct/${idProduct}`
  );
  const dataDetailProduct = await resDetailProduct.json() as ProductDiscount;
  return (
    <div className="row-span-1">
      <div className="flex flex-col">
        <div className="">
          <img src={dataDetailProduct.img} className="w-full object-contain" />
        </div>
        <div className="flex items-center justify-center flex-row space-x-2">
          <div className="p-1 border boder-solid border-[rgba(0,0,0,0.09)]">
            <div className="w-[72px] h-[72px] rounded">
              <img
                src={dataDetailProduct.img}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="p-1 border boder-solid border-[rgba(0,0,0,0.09)]">
            <div className="w-[72px] h-[72px] rounded">
              <img
                src={dataDetailProduct.img}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="p-1 border boder-solid border-[rgba(0,0,0,0.09)]">
            <div className="w-[72px] h-[72px] rounded">
              <img
                src={dataDetailProduct.img}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="p-1 border boder-solid border-[rgba(0,0,0,0.09)]">
            <div className="w-[72px] h-[72px] rounded">
              <img
                src={dataDetailProduct.img}
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="p-1 border boder-solid border-[rgba(0,0,0,0.09)]">
            <div className="w-[72px] h-[72px] rounded relative">
              <img
                src={dataDetailProduct.img}
                className="w-full object-contain blur-[4px] opacity-[0.5] z-0"
              />
              <span className="flex items-center justify-center z-50 text-2xl font-medium absolute top-0 w-full h-full">...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery