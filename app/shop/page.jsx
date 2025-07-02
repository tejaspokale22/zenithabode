import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";
import ShopClient from "@/e-components/ShopClient";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <ShopClient />
      <NewsLetter />
      <EFooter />
    </div>
  );
}
