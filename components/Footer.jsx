import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import assets from "../public/assets.js";

export default function Footer() {
  return (
    <div>
      <footer className="overflow-hidden relative py-12 text-gray-800 bg-gradient-to-b sm:py-16 md:py-20 from-zinc-50 to-zinc-100">
        {/* Decorative Images - Watermark Style */}
        <Image
          src={assets.f1}
          alt="Decorative Left Top"
          width={500}
          height={500}
          className="hidden absolute top-0 left-0 z-0 p-4 opacity-100 pointer-events-none select-none md:block sm:p-10"
          style={{ maxWidth: "40vw", height: "auto" }}
          aria-hidden="true"
        />
        <Image
          src={assets.f2}
          alt="Decorative Right Bottom"
          width={600}
          height={600}
          className="hidden absolute right-0 bottom-0 z-0 opacity-100 pointer-events-none select-none md:block"
          style={{ maxWidth: "60vw", height: "auto" }}
          aria-hidden="true"
        />
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          {/* Top Content */}
          <div className="flex flex-col gap-10 px-0 pb-8 md:gap-12 md:pb-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Logo */}
            <div className="flex flex-col gap-4 min-w-[180px] md:min-w-[250px] items-start lg:items-start lg:justify-end">
              <div className="flex gap-4 justify-center items-center">
                <Link href="/">
                  <Image
                    src={assets.logo}
                    alt="logo"
                    width={140}
                    height={40}
                    className="object-contain w-32 h-auto sm:w-40"
                    priority
                  />
                </Link>
              </div>
            </div>

            {/* Link Sections */}
            <div className="flex flex-col gap-10 items-start w-full md:gap-12 lg:flex-row lg:gap-20 xl:gap-40 md:items-start lg:items-start lg:ml-auto lg:w-auto">
              {/* Service */}
              <div className="flex flex-col items-start w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">
                  Services
                </h3>
                <ul className="space-y-2 text-base text-gray-600 sm:space-y-4 sm:text-lg">
                  <li>
                    <Link href="/about" className="hover:text-black">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black">
                      Get In Touch
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="flex flex-col items-start w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">
                  Useful links
                </h3>
                <ul className="space-y-2 text-base text-gray-600 sm:space-y-4 sm:text-lg">
                  <li>
                    <a href="#" className="hover:text-black">
                      Privacy & Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      FAQ Page
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-black">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col items-start w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">
                  Follow Us
                </h3>
                <ul className="space-y-2 text-base text-gray-600 sm:space-y-4 sm:text-lg">
                  <li className="flex gap-2 items-center hover:text-black">
                    <FaFacebookF className="text-base sm:text-sm" /> Facebook
                  </li>
                  <li className="flex gap-2 items-center hover:text-black">
                    <FaInstagram className="text-base sm:text-sm" /> Instagram
                  </li>
                  <li className="flex gap-2 items-center hover:text-black">
                    <FaLinkedinIn className="text-base sm:text-sm" /> LinkedIn
                  </li>
                  <li className="flex gap-2 items-center hover:text-black">
                    <FaYoutube className="text-base sm:text-sm" /> YouTube
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="mt-10 mb-8 border-gray-400 md:mt-16 md:mb-14" />

          {/* Contact Info Row */}
          <div className="flex flex-col gap-4 px-0 md:gap-6 sm:px-6 md:px-12 lg:flex-row lg:items-center lg:justify-between">
            <p className="flex items-start max-w-full text-sm text-gray-700 md:max-w-md sm:text-base">
              Transforming spaces with innovative design and quality
              craftsmanship. Your dream interior is just a step away.
            </p>
            <span className="flex gap-2 items-center">
              <span className="text-lg font-bold text-black sm:text-xl">•</span>{" "}
              <span className="text-lg font-semibold sm:text-2xl">
                need@company.com
              </span>
            </span>
            <div className="flex flex-col gap-2 font-semibold text-black sm:gap-3 lg:flex-row lg:items-center">
              <span className="flex gap-2 items-center">
                <span className="text-lg font-bold text-black sm:text-xl">
                  •
                </span>{" "}
                <span className="text-lg font-semibold sm:text-2xl">
                  0000 - 222 - 333
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="flex relative z-20 flex-col gap-2 justify-between items-start px-4 py-3 text-xs text-white bg-black sm:gap-3 sm:px-6 sm:py-4 sm:text-sm lg:flex-row lg:items-center lg:px-20 lg:justify-between">
        <p className="text-[10px] sm:text-xs text-left">
          Copyright © 2025 ZENITHABODE All Rights Reserved.
        </p>
        <div className="flex gap-4 mt-2 text-base text-white sm:gap-6 sm:text-sm lg:mt-0">
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}
