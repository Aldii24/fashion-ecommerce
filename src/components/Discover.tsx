import Image from "next/image";
import Link from "next/link";

const Discover = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto gap-6 sm:px-10 px-4 py-16">
      <div className="relative flex flex-col md:w-1/2 w-full bg-primary px-6 py-10 rounded-md shadow-lg text-white">
        <h3 className="text-3xl font-bold">ALD.I</h3>
        <div className="w-full h-[1px] bg-white mt-4"></div>
        <p className="sm:text-4xl text-2xl md:pt-16 pt-10 pb-6 font-bold max-w-[250px] z-10">
          Your Style, Delivered. Exclusively Online.
        </p>
        <Image
          src="/deliver.png"
          alt="Delivery Illustration"
          width={250}
          height={250}
          className="absolute bottom-5 right-5 image-discover"
        />
      </div>

      <div className="flex flex-col gap-6 md:w-1/2 w-full">
        <div className="bg-gray-100 flex flex-row rounded-md px-4 py-6 shadow-lg items-center">
          <Image
            src="/accessories.png"
            alt="Accessories"
            width={150}
            height={150}
            className="object-cover"
          />
          <div className="pl-6 flex flex-col gap-4 text-left">
            <p className="text-gray-500 font-semibold text-sm">
              Timeless elegance
            </p>
            <h3 className="text-xl font-semibold max-w-[300px]">
              Discover our accessories collection
            </h3>
            <Link href="/category/accessories">
              <button className="px-4 py-2 bg-primary text-white rounded text-sm shadow-lg font-medium">
                Shop now
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-100 flex flex-row rounded-md px-4 py-6 shadow-lg items-center">
          <Image
            src="/shoes.png"
            alt="Shoes"
            width={150}
            height={150}
            className="object-cover"
          />
          <div className="pl-6 flex flex-col gap-4 text-left">
            <p className="text-gray-500 font-semibold text-sm">
              Find your perfect pair
            </p>
            <h3 className="text-xl font-semibold max-w-[250px]">
              Discover our shoes collection
            </h3>
            <Link href="/category/shoes">
              <button className="px-4 py-2 bg-primary text-white rounded text-sm shadow-lg font-medium">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
