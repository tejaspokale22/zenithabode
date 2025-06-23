"use client";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-14 z-40 w-full bg-gray-100 md:top-10 md:py-1">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-2">
              <div className="flex justify-center items-center w-8 h-8 text-xl font-bold text-yellow-400 bg-green-700 rounded-full sm:w-10 sm:h-10 sm:text-2xl">
                F
              </div>
              <span className="text-xl font-semibold text-gray-900 sm:text-2xl">
                Furniture.
              </span>
            </a>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden space-x-6 text-sm font-medium text-gray-800 md:flex md:gap-5">
            <Link href="/">
              <a className="hover:text-green-700">Home</a>
            </Link>
            <Link href="/shop">
              <a className="hover:text-green-700">Shop</a>
            </Link>
            <Link href="/categories">
              <a className="hover:text-green-700">Categories</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-green-700">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-green-700">Contact Us</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-green-700">Blog</a>
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2 text-base text-gray-800 sm:space-x-4 sm:text-lg md:gap-4">
            <FaSearch className="cursor-pointer hover:text-green-700" />
            <FaHeart className="cursor-pointer hover:text-green-700" />
            <FaShoppingCart className="cursor-pointer hover:text-green-700" />
            <FaUser className="cursor-pointer hover:text-green-700" />
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="py-4 md:hidden">
            <Link href="/">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>Home</a>
            </Link>
            <Link href="/shop">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>Shop</a>
            </Link>
            <Link href="/categories">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>Categories</a>
            </Link>
            <Link href="/about">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>About Us</a>
            </Link>
            <Link href="/contact">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>Contact Us</a>
            </Link>
            <Link href="/blog">
              <a className="block py-2 text-base hover:text-green-700" onClick={toggleMenu}>Blog</a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
