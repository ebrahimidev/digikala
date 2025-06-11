import React, { useEffect, useState } from "react";
import MenuNav from "./MenuNav";
import { useDigikalaContext } from "../hook/useDigikalaContext";



function Category() {
  
  const {getMenuCategory} = useDigikalaContext();

  return (
    <div className=" absolute right-0  overflow-hidden z-50">
      <div className="grid grid-cols-12 pr-5">
        <ul className="col-span-12 bg-white w-3xs">
          {getMenuCategory.map((item) => (
            <MenuNav key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
