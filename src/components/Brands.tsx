import Image from "next/image";
import Link from "next/link";

const Brands = () => {
  return (
    <div className="sm:px-10 px-4 py-14 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-md text-sm font-bold">Shop by Brands</h1>
        <Link
          className="sm:text-sm text-xs font-semibold text-primary hover:underline"
          href="/"
        >
          Lihat semua
        </Link>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
        <Link
          href="/search?query=Alexandre Christie"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/ac.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=adidas"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/adidas.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=converse"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/converse.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=Giorgio Armani"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/ga.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=H & M"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/h&m.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=hugo boss"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/hb.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=levi's"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/levis.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=michael kors"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/mk.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=nike"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/nike.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=police"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/police.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
        <Link
          href="/search?query=ulla johnson"
          className="p-4 border rounded flex items-center justify-center hover:bg-gray-100 active:shadow-none ease-in-out duration-300 shadow-lg"
        >
          <Image
            src="/brands/uj.png"
            width={50}
            height={50}
            alt="brands"
            className="img-brands"
          />
        </Link>
      </div>
    </div>
  );
};

export default Brands;
