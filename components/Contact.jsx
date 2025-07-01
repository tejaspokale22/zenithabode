import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <div className="px-2 py-8 mx-auto max-w-7xl xs:px-4 sm:px-6 md:py-16 lg:px-8 lg:py-24">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:gap-28">
          {/* Left side: Form */}
          <div className="flex flex-col">
            <p className="mb-2 text-xs tracking-wider text-gray-500 uppercase xs:text-sm">
              Send us email
            </p>
            <h2 className="mb-6 text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl">
              Feel free to write
            </h2>
            <form>
              <div className="grid grid-cols-1 gap-4 xs:gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="p-3 w-full text-sm bg-gray-100 rounded-md xs:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 xs:text-base"
                />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="p-3 w-full text-sm bg-gray-100 rounded-md xs:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 xs:text-base"
                />
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="p-3 w-full text-sm bg-gray-100 rounded-md xs:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 xs:text-base"
                />
                <input
                  type="tel"
                  placeholder="Enter Phone"
                  className="p-3 w-full text-sm bg-gray-100 rounded-md xs:p-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 xs:text-base"
                />
                <textarea
                  placeholder="Enter Message"
                  rows="5"
                  className="p-3 w-full text-sm bg-gray-100 rounded-md xs:p-4 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 xs:text-base"
                ></textarea>
              </div>
              <div className="flex flex-col gap-3 mt-6 xs:flex-row xs:mt-8 xs:gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-md transition-colors xs:px-8 xs:py-3 hover:bg-gray-800 xs:text-base"
                >
                  SEND MESSAGE
                </button>
                <button
                  type="reset"
                  className="px-6 py-2 text-sm font-semibold text-white bg-black rounded-md transition-colors xs:px-8 xs:py-3 hover:bg-gray-800 xs:text-base"
                >
                  RESET
                </button>
              </div>
            </form>
          </div>

          {/* Right side: Contact Info */}
          <div className="flex flex-col mt-10 lg:mt-0">
            <p className="mb-2 text-xs tracking-wider text-gray-500 uppercase xs:text-sm">
              Need any help?
            </p>
            <h2 className="mb-4 text-2xl font-bold xs:text-3xl sm:text-4xl md:text-5xl">
              Get in touch with us
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 xs:mb-10 xs:text-base">
              Lorem ipsum is simply free text available dolor sit amet
              consectetur notted adipisicing elit sed do eiusmod tempor
              incididunt simply dolore magna.
            </p>
            <div className="space-y-6 xs:space-y-8">
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-3 xs:p-4 sm:p-5 rounded-full">
                  <FiPhoneCall className="text-lg text-white xs:text-xl sm:text-2xl" />
                </div>
                <div className="ml-4 xs:ml-5">
                  <h3 className="text-base font-semibold xs:text-lg">
                    Have any question?
                  </h3>
                  <p className="text-sm text-gray-600 xs:text-base">
                    Free +92 (020)-9850
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-3 xs:p-4 sm:p-5 rounded-full">
                  <FiMail className="text-lg text-white xs:text-xl sm:text-2xl" />
                </div>
                <div className="ml-4 xs:ml-5">
                  <h3 className="text-base font-semibold xs:text-lg">
                    Write email
                  </h3>
                  <p className="text-sm text-gray-600 xs:text-base">
                    needhelp@company.com
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-[#c9a575] p-3 xs:p-4 sm:p-5 rounded-full">
                  <FiMapPin className="text-lg text-white xs:text-xl sm:text-2xl" />
                </div>
                <div className="ml-4 xs:ml-5">
                  <h3 className="text-base font-semibold xs:text-lg">
                    Visit anytime
                  </h3>
                  <p className="text-sm text-gray-600 xs:text-base">
                    66 broklyn golden street. New York
                  </p>
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
