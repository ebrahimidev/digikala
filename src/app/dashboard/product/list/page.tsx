"use client";
import EditProduct from "@/components/layout/admin/product/EditProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

interface Product {
  id: string;
  title: string;
  price: string;
  discount: string;
  count: string;
}

function ListProductPage() {
  const query = useQueryClient();
  const [getIsOpenModal, setIsOpenModal] = useState<boolean>(false);
  const refEditProduct = useRef<HTMLDivElement>(null);
  const [getSelectIdProduct, setSelectIdProduct] = useState<string | null>(null);

  const { data = [] } = useQuery({
    queryKey: ["ListProduct"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/DiscountProduct");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.delete(
        `http://localhost:3001/DiscountProduct/${id}`
      );
      return res.data;
    },
    onSuccess: () => {
      toast.success("با موفقیت حذف شد");
      query.invalidateQueries({ queryKey: ["ListProduct"] });
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("آیا از حذف محصول مطمئن هستید؟")) {
      mutation.mutate(id);
    }
  };

  useEffect(() => {
    function handleOutBox(event: MouseEvent) {
      if (
        refEditProduct.current &&
        !refEditProduct.current.contains(event.target as Node)
      ) {
        setIsOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleOutBox);
    return () => {
      document.removeEventListener("mousedown", handleOutBox);
    };
  }, [refEditProduct]);

  return (
    <div className="relative">
      <div className="p-6 bg-gray-100 min-h-screen relative">
        <h1 className="text-2xl font-bold mb-6">لیست محصولات</h1>

        <div className="overflow-x-auto rounded-lg shadow bg-white">
          <table className="min-w-full text-sm text-right">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">عنوان</th>
                <th className="p-3">قیمت</th>
                <th className="p-3">تخفیف</th>
                <th className="p-3">تعداد</th>
                <th className="p-3">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product: Product, index: number) => (
                <tr key={product.id} className="border-t">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{product.title}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.discount}</td>
                  <td className="p-3">{product.count}</td>
                  <td className="p-3 flex gap-3">
                    <button
                      ref={refEditProduct}
                      onClick={() => {
                        setIsOpenModal(!getIsOpenModal);
                        setSelectIdProduct(product.id);
                      }}
                      className="text-blue-500 hover:text-blue-700 cursor-pointer"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-400">
                    محصولی وجود ندارد.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {getIsOpenModal && (
        <EditProduct
          refModal={refEditProduct}
          SelectIdProduct={getSelectIdProduct}
        />
      )}
    </div>
  );
}

export default ListProductPage;
