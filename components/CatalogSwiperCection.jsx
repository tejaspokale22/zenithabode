"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function CatalogSwiperSection() {

    return (
        <div className="px-4 py-8 mx-auto max-w-7xl lg:py-14 sm:px-6 lg:px-8">
            <div className="grid gap-8 pb-8 md:grid-cols-2 md:gap-12">
                <div className="text-left">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">Modern Classic</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider md:text-2xl">LUXURY DECOR TO CREATE COMFORT IN OUR HOME</h2>
                    <div className="grid grid-cols-1 gap-8 text-gray-500 sm:grid-cols-2">
                        <div>
                            <p>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p>
                                We create distinctive and unique designs that are inspired by the latest trends in interior design and fashion.
                            </p>
                            <a href="" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                <SwiperSlide>
                    <Image src="/image/swiper1.jpg" alt="LOGO" width={520} height={220} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper2.jpg" alt="LOGO" width={520} height={220} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper3.jpg" alt="LOGO" width={520} height={220} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper4.jpg" alt="LOGO" width={520} height={220} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image/swiper5.jpg" alt="LOGO" width={520} height={220} className="w-full h-[220px] sm:h-[280px] lg:h-[320px] object-cover" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}