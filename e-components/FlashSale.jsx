"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex items-center">
        <div className="text-center">
          <span className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
            {String(timeLeft[interval]).padStart(2, "0")}
          </span>
          <span className="block mt-1 text-xs text-gray-500 uppercase sm:text-sm">
            {interval}
          </span>
        </div>
        {index < Object.keys(timeLeft).length - 1 && (
          <span className="mx-2 text-3xl font-light text-gray-400 sm:mx-4 sm:text-5xl">:</span>
        )}
      </div>
    );
  });

  return <div className="flex flex-wrap justify-center my-8">{timerComponents}</div>;
};

const FlashSale = () => {
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 4);

  return (
    <section className="py-16 bg-white sm:py-24">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="relative p-8 text-center rounded-3xl bg-gray-50/70 sm:p-10 lg:p-16">
            <div className="absolute top-6 left-6 text-gray-300 opacity-30">
              ...
            </div>
            <div className="absolute right-6 bottom-6 text-gray-300 opacity-30">
              ...
            </div>

            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              Flash <span className="text-green-700">Sale!</span>
            </h2>
            <p className="mb-8 text-base text-gray-500 sm:text-lg">
              Get 25% off - Limited Time Offer!
            </p>

            <Countdown targetDate={saleEndDate} />

            <button className="flex justify-center items-center px-6 py-3 mx-auto text-base font-semibold text-white bg-green-700 rounded-full transition-colors sm:px-8 sm:py-4 sm:text-lg hover:bg-green-800">
              Shop Now <FaArrowRight className="ml-3" />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 h-full sm:flex-row sm:space-y-0 sm:space-x-6 lg:flex">
            <div className="overflow-hidden relative w-full h-64 rounded-3xl sm:w-1/2 sm:h-full sm:transform sm:-translate-y-6">
              <Image
                src="/image/kitchen1.jpg"
                alt="Kitchen Interior"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden relative w-full h-64 rounded-3xl sm:w-1/2 sm:h-full sm:transform sm:translate-y-6">
              <Image
                src="/image/living.jpg"
                alt="Living Room Interior"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
