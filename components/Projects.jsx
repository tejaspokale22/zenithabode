"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const projectsData = [
  {
    image: "/image/swiper1.jpg",
    number: "01",
    title: "Transforming Rooms",
  },
  {
    image: "/image/swiper2.jpg",
    number: "02",
    title: "Initial computer Designs",
  },
  {
    image: "/image/swiper3.jpg",
    number: "03",
    title: "Depth Design process",
  },
  {
    image: "/image/swiper4.jpg",
    number: "04",
    title: "Assembly Home",
  },
  {
    image: "/image/swiper5.jpg",
    number: "05",
    title: "Modern Furniture",
  },
  {
    image: "/image/swiper6.jpg",
    number: "06",
    title: "Smart Home Setup",
  },
  {
    image: "/image/swiper7.jpg",
    number: "07",
    title: "Lighting Solutions",
  },
  {
    image: "/image/swiper8.jpg",
    number: "08",
    title: "Outdoor Spaces",
  },
];

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-8 bg-white md:py-14">
      <div className="mx-auto">
        <div className="flex flex-col justify-between mx-auto mb-8 max-w-5xl md:flex-row md:items-end md:mb-12 px-2 xs:px-4">
          <div className="w-full md:w-2/3">
            <p className="text-xs tracking-widest text-[#bfa46f] font-semibold mb-2">
              OUR PROJECTS
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Check What We Offer For <br /> Your Home
            </h2>
          </div>
          <div className="mt-4 w-full md:w-1/3 md:mt-0">
            <p className="text-gray-500 text-sm xs:text-base">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
        </div>

        <div
          className="relative group px-1 xs:px-2 sm:px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="!pb-4"
          >
            {projectsData.map((project, index) => (
              <SwiperSlide key={index} className="group/slide">
                <div className="relative h-[260px] xs:h-[340px] sm:h-[420px] md:h-[550px] lg:h-[600px] w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="flex absolute inset-0 flex-col justify-end p-3 xs:p-4 sm:p-6 md:p-8 text-white">
                    <p className="mb-1 xs:mb-2 text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-thin text-white text-opacity-50">
                      {project.number}
                    </p>
                    <h3 className="w-5/6 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute right-4 bottom-4 text-white md:bottom-8 md:right-8 lg:bottom-12 lg:right-12">
                    <ArrowRight className="transition-transform duration-300 cursor-pointer hover:-rotate-45" size={24} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div
            className={`absolute left-2 xs:left-4 top-1/2 z-10 p-2 xs:p-3 rounded-full shadow-lg -translate-y-1/2 cursor-pointer swiper-button-prev-custom bg-white/80 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeft className="text-gray-800 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </div>
          <div
            className={`absolute right-2 xs:right-4 top-1/2 z-10 p-2 xs:p-3 rounded-full shadow-lg -translate-y-1/2 cursor-pointer swiper-button-next-custom bg-white/80 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRight className="text-gray-800 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
