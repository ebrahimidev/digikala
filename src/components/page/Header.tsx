import BannerHeader from "../layout/BannerHeader";
import { useDigikalaContext } from "../hook/useDigikalaContext";
import TopNav from "../layout/TopNav";

function Header() {
  const { getBannerHeader } = useDigikalaContext();
  if (!getBannerHeader) return null;
  return (
    <>
      <BannerHeader />
      <TopNav />
    </>
  );
}

export default Header;
