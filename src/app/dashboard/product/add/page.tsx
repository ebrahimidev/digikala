"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required(" فیلد عنوان الزامی است "),
  img: yup.string().required(" فیلد تصویر الزامی است "),
  price: yup.string().required(" قیمت الزامی است "),
  discount: yup.string().required(" مقدار تخفیف الزامی است "),
  count: yup.string().required(" تعداد الزامی است "),
  body: yup.string().required(" توضیحات الزامی است "),
});

interface FormProduct {
  id: string;
  title: string;
  img: string;
  discount: string;
  count: string;
  price: string;
  body: string;
}

function AddProductPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProduct>({ resolver: yupResolver(schema) });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.post(
        `http://localhost:3001/DiscountProduct`,
        data
      );
      return res.data;
    },
    onSuccess: (data) => {
      const text = `محصول ${data.title} با موفقیت ثبت شد`;
      toast.success(text);
    },
    onError: (data) => {
      const text = `خطا در ثبت محصول ${data.title} `;
      toast.success(text);
    },
  });

  const onSubmit = (data: FormProduct) => {
    const itemsProduct = { ...data, id: Date.now().toString() };
    mutation.mutate(itemsProduct);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full px-4 py-7 flex flex-col space-y-4">
          <div className="flex">
            <h1 className="text-2xl font-bold ">افزودن محصول</h1>
          </div>
          {/* عنوان */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">عنوان</label>
            <input
              {...register("title")}
              type="text"
              placeholder="عنوان را وارد کنید"
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>
          {/* قیمت */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">قیمت</label>
            <input
              {...register("price")}
              type="text"
              placeholder="قیمت را وارد کنید"
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
            />
            {errors.price && (
              <span className="text-red-500 text-sm">
                {errors.price.message}
              </span>
            )}
          </div>
          {/* تخفیف */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">تخفیف</label>
            <input
              {...register("discount")}
              type="text"
              placeholder="تخفیف را وارد کنید"
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
            />
            {errors.discount && (
              <span className="text-red-500 text-sm">
                {errors.discount.message}
              </span>
            )}
          </div>
          {/* تعداد */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">تعداد</label>
            <input
              {...register("count")}
              type="text"
              placeholder="تعداد را وارد کنید"
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
            />
            {errors.count && (
              <span className="text-red-500 text-sm">
                {errors.count.message}
              </span>
            )}
          </div>
          {/* تصویر */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">آدرس تصویر</label>
            <input
              {...register("img")}
              type="text"
              placeholder="آدرس تصویر را وارد کنید"
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
            />
            {errors.img && (
              <span className="text-sm text-red-500">{errors.img.message}</span>
            )}
          </div>
          {/* توضیحات */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="">توضیحات</label>
            <textarea
              {...register("body")}
              className="w-full border border-solid border-[rgba(0,0,0,0.09)] px-2 py-2 leading-2 outline-none rounded "
              placeholder="توضیحات را وارد کنید"
            ></textarea>
            {errors.body && (
              <span className="text-red-500 text-sm">
                {errors.body.message}
              </span>
            )}
          </div>
          {/* دکمه ارسال */}
          <div className="flex flex-col space-y-2">
            <button
              type={"submit"}
              className="flex items-center justify-center text-lg font-semibold text-white bg-red-500 rounded-lg px-4 py-3 cursor-pointer"
            >
              ارسال
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductPage;
