import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Offer = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 px-2 w-full h-8 text-white bg-green-700 md:px-4 md:h-8">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-full text-xs">
        <p className="font-medium text-center md:text-left md:block">
          Call Us : +123-456-7890
        </p>
        <p className="hidden flex-1 text-xs text-center md:text-sm md:text-left md:mx-4 md:flex">
          Sign up and GET 25% OFF for your first order.{" "}
          <a
            href="#"
            className="font-semibold text-yellow-400 underline hover:text-yellow-300"
          >
            Sign up now
          </a>
        </p>
        <div className="flex items-center mt-1 space-x-2 md:space-x-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="p-1 text-gray-800 bg-yellow-400 rounded-full transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-1 text-gray-800 bg-yellow-400 rounded-full transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="p-1 text-gray-800 bg-yellow-400 rounded-full transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-1 text-gray-800 bg-yellow-400 rounded-full transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="p-1 text-gray-800 bg-yellow-400 rounded-full transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
