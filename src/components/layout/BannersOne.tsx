"use client"
import { useDigikalaContext } from "../hook/useDigikalaContext";

function BannersOne() {

  const {getBannerOne} = useDigikalaContext();
  return (
    <div className="w-full max-w-[1676px] px-4">
      <div className="grid grid-cols-4 gap-2">
        {getBannerOne.map((item) => (
          <div key={item.id} className="row-span-1  p2 ">
            <img
              className="w-full h-full object-contain rounded-2xl"
              src={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannersOne;
