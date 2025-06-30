'use client';
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaHeart, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

import EHeader from '@/e-components/Header';
import EFooter from '@/e-components/Footer';
import Offer from '@/e-components/Offer';
import NewsLetter from '@/e-components/NewsLetter';

const ShopBanner = () => {
    return (
        <div className="relative w-full h-56 bg-gray-900 md:h-72 lg:h-80">
            <Image
                src="/image/gallerys6.jpg"
                alt="Shop Banner"
                layout="fill"
                objectFit="cover"
                className="object-cover absolute inset-0 z-0 w-full h-full opacity-40"
            />
            <div className="flex relative z-10 flex-col justify-center items-center px-4 h-full text-center text-white">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Our Shop</h1>
                <div className="mt-4 text-sm md:text-base">
                    <Link href="/e-home" className='text-green-500 transition-colors hover:text-green-400'>
                        Home
                    </Link>
                    <span className="mx-2">&gt;</span>
                    <span>Shop</span>
                </div>
            </div>
        </div>
    );
};

const allProducts = [
    { id: 1, tag: 'latest', discount: '50% off', image: '/image/swiper1.jpg', category: 'Chair', name: 'Wooden Sofa Chair', rating: 4.9, price: 80.00, oldPrice: 160.00 },
    { id: 2, tag: 'latest', discount: '10% off', image: '/image/swiper2.jpg', category: 'Chair', name: 'Circular Sofa Chair', rating: 5.0, price: 108.00, oldPrice: 120.00 },
    { id: 3, tag: 'latest', discount: '10% off', image: '/image/swiper3.jpg', category: 'Nightstand', name: 'Wooden Nightstand', rating: 4.8, price: 54.00, oldPrice: 60.00 },
    { id: 4, tag: 'featured', discount: '10% off', image: '/image/swiper4.jpg', category: 'Chair', name: 'Bean Bag Chair', rating: 4.7, price: 72.00, oldPrice: 80.00 },
    { id: 5, tag: 'bestseller', discount: '15% off', image: '/image/swiper5.jpg', category: 'Sofa', name: 'Modern Gray Sofa', rating: 4.9, price: 255.00, oldPrice: 300.00 },
    { id: 6, tag: 'featured', discount: '20% off', image: '/image/swiper6.jpg', category: 'Table', name: 'Minimalist Coffee Table', rating: 4.8, price: 120.00, oldPrice: 150.00 },
    { id: 7, tag: 'bestseller', discount: '25% off', image: '/image/kitchen.png', category: 'Table', name: 'Modern Dining Table', rating: 4.9, price: 450.00, oldPrice: 600.00 },
    { id: 8, tag: 'latest', discount: '10% off', image: '/image/living.jpg', category: 'Sofa', name: 'Plush Velvet Sofa', rating: 4.8, price: 629.00, oldPrice: 700.00 },
    { id: 9, tag: 'featured', discount: '15% off', image: '/image/badroom.jpg', category: 'Bed', name: 'Queen Size Upholstered Bed', rating: 4.7, price: 340.00, oldPrice: 400.00 },
    { id: 10, tag: 'bestseller', discount: '30% off', image: '/image/drowing.jpg', category: 'Decor', name: 'Abstract Wall Art', rating: 4.9, price: 105.00, oldPrice: 150.00 },
    { id: 11, tag: 'latest', discount: '10% off', image: '/image/kitchen1.jpg', category: 'Kitchen', name: 'Marble Kitchen Island', rating: 4.9, price: 810.00, oldPrice: 900.00 },
    { id: 12, tag: 'featured', discount: '20% off', image: '/image/swiper8.jpg', category: 'Lamp', name: 'Industrial Floor Lamp', rating: 4.6, price: 120.00, oldPrice: 150.00 },
];

const categories = ['All Products', 'Latest Products', 'Best Sellers', 'Featured Products'];

const ProductCard = ({ product }) => (
    <div className="p-4 text-left rounded-2xl bg-gray-50/70 group sm:p-5">
        <div className="relative mb-4">
            <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full">{product.discount}</div>
            <div className="flex absolute top-3 right-3 z-10 flex-col space-y-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-red-500"><FaHeart /></button>
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-green-700"><FaExchangeAlt /></button>
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-blue-500"><FaShoppingCart /></button>
            </div>
            <div className="overflow-hidden relative rounded-xl aspect-square">
                <Image src={product.image} alt={product.name} layout="fill" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
        </div>
        <div>
            <div className="flex justify-between items-center mb-1 text-base">
                <p className="text-gray-500">{product.category}</p>
                <div className="flex items-center">
                    <FaStar className="mr-1 text-yellow-400" />
                    <span className="font-semibold text-gray-700">{product.rating}</span>
                </div>
            </div>
            <h3 className="mb-2 text-lg font-bold text-gray-800 md:text-xl">{product.name}</h3>
            <div className="flex items-center space-x-2">
                <p className="text-xl font-bold text-green-700 md:text-2xl">${product.price.toFixed(2)}</p>
                <p className="text-base text-gray-400 line-through">${product.oldPrice.toFixed(2)}</p>
            </div>
        </div>
    </div>
);

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState('All Products');
    const [sortOrder, setSortOrder] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All Products') return allProducts;
        const tagMap = { 'Latest Products': 'latest', 'Best Sellers': 'bestseller', 'Featured Products': 'featured' };
        return allProducts.filter(p => p.tag === tagMap[activeCategory]);
    }, [activeCategory]);

    const sortedProducts = useMemo(() => {
        const sorted = [...filteredProducts];
        switch (sortOrder) {
            case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
            case 'rating-desc': return sorted.sort((a, b) => b.rating - a.rating);
            default: return sorted;
        }
    }, [filteredProducts, sortOrder]);

    const paginatedProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * productsPerPage;
        return sortedProducts.slice(startIndex, startIndex + productsPerPage);
    }, [sortedProducts, currentPage]);

    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    return (
        <section className="py-16 bg-white sm:py-20">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <div className="flex justify-center items-center mb-2">
                        <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                        <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Our Collection</p>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Explore Our <span className="text-green-700">Products</span></h2>
                </div>

                <div className="flex flex-col gap-6 justify-between items-center mb-8 md:flex-row md:mb-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(category => (
                            <button key={category} onClick={() => { setActiveCategory(category); setCurrentPage(1); }}
                                className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors md:px-5 md:py-2.5 md:text-base ${activeCategory === category ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative">
                        <select onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }} value={sortOrder} className="py-2 pr-10 pl-4 text-gray-600 bg-gray-100 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option value="default">Default Sorting</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="rating-desc">By Rating</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 w-5 h-5 text-gray-500 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {paginatedProducts.map(product => <ProductCard key={product.id} product={product} />)}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center mt-12 space-x-2">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="p-3 bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100"><ChevronLeft size={20}/></button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`px-4 py-2 rounded-full text-sm font-semibold ${currentPage === i + 1 ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}`}>{i + 1}</button>
                        ))}
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="p-3 bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100"><ChevronRight size={20}/></button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-white">
            <Offer />
            <EHeader />
            <ShopBanner />
            <Shop />
            <NewsLetter />
            <EFooter />
        </div>
    );
}
