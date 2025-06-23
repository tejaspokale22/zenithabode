"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import assets from "@/public/assets.js";

const sliderData = [
  {
    image: assets.gallery7,
    subtitle: "Comfort and Style",
    title: "Luxurious Beds for Your Dream Bedroom",
  },
  {
    image: assets.gallery1123,
    subtitle: "Modern Seating",
    title: "Discover Our Collection of Stylish Chairs",
  },
  {
    image: assets.gallery10,
    subtitle: "Restful Nights",
    title: "Elegant Beds for a Peaceful Sleep",
  },
  {
    image: assets.gallery15,
    subtitle: "Statement Pieces",
    title: "Chairs That Make a Statement",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]); 

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => { 
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="p-2 md:p-4">
      <section className="relative w-full h-[60vh] xs:h-[70vh] sm:h-[75vh] md:h-[88vh] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border">
        {sliderData.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              idx === current ? "z-10" : "z-0"
            }`}
            style={{ transform: `translateX(${(idx - current) * 100}%)` }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={idx === 0}
            />
          </div>
        ))}

        <div className="flex relative z-20 flex-col justify-center items-start p-3 h-full xs:p-4 sm:p-6 md:p-16 lg:p-24">
          <div className="overflow-hidden relative p-4 max-w-xs text-white rounded-lg shadow-2xl backdrop-blur-sm xs:p-6 sm:p-8 xs:max-w-sm sm:max-w-md md:max-w-md sm:rounded-xl bg-black/70 md:p-10 lg:max-w-lg">
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: "url('/assets/pyramid.png')",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative z-10">
              <p className="text-[10px] xs:text-xs tracking-widest text-gray-300 uppercase md:text-sm">
                {sliderData[current].subtitle}
              </p>
              <h1 className="my-2 text-xl font-bold leading-tight xs:my-3 xs:text-2xl sm:text-3xl md:text-4xl">
                {sliderData[current].title}
              </h1>
              <button className="bg-[#c7a760] text-black font-bold py-2 px-4 xs:py-3 xs:px-6 rounded-md mt-3 xs:mt-4 uppercase text-[10px] xs:text-xs tracking-wider hover:bg-opacity-90 transition-all duration-300 transform">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex absolute right-2 bottom-2 z-20 items-center rounded-md shadow-sm md:right-0 md:bottom-0 bg-white/90 xs:rounded-lg">
          <button
            onClick={prevSlide}
            className="p-2 text-gray-800 transition xs:p-3 sm:p-4 hover:bg-gray-200"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={18} className="md:hidden" />
            <ArrowLeft size={22} className="hidden xs:inline-block sm:hidden" />
            <ArrowLeft size={28} className="hidden sm:inline-block" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-gray-800 transition xs:p-3 sm:p-4 hover:bg-gray-200"
            aria-label="Next Slide"
          >
            <ArrowRight size={18} className="md:hidden" />
            <ArrowRight size={22} className="hidden xs:inline-block sm:hidden" />
            <ArrowRight size={28} className="hidden sm:inline-block" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
