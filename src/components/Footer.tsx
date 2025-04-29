"use client";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1630] text-gray-300 pt-16 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Solutek</h2>
          <p className="text-sm leading-relaxed">
            Professional IT solutions crafted for modern businesses. Keeping
            your digital world secure, scalable, and smart.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#ff4a17] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#ff4a17] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#ff4a17] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-[#ff4a17] transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2"><IoLocation/> 123 Tech Street, New York, USA</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> +1 234 567 890</li>
            <li className="flex items-center gap-2"><MdEmail/> info@solutek.com</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter and stay updated on our latest solutions.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-3 rounded-l-md bg-gray-800 text-sm text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#ff4a17] px-4 py-2 rounded-r-md text-white text-sm font-semibold hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Solutek. All rights reserved.
      </div>
    </footer>
  );
}
