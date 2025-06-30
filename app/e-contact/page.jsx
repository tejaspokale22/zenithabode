'use client';
import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import EHeader from '@/e-components/Header';
import EFooter from '@/e-components/Footer';
import Offer from '@/e-components/Offer';
import NewsLetter from '@/e-components/NewsLetter';

const EContactBanner = () => {
    return (
        <div className="relative w-full h-56 bg-gray-900 md:h-72 lg:h-80">
            <Image
                src="/image/gallery1.jpg"
                alt="Contact Us Banner"
                layout="fill"
                objectFit="cover"
                className="object-cover absolute inset-0 z-0 w-full h-full opacity-40"
            />
            <div className="flex relative z-10 flex-col justify-center items-center px-4 h-full text-center text-white">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Contact Us</h1>
                <div className="mt-4 text-sm md:text-base">
                    <a href="/e-home" className='text-green-500 transition-colors hover:text-green-400'>
                        Home
                    </a>
                    <span className="mx-2">&gt;</span>
                    <span>Contact Us</span>
                </div>
            </div>
        </div>
    );
};

const EContact = () => {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
                <div className="flex items-center mb-2">
                    <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                    <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">Get in Touch</p>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                    Have a Project in Mind? <br/>Let&apos;s <span className="text-green-700">Talk!</span>
                </h2>
                <p className="mt-4 text-gray-500">
                    We&apos;re here to help you with any questions you may have. Fill out the form, and we&apos;ll get back to you as soon as possible.
                </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <Phone size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Free +92 (020)-9850</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <Mail size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">needhelp@company.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <MapPin size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">66 broklyn golden street. New York</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Send a Message</h2>
            <form>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input type="text" placeholder="Your Name" className="p-3 w-full bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <input type="email" placeholder="Your Email" className="p-3 w-full bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <input type="text" placeholder="Subject" className="p-3 w-full bg-white rounded-md border border-gray-200 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                <textarea placeholder="Your Message" rows="6" className="p-3 w-full bg-white rounded-md border border-gray-200 sm:col-span-2 focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <div className="mt-6 text-center">
                <button type="submit" className="inline-flex justify-center items-center px-8 py-3 font-semibold text-white bg-green-700 rounded-md transition-colors hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function EContactPage() {
    return (
      <div className="min-h-screen bg-white">
        <Offer />
        <EHeader />
        <EContactBanner />
        <EContact />
        <NewsLetter />
        <EFooter />
      </div>
    );
}
