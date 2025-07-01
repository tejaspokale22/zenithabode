"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";

// 13 product categories with images
const categoriesData = [
  {
    title: "Teapoy",
    image: "/categories/teapoy.jpg",
    link: "/shop?category=teapoy",
  },
  {
    title: "Cabinet",
    image: "/categories/cabinet.jpg",
    link: "/shop?category=cabinet",
  },
  {
    title: "Chair",
    image: "/categories/chair.jpeg",
    link: "/shop?category=chair",
  },
  {
    title: "Sofa",
    image: "/categories/sofa.jpeg",
    link: "/shop?category=sofa",
  },
  {
    title: "Cieling Fan",
    image: "/categories/cieling_fan.jpg",
    link: "/shop?category=cieling_fan",
  },
  {
    title: "Washbasin",
    image: "/categories/washbasin.jpg",
    link: "/shop?category=washbasin",
  },
  {
    title: "Table",
    image: "/categories/table.jpg",
    link: "/shop?category=table",
  },
  {
    title: "Bathtub",
    image: "/categories/bathtub.jpg",
    link: "/shop?category=bathtub",
  },
  {
    title: "Shower Curtain",
    image: "/categories/shower_curtain.jpeg",
    link: "/shop?category=shower_curtain",
  },
  {
    title: "Curtain",
    image: "/categories/curtain.jpg",
    link: "/shop?category=curtain",
  },
  {
    title: "Lightings",
    image: "/categories/lightings.jpeg",
    link: "/shop?category=lightings",
  },
  {
    title: "Kitchen Storage",
    image: "/categories/kitchen_storage.jpg",
    link: "/shop?category=kitchen_storage",
  },
  { title: "Bed", image: "/categories/bed.webp", link: "/shop?category=bed" },
];

const CategoryCard = ({ category }) => (
  <Link href={category.link} className="block h-full group">
    <div className="flex flex-col pb-0 h-full bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex overflow-hidden relative justify-center items-center p-0 m-0 w-full h-44 rounded-t-2xl sm:h-48">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>
      <h3 className="mt-6 mb-4 text-xl font-bold text-center text-gray-900 sm:text-2xl">
        {category.title}
      </h3>
      <div className="flex justify-center items-end">
        <button className="flex gap-2 justify-center items-center px-4 py-2 mb-4 text-base font-semibold text-white bg-green-600 rounded-lg shadow transition hover:bg-green-700 group/button">
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
    <section className="py-16 bg-white sm:py-20">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-8 h-px bg-yellow-500"></span>
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Our Collection
            </p>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Browse By <span className="text-green-700">Category</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
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
      <div className="min-h-screen bg-white">
        <Offer />
        <EHeader />
        <Categories />
        <NewsLetter />
        <EFooter />
      </div>
    </ErrorBoundary>
  );
}
