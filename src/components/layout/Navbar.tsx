import Link from "next/link";
import React from "react";
import { FaBars, FaMedapps } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { ImBlog } from "react-icons/im";
import Category from "./Category";
import { useDigikalaContext } from "../hook/useDigikalaContext";

function Navbar() {

    // const [getIsOpenCategoryNav , setIsOpenCategoryNav] = useState(false);
    const {getIsOpenCategoryNav , setIsOpenCategoryNav} = useDigikalaContext();
  return (
    <div className="container-4xl w-full relative bg-white z-50">
      <div className="border-b border-solid border-[rgba(0,0,0,0.09)] box-border w-full px-5 py-2 relative">
        <ul className="flex flex-row space-x-5">
          <li
            className=""
            onMouseEnter={() => setIsOpenCategoryNav(true)}
            onMouseLeave={() => setIsOpenCategoryNav(false)}
          >
            <Link href={"/"} className=" ">
              <button className="text-xs text-[#a1a3a] font-normal leading-[2] flex  items-center space-x-2 cursor-pointer">
                <span>
                  <FaBars size={"14px"} color={"#a1a3a"} />
                </span>
                <span>محصولات</span>
              </button>
            </Link>
            {getIsOpenCategoryNav && <Category />}
          </li>
          <li className="">
            <Link
              href={"/"}
              className="text-xs text-[#a1a3a] font-normal leading-[2] flex  items-center space-x-2 "
            >
              <span>
                <ImBlog size={"14px"} color={"#a1a3a"} />
              </span>
              <span>وبلاگ</span>
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="text-xs text-[#a1a3a] font-normal leading-[2] flex  items-center space-x-2 "
            >
              <span>
                <FaHeadphonesSimple size={"14px"} color={"#a1a3a"} />
              </span>
              <span>تماس با ما</span>
            </Link>
          </li>
          <li className="">
            <Link
              href={"/"}
              className="text-xs text-[#a1a3a] font-normal leading-[2] flex  items-center space-x-2 "
            >
              <span>
                <FaMedapps size={"14px"} color={"#a1a3a"} />
              </span>
              <span>درباره ما</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
