'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaChair, FaArrowRight, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { BsArrowUpRight } from "react-icons/bs";


const Hero = () => {
  return (
    <div className="bg-gray-50/50">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-md">
              <FaChair className="mr-2 text-green-600" />
              <span className="text-sm font-semibold">The Best Online Furniture Store</span>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Explore Our <br />
              <span className="text-green-600">Modern Furniture</span> <br />
              Collection
            </h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-6 py-3 space-x-2 text-white bg-green-600 rounded-full transition duration-300 hover:bg-green-700">
                <span>Shop Now</span>
                <FaArrowRight />
              </button>
              <button className="font-semibold text-gray-800 hover:underline">
                View All Products
              </button>
            </div>
            <div className="flex items-center pt-4 space-x-4">
              <div className="flex -space-x-2">
                <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="User 1" />
                <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="User 2" />
                <img className="inline-block w-10 h-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40" alt="User 3" />
                <div className="flex justify-center items-center w-10 h-10 text-white bg-yellow-400 rounded-full ring-2 ring-white">
                    <FiPlus/>
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-lg font-bold">4.9 Ratings+</span>
                </div>
                <p className="text-sm text-gray-500">Trusted by 50k+ Customers</p>
              </div>
            </div>
          </div>

          {/* Right Side - Swiper */}
          <div>
            <Swiper
              spaceBetween={20}
              slidesPerView={1.5}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img src="https://via.placeholder.com/400x300/F3F4F6/000000?text=Living+Room" alt="Living Room" className="mb-4 rounded-xl" />
                  <div className='flex justify-between items-center'>
                    <div>
                        <h3 className="text-xl font-bold">Living Room</h3>
                        <p className="text-gray-500">2,500+ Items</p>
                    </div>
                    <button className='p-3 text-white bg-green-600 rounded-full'>
                        <BsArrowUpRight size={20}/>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img src="https://via.placeholder.com/400x300/F3F4F6/000000?text=Bed+Room" alt="Bed Room" className="mb-4 rounded-xl" />
                   <div className='flex justify-between items-center'>
                    <div>
                        <h3 className="text-xl font-bold">Bed Room</h3>
                        <p className="text-gray-500">1,500+ Items</p>
                    </div>
                    <button className='p-3 text-white bg-green-600 rounded-full'>
                        <BsArrowUpRight size={20}/>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
               <SwiperSlide>
                <div className="p-4 bg-white rounded-2xl shadow-lg">
                  <img src="https://via.placeholder.com/400x300/F3F4F6/000000?text=Kitchen" alt="Kitchen" className="mb-4 rounded-xl" />
                   <div className='flex justify-between items-center'>
                    <div>
                        <h3 className="text-xl font-bold">Kitchen</h3>
                        <p className="text-gray-500">1,200+ Items</p>
                    </div>
                    <button className='p-3 text-white bg-green-600 rounded-full'>
                        <BsArrowUpRight size={20}/>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-end items-center mt-4 space-x-3">
                <button className="p-3 text-white bg-green-600 rounded-full swiper-button-prev-custom disabled:opacity-50">
                    <MdArrowBack size={24} />
                </button>
                <button className="p-3 text-white bg-yellow-400 rounded-full swiper-button-next-custom disabled:opacity-50">
                    <MdArrowForward size={24} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
