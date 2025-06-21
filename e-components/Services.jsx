'use client';
import React from 'react';
import { Truck, Wallet, Headphones } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-12 bg-gray-50/50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-3">
                <div className='p-3 rounded-full bg-yellow-400/20'>
                    <Truck className="w-8 h-8 text-yellow-500" />
                </div>
              <div>
                <p className="text-lg font-bold text-gray-900">Free Shipping</p>
                <p className="mt-1 text-sm text-gray-500">Free shipping for order above $180</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
             <div className="flex items-center space-x-3">
                <div className='p-3 rounded-full bg-yellow-400/20'>
                    <Wallet className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-900">Flexible Payment</p>
                    <p className="mt-1 text-sm text-gray-500">Multiple secure payment options</p>
                </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-3">
                <div className='p-3 rounded-full bg-yellow-400/20'>
                    <Headphones className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-900">24x7 Support</p>
                    <p className="mt-1 text-sm text-gray-500">We support online all days</p>
                </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-8 mt-16 lg:grid-cols-3">
            {/* Left Card */}
            <div className="flex flex-col items-center p-8 bg-gray-100 rounded-2xl lg:col-span-2 md:flex-row">
                <div className='space-y-4 md:w-1/2'>
                    <div className="inline-block px-3 py-1 text-sm font-bold text-white bg-yellow-400 rounded-full">
                        1500+ Items
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">Chairs</h2>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
                <div className='flex justify-center items-center mt-8 md:w-1/2 md:mt-0'>
                    <img src="https://via.placeholder.com/400x500/F9FAFB/000000?text=Chair" alt="Chair" className="max-h-[400px] object-contain"/>
                </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-8">
                {/* Sofa Card */}
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl sm:flex-row">
                   <div className='space-y-3 sm:w-1/2'>
                        <div className="inline-block px-3 py-1 text-sm font-bold text-white bg-yellow-400 rounded-full">
                            750+ Items
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Sofa</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>Reception Sofa</li>
                            <li>Sectional Sofa</li>
                            <li>Armless Sofa</li>
                            <li>Curved Sofa</li>
                        </ul>
                   </div>
                   <div className='mt-4 sm:w-1/2 sm:mt-0'>
                        <img src="https://via.placeholder.com/200x150/F9FAFB/000000?text=Sofa" alt="Sofa" className="object-contain w-full"/>
                   </div>
                </div>

                {/* Lighting Card */}
                <div className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl sm:flex-row">
                    <div className='space-y-3 sm:w-1/2'>
                        <div className="inline-block px-3 py-1 text-sm font-bold text-white bg-yellow-400 rounded-full">
                            450+ Items
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Lighting</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>Table Lights</li>
                            <li>Floor Lights</li>
                            <li>Ceiling Lights</li>
                            <li>Wall Lights</li>
                        </ul>
                    </div>
                    <div className='mt-4 sm:w-1/2 sm:mt-0'>
                        <img src="https://via.placeholder.com/200x150/F9FAFB/000000?text=Lamp" alt="Lighting" className="object-contain w-full"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
