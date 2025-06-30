'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Truck, Wallet, Headphones, ArrowRight } from 'lucide-react';

import EHeader from '@/e-components/Header';
import EFooter from '@/e-components/Footer';
import Offer from '@/e-components/Offer';
import NewsLetter from '@/e-components/NewsLetter';

const CategoriesBanner = () => {
    return (
        <div className="relative w-full h-56 bg-gray-900 md:h-72 lg:h-80">
            <Image
                src="/image/backgroundproject.jpg"
                alt="Categories Banner"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-40"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
                <p className="text-sm font-semibold tracking-widest text-green-400 uppercase">Our Collections</p>
                <h1 className="mt-2 text-4xl font-bold md:text-5xl lg:text-6xl">Product Categories</h1>
                <div className="mt-6 text-sm md:text-base">
                    <Link href="/e-home" className='text-green-500 transition-colors hover:text-green-400'>
                        Home
                    </Link>
                    <span className="mx-2 text-gray-400">&gt;</span>
                    <span className="text-gray-200">Categories</span>
                </div>
            </div>
        </div>
    );
};

const ServiceBar = () => (
    <div className="bg-gray-50 border-b border-gray-200">
        <div className="container grid grid-cols-1 gap-8 px-4 py-8 mx-auto text-center sm:grid-cols-3">
            <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                    <div className='flex-shrink-0 p-3 bg-green-100 rounded-full'>
                        <Truck className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-left text-gray-900">Free Shipping</p>
                        <p className="mt-1 text-sm text-gray-500">For orders above $180</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                    <div className='flex-shrink-0 p-3 bg-green-100 rounded-full'>
                        <Wallet className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-left text-gray-900">Flexible Payment</p>
                        <p className="mt-1 text-sm text-gray-500">Multiple secure options</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex items-center space-x-4">
                    <div className='flex-shrink-0 p-3 bg-green-100 rounded-full'>
                        <Headphones className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-left text-gray-900">24/7 Support</p>
                        <p className="mt-1 text-sm text-gray-500">Online support all day</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const categoriesData = [
    { title: 'Chairs', items: '1500+ Items', image: '/assets/chair.webp', link: '/shop' },
    { title: 'Sofas', items: '750+ Items', image: '/assets/sofa.jpg', link: '/shop' },
    { title: 'Tables', items: '500+ Items', image: '/image/swiper6.jpg', link: '/shop' },
    { title: 'Beds', items: '300+ Items', image: '/image/badroom.jpg', link: '/shop' },
    { title: 'Lighting', items: '450+ Items', image: '/assets/lighting.jpeg', link: '/shop' },
    { title: 'Storage', items: '600+ Items', image: '/image/swiper3.jpg', link: '/shop' },
    { title: 'Kitchen', items: '250+ Items', image: '/image/kitchen1.jpg', link: '/shop' },
    { title: 'Decor', items: '1200+ Items', image: '/image/drowing.jpg', link: '/shop' },
];

const CategoryCard = ({ category }) => (
    <Link href={category.link} className="block group">
        <div className="p-6 space-y-4 overflow-hidden bg-white border border-gray-200 rounded-2xl h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-green-300 hover:-translate-y-1">
            <div className="relative w-full h-48">
                <Image src={category.image} alt={category.title} layout="fill" className="object-contain transition-transform duration-300 ease-in-out" />
            </div>
            <div className="pt-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.items}</p>
                <div className="inline-flex items-center mt-4 text-sm font-semibold text-green-700 transition-colors duration-300 group-hover:text-green-600">
                    Shop Now <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    </Link>
);


const Categories = () => {
    return (
        <section className="py-16 bg-white sm:py-20">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <span className="w-8 h-px mr-3 bg-yellow-500"></span>
                        <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Our Collection</p>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Browse By <span className="text-green-700">Category</span></h2>
                    <p className="max-w-2xl mx-auto mt-4 text-gray-500">
                        Explore our wide range of furniture and decor. Find the perfect pieces to complete every room in your home.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {categoriesData.map((category) => (
                        <CategoryCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function CategoriesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Offer />
            <EHeader />
            <CategoriesBanner />
            <ServiceBar />
            <Categories />
            <NewsLetter />
            <EFooter />
        </div>
    );
}
