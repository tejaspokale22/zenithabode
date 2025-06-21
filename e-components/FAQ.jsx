'use client';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: 'What types of furniture do you offer?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Can I track my furniture delivery?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'What materials are used in your furniture?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Are there any discounts or promotions available?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const AccordionItem = ({ faq, onToggle, active }) => {
    const { question, answer } = faq;
  
    return (
      <div className={`transition-all duration-300 ease-in-out ${active ? 'my-2 text-white bg-green-700 rounded-lg' : 'border-b'}`}>
        <button
          onClick={onToggle}
          className="flex justify-between items-center p-4 w-full font-semibold text-left"
        >
          <span>{question}</span>
          <span>{active ? <FiMinus /> : <FiPlus className="text-gray-500" />}</span>
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${active ? 'opacity-100 grid-rows-[1fr]' : 'opacity-0 grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
              <p className="px-4 pb-4 text-sm font-light">
                {answer}
              </p>
          </div>
        </div>
      </div>
    );
  };

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <span className="mr-3 w-8 h-px bg-yellow-500"></span>
            <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
              Faqs
            </p>
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Questions? <span className="text-green-700">Look here.</span>
          </h2>
        </div>
        <div className="mx-auto">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              active={openIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
