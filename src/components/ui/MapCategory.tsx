"use client";
import React from "react";
import { useDigikalaContext } from "../hook/useDigikalaContext";

function MapCategory() {
  const { getListCategory } = useDigikalaContext();

  return (
    <>
      {getListCategory.map((item) => (
        <div
          key={item.id}
          className="col-span-1 flex flex-col items-center justify-start space-y-2 w-[105px] h-[130px] p-2 rounded-md transition hover:shadow-md"
        >
          <div className="w-[56px] h-[56px] flex items-center justify-center">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-[12px] text-center font-medium text-[#3f4064] leading-[1.5] px-1">
            {item.title}
          </div>
        </div>
      ))}
    </>
  );
}

export default MapCategory;
