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

interface DigikalaContextType {
  getBannerHeader : BannerHeader | null
}

export const DigikalaContext = createContext<DigikalaContextType>({
  getBannerHeader : null,
});

export function DigikalaContextProvider({ children }: Props) {

  const [getBannerHeader, setBannerHeader] = useState<BannerHeader | null>(null);
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




  return (
    <DigikalaContext.Provider value={{ getBannerHeader }}>
      <Header />
      {children}
    </DigikalaContext.Provider>
  );
}
