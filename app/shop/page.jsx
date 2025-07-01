"use client";
import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  Suspense,
  useCallback,
} from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";
import { FaHeart, FaExchangeAlt, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

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

const ProductCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.image_url);
  return (
    <div className="flex overflow-hidden relative flex-col bg-gray-100 rounded-2xl border border-gray-100 group">
      <div className="flex relative justify-center items-center p-4 w-full h-[300px] bg-gray-100">
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold text-white bg-green-700 rounded-full shadow">
          15% off
        </span>
        {/* Action Icons */}
        <div className="flex absolute top-3 right-3 z-10 flex-col space-y-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-red-500"
            aria-label="Add to Wishlist"
          >
            <FaHeart />
          </button>
          <button
            className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-green-700"
            aria-label="Compare"
          >
            <FaExchangeAlt />
          </button>
          <button
            className="p-2 text-gray-600 bg-white rounded-full shadow hover:text-blue-500"
            aria-label="Add to Cart"
          >
            <FaShoppingCart />
          </button>
        </div>
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          className="object-cover"
          onError={() => setImgSrc("/assets/sofa.jpg")}
        />
      </div>
      <div className="flex flex-col flex-1 gap-2 px-6 pt-4 pb-5">
        {/* Category and Rating */}
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold text-gray-400">
            {product.category
              ? product.category.charAt(0).toUpperCase() +
                product.category.slice(1).replace("_", " ")
              : ""}
          </span>
          <span className="flex gap-1 items-center text-base font-bold text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
            {product.rating || "4.8"}
          </span>
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-[48px]">
          {product.title}
        </h3>
        {/* Price */}
        <div className="flex gap-2 items-end mb-3">
          <span className="text-lg font-normal text-gray-700">
            {product.discounted_price || product.price}
          </span>
          {product.discounted_price && (
            <span className="text-sm font-semibold text-gray-400 line-through">
              {product.price}
            </span>
          )}
        </div>
        <div className="flex gap-2 justify-between mt-auto">
          <Link
            href={""}
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 text-sm font-normal text-center text-white bg-green-600 rounded-lg shadow transition hover:bg-green-700"
          >
            View Product
          </Link>
          <button className="flex gap-2 justify-center items-center px-4 py-2 text-sm font-normal text-green-700 rounded-lg border-2 border-green-600 shadow transition hover:bg-green-50">
            <FaShoppingCart className="text-xl" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  // if (totalPages <= 1) return null;
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
        aria-label="Previous Page"
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
        aria-label="Next Page"
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
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPageState] = useState(1);
  const [search, setSearch] = useState("");
  const productsPerPage = 20;
  const searchInputRef = useRef();

  // Memoize setCurrentPage to avoid unnecessary re-renders
  const setCurrentPage = useCallback((pageOrFn) => {
    setCurrentPageState(pageOrFn);
  }, []);

  useEffect(() => {
    if (urlCategory && categories.includes(urlCategory)) {
      setActiveCategory(urlCategory);
    }
    // eslint-disable-next-line
  }, [urlCategory]);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    const params = new URLSearchParams();
    if (activeCategory !== "All") {
      params.append("category", activeCategory);
    } else {
      params.append("page", currentPage);
    }
    axios
      .get(`/api/products?${params.toString()}`)
      .then((res) => {
        if (!ignore) {
          setProducts(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message || "Unknown error");
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [activeCategory, currentPage]);

  const filteredProducts = useMemo(() => {
    if (search.trim()) {
      return products.filter((p) =>
        p.title.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return products;
  }, [products, search]);

  // Memoize paginatedProducts
  const paginatedProducts = useMemo(() => {
    return activeCategory === "All"
      ? filteredProducts
      : filteredProducts.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        );
  }, [filteredProducts, activeCategory, currentPage, productsPerPage]);

  const totalPages =
    activeCategory === "All"
      ? 29
      : Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  if (loading) return <Loader />;
  if (error)
    return <div className="py-10 text-center text-red-500">{error}</div>;

  return (
    <section className="py-24 min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
            <span className="mr-2 text-lg font-semibold text-black">
              Categories:
            </span>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
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
                className="w-4 h-4 transition-transform duration-200"
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
          {paginatedProducts.length === 0 ? (
            <div className="col-span-full py-10 text-center text-gray-500">
              No products found.
            </div>
          ) : (
            paginatedProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))
          )}
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
