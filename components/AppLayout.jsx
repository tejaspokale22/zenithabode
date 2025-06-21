"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isEHomeRoute = pathname === "/e-home";

  return (
    <>
      {!isEHomeRoute && <Header />}
      {children}
      {!isEHomeRoute && <Footer />}
    </>
  );
} 