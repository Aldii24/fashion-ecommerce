import Link from "next/link";
import SearchForm from "./SearchForm";
import Cart from "./Cart";
import Favorites from "./Favorites";
import Profile from "./Profile";
import { auth, signIn, signOut } from "@/auth";
import { getInitials } from "@/app/libs/utils";
import { PiSignOut } from "react-icons/pi";
import SideMobileMenu from "./SideMobileMenu";

const Navbar = async () => {
  const session = await auth();

  console.log(session);

  return (
    <header className="w-full flex items-center sm:py-6 sm:px-10 px-4 py-4 fixed shadow-lg bg-white z-10">
      <nav className="flex justify-between items-center w-full md:gap-16 lg:gap-36 gap-4">
        <div className="flex flex-1 items-center md:gap-8 gap-2">
          <Link href="/">
            <h3 className="sm:text-3xl md:flex hidden text-xl font-bold">
              ALD.<span className="text-primary">I</span>
            </h3>
          </Link>
          <SideMobileMenu
            initialName={getInitials(session?.user?.name ?? "")}
            name={session?.user?.name ?? ""}
            session={session}
          />
          <SearchForm />
        </div>
        <div className="flex items-center gap-4">
          <Cart />
          <Favorites />
          <hr className="h-[30px] w-[1px] bg-gray-300" />
          {session && session?.user ? (
            <div className="flex items-center gap-2">
              <Profile
                usernameGithub={session?.user?.name ?? ""}
                initialUsername={getInitials(session?.user?.name ?? "")}
              />
              <button
                className="flex items-center gap-1 text-xs tracking-wide font-medium text-gray-500 cursor-pointer"
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <PiSignOut size={25} />
              </button>
            </div>
          ) : (
            <>
              <button
                className="bg-primary px-4 py-2 rounded-md text-sm text-white font-semibold shadow-[5px_5px_0_rgb(0,0,0)] active:shadow-[2px_2px_0_rgb(0,0,0)] active:translate-y-1"
                onClick={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
