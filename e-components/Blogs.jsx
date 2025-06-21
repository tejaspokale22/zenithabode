'use client';

import React from 'react';
import Image from 'next/image';

const blogPosts = [
  {
    image: '/image/kitchen1.jpg',
    date: '15 April 2024',
    title: "Furniture Trends 2024: What's Hot and What's Not",
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    image: '/image/living.jpg',
    date: '14 April 2024',
    title: 'The Ultimate Guide to Choosing the Perfect Sofa',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    image: '/image/drowing.jpg',
    date: '12 April 2024',
    title: 'Choosing the Right Dining Table for Your Lifestyle',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col justify-between items-start mx-auto mb-12 max-w-6xl md:flex-row md:items-center">
            <div className='mb-6 md:mb-0'>
                <div className="flex items-center mb-4">
                    <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                    News & Blogs
                    </p>
                </div>
                <h2 className="text-4xl font-bold text-gray-800">
                    Our Latest
                </h2>
                <h2 className="text-4xl font-bold text-green-700">
                    News & Blogs
                </h2>
            </div>
            <button className="px-6 py-3 font-semibold text-white bg-green-700 rounded-full transition-colors hover:bg-green-800">
                View All Blogs
            </button>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mx-auto max-w-6xl md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="overflow-hidden bg-white rounded-lg group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-full">
                        {post.date}
                    </div>
                </div>
              </div>
              <div className="p-6 text-left">
                <h3 className="mb-2 text-xl font-bold text-gray-800">{post.title}</h3>
                <p className="mb-4 text-gray-500">{post.excerpt}</p>
                <a href="#" className="font-semibold text-green-700 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
