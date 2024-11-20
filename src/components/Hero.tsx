"use client";

import Image from "next/image";
import { useState } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

const heroImage = [
  {
    id: 1,
    title: "Wanna Know Manly",
    ribbon: "Designed to stand out",
    category: "Limited-Edition Styles",
    image: "/hero1.jpg",
  },
  {
    id: 2,
    title: "Winter Is Coming",
    ribbon: "Designed to stand out",
    category: "Limited-Edition Styles",
    image: "/hero2.jpg",
  },
  {
    id: 3,
    title: "Simple Is More",
    ribbon: "Designed to stand out",
    category: "Limited-Edition Styles",
    image: "/hero3.jpg",
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(2);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === 2 ? 0 : prev + 1));
  };

  return (
    <div className="relative sm:px-10 px-4 pt-5 ">
      <Image
        src={heroImage[currentImage].image}
        alt={heroImage[0].title}
        width={450}
        height={450}
        className="rounded-md hero-image"
      />
      <h1 className="absolute top-[100px] sm:left-[100px] left-[50px] sm:text-7xl text-4xl font-bold text-white tracking-wide max-w-[400px] [text-shadow:_5px_4px_2px_rgb(0_0_0_/_40%)]">
        {heroImage[currentImage].title}
      </h1>
      <h1 className="absolute bottom-[100px] sm:left-[100px] left-[50px] text-xl text-white uppercase max-w-[200px] [text-shadow:_5px_4px_2px_rgb(0_0_0_/_40%)]">
        {heroImage[currentImage].category}
      </h1>
      <h1 className="absolute hidden sm:flex right-[100px] top-[40%] text-md text-white uppercase max-w-[150px] [text-shadow:_5px_4px_2px_rgb(0_0_0_/_40%)]">
        {heroImage[currentImage].ribbon}
      </h1>

      <div className="flex gap-4 my-5">
        <button
          className="border-[1px] shadow-[4px_4px_0_rgb(0,0,0,0.3)] active:shadow-[2px_2px_0_rgb(0,0,0,0.3)] active:translate-y-1 p-2 rounded"
          onClick={handlePrev}
        >
          <PiCaretLeft />
        </button>
        <button
          className="border-[1px] shadow-[4px_4px_0_rgb(0,0,0,0.3)] active:shadow-[2px_2px_0_rgb(0,0,0,0.3)] active:translate-y-1 p-2 rounded"
          onClick={handleNext}
        >
          <PiCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
