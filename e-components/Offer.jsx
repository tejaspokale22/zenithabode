import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Offer = () => {
  return (
    <div className="bg-black text-white py-4 px-6 min-h-[60px] w-full relative">
      <div className="container flex justify-between items-center mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-medium">Call Us : +123-456-7890</p>
        </div>
        <div>
          <p className="text-sm">
            Sign up and GET 25% OFF for your first order. <a href="#" className="font-semibold text-yellow-400 underline hover:text-yellow-300">Sign up now</a>
          </p>
        </div>
        <div className="flex items-center space-x-3">
            <a href="#" className="text-yellow-400 transition-colors hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="text-yellow-400 transition-colors hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="text-yellow-400 transition-colors hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="text-yellow-400 transition-colors hover:text-yellow-300"><FaLinkedinIn /></a>
            <a href="#" className="text-yellow-400 transition-colors hover:text-yellow-300"><FaYoutube /></a>
        </div>
      </div>
    </div>
  );
};

export default Offer;
