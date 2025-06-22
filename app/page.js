import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import CatalogueSection from "@/components/CatalogueSection";
import ContactSection from "@/components/ContactSection";
import AnimatedBanner from "@/components/AnimatedBanner";
import CounterBanner from "@/components/CounterBanner";
import Hero from "@/components/Hero";
import AboutBanner from "@/components/AboutBanner";
import WCU from "@/components/WCU";
import Blog from "@/components/Blog";
import LatestProject from "@/components/LatestProject";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBanner />
      <WCU />
      <CounterBanner />
      <LatestProject />
      {/* <CatalogueSection /> */}
      <AnimatedBanner />
      <CatalogSwiperSection />
      <Blog />
      <ContactSection />
    </>
  );
}
