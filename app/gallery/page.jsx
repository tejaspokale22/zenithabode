"use client";
import Image from "next/image";
import assets from "@/public/assets.js";
import { useState, useEffect, useRef } from "react";

const galleryImages = [
  assets.gallery,
  assets.gallery1,
  assets.gallery2,
  assets.gallery3,
  assets.gallery4,
  assets.gallery6,
  assets.gallery7,
  assets.gallery8,
  assets.gallery9,
  assets.gallery10,
  assets.gallery11,
  assets.gallery12,
  assets.gallery13,
  assets.gallery14,
  assets.gallery15,
  assets.living,
  assets.kitchen,
  assets.kitchen1,
  assets.badroom,
  assets.gallery121,
  assets.gallery1123,
  assets.project,
  assets.project2,
  assets.project3,
  assets.project4,
  assets.backgroundProject,
  assets.projectBackground,
  assets.aboutFront,
  assets.drowing,
  assets.ga,
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=800&q=80",
  "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=800&q=80",
  "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&w=800&q=80",
  "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=800&q=80",
];

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [loaded, setLoaded] = useState(Array(galleryImages.length).fill(false));
  const [currentIdx, setCurrentIdx] = useState(null);
  const modalRef = useRef();

  const nextImg = () => {
    if (currentIdx === null) return;
    const next = (currentIdx + 1) % galleryImages.length;
    setSelected(galleryImages[next]);
    setCurrentIdx(next);
  };
  const prevImg = () => {
    if (currentIdx === null) return;
    const prev = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
    setSelected(galleryImages[prev]);
    setCurrentIdx(prev);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (selected === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selected, currentIdx, nextImg, prevImg]);

  const openModal = (img, idx) => {
    setSelected(img);
    setCurrentIdx(idx);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-gray-100">
      {/* Hero Banner */}
      <div className="flex overflow-hidden relative justify-center items-center mb-12 h-64 rounded-b-3xl shadow-lg md:h-80 lg:h-96">
        <Image
          src={assets.gallerys6}
          alt="Gallery Hero"
          fill
          className="object-cover w-full h-full brightness-75"
          priority
        />
        <div className="flex absolute inset-0 flex-col justify-center items-center px-4 text-center bg-black/40">
          <div className="inline-block p-3 mb-4 rounded-2xl shadow bg-white/70">
            <Image
              src={assets.logo}
              alt="logo"
              width={124}
              height={35}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-white drop-shadow-lg md:text-5xl">
            Our Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-normal text-white/90">
            Explore our curated collection of beautiful interior designs and
            inspirations.
          </p>
        </div>
      </div>
      {/* Gallery Grid */}
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden relative bg-white rounded-2xl border border-gray-200 shadow-md transition-all duration-300 cursor-pointer group hover:shadow-2xl"
              onClick={() => openModal(img, idx)}
              tabIndex={0}
              aria-label={`Open image ${idx + 1}`}
              onKeyDown={(e) =>
                e.key === "Enter" ? openModal(img, idx) : null
              }
            >
              {/* Fade-in animation */}
              <div
                className={`absolute inset-0 z-10 flex justify-center items-center transition-opacity duration-700 ${
                  loaded[idx] ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl animate-pulse" />
              </div>
              <Image
                src={img}
                alt={`Gallery image ${idx + 1}`}
                width={600}
                height={400}
                className={`object-cover w-full aspect-[4/3] group-hover:scale-105 group-hover:brightness-90 transition-all duration-300 rounded-2xl ${
                  !loaded[idx] ? "invisible" : "visible"
                }`}
                {...(typeof img !== "string"
                  ? { placeholder: "blur", blurDataURL: img }
                  : {})}
                onLoad={() =>
                  setLoaded((l) => {
                    const arr = [...l];
                    arr[idx] = true;
                    return arr;
                  })
                }
              />
            </div>
          ))}
        </div>
        {/* Lightbox Modal */}
        {selected && (
          <div
            className="flex fixed inset-0 z-50 justify-center items-center backdrop-blur-sm bg-black/80 animate-fadeIn"
            onClick={() => setSelected(null)}
            aria-modal="true"
            role="dialog"
            ref={modalRef}
          >
            <div
              className="relative mx-4 w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 z-20 p-2 bg-white rounded-full shadow transition hover:bg-gray-200"
                onClick={() => setSelected(null)}
                aria-label="Close"
                autoFocus
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {/* Prev Button */}
              <button
                className="absolute left-2 top-1/2 z-20 p-2 rounded-full shadow -translate-y-1/2 bg-white/80 hover:bg-gray-200"
                onClick={prevImg}
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {/* Next Button */}
              <button
                className="absolute right-2 top-1/2 z-20 p-2 rounded-full shadow -translate-y-1/2 bg-white/80 hover:bg-gray-200"
                onClick={nextImg}
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Image Count */}
              <div className="absolute bottom-2 left-1/2 z-20 px-3 py-1 text-xs text-white rounded-full -translate-x-1/2 bg-black/60">
                Image {currentIdx + 1} of {galleryImages.length}
              </div>
              <Image
                src={selected}
                alt={`Selected gallery image ${currentIdx + 1}`}
                width={1200}
                height={800}
                className="object-contain w-full h-[60vh] rounded-xl bg-white shadow-lg animate-fadeIn"
                priority
                {...(typeof selected !== "string"
                  ? { placeholder: "blur", blurDataURL: selected }
                  : {})}
              />
            </div>
          </div>
        )}
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease;
        }
      `}</style>
    </section>
  );
}
