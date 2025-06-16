"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import CountdownTimer from "../ui/CountdownTimer";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

interface ProductDiscount {
  id: string;
  title: string;
  img: string;
  body: string;
  discount: string;
  price: string;
}

function DiscountProduct() {
  const [getProductDiscount, setProductDiscount] = useState<ProductDiscount[]>(
    []
  );

  useEffect(() => {
    async function fetchProductDiscount() {
      const res = await fetch("http://localhost:3001/DiscountProduct");
      const data = await res.json();
      setProductDiscount(data);
    }
    fetchProductDiscount();
  }, []);

  return (
    <div className="px-2 w-full max-w-[1676px]">
      <div className="bg-gradient-to-tr from-[#d22c4e] via-[#ee384e] to-[#ef5662] w-full rounded-2xl flex items-center px-2 py-4 overflow-hidden">
        {/* Sidebar Fixed */}
        <div className="flex flex-col items-center justify-center min-w-[150px] px-3 space-y-2">
          <div className="w-[88px] h-[88px]">
            <img
              src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
              className="object-contain w-full h-full"
              alt="amazing"
            />
          </div>
          <CountdownTimer initialTime={7200} />
          <div className="w-[80px] h-[80px]">
            <img
              src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
              className="object-contain w-full h-full"
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-sm font-light text-white">مشاهده‌ همه</span>
            <IoIosArrowBack size={16} color="#fff" />
          </div>
        </div>

        {/* Swiper Slides */}
        <div className="flex-1 w-full h-full ">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={8}
            className="rounded-xl"
          >
            {getProductDiscount.map((item) => (
              <SwiperSlide key={item.id} className="py-1">
                <Link
                  href={`product/${item.id}`}
                  className="bg-white w-[160px] h-[240px] p-2 flex flex-col items-center justify-center transition hover:shadow-md cursor-pointer"
                >
                  <div className="w-[132px] h-[132px] ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[100px] h-[100px] object-contain"
                    />
                  </div>
                  <h3 className="text-xs font-normal text-[#62666d] h-10 leading-[20px] text-center line-clamp-2 mt-1">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center w-full px-2 mt-2">
                    <span className="bg-red-500 px-2 rounded-xl">
                      <span className="text-white text-[10px] font-normal  leading-[1] ">
                        {item.discount}%
                      </span>
                    </span>
                    <span className=" font-medium text-[#3f4064] space-x-0.5">
                      <span className="text-[12px]">{item.price} </span>
                      <span className="text-[10px]">تومان</span>
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default DiscountProduct;
