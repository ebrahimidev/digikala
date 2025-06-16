import React from "react";
import SlideBanner from "../layout/SlideBanner";
import ListCategory from "../layout/ListCategory";
import DiscountProduct from "../layout/DiscountProduct";
import BannersOne from "../layout/BannersOne";
import Blogs from "../layout/Blogs";

function Main() {
  return (
    <div className="space-y-5">
      <SlideBanner />
      <ListCategory />
      <DiscountProduct />
      <BannersOne />
      <Blogs />
    </div>
  );
}

export default Main;
