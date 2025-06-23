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
      <section className="relative w-full h-[88vh] overflow-hidden rounded-2xl shadow-lg border">
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

        <div className="flex relative z-20 flex-col justify-center items-start p-8 h-full md:p-16 lg:p-24">
          <div className="overflow-hidden relative p-8 max-w-md text-white rounded-xl shadow-2xl backdrop-blur-sm bg-black/70 md:p-10 lg:max-w-lg">
            <div
              className="absolute inset-0 z-0 opacity-10"
              style={{
                backgroundImage: "url('/assets/pyramid.png')",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative z-10">
              <p className="text-xs tracking-widest text-gray-300 uppercase md:text-sm">
                {sliderData[current].subtitle}
              </p>
              <h1 className="my-4 text-3xl font-bold leading-tight md:text-4xl">
                {sliderData[current].title}
              </h1>
              <button className="bg-[#c7a760] text-black font-bold py-3 px-6 rounded-md mt-4 uppercase text-xs tracking-wider hover:bg-opacity-90 transition-all duration-300 transform">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex absolute right-4 bottom-4 z-20 items-center md:right-0 md:bottom-0 bg-white/90">
          <button
            onClick={prevSlide}
            className="p-5 text-gray-800 transition hover:bg-gray-200"
            aria-label="Previous Slide"
          >
            <ArrowLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="p-5 text-gray-800 transition hover:bg-gray-200"
            aria-label="Next Slide"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
