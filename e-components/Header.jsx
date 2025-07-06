"use client";
import Link from "next/link";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-8 z-40 w-full bg-gray-100">
      <div className="px-2 mx-auto max-w-7xl md:px-4">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex justify-center items-center w-8 h-8 text-lg font-bold text-yellow-400 bg-green-700 rounded-full md:w-10 md:h-10 md:text-2xl">
              F
            </div>
            <span className="text-lg font-semibold text-gray-900 md:text-xl">
              Furniture.
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center space-x-3 text-base font-medium text-gray-800 lg:flex lg:space-x-10 lg:text-[15px]">
            <Link href="/e-home" className="hover:text-green-700">
              Home
            </Link>
            <Link href="/categories" className="hover:text-green-700">
              Categories
            </Link>
            <Link href="/shop" className="hover:text-green-700">
              Shop
            </Link>
            <Link href="/e-about" className="hover:text-green-700">
              About
            </Link>
            <Link href="/e-contact" className="hover:text-green-700">
              Contact
            </Link>
            <Link href="/blog" className="hover:text-green-700">
              Blog
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2 text-base text-gray-800 lg:space-x-3 lg:text-lg">
            <Link
              href="/cart"
              className="flex justify-center items-center p-2 text-xl text-green-700 hover:text-green-800"
              aria-label="Cart"
            >
              <FaShoppingCart size={30} className="mr-1" />
              <span>Cart</span>
            </Link>
            <Link
              href="/"
              className="hidden px-3 py-1 ml-2 text-sm font-semibold text-white bg-black rounded-full border border-black transition-colors lg:flex lg:px-4 lg:py-2 lg:text-base hover:bg-gray-800 lg:justify-center lg:items-center"
            >
              Interior
              <TbArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
            <button className="block text-xl lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="py-4 lg:hidden">
            <Link
              href="/cart"
              className="flex items-center px-4 py-2 mb-2 text-base font-semibold text-green-700 hover:text-green-800"
              onClick={toggleMenu}
            >
              <FaShoppingCart className="mr-2" size={4} /> Cart
            </Link>
            <Link
              href="/e-home"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              href="/shop"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              Shop
            </Link>
            <Link
              href="/e-about"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/e-contact"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-base hover:text-green-700"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/"
              className="flex justify-center items-center px-4 py-3 mt-2 w-full text-base font-semibold text-center text-white bg-black rounded-full border border-black transition-colors hover:bg-gray-800"
              onClick={toggleMenu}
            >
              Interior
              <TbArrowUpRight className="ml-1 w-4 h-4" />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
