"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  children: React.ReactNode;
}
export interface ICreateContext {
  handleLogout: () => void;
}
export const AdminDigikalaContext = createContext<ICreateContext>({
  handleLogout: () => {},
});

function AdminDigikalaContextProvider({ children }: Props) {
  const query = new QueryClient();

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLogin, setIsLogin] = useState<boolean | null>(null);

  useEffect(() => {
    setIsClient(true);
    const loginStatus = localStorage.getItem("isLogin");
    if (!loginStatus) {
      router.push("/login");
    } else {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/");
  };

  // اگر هنوز وضعیت ورود مشخص نشده، چیزی نشون نده
  if (!isClient || isLogin === null) return null;

  const value = {
    handleLogout,
  };
  return (
    <QueryClientProvider client={query}>
      <AdminDigikalaContext.Provider value={value}>
        {children}
        <ToastContainer />
      </AdminDigikalaContext.Provider>
    </QueryClientProvider>
  );
}

export default AdminDigikalaContextProvider;
