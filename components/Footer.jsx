import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import assets from "@/public/assets";

export default function Footer() {
  return (
    <div>
      <footer className="overflow-hidden relative py-12 text-gray-800 sm:py-16 md:py-20 bg-zinc-50">
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
          <div className="flex flex-col gap-10 px-20 pb-8 md:gap-12 md:pb-12 lg:flex-row lg:items-start lg:justify-between">
            {/* Logo */}
            <div className="flex flex-col gap-4 min-w-[180px] md:min-w-[250px] items-center md:items-start lg:items-start lg:justify-start">
              <div className="flex gap-4 justify-center items-center">
                <Image
                  src={assets.logo}
                  alt="logo"
                  width={140}
                  height={40}
                  className="object-contain w-32 h-auto sm:w-40"
                  priority
                />
              </div>
            </div>

            {/* Link Sections */}
            <div className="flex flex-col gap-10 items-center w-full md:gap-12 lg:flex-row lg:gap-20 xl:gap-40 md:items-start lg:items-start lg:ml-auto lg:w-auto">
              {/* Service */}
              <div className="flex flex-col items-center w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">Services</h3>
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
              <div className="flex flex-col items-center w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">Useful links</h3>
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
              <div className="flex flex-col items-center w-full sm:w-auto md:items-start">
                <h3 className="mb-4 text-lg font-bold sm:mb-6 sm:text-2xl">Follow Us</h3>
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
              <span className="mt-2 mr-3 w-2 h-2 bg-black rounded-full"></span>
              Lorem ipsum dolor sit amet, cosectetur adip Duis convallis sit
              amet purus ac dapibus.
            </p>
            <span className="flex gap-2 items-center">
              <span className="text-lg font-bold text-black sm:text-xl">•</span>{" "}
              <span className="text-lg font-semibold sm:text-2xl">need@company.com</span>
            </span>
            <div className="flex flex-col gap-2 font-semibold text-black sm:gap-3 lg:flex-row lg:items-center">
              <span className="flex gap-2 items-center">
                <span className="text-lg font-bold text-black sm:text-xl">•</span>{" "}
                <span className="text-lg font-semibold sm:text-2xl">0000 - 222 - 333</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
      {/* Bottom Bar */}
      <div className="flex relative z-20 flex-col gap-2 justify-between items-center px-4 py-3 text-xs text-white bg-black sm:gap-3 sm:px-6 sm:py-4 sm:text-sm lg:flex-row lg:px-20">
        <p className="text-[10px] sm:text-xs text-center lg:text-left">
          Copyright © 2024 ThemeMascot All Rights Reserved.
        </p>
        <div className="flex gap-4 text-base text-white sm:gap-6 sm:text-sm">
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

//previous code
{
  /* <div className="bg-zinc-100">
<div className="container py-14 lg:grid lg:grid-cols-2">
    <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
        <div>
            <h2 className="pb-4 text-xl font-semibold">COMPANY</h2>
            <div className="flex flex-col">
                <Link className="py-1 hover:underline" href="/about">About Us</Link>
                <Link className="py-1 hover:underline" href="/press">Press</Link>
                <Link className="py-1 hover:underline" href="/careers">Careers</Link>
                <Link className="py-1 hover:underline" href="/contact">Contact</Link>
            </div>
        </div>
        <div>
            <h2 className="pb-4 text-xl font-semibold">DEVELOPMENT</h2>
            <div className="flex flex-col">
                <Link className="py-1 hover:underline" href="/about">Documentation</Link>
                <Link className="py-1 hover:underline" href="/press">API Reference</Link>
                <Link className="py-1 hover:underline" href="/careers">Changelog</Link>
                <Link className="py-1 hover:underline" href="/contact">Status</Link>
            </div>
        </div>
        <div>
            <h2 className="pb-4 text-xl font-semibold">CONNECT</h2>
            <div className="flex flex-col">
                <Link className="py-1 hover:underline" href="/about">Instagram</Link>
                <Link className="py-1 hover:underline" href="/press">Linkedin</Link>
                <Link className="py-1 hover:underline" href="/careers">Twitter</Link>
            </div>
        </div>
    </div>
    <div className="pt-4 text-center border-t-2 lg:pt-0 lg:text-left lg:border-0 lg:pl-20">
        <p className="pb-4 text-xl font-semibold">STAY UPDATED</p>
        <div className="relative lg:max-w-sm">
            <input className="px-4 pr-20 w-full h-14 rounded-full border-2 border-gray-300" type="text" placeholder="Email Address" />
            <button className="absolute top-2 right-2 px-3 h-10 text-sm text-white bg-black rounded-full hover:border-2 hover:border-black hover:bg-white hover:text-black">Subscribe</button>
        </div>
        <p className="pt-4 text-gray-500">
            By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
        </p>
    </div>
</div>

{/* Copy Right */
}
