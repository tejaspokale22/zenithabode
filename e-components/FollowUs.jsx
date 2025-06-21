'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

const galleryImages = [
  { src: '/image/living.jpg' },
  { src: '/image/swiper2.jpg', featured: true },
  { src: '/image/drowing.jpg' },
  { src: '/image/gallery11.jpg' },
  { src: '/image/gallery12.jpg' },
];

const FollowUs = () => {
  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-8 h-px bg-yellow-500"></span>
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Follow Us
            </p>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Follow Us On <span className="text-green-700">Instagram</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-[4/5] transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image
                src={image.src}
                alt={`Instagram post ${index + 1}`}
                layout="fill"
                className="object-cover"
              />
              <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-40">
                {image.featured ? (
                   <div className="flex absolute inset-0 justify-center items-center bg-black bg-opacity-40">
                    <FaInstagram className="text-5xl text-white" />
                   </div>
                ) : (
                  <FaInstagram className="text-5xl text-white opacity-0 transition-all duration-300 transform scale-75 group-hover:opacity-100 group-hover:scale-100" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
