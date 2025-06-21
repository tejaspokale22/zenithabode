'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Leslie Alexander',
    role: 'Architecture',
    image: '/image/profile1.jpg',
    rating: 5.0,
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
  },
  {
    name: 'Jenny Wilson',
    role: 'Interior Designer',
    image: '/image/profile2.jpg',
    rating: 5.0,
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
  },
  {
    name: 'Robert Fox',
    role: 'Project Manager',
    image: '/image/profile3.jpg',
    rating: 5.0,
    quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-8 h-px bg-yellow-500"></span>
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Testimonial
            </p>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            What Our <span className="text-green-700">Clients Say</span>
          </h2>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="mx-auto max-w-6xl testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <div className="relative mr-4">
                            <div className="w-20 h-20 bg-green-700 rounded-tl-3xl rounded-tr-sm rounded-br-3xl rounded-bl-sm transform -rotate-12"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full overflow-hidden">
                                <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                layout="fill"
                                className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                            <div className="flex items-center mt-1">
                                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                    <FaStar key={i} className="mr-1 text-yellow-500" />
                                ))}
                                <span className="ml-1 font-bold text-gray-700">{testimonial.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                    <FaQuoteLeft className="text-5xl text-green-700 opacity-20" />
                </div>
                <p className="text-sm leading-relaxed text-gray-500">
                  {testimonial.quote}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination flex justify-center mt-8 !relative"></div>
      </div>
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #d1d5db;
            opacity: 1;
            transition: all 0.3s ease;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
            width: 30px;
            border-radius: 5px;
            background-color: #047857;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
