import "./globals.css";

import Image from "next/image";
import Link from 'next/link';
import logo from './cutiesemblem.png'

export default function Navbar() {
  return (
    <div>
        <nav className="mx-auto mt-10 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <Image src={logo} className="object-contain h-16 w-auto" alt='logo'/>
              </Link>
            </div>
            <div className="flex items-center space-x-4 three-d">
                {/* <a href="#home" className="text-white hover:text-blue-500 text-base">Home</a> */}
                <Link href="/about">
                <a href="#about" className="text-white hover:text-blue-500 text-base">About</a>
                </Link>
                <Link href="/portfolio">
                <a href="#portfolio" className="text-white hover:text-blue-500 text-base">Portfolio</a>
                </Link>
                <Link href="/contact">
                <a href="#contact" className="text-white hover:text-blue-500 text-base pr-6">Contact</a>
                </Link>
            </div>
        </nav>
    </div>
  );
}
