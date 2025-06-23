'use client';

import { useInView, motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 30, suffix: '+', label: 'OF INTERIOR' },
  { value: 5, suffix: '+', label: 'YEARS OF EXPERIENCE', highlight: true },
  { value: 10, suffix: '+', label: 'PROFESSIONAL TEAM' },
  { value: 3, suffix: '+', label: 'BEST INTERIOR AWARDS' },
];

export default function CounterBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasAnimated(true);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-wrap gap-6 justify-center items-center py-8 w-full bg-white sm:gap-10 md:gap-12 sm:py-12 md:py-16"
    >
      {stats.map(({ value, suffix, label, highlight }, index) => (
        <div
          key={index}
          className="flex flex-col items-center px-2 text-center sm:px-4 md:px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`font-bold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl ${
              highlight ? 'text-[#b19160]' : 'text-[#f1ebdf]'
            }`}
          >
            {hasAnimated ? (
              <CountUp
                end={value} 
                duration={2.5}
                easingFn={(t, b, c, d) => {
                  // easeOutCubic
                  t /= d;
                  t--;
                  return c * (t * t * t + 1) + b;
                }}
              />
            ) : (
              '0'
            )}
            <span className="text-2xl align-middle xs:text-3xl sm:text-4xl md:text-5xl">{suffix}</span>
          </motion.div>
          <p className="mt-2 text-xs font-semibold tracking-wide text-black uppercase xs:text-sm sm:text-base md:text-lg">
            {label}
            <span className="block h-[1px] w-8 sm:w-10 bg-[#b19160] mt-2 mx-auto" />
          </p>
        </div>
      ))}
    </div>
  );
}
