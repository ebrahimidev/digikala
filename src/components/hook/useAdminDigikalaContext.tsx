"use client"
import { useContext } from "react";
import { AdminDigikalaContext } from "../context/AdminDigikalaContext";

const  useAdminDigikalaContext   = () => {
  const useAdminDigikalaContext = useContext(AdminDigikalaContext);
  return useAdminDigikalaContext;
};

export default  useAdminDigikalaContext  ;