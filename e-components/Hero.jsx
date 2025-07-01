"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaChair, FaArrowRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="container px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6 md:py-10">
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-md sm:px-4 sm:py-2">
              <FaChair className="mr-2 w-4 h-4 text-green-600 sm:h-5 sm:w-5" />
              <span className="text-xs font-semibold sm:text-sm">
                The Best Online Furniture Store
              </span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Explore Our <br />
              <span className="text-green-600">Modern Furniture</span> <br />
              Collection
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 space-x-2 text-sm text-white bg-green-600 rounded-full transition duration-300 sm:px-5 sm:py-2 sm:text-base hover:bg-green-700">
                <Link href="/shop">Shop Now</Link>
                <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <Link
                href="/categories"
                className="text-sm font-semibold text-gray-800 sm:text-base hover:underline"
              >
                View All Products
              </Link>
            </div>
            <div className="flex items-center pt-4 space-x-4">
              <div className="flex -space-x-2">
                <Image
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
                  src="/image/profile1.jpg"
                  alt="User 1"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
                  src="/image/profile2.jpg"
                  alt="User 2"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-white"
                  src="/image/profile3.jpg"
                  alt="User 3"
                  width={40}
                  height={40}
                />
                <div className="flex justify-center items-center w-10 h-10 text-white bg-yellow-400 rounded-full ring-2 ring-white">
                  <FiPlus />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-lg font-bold">4.9 Ratings+</span>
                </div>
                <p className="text-sm text-gray-500">
                  Trusted by 50k+ Customers
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Swiper */}
          <div className="px-4 py-4 mx-auto my-auto w-full max-w-screen-xl bg-white rounded-2xl shadow-lg">
            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
              }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <div>
                  <div className="relative">
                    <Image
                      src="/image/living.jpg"
                      alt="Living Room"
                      className="object-cover mb-2 w-full h-56 rounded-xl sm:h-64 md:h-96"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h3 className="text-base font-semibold">Living Room</h3>
                      <p className="text-sm text-gray-500">2,500+ Items</p>
                    </div>
                    <button className="p-2 text-white bg-green-600 rounded-full">
                      <BsArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <div>
                  <div className="relative">
                    <Image
                      src="/image/badroom.jpg"
                      alt="Bed Room"
                      className="object-cover mb-2 w-full h-56 rounded-xl sm:h-64 md:h-96"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h3 className="text-base font-semibold">Bed Room</h3>
                      <p className="text-sm text-gray-500">1,500+ Items</p>
                    </div>
                    <button className="p-2 text-white bg-green-600 rounded-full">
                      <BsArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide>
                <div>
                  <div className="relative">
                    <Image
                      src="/image/kitchen1.jpg"
                      alt="Kitchen"
                      className="object-cover mb-2 w-full h-56 rounded-xl sm:h-64 md:h-96"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <h3 className="text-base font-semibold">Kitchen</h3>
                      <p className="text-sm text-gray-500">1,200+ Items</p>
                    </div>
                    <button className="p-2 text-white bg-green-600 rounded-full">
                      <BsArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex justify-start items-center mt-4 space-x-3">
              <button className="p-2 text-white bg-green-600 rounded-full swiper-button-prev-custom disabled:opacity-50">
                <MdArrowBack size={20} />
              </button>
              <button className="p-2 text-white bg-yellow-400 rounded-full swiper-button-next-custom disabled:opacity-50">
                <MdArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
