"use client";
import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";
import React, {
  useState,
  useMemo,
  useEffect,
  useRef,
  useCallback,
  Suspense,
} from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
  FaSearch,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";
import { useSearchParams, useRouter } from "next/navigation";
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

const HeroBanner = () => (
  <div className="flex overflow-hidden relative justify-center items-center mb-4 w-full h-40 bg-gradient-to-r from-green-50 to-green-100 rounded-b-xl shadow-lg xs:h-48 sm:h-64 md:h-80 xs:mb-6 sm:mb-8 xs:rounded-b-2xl sm:rounded-b-3xl">
    <Image
      src="/image/gallery2.jpg"
      alt="Shop Hero"
      fill
      className="object-cover opacity-60"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-700/30" />
    <div className="relative z-10 px-2 text-center xs:px-3 sm:px-4">
      <h1 className="mb-2 text-lg font-extrabold text-white drop-shadow-lg xs:text-2xl sm:text-4xl md:text-5xl sm:mb-3">
        Discover Premium <span className="text-green-400">Furniture</span>
      </h1>
      <p className="mb-4 text-xs font-medium text-green-100 xs:text-sm sm:text-lg xs:mb-5 sm:mb-6">
        Elevate your space with our exclusive, handpicked collection.
      </p>
      <a
        href="#shop-section"
        className="inline-block px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition text-xs xs:text-sm sm:text-base"
      >
        Shop Now
      </a>
    </div>
  </div>
);

