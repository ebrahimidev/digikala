"use client";
import InputText from "@/components/ui/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const schema = yup.object({
  email: yup.string().required(" ایمیل الزامی است "),
  password: yup
    .string()
    .min(2, " حداقل 2 کاراکتر الزامی است ")
    .required("رمز عبور الزامی است"),
});

interface FormValueLogin {
  email: string;
  password: string;
}

const HttpLogin = async () => {
  const res = await axios.get("http://localhost:3001/users");
  return res.data;
};

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormValueLogin>({ resolver: yupResolver(schema) });

  const qurey = useQuery({ queryKey: ["login"], queryFn: HttpLogin });
  const router = useRouter();

  const onSubmit = (data: FormValueLogin) => {
    const user = qurey.data?.find(
      (item) =>
        item.email === data.email &&
        bcrypt.compareSync(data.password, item.password)
    );
    if (!user) {
      return toast.error("ایمیل یا رمز عبور اشتباه است");
    }
    // const token = jwt.sign(
    //   { email: user.email, id: user.id },
    //   "your_secret_key",
    //   {
    //     expiresIn: "1d",
    //   }
    // );
    toast.success("با موفقیت وارد شدید");
    // localStorage.setItem("token", token);
    localStorage.setItem("isLogin", "true");
    router.push("/dashboard");
    // router.push("/dashboard") یا ذخیره وضعیت ورود
  };
  if (qurey.isLoading) return <p>در حال بارگذاری...</p>;
  if (qurey.isError) return <p>خطا در دریافت اطلاعات کاربران</p>;
  return (
    <div className=" w-full h-svh flex justify-center items-center">
      <div className="p-3 flex flex-col grow-[0.6] border border-solid border-[rgba(0,0,0,0.09)] rounded-lg space-y-3.5">
        <div className="flex items-center">
          <h1 className="text-[1rem] font-semibold text-[#0c0c0c]">ثبت نام</h1>
        </div>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <InputText
              title="ایمیل"
              type="text"
              name="email"
              register={register}
            />
            <InputText
              title="پسورد"
              type="password"
              name="password"
              register={register}
            />
            <button className="w-full cursor-pointer px-2 py-3 text-center text-white text-sm rounded-lg bg-[#ef4056]">
              ورود
            </button>
          </form>
          <Link className="mb-2 py-2.5" href="/register">
            <span className="text-[#19bfd3] text-sm font-medium underline    text-center block">
              ثبت نام نکردی؟
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
