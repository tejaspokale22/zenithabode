'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight, FaStar, FaQuoteLeft } from 'lucide-react';

import EHeader from '@/e-components/Header';
import EFooter from '@/e-components/Footer';
import Offer from '@/e-components/Offer';
import NewsLetter from '@/e-components/NewsLetter';
import assets from '@/public/assets.js';


const EAboutBanner = () => {
    return (
      <div className="relative w-full h-56 bg-gray-900 md:h-72 lg:h-80">
        <Image
          src="/image/about.jpg" 
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-40"
        />
        <div className="flex relative z-20 flex-col justify-center items-center px-4 h-full text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">About Us</h1>
          <div className="mt-4 text-sm md:text-base">
            <Link href="/e-home" className='text-green-500 transition-colors hover:text-green-400'>
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    );
};

const EProjects = () => {
    const [isHovered, setIsHovered] = useState(false);
    const projectsData = [
        { image: "/image/swiper1.jpg", number: "01", title: "Modern Kitchen Designs" },
        { image: "/image/swiper2.jpg", number: "02", title: "Living Room Makeovers" },
        { image: "/image/swiper3.jpg", number: "03", title: "Cozy Bedroom Setups" },
        { image: "/image/swiper4.jpg", number: "04", title: "Elegant Office Spaces" },
        { image: "/image/swiper5.jpg", number: "05", title: "Outdoor Patio Furnishing" },
        { image: "/image/swiper6.jpg", number: "06", title: "Smart Home Integration" },
    ];
  
    return (
      <section className="py-16 bg-white sm:py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col justify-between mx-auto mb-10 max-w-6xl md:flex-row md:items-center">
            <div className="md:w-2/3">
                <div className="flex items-center mb-2">
                    <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Our Work</p>
                </div>
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                Explore Our Recent <span className="text-green-700">Interior Design</span> Projects
              </h2>
            </div>
            <p className="mt-4 text-gray-500 md:w-1/3 md:mt-0 md:pl-8">
                Discover a collection of our finest work, showcasing unique designs and beautiful craftsmanship that bring our clients&apos; visions to life.
            </p>
          </div>
  
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
              breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              className="!pb-4"
            >
              {projectsData.map((project) => (
                <SwiperSlide key={project.number} className="group/slide">
                  <div className="relative h-[450px] w-full overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover/slide:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/70"></div>
                    <div className="flex absolute inset-0 flex-col justify-end p-6 text-white">
                      <p className="mb-2 text-5xl font-thin text-white text-opacity-60">{project.number}</p>
                      <h3 className="text-2xl font-semibold">{project.title}</h3>
                    </div>
                    <div className="absolute right-6 bottom-6 p-3 text-white rounded-full opacity-0 transition-all duration-300 scale-90 cursor-pointer bg-green-700/80 group-hover/slide:opacity-100 group-hover/slide:scale-100 hover:bg-green-600">
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            <div className={`absolute left-4 top-1/2 z-10 p-3 rounded-full shadow-lg -translate-y-1/2 cursor-pointer swiper-button-prev-custom bg-white/90 backdrop-blur-sm transition-opacity duration-300 hover:bg-white ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </div>
            <div className={`absolute right-4 top-1/2 z-10 p-3 rounded-full shadow-lg -translate-y-1/2 cursor-pointer swiper-button-next-custom bg-white/90 backdrop-blur-sm transition-opacity duration-300 hover:bg-white ${isHovered ? "opacity-100" : "opacity-0"}`}>
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        </div>
      </section>
    );
};

const ETeam = () => {
    const teamMembers = [
        { name: 'Sarah Johnson', role: 'Lead Designer', image: assets.t1 },
        { name: 'Michael Chen', role: 'Architect', image: assets.t2 },
        { name: 'Emily White', role: 'Project Coordinator', image: assets.t3 },
        { name: 'David Green', role: 'Craftsman', image: assets.t4 },
    ];

    return (
        <section className="bg-[#f8f9fa] py-16 sm:py-20">
            <div className="container px-4 mx-auto">
                <div className="mb-12 text-center">
                    <div className="flex justify-center items-center mb-4">
                        <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                        <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Our Professionals</p>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Meet Our <span className="text-green-700">Expert Team</span></h2>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="p-6 text-center bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                            <div className="inline-block relative mb-4 w-32 h-32">
                                <div className="absolute w-full h-full bg-green-100 rounded-full transition-transform duration-300 transform group-hover:scale-105"></div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={120}
                                    height={120}
                                    className="object-cover absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EBlog = () => {
    const blogPosts = [
        { image: assets.gallery8, category: "Design Trends", date: "May 25, 2024", title: "The Rise of Biophilic Design in Modern Homes", link: "/blog/post-1" },
        { image: assets.swiper2, category: "DIY Projects", date: "May 28, 2024", title: "How to Create a Stunning Accent Wall", link: "/blog/post-2" },
        { image: assets.gallery7, category: "Smart Home", date: "May 31, 2024", title: "Integrating Technology for a Seamless Living Experience", link: "/blog/post-3" },
    ];
  
    return (
      <section className="py-16 bg-white sm:py-20">
        <div className="container px-4 mx-auto">
            <div className="mb-12 text-center">
                <div className="flex justify-center items-center mb-4">
                    <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">From Our Blog</p>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                    Latest News & <span className="text-green-700">Articles</span>
                </h2>
            </div>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="overflow-hidden bg-white rounded-lg shadow-sm transition-shadow duration-300 group hover:shadow-xl">
                <Link href={post.link} className="block overflow-hidden h-60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-xs text-gray-500">
                    <span className="font-semibold tracking-wider text-green-700 uppercase">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h4 className="mb-2 text-xl font-bold leading-tight text-gray-800 transition-colors group-hover:text-green-700">
                    <Link href={post.link}>{post.title}</Link>
                  </h4>
                  <Link href={post.link} className="text-sm font-semibold text-green-600 transition-colors hover:text-green-800">
                    Read More <ArrowRight className="inline ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};


export default function EAbout() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <EAboutBanner />
      <EProjects />
      <ETeam />
      <EBlog />
      <NewsLetter />
      <EFooter />
    </div>
  );
}
