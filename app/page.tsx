import DownloadButton from "@/components/download_button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      {/* Hero section */}
      <section className="flex flex-col gap-12 md:gap-0 md:flex-row items-center mt-5 lg:mt-5 lg:h-[550px] xl:h-[600px] justify-between px-4 md:px-10 lg:px-16">
        {/* Left */}
        <div className="gap-6 basis-[100%] flex flex-col lg:basis-[50%] ">
          <p className="font-bold text-[39px] md:text-[46px] xl:text-[58px] leading-[50px] xl:leading-[75px]">
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
        <div className="basis-[100%] lg:basis-[50%] flex flex-col items-center ">
          {/* <div style={{ position: "relative", display: "inline-block" }}> */}
          <Image
            src="/man_phone1.png"
            alt="man_phone"
            width={450} // default size
            height={450} // default size
            className="w-full h-auto max-w-[300px] md:max-w-[350px] lg:max-w-[410px] xl:max-w-[445px]"
            quality={70}
            priority={true}
          />
          {/* <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                zIndex: 10,
              }}
            />
          </div> */}
        </div>
      </section>

      {/* Trusted by */}
      <section className="flex items-center px-4 h-[70px] md:h-[100px] md:px-10 lg:px-16 justify-between bg-foreground">
        <p>scsbjbj</p>
      </section>
    </div>
  );
}
