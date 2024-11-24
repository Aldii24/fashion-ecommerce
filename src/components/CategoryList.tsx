import Link from "next/link";
import { GiLabCoat } from "react-icons/gi";
import { IoBag, IoBodySharp, IoShirt, IoWatch } from "react-icons/io5";
import { PiDressFill, PiPantsFill, PiSneakerFill } from "react-icons/pi";

const category = [
  {
    id: 1,
    name: "Personal Care",
    icon: <IoBodySharp size={20} fill="#40C2D0" />,
  },
  {
    id: 2,
    name: "Accessories",
    icon: <IoWatch size={20} fill="#40C2D0" />,
  },
  {
    id: 3,
    name: "Jackets",
    icon: <GiLabCoat size={20} fill="#40C2D0" />,
  },
  {
    id: 4,
    name: "Pants",
    icon: <PiPantsFill size={20} fill="#40C2D0" />,
  },
  {
    id: 5,
    name: "Shoes",
    icon: <PiSneakerFill size={20} fill="#40C2D0" />,
  },
  {
    id: 6,
    name: "Dress",
    icon: <PiDressFill size={20} fill="#40C2D0" />,
  },
  {
    id: 7,
    name: "Shirts",
    icon: <IoShirt size={20} fill="#40C2D0" />,
  },
  {
    id: 8,
    name: "Bags",
    icon: <IoBag size={20} fill="#40C2D0" />,
  },
];

const CategoryList = () => {
  return (
    <div className="sm:px-10 px-4 pt-10 pb-10 flex sm:flex-row flex-col gap-4 sm:gap-0 justify-between">
      <h3 className="sm:text-2xl text-xl font-bold">Shop by Category</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {category.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.name.toLowerCase()}`}
            className="flex items-center gap-2 border-[1px] rounded-md sm:px-8 sm:py-6 p-4 cursor-pointer hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
          >
            {cat.icon}
            <span className="text-sm font-medium w-max">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
