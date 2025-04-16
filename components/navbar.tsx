import { siteConfig } from "@/config/site";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between  ">
      {/* Left */}
      <div>
        {/* Logo */}
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <div>
          <ul>
            {siteConfig.home_nav.map((item) => (
              <li key={item.href}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* Rights */}
      <div className="flex items-center gap-2">
        <p>Download Now</p>
      </div>
    </div>
  );
}
