"use client";

import assets from "@/public/assets";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedBanner() {
  const phrase =
    "MODERN" +
    "\u00A0".repeat(3) +
    "DECORATION" +
    "\u00A0".repeat(3) +
    "INTERIOR DESIGN" +
    "\u00A0".repeat(3);

  return (
    <div className="relative w-full md:h-[30vh] overflow-hidden h-[26vh]">
      {/* Background Image */}
      <Image
        src={assets.animatedBannerBg}
        alt="Banner Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Scrolling Text */}
      <div className="flex overflow-hidden absolute inset-0 z-20 items-center">
        <motion.div
          className="flex w-full whitespace-nowrap"
          animate={{ x: ["0%", "-400%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 22,
          }}
        >
          <span
            className="px-8 text-5xl font-extrabold tracking-widest uppercase opacity-90 md:text-7xl lg:text-9xl"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #fff",
              textStroke: "2px #fff",
              letterSpacing: "0.2em",
            }}
          >
            {phrase.repeat(3)}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
