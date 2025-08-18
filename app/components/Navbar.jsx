import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
  ];
  return (
    <section className="">
      <MaxWidthWrapper>
        <div className="hidden xl:flex items-center justify-between py-4">
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
