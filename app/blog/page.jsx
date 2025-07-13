"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";

const BlogBanner = () => (
  <div className="relative w-full h-48 bg-gray-900 md:h-52 lg:h-60">
    <Image
      src="/image/gallery3.jpg"
      alt="Blog Banner"
      layout="fill"
      objectFit="cover"
      className="absolute inset-0 z-0 opacity-40"
    />
    <div className="flex relative z-10 flex-col justify-center items-center px-4 h-full text-center text-white">
      <h1 className="mt-14 text-4xl font-bold md:text-5xl lg:text-6xl md:mt-8">
        News & Articles
      </h1>
    </div>
  </div>
);

const categoriesList = [
  "Interior Design",
  "Buying Guides",
  "Lifestyle",
  "DIY Projects",
  "Inspiration",
  "Smart Home",
  "Materials",
  "Outdoor Living",
  "Organization",
];

// Sidebar now takes props for search/category and callbacks
const Sidebar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  recentPosts,
}) => (
  <aside className="space-y-8 w-full lg:w-1/3">
    <div className="p-6 bg-gray-50 rounded-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Search</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-2 pr-10 pl-4 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute right-4 top-1/2 w-5 h-5 text-gray-400 -translate-y-1/2" />
      </div>
    </div>
    <div className="p-6 bg-gray-50 rounded-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => setSelectedCategory("")}
            className={`flex justify-between items-center text-gray-600 transition-colors hover:text-green-700 w-full text-left ${
              !selectedCategory ? "font-bold text-green-700" : ""}`}
          >
            All
          </button>
        </li>
        {categoriesList.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setSelectedCategory(cat)}
              className={`flex justify-between items-center transition-colors w-full text-left ${
                selectedCategory === cat
                  ? "font-bold text-green-700"
                  : "text-gray-600 hover:text-green-700"
              }`}
            >
              {cat} <ChevronRight className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 bg-gray-50 rounded-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Recent Posts</h3>
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div key={post.title} className="flex items-center space-x-4">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={80}
              className="object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-gray-500">{post.date}</p>
              <a
                href="#"
                className="font-semibold leading-tight text-gray-700 transition-colors hover:text-green-700"
              >
                {post.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

const BlogPostCard = ({ post }) => (
  <div className="overflow-hidden bg-white rounded-2xl border border-gray-200 transition-all duration-300 ease-in-out group hover:shadow-lg hover:-translate-y-1">
    <Link href="#" className="block overflow-hidden aspect-video">
      <Image
        src={post.image}
        alt={post.title}
        width={400}
        height={225}
        className="object-cover w-full h-full"
      />
    </Link>
    <div className="p-6">
      <div className="flex items-center mb-3 text-sm text-gray-500">
        <span className="font-semibold text-green-700">{post.category}</span>
        <span className="mx-2">•</span>
        <span>{post.date}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold leading-tight text-gray-800">
        <Link href="#" className="transition-colors hover:text-green-700">
          {post.title}
        </Link>
      </h3>
      <p className="mb-4 text-gray-600">{post.excerpt}</p>
      <Link
        href="#"
        className="inline-flex items-center font-semibold text-green-600 transition-colors hover:text-green-800"
      >
        Read More <ArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  </div>
);

const Blog = () => {
  // Move allPosts here
  const allPosts = [
    {
      image: "/image/kitchen1.jpg",
      category: "Interior Design",
      date: "May 25, 2024",
      title: "Furniture Trends 2024: What's Hot and What's Not",
      excerpt:
        "Discover the latest trends in home decor, from sustainable materials to bold color palettes that will define the year.",
    },
    {
      image: "/image/living.jpg",
      category: "Buying Guides",
      date: "May 22, 2024",
      title: "The Ultimate Guide to Choosing the Perfect Sofa",
      excerpt:
        "A comprehensive guide to help you select a sofa that fits your space, style, and lifestyle needs perfectly.",
    },
    {
      image: "/image/drowing.jpg",
      category: "Lifestyle",
      date: "May 20, 2024",
      title: "Choosing the Right Dining Table for Your Family",
      excerpt:
        "From size and shape to material and style, we break down everything you need to know to find your ideal dining table.",
    },
    {
      image: "/image/badroom.jpg",
      category: "DIY Projects",
      date: "May 18, 2024",
      title: "How to Create a Cozy Reading Nook",
      excerpt:
        "Transform a small corner of your home into a relaxing and inviting space for reading and unwinding.",
    },
    {
      image: "/image/swiper5.jpg",
      category: "Inspiration",
      date: "May 15, 2024",
      title: "Minimalist Living: Tips for a Clutter-Free Home",
      excerpt:
        "Embrace the art of minimalism with our practical tips for decluttering and organizing your living space.",
    },
    {
      image: "/image/swiper6.jpg",
      category: "Smart Home",
      date: "May 12, 2024",
      title: "Integrating Smart Lighting into Your Decor",
      excerpt:
        "Learn how to blend technology and style with smart lighting solutions that enhance your home's ambiance.",
    },
    {
      image: "/image/swiper1.jpg",
      category: "Materials",
      date: "May 10, 2024",
      title: "The Beauty of Natural Wood in Furniture",
      excerpt:
        "Explore the different types of wood and how their unique grains and textures can elevate your interior design.",
    },
    {
      image: "/image/gallery1.jpg",
      category: "Outdoor Living",
      date: "May 08, 2024",
      title: "Creating the Perfect Outdoor Patio Space",
      excerpt:
        "Get your patio ready for summer with our tips on selecting durable and stylish outdoor furniture and decor.",
    },
    {
      image: "/image/gallerys6.jpg",
      category: "Organization",
      date: "May 05, 2024",
      title: "Smart Storage Solutions for Small Apartments",
      excerpt:
        "Maximize your space with clever and stylish storage ideas that are perfect for compact living.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const postsPerPage = 6;

  // Filter posts by search and category
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory = selectedCategory
        ? post.category === selectedCategory
        : true;
      const matchesSearch = searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory, allPosts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  // Recent posts (latest 3 from filtered)
  const recentPosts = filteredPosts.slice(0, 3);

  return (
    <section className="py-16 bg-white sm:py-20">
      <div className="container flex flex-col gap-12 px-4 mx-auto max-w-7xl lg:flex-row">
        <main className="w-full lg:w-2/3">
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-xl text-center text-gray-500">
              No blogs found.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {paginatedPosts.map((post) => (
                <BlogPostCard key={post.title} post={post} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-12 space-x-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-3 bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100"
              >
                <ChevronLeft size={20} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    currentPage === i + 1
                      ? "bg-green-700 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-green-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="p-3 bg-gray-100 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </main>
        <Sidebar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          recentPosts={recentPosts}
        />
      </div>
    </section>
  );
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <BlogBanner />
      <Blog />
      <NewsLetter />
      <EFooter />
    </div>
  );
}
