"use client";
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPage = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact us" },
    { href: "/about", label: "About" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <section className="fixed w-full h-24 z-[999] top-0 bg-[#000000] asimovian text-xl font-extrabold">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-4 relative z-10">
          {/* Logo */}
          <div className="">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-28">
            {links.map((link) => {
              const isActive = currentPage === link.href;
              console.log(currentPage, link.href);
              return (
                <div
                  key={link.href}
                  className={`navLinks relative group flex items-center ${
                    isActive ? "text-green-500" : "text-gray-400"
                  }`}
                >
                  <Link
                    href={link.href}
                    className="flex items-center"
                    prefetch={true}
                  >
                    {link.label}
                  </Link>
                  <div className="absolute h-[1px] w-0 bottom-0 navLinks-underline" />
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* For space on desktop */}
          <div className="hidden md:block"></div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#000000] border-t border-gray-700 animate-fade-in">
            <div className="flex flex-col py-4">
              {links.map((link) => (
                <div key={link.href} className="navLinks relative group">
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    prefetch={true}
                  >
                    {link.label}
                  </Link>
                  <div className="absolute h-[1px] w-0 bottom-0 navLinks-underline" />
                </div>
              ))}
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
