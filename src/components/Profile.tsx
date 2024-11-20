"use client";

import { useState } from "react";
import Link from "next/link";
import ProfileInfo from "./ProfileInfo";
import { BiUser } from "react-icons/bi";

const Profile = ({
  usernameGithub,
  initialUsername,
}: {
  usernameGithub: string;
  initialUsername: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative md:flex hidden">
      <ProfileInfo
        name={usernameGithub}
        initialName={initialUsername}
        toggleMenu={toggleMenu}
        isOpen={isMenuOpen}
      />
      {isMenuOpen && (
        <div className="absolute top-[60px] right-1 flex flex-col gap-4 bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] px-6 py-4 rounded z-10">
          <Link
            href="/"
            className="flex items-center gap-1 text-xs tracking-wide font-medium text-gray-500 cursor-pointer"
          >
            <BiUser /> Profile
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;
