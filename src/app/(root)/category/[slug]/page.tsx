import { ProductType } from "@/app/libs/type";
import { firstLetterUppercase, textEllipsis } from "@/app/libs/utils";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const category = (await params).slug;
  const decodedCategory = decodeURIComponent(category);

  const cat = { category: decodedCategory || null };

  const products = await sanityFetch({
    query: PRODUCT_BY_CATEGORY_QUERY,
    params: cat,
  });

  return (
    <div className="sm:pt-28 sm:px-10 px-4 pt-20">
      {products?.data?.length > 0 ? (
        <>
          <div className="flex items-center">
            <h1 className="sm:text-2xl text-xl font-semibold pb-4 pt-4">
              Category{" "}
              <span className="text-primary">
                {firstLetterUppercase(decodedCategory)} (
                {products?.data?.length})
              </span>
            </h1>
          </div>
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
        <h3 className="">
          Product dari kategori {decodedCategory} belum ada bang!
        </h3>
      )}
    </div>
  );
};

export default page;
