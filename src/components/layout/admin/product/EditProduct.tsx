import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

interface Props {
  refModal: React.RefObject<HTMLDivElement>;
  SelectIdProduct: string | null;
}
interface FormValue {
  id: string;
  title: string;
  img: string;
  discount: string;
  count: string;
  price: string;
  body: string;
}
const schema = yup.object({
   title: yup.string().required(" فیلد عنوان الزامی است "),
    img: yup.string().required(" فیلد تصویر الزامی است "),
    price: yup.string().required(" قیمت الزامی است "),
    discount: yup.string().required(" مقدار تخفیف الزامی است "),
    count: yup.string().required(" تعداد الزامی است "),
    body: yup.string().required(" توضیحات الزامی است "),
})

const EditProduct = forwardRef<HTMLDivElement, Props>(
  ({ refModal, SelectIdProduct }, ref) => {
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>({ resolver: yupResolver(schema) });
    
    const { data, isLoading, isError } = useQuery({
      queryKey: ["EditProduct", SelectIdProduct],
      queryFn: async () => {
        const res = await axios.get(
          `http://localhost:3001/DiscountProduct/${SelectIdProduct}`
        );
        return res.data;
      },
      enabled: !!SelectIdProduct, 
    });

    const mutation = useMutation({mutationFn: async ()=>{
      const res = await axios.patch(`http://localhost:3001/DiscountProduct/`);
      return res.data;
    }, onSuccess:()=>{
      toast.success();
    } ,onError:()=>{
      toast;.erro
    }})

    const onSubmit = (data : FormValue) =>{
      mutation.mutate(data);
    }

    return (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
        <div ref={refModal} className="bg-white w-[400px] rounded shadow p-6">
          <h2 className="text-lg font-semibold mb-4">ویرایش محصول</h2>

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
                  <span className="text-sm text-red-500">
                    {errors.img.message}
                  </span>
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
      </div>
    );
  }
);
EditProduct.displayName = "EditProduct";
export default EditProduct;
