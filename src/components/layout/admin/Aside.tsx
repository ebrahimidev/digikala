"use client"
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBox,
  FaHome,
  FaSignOutAlt,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

interface Propd {
  handleLogout: () => void;
}

function Aside({ handleLogout }: Propd) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-5 border-b">
        <h1 className="text-lg font-bold text-gray-800">داشبورد مدیریت</h1>
      </div>
      <nav className="mt-6 px-4 space-y-2 text-sm font-medium text-gray-700">
        {/* خانه */}
        <button
          onClick={() => toggleMenu("home")}
          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100"
        >
          <span className="flex items-center gap-2">
            <FaHome /> خانه
          </span>
        </button>

        {/* محصولات با زیر منو */}
        <button
          onClick={() => toggleMenu("products")}
          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100"
        >
          <span className="flex items-center gap-2">
            <FaBox /> محصولات
          </span>
          {openMenu === "products" ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openMenu === "products" && (
          <div className="ml-6 space-y-1">
            <Link
              href="/dashboard/product/add"
              className="block py-1 px-2 rounded hover:bg-gray-100"
            >
              افزودن محصول
            </Link>
            <Link
              href="/dashboard/product/list"
              className="block py-1 px-2 rounded hover:bg-gray-100"
            >
              مدیریت محصولات
            </Link>
          </div>
        )}

        {/* کاربران */}
        <button
          onClick={() => toggleMenu("users")}
          className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100"
        >
          <span className="flex items-center gap-2">
            <FaUsers /> کاربران
          </span>
          {openMenu === "users" ? <FaChevronUp /> : <FaChevronDown />}
        </button>
        {openMenu === "users" && (
          <div className="ml-6 space-y-1">
            <Link
              href="/users/list"
              className="block py-1 px-2 rounded hover:bg-gray-100"
            >
              لیست کاربران
            </Link>
          </div>
        )}

        {/* خروج */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-700 mt-4"
        >
          <FaSignOutAlt /> خروج
        </button>
      </nav>
    </aside>
  );
}

export default Aside;
