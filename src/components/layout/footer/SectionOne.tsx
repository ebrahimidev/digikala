import React from "react";

function SectionOne() {
  return (
    <div className="grid grid-cols-2">
      <div className="row-span-1 flex flex-col space-y-4 justify-start">
        <div className="  w-[195px] h-[30px] ">
          <img
            className="w-full h-full object-contain"
            src="https://www.digikala.com/brand/full-horizontal.svg"
          />
        </div>
        <div className="flex items-center gap-3 flex-row text-xs font-normal text-[#3f4064]">
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <div className=" text-[#3f4064]">|</div>
          <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
          <div className=" text-[#3f4064]">|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
      </div>
      <div className="row-span-1 flex items-center justify-end">
        <button className="flex space-x-1.5 border border-solid border-[#a1a3a8] rounded-lg px-3 py-2">
          <span className="text-xs font-normal text-[#a1a3a8]">
            بازگشت به بالا
          </span>
          <span className="text-xs font-normal text-[#a1a3a8]">{"<"}</span>
        </button>
      </div>
    </div>
  );
}

export default SectionOne;
