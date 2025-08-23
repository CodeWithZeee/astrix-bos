import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const links = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact us" },
    { href: "/about", label: "About" },
  ];
  return (
    <section className="fixed w-full h-16 z-[999] top-0 bg-[#000000] Major-mono font-extrabold  ">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-4 relative z-10">
          {/* Logo */}
          <div className="">
            <Image src="/logo.png" alt="Logo"  width={50} height={50} />
          </div>
          {/* Links */}
          <div className="flex gap-28">
            {links.map((link) => (
              <div key={link.href} className="navLinks relative group">
                <Link href={link.href} className="">
                  {link.label}
                </Link>
                <div className="absolute h-[1px] w-0 bottom-0 navLinks-underline" />
              </div>
            ))}
          </div>
          {/* For space */}
          <div></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Navbar;
