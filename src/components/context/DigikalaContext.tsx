"use client";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import Header from "../page/Header";

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

interface DigikalaContextType {
  getBannerHeader: BannerHeader | null;
  getIsOpenCategoryNav: boolean;
  setIsOpenCategoryNav: React.Dispatch<React.SetStateAction<boolean>>;
  getMenuCategory: DataCategory[];
  getListCategory: IListCategory[];
}

export const DigikalaContext = createContext<DigikalaContextType>({
  getBannerHeader: null,
  getIsOpenCategoryNav: false,
  setIsOpenCategoryNav: () => {},
  getMenuCategory: [],
  getListCategory: [],
});

export function DigikalaContextProvider({ children }: Props) {
  const [getBannerHeader, setBannerHeader] = useState<BannerHeader | null>(
    null
  );
  const [getIsOpenCategoryNav, setIsOpenCategoryNav] = useState(false);
  const [getMenuCategory, setMenuCategory] = useState<DataCategory[]>([]);
  const [getListCategory, setListCategory] = useState<IListCategory[]>([]);
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
  return (
    <DigikalaContext.Provider
      value={{
        getBannerHeader,
        getIsOpenCategoryNav,
        setIsOpenCategoryNav,
        getMenuCategory,
        getListCategory,
      }}
    >
      <Header />
      {children}
    </DigikalaContext.Provider>
  );
}
