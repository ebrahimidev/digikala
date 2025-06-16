"use client";
import Link from "next/link";
import React from "react";
import { useDigikalaContext } from "../hook/useDigikalaContext";

function Blogs() {
  const { getBlogs } = useDigikalaContext();
  return (
    <div className="w-full max-w-[1676px] px-4 space-y-3 pb-9">
      <div className="grid grid-cols-2">
        <div className="row-span-1 flex items-center justify-start px-2">
          <span className="text-[1rem] font-bold text-[#0c0c0c] leading-[2]">
            خواندنی‌ها
          </span>
        </div>
        <div className="row-span-1 flex items-center justify-end px-2">
          <Link href={"/"} className="space-x-1.5">
            <span className="text-xs font-normal text-[#19bfd3] leading-[2]">
              مطالب بیشتر در دیجی‌کالا مگ{" "}
            </span>
            <span className="text-xs font-normal text-[#19bfd3] leading-[2]">
              {" "}
              {"<"}{" "}
            </span>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {getBlogs.map((item) => (
          <Link
            key={item.id}
            href={`blog/${item.id}`}
            className="cursor-pointer row-span-1 flex flex-col rounded-lg overflow-hidden border border-solid border-[rgba(0,0,0,0.2)]"
          >
            <div className="rounded-lg ">
              <img className="w-full h-full object-contain" src={item.img} />
            </div>
            <div className="px-4 mt-2 mb-3 line-clamp-2 leading-2 ">
              <p className="text-sm font-normal text-[#0c0c0c]">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
