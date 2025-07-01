"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

import EHeader from "@/e-components/Header";
import EFooter from "@/e-components/Footer";
import Offer from "@/e-components/Offer";
import NewsLetter from "@/e-components/NewsLetter";

const EContact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isRobotChecked, setIsRobotChecked] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.warning("Please fill in all the fields");
      return;
    }
    if (name.length < 3) {
      toast.warning("Name must be at least 3 characters long");
      return;
    }
    if (name.length > 30) {
      toast.warning("Name must not exceed 30 characters");
      return;
    }
    if (!validateEmail(email)) {
      toast.warning("Please enter a valid email address");
      return;
    }
    if (!isRobotChecked) {
      toast.warning("Please confirm you are not a robot");
      return;
    }
    try {
      // Replace with your actual API endpoint
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SAAS_BASE_URL}/api/v2/contact`,
        {
          name,
          email,
          message,
        }
      );

      if (res.data.success) {
        toast.success("Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsRobotChecked(false);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        toast.error(message);
      } else {
        toast.error("Server error, try again later.");
      }
    }
  };

  return (
    <div className="mt-8 bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <div className="flex items-center mb-2">
                <span className="mr-3 w-8 h-px bg-yellow-500"></span>
                <p className="text-sm font-medium tracking-wider text-gray-600 uppercase">
                  Get in Touch
                </p>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                Have a Project in Mind? <br />
                Let&apos;s <span className="text-green-700">Talk!</span>
              </h2>
              <p className="mt-4 text-gray-500">
                We&apos;re here to help you with any questions you may have.
                Fill out the form, and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <Phone size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">Free +92 (020)-9850</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <Mail size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">needhelp@company.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 text-white bg-green-700 rounded-full">
                  <MapPin size={22} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    66 broklyn golden street. New York
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-gray-50 rounded-lg shadow-sm lg:p-10">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="grid grid-cols-1 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3 w-full bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 w-full bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="p-3 w-full bg-white rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <div className="flex flex-col gap-4 items-center mt-6">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="robot-check"
                    checked={isRobotChecked}
                    onChange={(e) => setIsRobotChecked(e.target.checked)}
                    className="w-4 h-4 cursor-pointer accent-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <label
                    htmlFor="robot-check"
                    className="text-base text-gray-700 cursor-pointer select-none"
                  >
                    I am not a robot
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={!isRobotChecked}
                  className={`inline-flex justify-center items-center px-8 py-3 font-semibold text-white rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
                    isRobotChecked
                      ? "bg-green-700 cursor-pointer hover:bg-green-800"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Offer />
      <EHeader />
      <EContact />
      <NewsLetter />
      <EFooter />
    </div>
  );
}
