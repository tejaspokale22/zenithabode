'use client'
import React, { useState } from 'react';

const sliderImages = [
  '/image/swiper1.jpg',
  '/image/swiper2.jpg',
  '/image/swiper3.jpg',
  '/image/swiper4.jpg',
  '/image/swiper5.jpg',
  '/image/swiper6.jpg',
  '/image/swiper7.jpg',
  '/image/swiper8.jpg',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="px-4 mx-auto w-full max-w-full md:px-12">
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl mt-4 py-8 md:py-12">
        {/* Slider Images */}
        {sliderImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`slide-${idx}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
          />
        ))}
        {/* Navigation Arrows */}
        <div className="flex absolute right-8 bottom-8 gap-4">
          <button
            onClick={prevSlide}
            className="flex justify-center items-center w-12 h-12 text-2xl rounded-full shadow transition bg-white/80 hover:bg-white"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="flex justify-center items-center w-12 h-12 text-2xl rounded-full shadow transition bg-white/80 hover:bg-white"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
