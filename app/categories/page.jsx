"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";

// 13 product categories with images and short descriptions
const categoriesData = [
  {
    title: "Teapoy",
    image: "/categories/teapoy.jpg",
    link: "/shop?category=teapoy",
    description: "Elegant teapoys for your living room.",
  },
  {
    title: "Cabinet",
    image: "/categories/cabinet.jpg",
    link: "/shop?category=cabinet",
    description: "Stylish storage solutions for every space.",
  },
  {
    title: "Chair",
    image: "/categories/chair.jpeg",
    link: "/shop?category=chair",
    description: "Comfortable chairs for work and leisure.",
  },
  {
    title: "Sofa",
    image: "/categories/sofa.jpeg",
    link: "/shop?category=sofa",
    description: "Plush sofas to relax and unwind.",
  },
  {
    title: "Cieling Fan",
    image: "/categories/cieling_fan.jpg",
    link: "/shop?category=cieling_fan",
    description: "Modern fans for a breezy home.",
  },
  {
    title: "Washbasin",
    image: "/categories/washbasin.jpg",
    link: "/shop?category=washbasin",
    description: "Elegant washbasins for your bathroom.",
  },
  {
    title: "Table",
    image: "/categories/table.jpg",
    link: "/shop?category=table",
    description: "Tables for dining, work, and more.",
  },
  {
    title: "Bathtub",
    image: "/categories/bathtub.jpg",
    link: "/shop?category=bathtub",
    description: "Luxurious bathtubs for relaxation.",
  },
  {
    title: "Shower Curtain",
    image: "/categories/shower_curtain.jpeg",
    link: "/shop?category=shower_curtain",
    description: "Trendy shower curtains for style.",
  },
  {
    title: "Curtain",
    image: "/categories/curtain.jpg",
    link: "/shop?category=curtain",
    description: "Beautiful curtains for every room.",
  },
  {
    title: "Lightings",
    image: "/categories/lightings.jpeg",
    link: "/shop?category=lightings",
    description: "Brighten up with our lighting range.",
  },
  {
    title: "Kitchen Storage",
    image: "/categories/kitchen_storage.jpg",
    link: "/shop?category=kitchen_storage",
    description: "Organize your kitchen in style.",
  },
  {
    title: "Bed",
    image: "/categories/bed.webp",
    link: "/shop?category=bed",
    description: "Cozy beds for restful nights.",
  },
];

// Hero Section
const CategoriesHero = () => (
  <section className="overflow-hidden relative py-16 mb-10 bg-gradient-to-br from-green-50 via-white to-yellow-50 sm:py-24">
    <div className="absolute inset-0">
      <Image
        src="/image/gallery13.jpg"
        alt="Categories Hero Background"
        fill
        className="object-cover w-full h-full opacity-30"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-green-100/60" />
    </div>
    <div className="container relative z-10 px-4 mx-auto max-w-4xl text-center">
      <h1 className="mb-4 text-4xl font-extrabold text-gray-900 drop-shadow-lg sm:text-5xl">
        Discover Our <span className="text-green-700">Categories</span>
      </h1>
      <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700 sm:text-xl">
        Find the perfect piece for every room. Shop from our curated selection
        of furniture and decor, crafted for style and comfort.
      </p>
    </div>
  </section>
);

const CategoryCard = ({ category }) => (
  <Link
    href={category.link}
    className="block h-full rounded-2xl transition-transform group focus:outline-none focus:ring-2 focus:ring-green-600"
  >
    <div className="flex overflow-hidden relative flex-col pb-0 h-full bg-white rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex overflow-hidden relative justify-center items-center p-0 m-0 w-full h-44 rounded-t-2xl sm:h-48">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent rounded-t-2xl pointer-events-none from-black/30" />
      </div>
      <h3 className="mt-6 mb-2 text-xl font-bold text-center text-gray-900 transition-colors sm:text-2xl group-hover:text-green-700">
        {category.title}
      </h3>
      <p className="text-center text-gray-500 text-sm px-4 mb-2 min-h-[40px]">
        {category.description}
      </p>
      <div className="flex flex-1 justify-center items-end">
        <button className="flex gap-2 justify-center items-center px-5 py-2 mb-4 text-base font-semibold text-white bg-gradient-to-r from-green-600 to-green-500 rounded-lg shadow-lg transition hover:from-green-700 hover:to-green-600 group-hover/button:scale-105 group-hover/button:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600">
          Shop Now
          <span className="transition-transform duration-200 group-hover/button:translate-x-1">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  </Link>
);

const Categories = () => {
  return (
    <section className="py-10 bg-gradient-to-b from-white via-green-50 to-yellow-50 sm:py-16">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-10 h-1 bg-yellow-500 rounded-full"></span>
            <p className="text-sm font-semibold tracking-wider text-green-700 uppercase">
              Our Collection
            </p>
            <span className="ml-3 w-10 h-1 bg-yellow-500 rounded-full"></span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Browse By <span className="text-green-700">Category</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 sm:text-lg">
            Explore our wide range of furniture and decor. Find the perfect
            pieces to complete every room in your home.
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

// Simple ErrorBoundary for functional components
function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-red-600">
        <h2 className="mb-2 text-2xl font-bold">Something went wrong.</h2>
        <pre className="overflow-x-auto p-4 max-w-xl text-sm bg-red-100 rounded">
          {error.message}
        </pre>
      </div>
    );
  }
  return (
    <React.Fragment>
      {React.Children.map(children, (child) => {
        try {
          return child;
        } catch (err) {
          setError(err);
          return null;
        }
      })}
    </React.Fragment>
  );
}

export default function CategoriesPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-yellow-50">
        <Offer />
        <EHeader />
        <CategoriesHero />
        <Categories />
        <NewsLetter />
        <EFooter />
      </div>
    </ErrorBoundary>
  );
}
