import DownloadButton from "@/components/download_button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export default function Home() {
  return (
    <section className="lg:flex items-center mt-5 lg:mt-10 lg:h-[550px] justify-between">
      {/* Left */}
      <div className="gap-6 basis-[100%] flex flex-col lg:basis-[50%] ">
        <p className="font-bold text-[39px] md:text-[46px] xl:text-[60px] leading-[50px] xl:leading-[75px]">
          Smarter VTU & <br /> seamless transfers.
        </p>
        <p className="text-[14px] sm:max-w-[60%] lg:max-w-[80%] font-medium opacity-70 xl:max-w-[60%]">
          Top up airtime, buy data, and send money—all in one smooth, reliable
          platform. Fast, easy, and always on.
        </p>
        {/* buttons */}
        <div className="mt-2 flex items-center justify-center lg:justify-start gap-4 text-white">
          <DownloadButton
            description="Download on the"
            title="App Store"
            Icon={IoLogoAppleAppstore}
            iconSize={30}
          />
          <DownloadButton
            description="Get it on"
            title="Google Play"
            Icon={IoLogoGooglePlaystore}
            iconSize={26}
          />
        </div>
      </div>
      {/* Right */}
      <div className="basis-[100%] lg:basis-[50%] flex justify-center ">
        <Image
          src={"/man_phone.png"}
          alt="man_phone"
          className="py-12 "
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
