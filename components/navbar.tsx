import { siteConfig } from "@/config/site";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
export default function Navbar() {
  return (
    <div className="flex items-center  justify-between">
      {/* Left */}
      <div className="flex items-center gap-16">
        {/* Logo */}
        <Image
          src="/logo.png"
          width={120}
          height={120}
          alt="logo"
          className="py-2"
        />
        <ul className=" gap-8 items-center hidden md:flex">
          {siteConfig.home_nav.map((item) => (
            <li className="text-[14px] font-medium" key={item.href}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      {/* Rights */}
      <div>
        <div className=" items-center gap-2 hidden md:flex">
          <p className="text-[16px] font-bold">Download Now</p>
          <IoArrowForward className="font-bold text-[22px]" />
        </div>
        <MdOutlineMenu className="md:hidden text-[33px]" />
      </div>
    </div>
  );
}
