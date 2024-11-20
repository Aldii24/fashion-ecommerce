"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CiTextAlignLeft } from "react-icons/ci";
import { PiX } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";

const SideMobileMenu = ({
  initialName,
  name,
  session,
}: {
  initialName: string;
  name: string;
  session: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button className="md:hidden flex" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <PiX size={25} /> : <CiTextAlignLeft size={20} />}
      </button>

      <div
        ref={menuRef}
        className={`absolute sm:top-[55px] top-[47px] rounded-br-md bg-white w-[250px] border-[1px] h-screen shadow-xl px-4 transition-all ease-in-out duration-300 ${
          isOpen ? "sm:-left-[50px] -left-[35px]" : "-left-[800px]"
        }`}
      >
        <div className="h-screen flex flex-col justify-between">
          <div>
            <Link href="/">
              <h3 className="text-3xl font-bold pt-5 px-4">
                ALD.<span className="text-primary">I</span>
              </h3>
            </Link>

            <div className="w-full h-[1px] bg-gray-200 mt-4"></div>

            <Link href="/" className="flex items-center gap-2 px-4 mt-4">
              <FiHeart size={20} className="text-gray-500" />
              <span className="text-gray-500">Favorites</span>
            </Link>
            <div className="w-full h-[1px] bg-gray-200 mt-4"></div>
          </div>
          {session && session?.user ? (
            <div className="flex flex-col gap-2 absolute bottom-[140px] px-4">
              <h3 className="text-sm text-gray-400 font-semibold">
                Selamat Datang!
                <div className="w-full h-[1px] bg-gray-200 mt-2"></div>
              </h3>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center rounded-full bg-gray-300 h-[40px] w-[40px]">
                  <Link href="/" className="font-bold text-xl">
                    {initialName}
                  </Link>
                </div>
                <Link href="/" className="text-sm font-semibold ">
                  {name}
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SideMobileMenu;
