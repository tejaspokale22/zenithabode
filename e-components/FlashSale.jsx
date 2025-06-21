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
          <span className="text-5xl font-bold text-gray-800">
            {String(timeLeft[interval]).padStart(2, "0")}
          </span>
          <span className="block mt-1 text-sm text-gray-500 uppercase">
            {interval}
          </span>
        </div>
        {index < Object.keys(timeLeft).length - 1 && (
          <span className="mx-4 text-5xl font-light text-gray-400">:</span>
        )}
      </div>
    );
  });

  return <div className="flex justify-center my-8">{timerComponents}</div>;
};

const FlashSale = () => {
  const saleEndDate = new Date();
  saleEndDate.setDate(saleEndDate.getDate() + 4);

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="relative p-10 text-center bg-gray-50 rounded-3xl lg:p-16">
            <div className="absolute top-6 left-6 text-gray-300 opacity-30">
              ...
            </div>
            <div className="absolute right-6 bottom-6 text-gray-300 opacity-30">
              ...
            </div>

            <h2 className="mb-4 text-5xl font-bold">
              Flash <span className="text-green-700">Sale!</span>
            </h2>
            <p className="mb-8 text-lg text-gray-500">
              Get 25% off - Limited Time Offer!
            </p>

            <Countdown targetDate={saleEndDate} />

            <button className="flex justify-center items-center px-8 py-4 mx-auto text-lg font-semibold text-white bg-green-700 rounded-full transition-colors hover:bg-green-800">
              Shop Now <FaArrowRight className="ml-3" />
            </button>
          </div>
          <div className="hidden justify-center items-center space-x-6 h-full lg:flex">
            <div className="overflow-hidden relative w-1/2 h-full rounded-3xl transform -translate-y-6">
              <Image
                src="/image/kitchen1.jpg"
                alt="Kitchen Interior"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden relative w-1/2 h-full rounded-3xl transform translate-y-6">
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
