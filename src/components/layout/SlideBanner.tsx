"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../public/custom-swiper.css";

import { Pagination, Autoplay } from "swiper/modules";
function SlideBanner() {
  return (
    <div className="w-full h-[400px] overflow-hidden flex justify-center">
      <div className="w-full h-full max-w-[1600px] px-2 md:px-4 xl:px-0">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="h-full"
        >
          <SwiperSlide>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8553d962a01f76ab76795d83a8a247ac8d78f029_1749383296.jpg?x-oss-process=image/quality,q_95/format,webp"
              alt="banner1"
              className="w-full object-cover h-full "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/bb599a945990a2772af457982f54c78cbdfcccf6_1748767300.jpg?x-oss-process=image/quality,q_95/format,webp"
              alt="banner2"
              className="w-full object-cover h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/8a4c731734c81a44e45a500abdcc996562063070_1749290938.jpg?x-oss-process=image/quality,q_95/format,webp"
              alt="banner3"
              className="w-full object-cover h-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SlideBanner;
