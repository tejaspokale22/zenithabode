"use client";
import React, { useState, useMemo, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";

const categories = [
  "All",
  "teapoy",
  "cabinet",
  "chair",
  "sofa",
  "cieling_fan",
  "washbasin",
  "table",
  "bathtub",
  "shower_curtain",
  "curtain",
  "lightings",
  "kitchen_storage",
  "bed",
];

const Loader = () => (
  <div className="flex justify-center items-center py-20 min-h-screen">
    <span className="block w-7 h-7 rounded-full border-4 border-green-600 border-solid animate-spin border-t-transparent" />
  </div>
);

const ProductCard = ({ product }) => (
  <div className="flex overflow-hidden flex-col bg-white rounded-2xl border border-gray-100 shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
    <div className="flex relative justify-center items-center p-4 w-full h-48 bg-gray-50">
      <Image
        src={product.image_url}
        alt={product.title}
        fill
        className="object-contain"
        onError={(e) => { e.target.src = '/public/assets/sofa.jpg'; }}
      />
    </div>
    <div className="flex flex-col flex-1 gap-2 px-6 pt-4 pb-5">
      <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-[48px]">
        {product.title}
      </h3>
      <div className="flex items-center mb-3">
        <span className="text-xl font-extrabold text-green-700">
          {product.price}
        </span>
      </div>
      <div className="my-2 border-t border-gray-100"></div>
      <div className="flex gap-2 mt-auto">
        <a
          href={product.product_link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-4 py-2 text-sm font-semibold text-center text-white bg-green-600 rounded-lg shadow transition hover:bg-green-700"
        >
          View Product
        </a>
        <button className="flex-1 px-4 py-2 text-sm font-semibold text-green-700 rounded-lg border-2 border-green-600 shadow transition hover:bg-green-50">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  if (totalPages <= 1) return null;
  const pageNumbers = [];
  const maxNumbers = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);
  if (currentPage <= 3) {
    end = Math.min(totalPages, maxNumbers);
  } else if (currentPage >= totalPages - 2) {
    start = Math.max(1, totalPages - maxNumbers + 1);
  }
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-wrap gap-1 justify-center items-center mt-12">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous"
      >
        <FaArrowLeft />
      </button>
      {start > 1 && (
        <>
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-3 py-2 rounded-full font-semibold ${
              currentPage === 1
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            1
          </button>
          {start > 2 && <span className="px-2">...</span>}
        </>
      )}
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`px-3 py-2 rounded-full font-semibold ${
            currentPage === num
              ? "bg-green-700 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-green-100"
          }`}
        >
          {num}
        </button>
      ))}
      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-2">...</span>}
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-2 rounded-full font-semibold ${
              currentPage === totalPages
                ? "bg-green-700 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-green-100"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="p-2 text-gray-600 bg-gray-100 rounded-full hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const productsPerPage = 20;
  const searchInputRef = useRef();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    fetch("/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        if (!ignore) setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
    return () => { ignore = true; };
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return filtered;
  }, [products, activeCategory, search]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  useEffect(() => { 
    if (category) {
      setActiveCategory(category);
    }
  }, [category]);

  if (loading) return <Loader />;
  if (error)
    return <div className="py-10 text-center text-red-500">{error}</div>;

  return (
    <section className="py-16 min-h-screen bg-gradient-to-b from-gray-50 to-white sm:py-20">
      <div className="px-4 mx-auto max-w-[88rem]">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900">
            Discover Our <span className="text-green-700">Furniture</span>
          </h2>
          <p className="text-lg text-gray-500">
            Browse our exclusive collection of quality furniture for every room
            and style.
          </p>
        </div>
        <div className="flex flex-col gap-4 justify-between items-center mb-8 sm:flex-row">
          <input
            ref={searchInputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="px-4 py-2 w-full text-base rounded-lg border border-gray-200 shadow-sm sm:w-72 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex relative justify-between items-center w-full sm:w-60">
            <span className="mr-2 text-lg font-semibold text-black">Categories:</span>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              onFocus={() => setIsCategoryOpen(true)}
              onBlur={() => setIsCategoryOpen(false)}
              className="px-4 py-2 pr-10 w-full text-base text-black rounded-lg border border-gray-200 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="text-black bg-white"
                >
                  {category.charAt(0).toUpperCase() +
                    category.slice(1).replace("_", " ")}
                </option>
              ))}
            </select>
            <div className="flex absolute inset-y-0 right-0 items-center px-3 text-gray-500 pointer-events-none">
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : 'rotate-0'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <Suspense fallback={<Loader />}>
        <Shop />
      </Suspense>
      <NewsLetter />
      <EFooter />
    </div>
  );
}
