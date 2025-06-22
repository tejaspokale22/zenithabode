import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsBanner = () => {
  return (
    <div className="relative w-full h-56 md:h-72 lg:h-80">
      <Image
        src="/image/backgroundproject.jpg" 
        alt="About Us Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-black opacity-60"></div>
      <div className="flex relative z-20 flex-col justify-center items-center px-4 h-full text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">About Us</h1>
        <div className="mt-4 text-sm md:text-base">
          <Link href="/" className='text-[#bfa46f] hover:text-amber-400 transition-colors'>
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>About Us</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
