import EHeader from "@/e-components/Header";
import Hero from "@/e-components/Hero";
import Services from "@/e-components/Services";
import EFooter from "@/e-components/Footer";
import NewsLetter from "@/e-components/NewsLetter";
import FAQ from "@/e-components/FAQ";
import FollowUs from "@/e-components/FollowUs";
import Blogs from "@/e-components/Blogs";
import Testimonial from "@/e-components/Testimonial";
import Deals from "@/e-components/Deals";
import FlashSale from "@/e-components/FlashSale";
import Products from "@/e-components/Products";
import Offer from "@/e-components/Offer";

const EHomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <Hero />
      <Services />
      <Products />
      <FlashSale />
      <Deals />
      <Testimonial />
      <Blogs />
      <FollowUs />
      <FAQ />
      <NewsLetter />
      <EFooter />
    </div>
  );
};

export default EHomePage;
