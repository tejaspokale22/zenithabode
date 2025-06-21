import React from 'react';
import { FiPhoneCall, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-28">
          {/* Left side: Form */}
          <div className="flex flex-col">
            <p className="mb-2 tracking-wider text-gray-500 uppercase">Send us email</p>
            <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Feel free to write</h2>
            <form>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input type="text" placeholder="Enter Name" className="p-4 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="email" placeholder="Enter Email" className="p-4 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="text" placeholder="Enter Subject" className="p-4 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <input type="tel" placeholder="Enter Phone" className="p-4 w-full bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                <textarea placeholder="Enter Message" rows="5" className="p-4 w-full bg-gray-100 rounded-md md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
              </div>
              <div className="flex mt-8 space-x-4">
                <button type="submit" className="px-8 py-3 font-semibold text-white bg-black rounded-md transition-colors hover:bg-gray-800">
                  SEND MESSAGE
                </button>
                <button type="reset" className="px-8 py-3 font-semibold text-white bg-black rounded-md transition-colors hover:bg-gray-800">
                  RESET
                </button>
              </div>
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div className="flex flex-col">
            <p className="mb-2 tracking-wider text-gray-500 uppercase">Need any help?</p>
            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Get in touch with us</h2>
            <p className="mb-10 leading-relaxed text-gray-600">
              Lorem ipsum is simply free text available dolor sit amet consectetur notted adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
            </p>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-5 rounded-full">
                  <FiPhoneCall className="text-2xl text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Have any question?</h3>
                  <p className="text-gray-600">Free +92 (020)-9850</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-5 rounded-full">
                  <FiMail className="text-2xl text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Write email</h3>
                  <p className="text-gray-600">needhelp@company.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-5 rounded-full">
                  <FiMapPin className="text-2xl text-white" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-semibold">Visit anytime</h3>
                  <p className="text-gray-600">66 broklyn golden street. New York</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
