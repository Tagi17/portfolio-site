'use client'

import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import React from "react";
import logo from "./cutiesemblem.png";

export default function Navbar() {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault(); // Prevent the default anchor behavior
    window.dispatchEvent(
      new CustomEvent("navigateToSection", { detail: { targetId } })
    );
  };

  return (
    <div>
      <nav className="mx-auto mt-10 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
        <div className="flex items-center">
        <Link href="/">
            <Image
              src={logo}
              className="object-contain h-16 w-auto"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-4 three-d">
        <Link href="#about-me" className="text-white hover:text-blue-500 text-base">
            About
          </Link>
          <Link href="#projects" className="text-white hover:text-blue-500 text-base">
            Portfolio
          </Link>
          <Link href="#contact" className="text-white hover:text-blue-500 text-base pr-6">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
