import { ProductType } from "@/app/libs/type";
import { textEllipsis } from "@/app/libs/utils";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_SEARCH_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;

  const params = { search: query || null };

  const products = await sanityFetch({ query: PRODUCT_SEARCH_QUERY, params });

  return (
    <div className="sm:pt-28 sm:px-10 px-4 pt-20">
      {products?.data?.length > 0 ? (
        <>
          <h1 className="md:text-2xl sm:text-xl text-md font-medium py-4 text-gray-500">
            Hasil pencarian{" "}
            <span className="text-primary font-bold">
              ({products?.data?.length})
            </span>
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-3 md:gap-8 gap-2">
            {products?.data?.map((product: ProductType) => (
              <div
                key={product._id}
                className="flex flex-col px-4 py-2 border shadow-lg rounded-md"
              >
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
        </>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto">
          <Image src="/not-found.gif" alt="no-found" width={400} height={400} />
          <p className="text-2xl text-gray-500 font-bold uppercase">
            Produknya ga ada kak, sabar ya.
          </p>
        </div>
      )}
    </div>
  );
};

export default page;
