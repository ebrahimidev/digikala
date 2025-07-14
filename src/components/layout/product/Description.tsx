import React from 'react'
import { ProductDiscount } from "@/components/context/DigikalaContext";
import { PiStarFour } from "react-icons/pi";
function Description({body}:ProductDiscount) {
  return (
    <div className="col-span-3 px-2 py-6 space-y-3.5">
      <div className="">
        <span className="text-lg font-semibold text-[#0c0c0c]">توضیحات</span>
        <p className="text-sm font-normal text-[#81858b]">{body}</p>
      </div>
      <div className="w-full px-3 py-2 rounded-md border border-solid border-[rgba(0,0,0,0.1)] ">
        <div className="flex items-center space-x-2">
          <span className="">
            <PiStarFour size={"24px"} color="#b12ba4" />
          </span>
          <span className="text-lg font-medium text-[#b12ba4]">
            ارسال رایگان سفارش‌ها برای اعضای پلاس
          </span>
        </div>
        <ul className='text-xs font-normal list-disc my-2.5 space-y-3 mr-6 '>
          <li>۴ ارسال رایگان عادی</li>
          <li>۲ ارسال سوپرمارکت</li>
          <li>پشتیبانی اختصاصی</li>
          <li>ارسال سریع و رایگان دیجی‌کالا (فقط تهران و کرج)</li>
        </ul>
      </div>
    </div>
  );
}

export default Description