"use client";
import Image from "next/image";
import assets from "../public/assets.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TbArrowUpRight, TbMenu2, TbX } from "react-icons/tb";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT US" },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="sticky inset-x-0 top-0 z-30 bg-opacity-60 backdrop-blur-lg bg-zinc-100">
      <div className="container flex justify-between items-center px-4 py-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 w-28 h-auto sm:w-36">
          <Image
            src={assets.logo}
            alt="logo"
            width={140}
            height={35}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden flex-1 gap-x-6 justify-center items-center lg:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        {/* Couch Corner Button (Desktop) */}
        <div className="hidden flex-shrink-0 gap-x-2 items-center lg:flex">
          <a
            href="/e-home"
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full border border-yellow-600 shadow-sm hover:from-yellow-600 hover:to-yellow-800"
          >
            Couch Corner
            <TbArrowUpRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        {/* Hamburger Menu Button (Mobile/Tablet) */}
        <button
          className="block z-40 ml-2 lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <TbX className="w-7 h-7" />
          ) : (
            <TbMenu2 className="w-7 h-7" />
          )}
        </button>
      </div>
      {/* Mobile/Tablet Dropdown Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white shadow-md ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } w-full`}
      >
        <nav className="flex flex-col gap-y-4 items-center px-3 py-6 sm:px-6">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-base sm:text-lg w-full text-center ${
                pathname === href
                  ? "text-black font-bold"
                  : "text-gray-600 hover:text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/e-home"
            className="inline-flex justify-center items-center px-3 py-2 mt-2 w-full text-sm font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full border border-yellow-600 shadow transition-all sm:px-4 sm:py-3 sm:text-base md:text-lg hover:from-yellow-600 hover:to-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            onClick={() => setMenuOpen(false)}
          >
            Couch Corner <TbArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
