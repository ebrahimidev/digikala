import React from "react";

function Basket() {
  return (
    <div className="col-span-2 px-2 py-6 ">
      <div
        className=" py-3.5 px-2 space-y-3.5 rounded border border-solid border-[rgba(0,0,0,0.09)]"
        style={{
          background:
            "linear-gradient(0deg,hsla(240,3%,94%,.5),hsla(240,3%,94%,.5)),#fff",
        }}
      >
        <div className="flex justify-between">
          <span className="text-[#0c0c0c] text-sm font-medium">فروشنده</span>
          <span className="text-[#19bfd3] text-xs font-normal">
            ۲ فروشنده دیگر
          </span>
        </div>
        <div className="flex justify-end flex-col items-end w-full space-y-2.5 ">
          <div className="flex space-x-2 items-center">
            <span className="text-xs font-light text-underline line-through text-[##c0c2c5] ">
              890/000
            </span>
            <span className="text-white bg-[#d32f2f] px-1 rounded-2xl flex justify-center h-[20px] w-[34px] text-xs items-center">24%</span>
          </div>
          <div className="flex items-center w-full">
            <button className="px-4 py-2 w-full bg-[#ef4056] text-md font-medium text-white  rounded-lg "> افزودن به سبد</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
