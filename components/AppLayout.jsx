"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AppLayout({ children }) {
  const pathname = usePathname();

  // Array of routes where Header and Footer should be hidden
  const excludedRoutes = [
    "/e-home",
    "/e-about",
    "/e-contact",
    "/shop",
    "/categories",
    "/blog",
  ];

  const isExcludedRoute = excludedRoutes.includes(pathname);

  return (
    <>
      {!isExcludedRoute && <Header />}
      {children}
      {!isExcludedRoute && <Footer />}
    </>
  );
}
