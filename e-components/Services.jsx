"use client";
import React from "react";
import { Truck, Wallet, Headphones } from "lucide-react";
import Image from "next/image";
import assets from "@/public/assets.js";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div className="flex justify-start items-center ml-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-yellow-400/20">
                <Truck className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-left text-gray-900">
                  Free Shipping
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Free shipping for order above $180
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center ml-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-yellow-400/20">
                <Wallet className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-left text-gray-900">
                  Flexible Payment
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Multiple secure payment options
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center ml-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-yellow-400/20">
                <Headphones className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <p className="text-lg font-bold text-left text-gray-900">
                  24x7 Support
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  We support online all days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
          {/* Left Card */}
          <div className="flex flex-col p-6 rounded-2xl bg-gray-50/70 lg:col-span-2 md:flex-row md:p-8">
            <div className="space-y-4 md:w-1/2">
              <div className="inline-block px-3 py-1 text-sm font-bold text-gray-800 bg-yellow-400 rounded-full">
                1500+ Items
              </div>
              <Link
                href="/shop?category=chair"
                className="text-3xl font-bold text-gray-900"
              >
                <h2 className="mt-2">Chairs</h2>
              </Link>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Gaming Chair</li>
                <li>Lounge Chair</li>
                <li>Folding Chair</li>
                <li>Dining Chair</li>
                <li>Office Chair</li>
                <li>Armchair</li>
                <li>Bar Stool</li>
                <li>Club Chair</li>
              </ul>
            </div>
            <div className="flex justify-center items-center mt-8 md:w-1/2 md:mt-0">
              <Image
                src={assets.chair}
                alt="Chair"
                width={400}
                height={500}
                className="max-h-[300px] object-contain rounded-2xl md:max-h-[400px]"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-8">
            {/* Sofa Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/70 sm:flex-row sm:p-6">
              <div className="space-y-3 sm:w-1/2">
                <div className="inline-block px-3 py-1 text-sm font-bold text-gray-800 bg-yellow-400 rounded-full">
                  750+ Items
                </div>
                <Link
                  href="/shop?category=sofa"
                  className="text-2xl font-bold text-gray-900"
                >
                  <h2 className="mt-2">Sofa</h2>
                </Link>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Reception Sofa</li>
                  <li>Sectional Sofa</li>
                  <li>Armless Sofa</li>
                  <li>Curved Sofa</li>
                </ul>
              </div>
              <div className="mt-4 sm:w-1/2 sm:mt-0">
                <Image
                  src={assets.sofa}
                  alt="Sofa"
                  width={250}
                  height={250}
                  className="object-contain w-full rounded-2xl"
                />
              </div>
            </div>

            {/* Lighting Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/70 sm:flex-row sm:p-6">
              <div className="space-y-3 sm:w-1/2">
                <div className="inline-block px-3 py-1 text-sm font-bold text-gray-800 bg-yellow-400 rounded-full">
                  450+ Items
                </div>
                <Link
                  href="/shop?category=lightings"
                  className="text-2xl font-bold text-gray-900"
                >
                  <h2 className="mt-2">Lighting</h2>
                </Link>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>Table Lights</li>
                  <li>Floor Lights</li>
                  <li>Ceiling Lights</li>
                  <li>Wall Lights</li>
                </ul>
              </div>
              <div className="mt-4 sm:w-1/2 sm:mt-0">
                <Image
                  src={assets.lamp}
                  alt="Lighting"
                  width={200}
                  height={150}
                  className="object-contain w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
