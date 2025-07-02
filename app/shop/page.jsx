import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";
import ShopClient from "@/e-components/ShopClient";
import { Suspense } from "react";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <Suspense fallback={<div>Loading shop...</div>}>
        <ShopClient />
      </Suspense>
      <NewsLetter />
      <EFooter />
    </div>
  );
}
