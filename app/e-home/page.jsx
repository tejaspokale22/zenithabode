"use client";
import { NextSeo } from 'next-seo';
import EHeader from '@/e-components/Header';
import Hero from '@/e-components/Hero';
import Services from '@/e-components/Services';
import EFooter from '@/e-components/Footer';
import NewsLetter from '@/e-components/NewsLetter';
import FAQ from '@/e-components/FAQ';
import FollowUs from '@/e-components/FollowUs';
import Blogs from '@/e-components/Blogs';
import Testimonial from '@/e-components/Testimonial';
import Deals from '@/e-components/Deals';
import FlashSale from '@/e-components/FlashSale';
import Products from '@/e-components/Products';
import Offer from '@/e-components/Offer';

const EHomePage = () => {
  return (
    <>
      <NextSeo
        title="Furniture Store - Modern & Stylish Furniture"
        description="Explore our wide collection of modern furniture. Find the perfect chairs, sofas, tables, and lighting for your home. Shop now and get 25% off your first order!"
        canonical="https://www.mywebsite.com/e-home"
        openGraph={{
          url: 'https://www.mywebsite.com/e-home',
          title: 'E-Furniture Home - Modern & Stylish Furniture',
          description: 'Explore our wide collection of modern furniture and get 25% off your first order!',
          site_name: 'Furniture.',
        }}
      />
      <div className="min-h-screen bg-white">
        <Offer/>
        <EHeader />
        <Hero />
        <Services />
        <Products/>
        <FlashSale/> 
        <Deals/>
        <Testimonial/>
        <Blogs/>
        <FollowUs/>
        <FAQ />
        <NewsLetter />
        <EFooter />
      </div>
    </>
  );
};

export default EHomePage;

