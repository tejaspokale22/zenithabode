import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import AnimatedBanner from "@/components/AnimatedBanner";
import CounterBanner from "@/components/CounterBanner";
import Hero from "@/components/Hero";
import AboutBanner from "@/components/AboutBanner";
import WCU from "@/components/WCU";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroSection /> */}
      {/* <CompanySection /> */}
      <AboutBanner />
      <WCU />
      {/* <AboutComponent /> */}
      <CounterBanner />
      <CatalogueSection />
      <AnimatedBanner />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
