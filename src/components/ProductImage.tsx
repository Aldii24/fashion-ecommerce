"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product }: { product: any }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <>
      <div className="">
        <Image
          src={urlFor(product.image[currentImage]).url()}
          alt="product"
          width={250}
          height={250}
          className="product-image rounded-md"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {product.image.map((img: any, index: number) => (
          <Image
            key={index}
            src={urlFor(img).url()}
            alt=""
            width={150}
            height={100}
            className={`rounded-md shadow-lg cursor-pointer object-cover ${currentImage === index ? "shadow-lg shadow-primary" : ""}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductImage;
