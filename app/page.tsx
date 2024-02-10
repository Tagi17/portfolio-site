'use client'

import "./globals.css";

import React, { use, useEffect, useRef } from "react";

import Cards from './cards';
import Image from "next/image";
import NODE from "./NODE.png";
import Navbar from "./navbar";
import ProjectCard from "./ProjectCard";
import SphereAnimation from "./SphereGeometry";
import TorusAnimation from "./animate";
import clear from './clear.png'
import fourstar from './fourstar.png'

export default function Home() {

  return (
    <div className="mx-auto w-7/12 my-6">
      <div className="text-white text-6xl mt-40">INZHAGI</div>
      <div className="relative w-full h-5 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt animate-gradient">
        {/* <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"></div> */}
      </div>
      <div className="mx-auto my-7 mt-10 p-2 border-2 border-secondary-100 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
        Crafting User-Centric Digital Experiences
      </div>
      <div className="flex justify-end">
        <Image src={fourstar} height={100} width={90} alt='star'/>
        <Image src={fourstar} height={100} width={90} alt='star'/>
        <Image src={fourstar} height={100} width={90} alt='star'/>
      </div>
      <div>
        <Cards/>
      </div>
      <div className="">
      <ProjectCard/>
        {/* <SphereAnimation/> */}
        {/* <Image className="mr-2" src={clear} height={700} width={700} alt="logo" /> */}
      </div>
    </div>
  );
}
