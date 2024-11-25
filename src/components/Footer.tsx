import Image from "next/image";
import Link from "next/link";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiWhatsappLogoFill,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div className="sm:pt-28 pt-20 pb-5">
      <div className="flex flex-col gap-10">
        <div className="w-full">
          <div className="bg-teal-100/80 flex md:justify-between md:flex-row flex-col sm:px-10 px-4 py-5 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-md sm:font-bold font-semibold">
                We're always here to help
              </h3>
              <p className="sm:text-sm text-xs text-gray-400">
                You can get help by choosing from any of these options
              </p>
            </div>

            <div className="w-full h-[1px] bg-gray-200 md:hidden flex"></div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <HiQuestionMarkCircle size={20} fill="#40C2D0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-gray-400">
                    Help Center
                  </p>
                  <span className="text-xs font-semibold">help.aldi.com</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <PiWhatsappLogoFill size={20} fill="#40C2D0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-gray-400">WhatsApp</p>
                  <span className="text-xs font-semibold">
                    +62 813 7264 8563
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <MdAttachEmail size={20} fill="#40C2D0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium text-gray-400">
                    Email Support
                  </p>
                  <span className="text-xs font-semibold">
                    aldiirawan748@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-between sm:px-10 px-4">
          <div className="flex flex-col gap-8 md:pb-0 pb-8">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={100}
                className="logo-desktop"
                alt="logo"
              />
            </Link>

            <div className="flex gap-2">
              <Link href="">
                <PiLinkedinLogoFill size={25} fill="gray" />
              </Link>
              <Link href="">
                <PiInstagramLogoFill size={25} fill="gray" />
              </Link>
              <Link href="">
                <PiFacebookLogoFill size={25} fill="gray" />
              </Link>
            </div>
          </div>

          <div className="flex gap-16 md:pr-28">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold">Company</h3>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                About
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Contact
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold">Company</h3>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                About
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Contact
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold">Company</h3>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                About
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Contact
              </Link>
              <Link
                href=""
                className="text-sm font-medium text-gray-400 hover:underline"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col gap-2 justify-between sm:px-10 px-4">
          <p className="text-sm text-gray-500 font-medium">
            © 2024, Aldi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="" className="text-sm text-gray-500 hover:underline">
              Cookies
            </Link>
            <Link href="" className="text-sm text-gray-500 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
