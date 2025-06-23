import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

const EFooter = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaPinterestP, href: "#", label: "Pinterest" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
        { name: "Career", href: "/career" },
      ],
    },
    {
      title: "Customer Services",
      links: [
        { name: "My Account", href: "/account" },
        { name: "Track Your Order", href: "/track-order" },
        { name: "Return", href: "/returns" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Our Information",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "User Terms & Condition", href: "/terms" },
        { name: "Return Policy", href: "/return-policy" },
      ],
    },
  ];

  return (
    <footer className="text-white bg-green-800">
      {/* Main Footer Content */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-3">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6 space-x-3">
              <div className="flex justify-center items-center w-12 h-12 bg-yellow-500 rounded-full">
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <span className="text-2xl font-bold">Furniture.</span>
            </div>
            
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex justify-center items-center w-8 h-8 rounded-full border border-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links and Contact Container */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {/* Footer Links Sections */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className="text-sm text-gray-300 transition-colors duration-200 hover:text-white">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="transition-colors duration-200 cursor-pointer hover:text-white">
                  +0123-456-789
                </p>
                <p className="transition-colors duration-200 cursor-pointer hover:text-white">
                  example@gmail.com
                </p>
                <address className="not-italic transition-colors duration-200 hover:text-white">
                  8502 Preston Rd.<br />
                  Inglewood, Maine<br />
                  96380
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#b58a21]">
        <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between items-center space-y-2 sm:flex-row sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm">
              Copyright © 2024 Furniture. All Rights Reserved.
            </div>

            {/* Language and Currency */}
            <div className="flex items-center space-x-4 text-sm">
              <button className="flex items-center space-x-1">
                <span>English</span>
                <FaChevronDown className="w-3 h-3" />
              </button>
              <span className=''>|</span>
              <button className="flex items-center space-x-1">
                <span>USD</span>
                <FaChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EFooter;
