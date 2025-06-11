import BannerHeader from "../layout/BannerHeader";
import { useDigikalaContext } from "../hook/useDigikalaContext";
import TopNav from "../layout/TopNav";
import Navbar from "../layout/Navbar";

function Header() {
  const { getBannerHeader , getIsOpenCategoryNav } = useDigikalaContext();
  if (!getBannerHeader) return null;
  return (
    <div className="relative z-10">
      {getIsOpenCategoryNav && (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black opacity-40 backdrop-blur-[1px] z-40"></div>
      )}
      <div className="relative z-50">
        <BannerHeader />
        <TopNav />
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
