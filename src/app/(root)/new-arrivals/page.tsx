import { textEllipsis } from "@/app/libs/utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { NEW_ARRIVALS_PRODUCT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const newArrivalProduct = await client.fetch(NEW_ARRIVALS_PRODUCT_QUERY);

  return (
    <>
      <div className="sm:pt-28 pt-20 sm:px-10 px-4">
        <h3 className="md:text-3xl px-4 py-4 font-semibold text-primary">
          Our New Arrival Product
        </h3>
        <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:gap-8 gap-2">
          {newArrivalProduct.map((product: any) => (
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
    </>
  );
};

export default page;
