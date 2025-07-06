"use client";
import React, { useEffect, useState } from "react";
import Header from "../../e-components/Header";
import NewsLetter from "../../e-components/NewsLetter";
import EFooter from "../../e-components/Footer";
import Offer from "../../e-components/Offer";
import Image from "next/image";
import { getCart, setCart } from "@/lib/cart";
import Loader from "../shop/page";
import { useRouter } from "next/navigation";

const shippingOptions = [
  { label: "Standard Delivery - ₹50.00", value: 50 },
  { label: "Express Delivery - ₹150.00", value: 150 },
];

function parsePrice(priceStr) {
  // Extracts the numeric price from a string like "₹9,998.00 with 55 percent savings"
  const match = priceStr.match(/₹([\d,]+\.\d{2})/);
  return match ? parseFloat(match[1].replace(/,/g, "")) : 0;
}

export default function CartPage() {
  const [cart, setCartState] = useState([]);
  const [shipping, setShipping] = useState(shippingOptions[0].value);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setCartState(getCart());
    setLoading(false);
  }, []);

  const handleQuantityChange = (product_id, delta) => {
    let updatedCart = getCart()
      .map((item) => {
        if (item.product_id === product_id) {
          return { ...item, quantity: item.quantity + delta };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Remove items with quantity 0
    setCart(updatedCart);
    setCartState(updatedCart);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );
  const total = subtotal + Number(shipping);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {loading && <Loader />}
      {!loading && (
        <>
          <Offer />
          <Header />
          <main className="flex flex-col flex-1 justify-center px-4 py-16 w-full min-h-screen bg-white">
            <div className="mx-auto w-full max-w-7xl flex flex-col gap-8 min-h-[60vh] md:min-h-[600px] lg:flex-row lg:items-start">
              {/* Cart Table Section */}
              <section className="relative flex-1 p-2 min-w-0 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm sm:p-4 md:p-6 lg:p-8">
                <div className="flex flex-col gap-2 mb-6 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
                  <h1 className="text-2xl font-extrabold text-gray-900 drop-shadow-lg sm:text-3xl">
                    Shopping Cart
                  </h1>
                  <span className="text-base font-semibold text-gray-500 sm:text-lg">
                    {totalItems} Items
                  </span>
                </div>
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200">
                  <table className="w-full min-w-[340px] divide-y divide-gray-200 text-xs sm:text-sm md:text-base">
                    <thead>
                      <tr>
                        <th className="py-3 text-xs font-bold tracking-wider text-left text-gray-500 uppercase whitespace-nowrap">
                          Product Details
                        </th>
                        <th className="py-3 text-xs font-bold tracking-wider text-center text-gray-500 uppercase whitespace-nowrap">
                          Quantity
                        </th>
                        <th className="py-3 text-xs font-bold tracking-wider text-right text-gray-500 uppercase whitespace-nowrap">
                          Price
                        </th>
                        <th className="py-3 text-xs font-bold tracking-wider text-right text-gray-500 uppercase whitespace-nowrap">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {cart.length === 0 ? (
                        <tr>
                          <td
                            colSpan={4}
                            className="py-10 text-center text-gray-500 bg-gray-50"
                          >
                            Your cart is empty.
                          </td>
                        </tr>
                      ) : (
                        cart.map((item) => (
                          <tr
                            key={item.product_id}
                            className="bg-gray-50 transition"
                          >
                            <td className="flex items-center gap-4 px-2 py-4 min-w-[220px]">
                              <div className="overflow-hidden relative w-16 h-16 bg-gray-50 rounded-xl border border-gray-100 shadow">
                                <Image
                                  src={item.image_url}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="flex flex-col gap-1 min-w-0">
                                <span
                                  className="text-base font-semibold text-gray-900 truncate max-w-[180px] md:max-w-xs"
                                  title={item.title}
                                >
                                  {item.title}
                                </span>
                                <span className="text-xs font-medium text-green-700">
                                  {item.category}
                                </span>
                              </div>
                            </td>
                            <td className="py-4 text-center">
                              <div className="flex gap-2 justify-center items-center">
                                <button
                                  className="w-8 h-8 text-lg font-bold text-green-700 bg-green-100 rounded transition hover:bg-green-200"
                                  onClick={() =>
                                    handleQuantityChange(item.product_id, -1)
                                  }
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 text-base font-semibold text-green-700 bg-green-50 rounded-full border border-green-100 min-w-[36px] text-center">
                                  {item.quantity}
                                </span>
                                <button
                                  className="w-8 h-8 text-lg font-bold text-green-700 bg-green-100 rounded transition hover:bg-green-200"
                                  onClick={() =>
                                    handleQuantityChange(item.product_id, 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="py-4 font-bold text-right text-green-700 whitespace-nowrap">
                              ₹
                              {parsePrice(item.price).toLocaleString("en-IN", {
                                minimumFractionDigits: 2,
                              })}
                            </td>
                            <td className="py-4 font-bold text-right text-green-700 whitespace-nowrap">
                              ₹
                              {(
                                parsePrice(item.price) * item.quantity
                              ).toLocaleString("en-IN", {
                                minimumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="flex absolute left-0 bottom-2 justify-start px-2 mt-8 w-full sm:px-4">
                  <a
                    href="/shop"
                    className="flex gap-1 items-center text-base font-semibold text-green-700 hover:underline"
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Continue Shopping
                  </a>
                </div>
              </section>
              {/* Order Summary Section */}
              <aside className="w-full max-w-md mx-auto lg:mx-0 lg:w-96 bg-gray-50 rounded-2xl p-4 sm:p-6 flex flex-col gap-6 border border-gray-100 shadow-sm min-w-[220px]">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>
                <div className="flex justify-between items-center text-base font-medium text-gray-700">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between items-center text-base font-medium text-gray-700">
                  <span>Subtotal</span>
                  <span>
                    ₹
                    {subtotal.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-medium text-gray-700">
                    Shipping
                  </span>
                  <select
                    className="px-3 py-2 w-full text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={shipping}
                    onChange={(e) => setShipping(e.target.value)}
                  >
                    {shippingOptions.map((opt, i) => (
                      <option key={i} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-medium text-gray-700">
                    Promo Code
                  </span>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter your code"
                      className="flex-1 px-3 py-2 text-gray-700 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="px-4 py-2 font-semibold text-white bg-red-400 rounded-lg shadow transition hover:bg-red-500">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 text-lg font-bold text-gray-900 border-t border-gray-200">
                  <span>Total Cost</span>
                  <span>
                    ₹
                    {total.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <button
                  className="py-3 mt-2 w-full text-lg font-bold text-white bg-green-700 rounded-full shadow transition hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => router.push("/e-contact")}
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </aside>
            </div>
          </main>
          <NewsLetter />
          <EFooter />
        </>
      )}
    </div>
  );
}
