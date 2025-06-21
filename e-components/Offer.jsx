import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Offer = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 px-4 w-full h-14 text-white bg-green-700 sm:px-6 md:h-10">
      <div className="container flex flex-col justify-center items-center mx-auto max-w-7xl h-full text-xs sm:text-sm md:flex-row md:justify-between">
        <p className="hidden font-medium text-center sm:block md:text-left">
          Call Us : +123-456-7890
        </p>
        <p className="text-xs text-center sm:text-sm">
          Sign up and GET 25% OFF for your first order.{' '}
          <a href="#" className="font-semibold text-yellow-400 underline hover:text-yellow-300">
            Sign up now
          </a>
        </p>
        <div className="hidden items-center space-x-4 md:flex">
            <a href="#" aria-label="Facebook" className="p-1 text-gray-800 bg-yellow-300 rounded-full transition-colors"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="p-1 text-gray-800 bg-yellow-300 rounded-full transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="p-1 text-gray-800 bg-yellow-300 rounded-full transition-colors"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="p-1 text-gray-800 bg-yellow-300 rounded-full transition-colors"><FaLinkedinIn /></a>
              <a href="#" aria-label="YouTube" className="p-1 text-gray-800 bg-yellow-300 rounded-full transition-colors"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
