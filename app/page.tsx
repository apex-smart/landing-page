import DownloadButton from "@/components/download_button";
import Image from "next/image";
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from "react-icons/io5";

import React from "react";
import { HighPoinsObject } from "@/config/object";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaFingerprint,
  FaBell,
  FaMobileAlt,
  FaMoneyBillWave,
  FaCreditCard,
  FaArrowRight,
  FaComments,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

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
      <section className="px-4 h-[70px] md:h-[100px] md:px-10 lg:px-16 bg-foreground overflow-hidden relative">
        <div className="flex items-center h-full w-full absolute">
          <div className="flex items-center animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {HighPoinsObject.map((item, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="flex items-center mx-8 md:mx-20 gap-2 text-white"
                  >
                    {item.icon}
                    <span className="font-medium text-sm md:text-xl whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Transactions Section */}
      <section className="py-16 px-4 md:px-10 lg:px-16 bg-[white]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Image */}
            <div className="flex-1">
              <Image
                src="/fast-transaction.webp" // Replace with your image path
                alt="Fast transactions illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg "
                quality={80}
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Lightning-Fast Transactions in Seconds
              </h2>

              <p className="text-lg opacity-80">
                Experience banking at the speed of thought. Our optimized
                platform ensures your VTU, transfers, and payments complete
                before you blink.
              </p>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FaBolt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Instant VTU Top-ups</h3>
                    <p className="opacity-75">
                      Recharge airtime and data bundles in under 5 seconds.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FaExchangeAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Real-time Transfers</h3>
                    <p className="opacity-75">
                      Send money to any bank or mobile wallet instantly.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FaShieldAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Secure & Reliable</h3>
                    <p className="opacity-75">
                      Bank-grade security without compromising speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smooth Onboarding Section */}
      <section className="py-16 px-4 md:px-10 lg:px-16 bg-[#08775d] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Get Started in Minutes
              </h2>

              <p className="text-lg opacity-90">
                Our seamless onboarding process gets you up and running in no
                time. No paperwork, no hassle - just fast access to all our
                features.
              </p>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex items-center justify-center">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Download the App</h3>
                    <p className="opacity-90">
                      Available on both iOS and Android platforms.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex items-center justify-center">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Create Your Account</h3>
                    <p className="opacity-90">
                      Simple registration with just your basic details.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full flex items-center justify-center">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Start Transacting</h3>
                    <p className="opacity-90">
                      Immediately access all features after verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#08775d] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                  Download Now
                </button>
                <button className="border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <Image
                src="/register.webp" // Replace with your image path
                alt="Easy onboarding illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Secure Transactions Section */}
      <section className="py-16 px-4 md:px-10 lg:px-16 bg-[#fefbf5]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Left Column - Image */}
            <div className="flex-1">
              <Image
                src="/security.webp" // Replace with your security image
                alt="Secure transaction illustration"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
                quality={80}
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Your Security is Our Priority
              </h2>
              <p className="text-lg opacity-80 mb-8">
                We use military-grade encryption and multi-layer authentication
                to keep your transactions and data safe at every step.
              </p>

              <div className="space-y-6">
                {/* Security Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaShieldAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Bank-Level Encryption</h3>
                    <p className="opacity-80">
                      256-bit SSL encryption protects all your transactions and
                      personal data.
                    </p>
                  </div>
                </div>

                {/* Security Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaFingerprint className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Biometric Protection</h3>
                    <p className="opacity-80">
                      Fingerprint and face ID login for secure, instant access
                      to your account.
                    </p>
                  </div>
                </div>

                {/* Security Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FaBell className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Instant Notifications</h3>
                    <p className="opacity-80">
                      Real-time alerts for every transaction so you&apos;re
                      always in control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition mr-4">
              Learn More
            </button>
            <button className="border border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary/10 transition">
              How We Protect You
            </button>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 px-4 md:px-10 lg:px-16 bg-[#08775d] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Discover all the financial services we offer to make your life
              easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/stocks.webp"
                  alt="VTU Services"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaMobileAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                VTU Services
              </h3>
              <p className="opacity-90 mb-6 text-center">
                Instant airtime top-up and data bundle purchases for all
                networks
              </p>
              <button className="w-full bg-white text-[#08775d] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/clock.webp"
                  alt="Money Transfers"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaMoneyBillWave className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Money Transfers
              </h3>
              <p className="opacity-90 mb-6 text-center">
                Send and receive money to any bank or mobile wallet instantly
              </p>
              <button className="w-full bg-white text-[#08775d] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Learn More <FaArrowRight />
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/etfs.webp"
                  alt="Bill Payments"
                  width={120}
                  height={120}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaCreditCard className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                Bill Payments
              </h3>
              <p className="opacity-90 mb-6 text-center">
                Pay utility bills, TV subscriptions, and more with just a few
                taps
              </p>
              <button className="w-full bg-white text-[#08775d] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition">
              Explore All Features
            </button>
          </div>
        </div>
      </section>

      {/* Join the Conversation Section */}
      <section className="relative py-24 px-4 md:px-10 lg:px-16">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#ddbd8e] z-0" />
        <div
          className="absolute inset-0 bg-white z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Content */}
            <div className="flex-1">
              <div className="bg-white p-8 md:p-12 rounded-xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Join the Conversation
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Be part of our growing community of users who are transforming
                  their financial experience.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#08775d]/10 p-3 rounded-full">
                      <FaComments className="text-[#08775d] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        24/7 Customer Support
                      </h3>
                      <p className="text-gray-600">
                        Get instant help from our dedicated support team
                        anytime, anywhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#08775d]/10 p-3 rounded-full">
                      <FaUsers className="text-[#08775d] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Community Forum
                      </h3>
                      <p className="text-gray-600">
                        Connect with other users and share tips and experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#08775d]/10 p-3 rounded-full">
                      <FaLightbulb className="text-[#08775d] text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Feedback Matters
                      </h3>
                      <p className="text-gray-600">
                        Help us improve by sharing your suggestions and ideas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#08775d] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#07614d] transition flex-1">
                    Join Our Community
                  </button>
                  <button className="border border-[#08775d] text-[#08775d] font-bold py-3 px-8 rounded-lg hover:bg-[#08775d]/10 transition flex-1">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <Image
                src="/mail-box.webp"
                alt="Community illustration"
                width={600}
                height={600}
                className="w-full h-auto rounded-lg"
                quality={80}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
