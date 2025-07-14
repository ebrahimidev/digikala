"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiBell, FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { TbLogin } from "react-icons/tb";



function TopNav() {
  const [getIsLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() =>{
    const isLogin = localStorage.getItem("isLogin");
    setIsLogin(isLogin === "true" );
  },[])

  return (
    <div className="container-4xl w-full bg-white relative z-50">
      <div className="grid grid-cols-12 w-full gap-5 px-5 py-4">
        <div className="col-span-9 flex flex-row items-center space-x-5 relative">
          <Link href={"/"} className="flex w-[195px] h-[30px]">
            <img
              className="object-cover w-full h-full"
              src="https://www.digikala.com/brand/full-horizontal.svg"
              alt=""
            />
          </Link>
          <div className="px-4 rounded-md bg-[#f0f0f1] w-[600px] relative flex items-center space-x-4">
            {/* <div className=""> */}
            <IoSearch
              size={"23px"}
              className="flex items-center "
              fill="#a1a3a8"
            />
            {/* </div> */}
            {/* <div className="w-full "> */}
            <input
              className="outline-none h-[44px]  w-full leading-[2] bg-none border-none px-5 text-sm"
              type="text"
              placeholder="جستجو"
            />
            {/* </div> */}
          </div>
        </div>
        <div className="col-span-3 flex flex-row items-center justify-end space-x-4 relative">
          <FiBell size={"24px"} />
          {getIsLogin === true ? (
            <Link href={"/dashboard"} className="">
              <button className="border border-solid border-[rgba(0,0,0,0.08)] bg-none rounded-md px-4 py-2 space-x-2 flex items-center justify-center flex-row cursor-pointer ">
                <span className="text-[#424750]">
                  <RiUser3Line size={"24px"} />
                </span>
                <span className="text-[#424750] leading-[2] text-xs font-bold">
                  حساب کاربری
                </span>
              </button>
            </Link>
          ) : (
            <Link href={"register"} className="">
              <button className="border border-solid border-[rgba(0,0,0,0.08)] bg-none rounded-md px-4 py-2 space-x-2 flex items-center justify-center flex-row cursor-pointer ">
                <span className="text-[#424750]">
                  <TbLogin size={"24px"} />
                </span>
                <span className="text-[#424750] leading-[2] text-xs font-bold">
                  ورود
                </span>
                <span className="">
                  <hr className="w-[2px] h-4 bg-[#424750] rounded-md border-none" />
                </span>
                <span className="text-[#424750] leading-[2] text-xs font-bold">
                  ثبت نام
                </span>
              </button>
            </Link>
          )}

          <span>
            <hr className="w-[2px] h-7 bg-[rgba(0,0,0,0.08)] rounded-md border-none box-border " />
          </span>
          <FiShoppingCart size={"24px"} color="#424750" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
