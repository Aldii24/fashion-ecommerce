import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div className="relative">
      <Link href="/">
        <IoCartOutline size={25} className="text-gray-500" />
      </Link>
      <span className="absolute -top-1 -right-1 bg-primary text-white text-center text-xs w-[15px] h-[15px] rounded-full">
        7
      </span>
    </div>
  );
};

export default Cart;
