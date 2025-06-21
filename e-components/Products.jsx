'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaHeart, FaExchangeAlt, FaShoppingCart } from 'react-icons/fa';

const products = [
    {
      id: 1,
      tag: 'latest',
      discount: '50% off',
      image: '/image/swiper1.jpg',
      category: 'Chair',
      name: 'Wooden Sofa Chair',
      rating: 4.9,
      price: 80.00,
      oldPrice: 160.00,
    },
    {
      id: 2,
      tag: 'latest',
      discount: '10% off',
      image: '/image/swiper2.jpg',
      category: 'Chair',
      name: 'Circular Sofa Chair',
      rating: 5.0,
      price: 108.00,
      oldPrice: 120.00,
    },
    {
      id: 3,
      tag: 'latest',
      discount: '10% off',
      image: '/image/swiper3.jpg',
      category: 'Nightstand',
      name: 'Wooden Nightstand',
      rating: 4.8,
      price: 54.00,
      oldPrice: 60.00,
    },
    {
        id: 4,
        tag: 'latest',
        discount: '10% off',
        image: '/image/swiper4.jpg',
        category: 'Chair',
        name: 'Bean Bag Chair',
        rating: 4.7,
        price: 72.00,
        oldPrice: 80.00,
      },
      {
        id: 5,
        tag: 'bestseller',
        discount: '15% off',
        image: '/image/swiper5.jpg',
        category: 'Sofa',
        name: 'Modern Gray Sofa',
        rating: 4.9,
        price: 255.00,
        oldPrice: 300.00,
      },
      {
        id: 6,
        tag: 'featured',
        discount: '20% off',
        image: '/image/swiper6.jpg',
        category: 'Table',
        name: 'Minimalist Coffee Table',
        rating: 4.8,
        price: 120.00,
        oldPrice: 150.00,
      }
  ];
  
  const categories = ['All Products', 'Latest Products', 'Best Sellers', 'Featured Products'];

const ProductCard = ({ product }) => (
    <div className="p-4 text-left rounded-2xl bg-gray-50/70 group sm:p-6">
        <div className="relative mb-4">
            <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full">{product.discount}</div>
            <div className="flex absolute top-3 right-3 z-10 flex-col space-y-2 opacity-0 transition-opacity group-hover:opacity-100">
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-red-500"><FaHeart /></button>
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-green-700"><FaExchangeAlt /></button>
                <button className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-blue-500"><FaShoppingCart /></button>
            </div>
            <div className="overflow-hidden relative rounded-xl aspect-square">
                <Image src={product.image} alt={product.name} layout="fill" className="object-cover" />
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

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All Products');
    
    const getFilteredProducts = () => {
        switch (activeCategory) {
            case 'All Products':
                return products;
            case 'Latest Products':
                return products.filter(p => p.tag === 'latest');
            case 'Best Sellers':
                return products.filter(p => p.tag === 'bestseller');
            case 'Featured Products':
                return products.filter(p => p.tag === 'featured');
            default:
                return products;
        }
    };

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto max-w-7xl text-center">
        <div className="mb-12">
            <div className="flex justify-center items-center mb-2">
                <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Our Products</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">Our Products <span className="text-green-700">Collections</span></h2>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 md:gap-4 md:mb-12">
            {categories.map(category => (
                <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-sm rounded-full font-semibold transition-colors md:px-6 md:py-3 md:text-base ${activeCategory === category ? 'bg-green-700 text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                    {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {getFilteredProducts().map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
