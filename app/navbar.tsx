import "./globals.css";

import Image from "next/image";
import Link from 'next/link';
import logo from './cutiesemblem.png'

export default function Navbar() {
  return (
    <div>
        <nav className="mx-auto mt-10 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <Image src={logo} className="object-contain h-16 w-auto" alt='logo'/>
              </a>
            </div>
            <div className="flex items-center space-x-4 three-d">
                {/* <a href="#home" className="text-white hover:text-blue-500 text-base">Home</a> */}
                <a href="/#about-me" className="text-white hover:text-blue-500 text-base">
                About
                </a>
                <a href="/#projects" className="text-white hover:text-blue-500 text-base">
                Portfolio
                </a>
                <a href="/#contact" className="text-white hover:text-blue-500 text-base pr-6">
                Contact
                </a>
            </div>
        </nav>
    </div>
  );
}
