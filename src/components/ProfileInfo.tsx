"use client";

import { RxCaretDown } from "react-icons/rx";

const ProfileInfo = ({
  initialName,
  name,
  toggleMenu,
  isOpen,
}: {
  initialName: string;
  name: string;
  toggleMenu: () => void;
  isOpen: boolean;
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center rounded-full bg-gray-300 h-[40px] w-[40px]">
        <h3 className="font-bold text-xl">{initialName}</h3>
      </div>
      <div className="relative flex items-center gap-2" onClick={toggleMenu}>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 font-semibold">
            Selamat Datang
          </span>
          <p className="font-bold">{name}</p>
        </div>
        <RxCaretDown
          size={20}
          className={`cursor-pointer ${
            isOpen
              ? "rotate-180 transition-transform ease-in-out duration-300 z-10"
              : ""
          }`}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
