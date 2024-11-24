"use client";

import { useState } from "react";
import { PiHeart, PiHeartFill, PiShoppingBag } from "react-icons/pi";

const ProductInfo = ({ product }: { product: any }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      <h1 className="sm:text-3xl text-xl font-semibold">{product.name}</h1>
      <div className="w-full h-[1px] bg-gray-200 my-3"></div>
      <span className="px-4 py-1 bg-primary rounded w-max sm:text-md text-sm text-white">
        {product.brand}
      </span>
      <div className="w-[100px] h-[1px] bg-gray-200 my-3"></div>
      <div className="flex flex-col">
        <h3 className="font-semibold sm:text-xl text-md">Description</h3>
        <div className="w-[150px] h-[1px] bg-gray-200 my-2"></div>
        <p className="text-gray-500">{product.description}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-3"></div>

      <div className="flex flex-col pb-4">
        <h3 className="font-semibold sm:text-xl text-md">Category</h3>
        <div className="w-[150px] h-[1px] bg-gray-200 my-2"></div>
        <p className="p-2 border rounded w-max text-sm bg-primary text-white">{product.category}</p>
      </div>

      <h3 className="font-semibold sm:text-xl text-md mb-4">Size :</h3>
      <div className="flex items-center gap-4 flex-wrap">
        {product?.size?.map((s: any) => (
          <button
            className={`px-4 py-2 border rounded cursor-pointer shadow-lg ${
              selectedSize === s ? "bg-primary text-white" : "bg-white"
            }`}
            key={s}
            onClick={() => setSelectedSize(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 py-4">
        <button className="w-full flex items-center justify-center gap-1 px-4 py-2 rounded bg-primary text-white shadow-lg">
          <PiShoppingBag size={20} />
          Add to cart
        </button>

        <button
          title="Favorite"
          className="border rounded px-4 py-2 shadow-lg transition-all ease-in-out duration-300"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? (
            <PiHeartFill size={20} fill="#40C2D0" />
          ) : (
            <PiHeart size={20} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
