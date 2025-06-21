"use client";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 font-bold text-white bg-green-700 rounded-full">
              F
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Furniture.
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden space-x-6 text-sm font-medium text-gray-800 md:flex">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/shop" className="hover:text-green-700">Shop</Link>
            <Link href="/categories" className="hover:text-green-700">Categories</Link>
            <Link href="/about" className="hover:text-green-700">About Us</Link>
            <Link href="/contact" className="hover:text-green-700">Contact Us</Link>
            <Link href="/blog" className="hover:text-green-700">Blog</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-lg text-gray-800">
            <FaSearch className="cursor-pointer hover:text-green-700" />
            <FaHeart className="cursor-pointer hover:text-green-700" />
            <FaShoppingCart className="cursor-pointer hover:text-green-700" />
            <FaUser className="cursor-pointer hover:text-green-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
