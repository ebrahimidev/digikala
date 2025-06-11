import { IoIosMore } from "react-icons/io";
import MapCategory from "../ui/MapCategory";

function ListCategory() {
  return (
    <div className="w-full max-w-[1676px] px-4">
      <div className="grid grid-cols-10  mx-auto">
        <MapCategory />
        <div className="col-span-1 flex flex-col items-center justify-start space-y-2 w-[105px] h-[130px] p-2 rounded-md transition hover:shadow-md">
          <div className="w-[56px] h-[56px] flex items-center justify-center">
            <IoIosMore size={"32px"} fill="#a1a3a8" />
          </div>
          <div className="text-[12px] text-center font-medium text-[#3f4064] leading-[1.5] px-1">
            بیشتر
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCategory;
