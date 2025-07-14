import { IDPropsProduct } from "@/components/context/DigikalaContext";
import Gallery from "@/components/layout/product/Gallery";
import Side from "@/components/layout/product/Side";
import React from "react";



function IdProduct({params}:IDPropsProduct) {
  return (
    <div className="px-2 w-full max-w-[1676px] mt-8">
      <div className="grid grid-cols-3 gap-2">
        <Gallery idProduct={params.id} />
        <Side idProduct={params.id} />
      </div>
      {/* {params.id} */}
    </div>
  );
}

export default IdProduct;
