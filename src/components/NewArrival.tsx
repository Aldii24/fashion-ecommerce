import { textEllipsis } from "@/app/libs/utils";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const NewArrival = ({ newArrivals }: { newArrivals: any }) => {
  return (
    <div className="sm:px-6 px-4 sm:pt-5 pt-4">
      <div className="flex justify-between items-center pb-2">
        <h3 className="sm:text-2xl text-xl font-bold px-4">New Arrivals</h3>
        <Link href="/new-arrivals">
          <span className="text-primary sm:text-sm text-xs font-semibold px-4">
            Lihat semua
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:gap-8 gap-2">
        {newArrivals.map((product: any) => (
          <div key={product._id} className="flex flex-col px-4 py-2">
            <Link href={`/product/${product._id}`}>
              <Image
                src={urlFor(product.image[0]).url()}
                alt=""
                width={200}
                height={200}
                className="image-arrivals rounded-md"
              />
            </Link>
            <div className="flex items-center justify-between">
              <Link href={`/search?query=${product.brand}`}>
                <span className="md:text-sm text-[0.60rem] text-gray-300 font-medium">
                  {textEllipsis(product.brand, 8)}
                </span>
              </Link>
              <span className="sm:text-sm text-[0.60rem] font-semibold">
                {textEllipsis(
                  product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }),
                  10
                )}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link href={`/search?query=${product.name}`}>
                <span className="sm:text-sm text-[0.60rem] font-semibold w-max">
                  {textEllipsis(product.name, 10)}
                </span>
              </Link>
              <Link href={`/category/${product.category.toLowerCase()}`}>
                <span className="text-primary sm:text-sm text-[0.60rem] font-medium">
                  {product.category}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
