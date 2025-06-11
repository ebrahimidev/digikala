import Link from 'next/link';
import React from 'react'
import { AiOutlineMobile } from 'react-icons/ai';
import { DataCategory } from '../context/DigikalaContext';


function MenuNav({svg,title}:DataCategory) {
  return (
    <li className="px-2 py-3 border-b border-solid border-[rgba(0,0,0,0.09)] box-border ">
      <Link href={"/"} className="space-x-1.5 flex items-center">
        <span>
          <AiOutlineMobile size={"16px"} color={"#a1a3a"} />
        </span>
        <span className="text-xs text-[#a1a3a] leading-2 font-medium ">
          {title}
        </span>
      </Link>
    </li>
  );
}

export default MenuNav