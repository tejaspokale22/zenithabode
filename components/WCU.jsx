import React from 'react';
import Image from 'next/image';
import assets from '@/public/assets';

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden relative py-12 w-full bg-white md:py-20">
      {/* Subtle background lines (left) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/image/gallerys6.jpg"
          alt="background lines"
          fill
          className="hidden object-cover absolute top-0 left-0 w-2/3 h-full opacity-10 md:block"
          sizes="(min-width: 1024px) 66vw, 0px"
          priority
        />
      </div>
      <div className="relative mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[420px]">
        {/* Left: Content */}
        <div className="flex flex-col justify-center py-8 h-full md:py-12 lg:pl-8">
          <span className="text-[#bfa46f] text-base font-semibold tracking-widest mb-4">WHY CHOOSE US</span>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Providing Quality Your <br /> Interior Services
          </h2>
          <p className="mb-8 max-w-lg text-base text-gray-500 sm:text-lg">
            With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.
          </p>
          <div className="flex flex-col gap-8 mt-2 mb-10 w-full max-w-md sm:flex-row sm:gap-12">
            {/* Feature 1 */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex-shrink-0">
                <Image src={assets.commercialFurniture} alt="Commercial Furniture Icon" width={64} height={64} className="object-contain w-14 h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">Commercial</span>
                <span className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">Furniture</span>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex gap-4 items-center w-full">
              <div className="flex-shrink-0">
                <Image src={assets.homeLighting} alt="Home Lighting Icon" width={64} height={64} className="object-contain w-14 h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">Home</span>
                <span className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">Lighting</span>
              </div>
            </div>
          </div>
          <button className="w-max bg-[#bfa46f] hover:bg-[#a88d4a] text-white font-semibold px-8 sm:px-10 py-3 rounded transition text-base shadow-md tracking-wide uppercase">
            Read More
          </button>
        </div>
        {/* Right: Sketch and INTERIOR text */}
        <div className="relative flex items-center justify-center w-full h-full min-h-[240px] sm:min-h-[320px]">
          {/* Architectural Sketch */}
          <Image
            src={assets.wcu_2}
            alt="Architectural Sketch"
            width={700}
            height={500}
            className="object-contain w-full max-w-2xl h-auto rounded-xl opacity-80"
            sizes="(min-width: 1024px) 700px, 100vw"
            priority
          />
          {/* INTERIOR Text */}
          <span className="text-outline absolute bottom-4 left-1/2 -translate-x-1/2 text-[clamp(2.5rem,8vw,6rem)] font-extrabold tracking-tight opacity-70 select-none pointer-events-none whitespace-nowrap" style={{letterSpacing:'0.04em'}}>INTERIOR</span>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;