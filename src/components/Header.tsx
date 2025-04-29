"use client";
import Image from "next/image";
import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full ">

            <div className="top-bar bg-[#05091e] ">
                <div className=" text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center max-w-[1800px] mx-auto">
                    <div className="hidden sm:flex flex-col sm:flex-row items-center gap-4">
                        <span className="flex items-center gap-1"><IoLocation /> 1321 Gateway Atlantic City, Florida, 54012</span>
                        <span className="flex items-center gap-1"><MdEmail /> infodesk@solutek.net</span>
                        <span className="flex items-center gap-1"> <FaClock /> 9.00 am - 5.00 pm</span>
                    </div>
                    <div className="flex items-center gap-2 md:mt-0">
                        <SocialIcon Icon={FaFacebookF} />
                        <SocialIcon Icon={FaTwitter} />
                        <SocialIcon Icon={FaLinkedinIn} />
                        <SocialIcon Icon={FaPinterestP} />
                    </div>
                </div>
            </div>

            <div className="navbar-sec bg-white shadow-md">

                <nav className="flex items-center justify-between px-4 py-4  relative max-w-[1800px] mx-auto">

                    <div className="flex items-center space-x-2">
                        <a href="#">
                            <Image
                                src="/images/logo.png"
                                alt="Solutek Logo"
                                width={180}
                                height={60}
                            />
                        </a>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden lg:flex space-x-10 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="text-black hover:text-orange-600">{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-3 font-semibold text-sm hidden md:block">GET A QUOTE NOW</button>
                        <button
                            className="p-2 bg-orange-100 rounded-md lg:hidden"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <HiOutlineMenu className="text-orange-600 text-2xl" />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="absolute top-full left-0 w-full bg-white shadow-md p-4 lg:hidden z-99">
                            <ul className="space-y-3 text-gray-700 font-medium">
                                {navLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

const SocialIcon = ({ Icon }: { Icon: React.FC<{ className?: string }> }) => (
    <a href="#" className="bg-white p-1.5 rounded hover:bg-gray-200">
        <Icon className="text-[#05091e] text-sm" />
    </a>
);

export default Header;
