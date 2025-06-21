'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar, FaHeart, FaExchangeAlt, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const deals = [
  {
    discount: '30% off',
    image: '/image/swiper1.jpg',
    category: 'Chair',
    name: 'Recliner Chair Wood',
    price: 105.00,
    oldPrice: 150.00,
    rating: 5.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    discount: '20% off',
    image: '/image/swiper2.jpg',
    category: 'Chair',
    name: 'Recliner Chair Steel',
    price: 80.00,
    oldPrice: 100.00,
    rating: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    discount: '50% off',
    image: '/image/swiper3.jpg',
    category: 'Sofa',
    name: 'Modern Sofa',
    price: 250.00,
    oldPrice: 500.00,
    rating: 4.8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    discount: '15% off',
    image: '/image/swiper4.jpg',
    category: 'Lamp',
    name: 'Stylish Lamp',
    price: 45.00,
    oldPrice: 53.00,
    rating: 4.7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

const ProductCard = ({ deal }) => (
    <div className="flex p-4 space-x-4 bg-gray-50 rounded-2xl group">
        <div className="relative w-1/3">
        <div className="absolute top-2 left-2 z-10 px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full">{deal.discount}</div>
        <div className="flex absolute top-2 right-2 z-10 flex-col space-y-2">
            <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-red-500"><FaHeart /></button>
            <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-green-700"><FaExchangeAlt /></button>
            <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-blue-500"><FaShoppingCart /></button>
        </div>
        <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
            <Image src={deal.image} alt={deal.name} layout="fill" className="object-cover" />
        </div>
        </div>
        <div className="flex flex-col justify-between w-2/3">
        <div>
            <p className="text-sm text-gray-500">{deal.category}</p>
            <h3 className="text-lg font-bold text-gray-800">{deal.name}</h3>
            <div className="flex items-center my-2 space-x-2">
                <p className="text-xl font-bold text-green-700">${deal.price.toFixed(2)}</p>
                <p className="text-gray-400 line-through">${deal.oldPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
            <FaStar className="mr-1 text-yellow-400" />
            <span className="font-semibold text-gray-700">{deal.rating}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">{deal.description}</p>
        </div>
        <button className="flex items-center mt-4 text-sm font-semibold text-green-700 group-hover:underline">
            Shop Now <FaArrowRight className="ml-2" />
        </button>
        </div>
    </div>
);


const Deals = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col justify-between items-start mb-8 md:flex-row">
            <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-2">
                    <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Today Deals</p>
                </div>
                <h2 className="text-4xl font-bold text-green-700">Deals of the Day</h2>
            </div>
            <p className="max-w-md text-sm text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
        </div>

        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
                768: { slidesPerView: 2 },
            }}
            className="mb-12 deals-swiper"
        >
          {deals.map((deal, index) => (
            <SwiperSlide key={index}>
              <ProductCard deal={deal} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex overflow-hidden justify-between items-center p-8 bg-gray-50 rounded-2xl">
                <div className='space-y-8'>
                    <p className="font-semibold text-gray-500">Flat 20% Discount</p>
                    <h3 className="my-2 text-4xl font-bold text-gray-800">Latest Gaming<br/>Chairs</h3>
                    <p className="mb-4 text-sm text-gray-500">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed</p>
                    <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-full">Shop Now <FaArrowRight className="ml-2" /></button>
                </div>
                <div className="-mr-8 -mb-8 w-1/2">
                    <Image src="/image/ga.jpg" alt="Gaming Chair" width={300} height={300} className="object-contain"/>
                </div>
            </div>
            <div className="flex overflow-hidden justify-between items-center p-8 text-gray-800 bg-yellow-400 rounded-2xl">
                <div className='space-y-8'>
                    <p className="font-semibold">Flat 15% Discount</p>
                    <h3 className="my-2 text-4xl font-bold">Wood Chair<br/>Collection</h3>
                    <p className="mb-4 text-sm">Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed</p>
                    <button className="flex items-center px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-full">Shop Now <FaArrowRight className="ml-2" /></button>
                </div>
                <div className="-mr-8 -mb-8 w-1/2">
                    <Image src="/image/drowing.jpg" alt="Wood Chair" width={300} height={300} className="object-contain" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
