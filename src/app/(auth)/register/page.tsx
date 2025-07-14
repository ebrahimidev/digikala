"use client"
import InputText from "@/components/ui/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import bcrypt from "bcryptjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";

export type FormValue = {
  //   id: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  email: yup.string().required("ایمیل الزامی است"),
  password: yup
    .string()
    .min(3, "حداقل 3 کاراکتر باشد")
    .required("پسورد الزامی است"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], " رمز مطابقت ندارد ")
    .required(" تکرار رمز الزمی است "),
});

 function Register() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<FormValue>({ resolver: yupResolver(schema) });
const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: FormValue) => {
      const hashPassword = bcrypt.hashSync(data.password, 10);
      const res = await axios.post("http://localhost:3001/users", {
        ...data,
        id: Date.now(),
        password: hashPassword,
        confirmPassword: hashPassword,
      });
      return res.data;
    },
    onSuccess: () => {
        localStorage.setItem("isLogin", "true");
        toast.success("ثبت نام با موفقیت ثبت شد ");
        router.push("/dashboard");
    },
    onError: (error) => {
      toast.error("  خطا در ثبت نام  ");
      console.log(error);
    },
  });

  const onSubmit = (data: FormValue) => {
    console.log(data);
    mutation.mutate(data);
  };
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
            <InputText
              title="تکرار پسورد"
              type="password"
              name="confirmPassword"
              register={register}
            />
            <button className="w-full cursor-pointer px-2 py-3 text-center text-white text-sm rounded-lg bg-[#ef4056]">
              ثبت نام
            </button>
          </form>
          <Link className="mb-2 py-2.5" href="/login">
            <span className="text-[#19bfd3] text-sm font-medium underline    text-center block">
              قبلا ثبت نام کردی؟
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
// #0c0c0c
// ##ef4056
// #19bfd3
