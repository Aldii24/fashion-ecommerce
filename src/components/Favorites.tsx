import Link from "next/link";
import { FiHeart } from "react-icons/fi";

const Favorites = () => {
  return (
    <Link href="/" className="sm:flex hidden">
      <FiHeart size={20} className="text-gray-500" />
    </Link>
  );
};

export default Favorites;