const ProductCard = ({ product, index }) => {
  const [imgSrc, setImgSrc] = useState(product.image_url);
  const [amount, savingsText] = product.price.split("with");
  const router = useRouter();

  return (
    <div
      className={
        "flex overflow-hidden relative flex-col bg-white rounded-2xl border border-gray-100 shadow-md group hover:shadow-2xl min-h-[420px] sm:min-h-[440px]"
      }
    >
      <div className="flex relative justify-center items-center p-3 sm:p-4 w-full h-56 sm:h-[300px] bg-gray-50">
        {/* Discount Badge (only for indices divisible by 3) */}
        {index % 3 === 0 && (
          <span className="absolute top-2 left-2 z-10 px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-full shadow-lg sm:top-3 sm:left-3 sm:px-3">
            15% OFF
          </span>
        )}
        <Image
          src={imgSrc}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-300"
          onError={() => setImgSrc("/assets/sofa.jpg")}
        />
      </div>
      <div className="flex flex-col flex-1 gap-2 px-3 pt-3 pb-4 bg-gradient-to-b from-white to-green-50 sm:px-6 sm:pt-4 sm:pb-5">
        {/* Category and Rating */}
        <div className="flex justify-between items-center mb-1">
          <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
            {product.category
              ? product.category.charAt(0).toUpperCase() +
                product.category.slice(1).replace("_", " ")
              : ""}
          </span>
          <span className="flex gap-1 items-center text-base font-bold text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(product.rating || 4.8) ? "" : "text-gray-300"
                }
              />
            ))}
            <span className="ml-1 text-xs font-normal text-gray-500">
              ({product.reviews || 32})
            </span>
          </span>
        </div>
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
          {product.title}
        </h3>
        {/* price */}
        <div className="mb-2 sm:mb-3">
          <div className="text-lg font-bold text-green-700 sm:text-xl">
            {amount.trim()}
          </div>
          <div className="text-xs text-gray-500 sm:text-sm">
            with {savingsText?.trim()}
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-between mt-auto sm:flex-row">
          <button
            onClick={() => {
              const params = new URLSearchParams(window.location.search);
              params.set("product", product.product_id);
              // preserve category and page params if present
              router.push(`${window.location.pathname}?${params.toString()}`, {
                scroll: false,
              });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex justify-center items-center px-3 py-2 text-xs font-normal text-center text-white bg-green-600 rounded-lg shadow transition sm:px-4 sm:text-sm hover:bg-green-700"
          >
            View Product
          </button>
          <button className="flex gap-2 justify-center items-center px-3 py-2 text-xs font-normal text-green-700 rounded-lg border-2 border-green-600 shadow transition sm:px-4 sm:text-sm hover:bg-green-50">
            <FaShoppingCart className="text-lg sm:text-xl" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

function Pagination({ totalPages, currentPage, setCurrentPage }) {
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
    <div className="flex flex-wrap gap-2 justify-center items-center mt-12">
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="p-3 text-gray-600 bg-white rounded-full border border-gray-200 shadow hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous Page"
      >
        <FaArrowLeft />
      </button>
      {start > 1 && (
        <>
          <button
            onClick={() => setCurrentPage(1)}
            className={`px-4 py-2 rounded-full font-semibold transition shadow ${
              currentPage === 1
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 hover:bg-green-100 border border-gray-200"
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
          className={`px-4 py-2 rounded-full font-semibold transition shadow ${
            currentPage === num
              ? "bg-green-700 text-white"
              : "bg-white text-gray-700 hover:bg-green-100 border border-gray-200"
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
            className={`px-4 py-2 rounded-full font-semibold transition shadow ${
              currentPage === totalPages
                ? "bg-green-700 text-white"
                : "bg-white text-gray-700 hover:bg-green-100 border border-gray-200"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="p-3 text-gray-600 bg-white rounded-full border border-gray-200 shadow hover:bg-green-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next Page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

const ProductDetail = ({ product, similarProducts, onBack }) => (
  <div className="flex flex-col gap-6 py-4 w-full bg-white xs:gap-8 xs:py-6 sm:py-8 lg:flex-row lg:gap-8">
    {/* Product Image */}
    <div className="flex-1 flex flex-col items-center justify-start min-w-[0] max-w-full xs:min-w-[220px] xs:max-w-md sm:min-w-[320px] sm:max-w-lg px-2 xs:px-4 lg:sticky lg:top-24">
      <button
        onClick={onBack}
        className="flex gap-1 items-center self-start px-2 py-1 mb-3 text-xs text-gray-600 rounded-full shadow-none transition xs:mb-4 hover:underline"
        style={{ fontSize: "0.85rem", background: "none" }}
      >
        <FaArrowLeft style={{ fontSize: "0.9em" }} /> Back to Products
      </button>
      <div className="overflow-hidden relative mb-3 w-full h-56 bg-gray-50 rounded-xl xs:mb-4 xs:h-72 sm:h-96">
        <Image
          src={product.image_url}
          alt={product.title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
    {/* Product Info & Actions */}
    <div className="flex-[2] flex flex-col gap-3 xs:gap-4 px-2 xs:px-4 max-w-full sm:max-w-2xl mx-auto">
      <span className="px-2 py-1 mt-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full xs:mt-2 w-fit">
        {product.category.charAt(0).toUpperCase() +
          product.category.slice(1).replace("_", " ")}
      </span>
      <h1 className="mb-2 text-lg font-extrabold leading-tight text-gray-900 xs:text-xl sm:text-2xl md:text-3xl">
        {product.title}
      </h1>
      <div className="flex gap-2 items-center mb-2 xs:gap-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={
              i < Math.round(product.rating || 4.8)
                ? "text-yellow-500"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-1 text-xs font-normal text-gray-500">
          ({product.reviews || 32} ratings)
        </span>
      </div>
      <div className="flex flex-col gap-1 mb-3 xs:mb-4">
        <span className="text-lg font-bold text-green-700 xs:text-xl sm:text-2xl md:text-3xl">
          {product.price.split("with")[0].trim()}
        </span>
        <span className="text-xs text-gray-500 xs:text-sm sm:text-base">
          with {product.price.split("with")[1]?.trim()}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 mb-4 xs:gap-4 xs:mb-6">
        <button className="flex gap-2 items-center px-4 py-2 text-base font-semibold text-white bg-green-600 rounded-lg shadow transition xs:px-6 xs:py-3 xs:text-lg hover:bg-green-700">
          <FaShoppingCart className="text-lg xs:text-xl" /> Add to Cart
        </button>
      </div>
      <div className="mb-3 xs:mb-4">
        <h2 className="mb-2 text-base font-semibold text-gray-800 xs:text-lg">
          Product Details
        </h2>
        <ul className="grid grid-cols-1 gap-y-2 gap-x-8 text-xs xs:text-sm sm:text-base sm:grid-cols-2">
          {product.specs &&
            Object.entries(product.specs).map(([key, value]) => (
              <li key={key} className="flex gap-2">
                <span className="font-semibold text-gray-700">{key}:</span>
                <span className="text-gray-600">{value}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
    {/* Similar Products */}
    <div className="flex-1 min-w-[180px] xs:min-w-[220px] max-w-xs bg-white border-l border-gray-200 px-2 xs:px-4 pt-2 hidden lg:block">
      <h3 className="mt-2 mb-3 text-lg font-bold text-green-800">
        Similar Products
      </h3>
      <div className="flex flex-col gap-3 xs:gap-4">
        {similarProducts.length === 0 ? (
          <span className="text-sm text-gray-500">
            No similar products found.
          </span>
        ) : (
          similarProducts.slice(0, 6).map((sp) => (
            <div
              key={sp.product_id}
              className="flex gap-3 items-center p-2 bg-gray-50 rounded-lg border border-gray-200 transition cursor-pointer hover:shadow-md"
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                params.set("product", sp.product_id);
                window.history.replaceState(
                  {},
                  "",
                  `${window.location.pathname}?${params.toString()}`
                );
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="overflow-hidden relative w-10 h-10 bg-white rounded-lg border xs:w-14 xs:h-14">
                <Image
                  src={sp.image_url}
                  alt={sp.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <div
                  className="mb-1 text-xs font-bold text-left text-gray-900 outline-none xs:text-sm line-clamp-2"
                  style={{ background: "none", border: "none", padding: 0 }}
                >
                  {sp.title}
                </div>
                <div className="text-xs font-semibold text-green-700 xs:text-sm">
                  {sp.price.split("with")[0].trim()}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);

function ShopClient() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category");
  const [currentPage, setCurrentPageState] = useState(1);
  const [search, setSearch] = useState("");
  const productsPerPage = 20;
  const searchInputRef = useRef();
  const router = useRouter();
  const productId = searchParams.get("product");
  const [hasMounted, setHasMounted] = useState(false);

  const setCurrentPage = useCallback((pageOrFn) => {
    setCurrentPageState((prev) => {
      const newPage =
        typeof pageOrFn === "function" ? pageOrFn(prev) : pageOrFn;
      return newPage;
    });
  }, []);

  useEffect(() => {
    setLoading(true);

    let query = "";
    let cacheKey = "";

    if (
      urlCategory &&
      categories.includes(urlCategory) &&
      urlCategory !== "All"
    ) {
      query = `category=${encodeURIComponent(urlCategory)}`;
      cacheKey = `category_${urlCategory}`;
    } else {
      query = `page=${currentPage}`;
      cacheKey = `page_${currentPage}`;
    }
    const cachedData = localStorage.getItem(cacheKey);
    if (cachedData) {
      try {
        setProducts(JSON.parse(cachedData));
        setLoading(false);
      } catch (e) {
        console.error("Failed to parse cached data", e);
      }
    }

    axios
      .get(`/api/products?${query}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        localStorage.setItem(cacheKey, JSON.stringify(res.data));
      })
      .catch((err) => {
        setError(err.response?.data?.message || err.message || "Unknown error");
        setLoading(false);
      });
  }, [currentPage, urlCategory]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const filteredProducts = useMemo(() => {
    if (search.trim()) {
      return products.filter((p) =>
        p.title.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return products;
  }, [products, search, urlCategory]);

  const paginatedProducts = useMemo(() => {
    return urlCategory
      ? filteredProducts.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        )
      : filteredProducts;
  }, [filteredProducts, currentPage, productsPerPage, urlCategory]);

  const totalPages = urlCategory
    ? Math.ceil(filteredProducts.length / productsPerPage)
    : 29;

  // Find selected product and similar products
  const selectedProduct = productId
    ? products.find((p) => p.product_id === productId)
    : null;
  const similarProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return products.filter(
      (p) =>
        p.category === selectedProduct.category &&
        p.product_id !== selectedProduct.product_id
    );
  }, [selectedProduct, products]);

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-white">
        <Offer />
        <EHeader />
        {!hasMounted || loading ? (
          <Loader />
        ) : (
          <section className="py-4 min-h-screen bg-gradient-to-b from-gray-50 to-white sm:py-6">
            <div className="mx-auto">
              <ProductDetail
                product={selectedProduct}
                similarProducts={similarProducts}
                onBack={() => {
                  const params = new URLSearchParams(window.location.search);
                  params.delete("product");
                  window.history.replaceState(
                    {},
                    "",
                    `${window.location.pathname}?${params.toString()}`
                  );
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </section>
        )}
        <NewsLetter />
        <EFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      {hasMounted && !productId && <HeroBanner />}
      {loading || !hasMounted ? (
        <Loader />
      ) : (
        <section
          id="shop-section"
          className="py-4 min-h-screen bg-gradient-to-b from-gray-50 to-white sm:py-6"
        >
          <div className="px-2 sm:px-4 mx-auto max-w-[88rem]">
            <div className="flex sticky top-0 z-20 flex-col gap-4 justify-between items-center py-4 mb-8 backdrop-blur-md sm:flex-row">
              <div className="relative w-full sm:w-72">
                <span className="absolute left-3 top-1/2 text-gray-400 -translate-y-1/2">
                  <FaSearch />
                </span>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="py-2 pr-4 pl-10 w-full text-sm rounded-lg border border-gray-200 shadow-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex relative justify-between items-center w-full sm:w-80">
                <span className="mr-2 text-base font-semibold text-black sm:text-lg">
                  Categories:
                </span>
                <div className="relative w-full">
                  <select
                    value={urlCategory ? urlCategory : "All"}
                    onChange={(e) => {
                      if (e.target.value === "All") {
                        router.push("/shop", { scroll: false });
                      } else {
                        router.push(
                          `/shop?category=${encodeURIComponent(
                            e.target.value
                          )}`,
                          { scroll: false }
                        );
                      }
                    }}
                    className="px-4 py-2 pr-10 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-md appearance-none sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                  <span className="absolute right-3 top-1/2 text-gray-400 -translate-y-1/2 pointer-events-none">
                    <FaChevronDown />
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {paginatedProducts.length === 0 ? (
                <div className="col-span-full py-10 text-center text-gray-500">
                  No products found.
                </div>
              ) : (
                paginatedProducts.map((product, idx) => (
                  <ProductCard
                    key={product.product_id}
                    product={product}
                    index={idx}
                  />
                ))
              )}
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={(page) => {
                setCurrentPage(page);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </section>
      )}
      <NewsLetter />
      <EFooter />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <ShopClient />
    </Suspense>
  );
}
