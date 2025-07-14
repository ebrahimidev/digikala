"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Header from "../page/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}
interface BannerHeader {
  id: string;
  "banner-header": string;
}
export interface DataCategory {
  id: string;
  title: string;
  svg: string;
}
export interface IListCategory {
  id: string;
  title: string;
  img: string;
}
export interface ProductDiscount {
  id: string;
  title: string;
  img: string;
  body: string;
  discount: string;
  price: string;
}
interface BannerOne {
  id: string;
  img: string;
}
interface Blogs {
  id: string;
  title: string;
  img: string;
  author: string;
  date: string;
  body: string;
  tags: string;
}
export interface IDPropsProduct {
  params: { id: string };
  searchParams: "";
}
interface DigikalaContextType {
  getBannerHeader: BannerHeader | null;
  getIsOpenCategoryNav: boolean;
  setIsOpenCategoryNav: React.Dispatch<React.SetStateAction<boolean>>;
  getMenuCategory: DataCategory[];
  getListCategory: IListCategory[];
  getBannerOne: BannerOne[];
  getBlogs: Blogs[];
  getProductDiscount: ProductDiscount[];
}

export const DigikalaContext = createContext<DigikalaContextType>({
  getBannerHeader: null,
  getIsOpenCategoryNav: false,
  setIsOpenCategoryNav: () => {},
  getMenuCategory: [],
  getListCategory: [],
  getBannerOne: [],
  getBlogs: [],
  getProductDiscount: [],
});

export function DigikalaContextProvider({ children }: Props) {
  const qureyClient =new QueryClient();
  const [getBannerHeader, setBannerHeader] = useState<BannerHeader | null>(
    null
  );
  const [getIsOpenCategoryNav, setIsOpenCategoryNav] = useState(false);
  const [getMenuCategory, setMenuCategory] = useState<DataCategory[]>([]);
  const [getListCategory, setListCategory] = useState<IListCategory[]>([]);
  const [getProductDiscount, setProductDiscount] = useState<ProductDiscount[]>(
    []
  );
  const [getBannerOne, setBannerOne] = useState<BannerOne[]>([]);
  const [getBlogs, setBlogs] = useState<Blogs[]>([]);

  useEffect(() => {
    async function fetchMenuCategory() {
      const resCategory = await fetch("http://localhost:3001/Category");
      const dataCategory = await resCategory.json();
      setMenuCategory(dataCategory);
    }
    fetchMenuCategory();
  }, []);
  useEffect(() => {
    const fetchBannerHeader = async () => {
      try {
        const res = await fetch("http://localhost:3001/banners", {
          cache: "no-store",
        });
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setBannerHeader(data[0]);
        }
      } catch (err) {
        console.error("خطا در دریافت بنر:", err);
      }
    };
    fetchBannerHeader();
  }, []);
  useEffect(() => {
    async function fetchListCategory() {
      try {
        const resListCategory = await fetch(
          "http://localhost:3001/ListCategory"
        );
        const dataListCategory = await resListCategory.json();
        setListCategory(dataListCategory);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListCategory();
  }, []);
  useEffect(() => {
    async function fetchBannerOne() {
      const resBannerOne = await fetch("http://localhost:3001/BannerOne");
      const dataBannerOne = await resBannerOne.json();
      setBannerOne(dataBannerOne);
    }
    fetchBannerOne();
  }, []);
  useEffect(() => {
    async function fetchProductDiscount() {
      const res = await fetch("http://localhost:3001/DiscountProduct");
      const data = await res.json();
      setProductDiscount(data);
    }
    fetchProductDiscount();
  }, []);
  useEffect(() => {
    async function fetchBlogs() {
      const resBlogs = await fetch("http://localhost:3001/blogs");
      const dataBlogs = await resBlogs.json();
      setBlogs(dataBlogs);
    }
    fetchBlogs();
  }, []);
  const value = {
    getBannerHeader,
    getIsOpenCategoryNav,
    setIsOpenCategoryNav,
    getMenuCategory,
    getListCategory,
    getBannerOne,
    getBlogs,
    getProductDiscount,
  };
  return (
    <QueryClientProvider client={qureyClient}>
      <DigikalaContext.Provider value={value}>
        <Header />
        {children}
        <ToastContainer position="top-center" />
      </DigikalaContext.Provider>
    </QueryClientProvider>
  );
}
