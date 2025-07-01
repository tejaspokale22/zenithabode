import React from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  return (
    <section className="bg-[#f8f9fa] py-20">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-8 h-px bg-yellow-500"></span>
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Our Newsletter
            </p>
          </div>
          <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
            Subscribe to Our Newsletter to Get
          </h2>
          <h2 className="mb-4 text-3xl font-bold text-green-700 md:text-4xl">
            Updates to Our Latest Collection
          </h2>
          <p className="mx-auto mb-8 max-w-md text-gray-500">
            Get 20% off on your first order just by subscribing to our
            newsletter
          </p>
          <form className="flex flex-col justify-center items-center p-2 mx-auto max-w-xl bg-white rounded-full shadow-sm sm:flex-row">
            <div className="relative flex-grow w-full">
              <span className="absolute left-2 top-1/2 -translate-y-1/2">
                <div className="flex justify-center items-center p-2 bg-green-700 rounded-full">
                  <FiMail className="w-5 h-5 text-white" />
                </div>
              </span>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="py-3 pr-4 pl-14 w-full text-gray-700 bg-transparent rounded-full focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-3 mt-2 w-1/2 font-semibold text-gray-900 bg-yellow-400 rounded-full transition-colors sm:w-auto sm:mt-0 hover:bg-yellow-500 focus:outline-none md:w-3/4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
