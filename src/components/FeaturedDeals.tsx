import Image from "next/image";
import Link from "next/link";

const FeaturedDeals = () => {
  return (
    <div className="py  -5 sm:px-10 px-4">
      <div className="flex flex-col gap-4">
        <h3 className="sm:text-2xl text-xl font-bold">Featured Deals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-primary rounded-md shadow-xl">
            <div className="w-full flex gap-4">
              <div className="sm:w-1/2 w-1/2 flex flex-col gap-6">
                <h3 className="sm:text-3xl text-xl font-bold text-white">
                  ALD.I
                </h3>
                <div className="w-[300px] h-[1px] bg-white"></div>
                <p className="sm:text-2xl text-xl font-bold text-white sm:max-w-[200px] w-[300px]">
                  Indulge in exclusive deals
                </p>
                <span className="text-white text-sm font-light max-w-[200px]">
                  Shop now and enjoy our latest fashion finds.
                </span>
                <Link href="/">
                  <button className="px-4 py-2 my-4 bg-primary rounded-md text-white text-sm shadow-lg font-medium">
                    Shop now
                  </button>
                </Link>
              </div>
              <div className="sm:w-1/2 w-1/2 flex items-end">
                <Image src="/deals.png" width={300} height={300} alt="" />
              </div>
            </div>
          </div>

          <div className="flex px-6 pt-5 bg-gradient-to-r from-blue-500 to-primary rounded-md shadow-xl">
            <div className="w-full flex justify-center items-center gap-4">
              <div className="w-1/2 flex items-end">
                <Image src="/offers.png" width={300} height={300} alt="" />
              </div>
              <div className="w-1/2 flex flex-col gap-6">
                <p className="sm:text-2xl text-xl font-bold text-white max-w-[200px]">
                  Welcome offers just for you
                </p>
                <span className="text-white text-sm font-light">
                  Enjoy a special discount on your first purchase.
                </span>
                <Link href="/">
                  <button className="px-4 py-2 my-4 bg-blue-500 rounded-md text-white text-sm shadow-lg font-medium">
                    Shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDeals;
