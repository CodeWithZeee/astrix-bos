import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact us" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ];
  return (
    <section className="fixed w-full z-[999] top-0 bg-[#0b0f17]">
      {/* Gradient overlay on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E263A] via-[#1E263A]/70 to-transparent h-3/4 pointer-events-none"></div>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-4 relative z-10">
          {/* Logo */}
          <div className="">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </div>
          {/* Links */}
          <div className="flex space-x-10">
            {links.map((link) => (
              <div key={link.href} className="navLinks relative group">
                <Link href={link.href} className="">
                  {link.label}
                </Link>
                <div className="absolute h-[1px] bg-white bottom-0 group-hover:w-[80%] w-0 transition-all duration-300" />
              </div>
            ))}
          </div>
          {/* Button */}
          <div>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
