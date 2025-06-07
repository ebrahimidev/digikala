import React from "react";
import { useDigikalaContext } from "../hook/useDigikalaContext";
function BannerHeader() {
  const { getBannerHeader } = useDigikalaContext();
  if (!getBannerHeader) return null;
  return (
    <div className="container-4xl block ">
      <img
        key={getBannerHeader.id}
        className="object-cover w-full h-[60px]"
        src={getBannerHeader["banner-header"]}
        alt={getBannerHeader.id}
      />
    </div>
  );
}

export default BannerHeader;
