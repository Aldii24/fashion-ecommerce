import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_BY_ID_QUERY } from "@/sanity/lib/queries";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { data: product } = await sanityFetch({
    query: PRODUCT_BY_ID_QUERY,
    params: { id },
  });

  return (
    <div className="relative min-h-screen sm:pt-28 sm:px-10 px-4 pt-20">
      <div className="w-full flex md:flex-row flex-col gap-10">
        <div className="md:w-1/2 w-full flex flex-col gap-4 pb-10">
          <ProductImage product={product} />
        </div>
        <div className="md:w-1/2 sm:h-1/4 w-full sticky top-28 pb-4">
          <ProductInfo product={product} />
        </div>
      </div>
    </div>
  );
};

export default page;
