"use client";

import "./globals.css";

import React, { use, useEffect, useLayoutEffect, useRef } from "react";

import AboutCards from "./AboutCards";
import Animationgrid from "./animateGrid";
import CircularShader from "./CircularShader";
import GridAnimation from "./gridThree";
import Head from "next/head";
import Image from "next/image";
import NODE from "./NODE.png";
import Navbar from "./navbar";
import ProjectCard from "./ProjectCard";
import Script from "next/script";
import ShaderAnimate from "./ShaderAnimate";
import ShaderCode from "./ShaderCode";
import SphereAnimation from "./SphereGeometry";
import TextPlugin from "gsap/TextPlugin";
import ThreeAnimation from "./threeAnimation";
import ThreeJSAnimation from "./threejs";
import TorusAnimation from "./animate";
import animateStar from "./animateStar.png";
import clear from "./clear.png";
import flower from "./flower.png";
import fourstar from "./fourstar.png";
import gflower from "./gflower.png";
import gsap from "gsap";
import nflower from "./nflower.png";
import whiteStar from "./whiteStar.png";
import white_star from "./white_star.png";

gsap.registerPlugin(TextPlugin);

//slowly fade in

export default function Home() {

  
  useLayoutEffect(() => {
    const words = ["Creative Coder", "Developer", "Designer"];

    let cursor = gsap.to(".cursor", {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    let animateFlower = gsap.to(".animateFlower", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      ease: "none",
      duration: 6,
    });

    gsap
      .timeline({ duration: 1, autoAlpha: 0 })
      .fromTo(
        ".animatedDiv",
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 1, ease: "power3.out" }
      );

   

    let masterTl = gsap.timeline({ repeat: -1 });
    words.forEach((words) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 }); //for each of these words, making them have their own timeline and then pass into master timeline
      tl.to(".text", { duration: 1, text: words });
      masterTl.add(tl); //now pass in child timeline to master timeline
    });
  });

  // const threeJSContainerRef = useRef<HTMLDivElement>(null);
  const threeJSContainerRef = useRef(null);
  return (
    <div className="mx-auto w-7/12 my-6">
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
        strategy="afterInteractive"
      />
      <div className="rounded-lg mt-20 mb-20" style={{ width: "100%" }}>
        <CircularShader containerRef={threeJSContainerRef} />
      </div>
      <div className="text-6xl flex justify-center items-center three-d">
        Welcome, I&apos;m Inzhagi
      </div>
      {/* <div className="relative w-full h-5 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#ea00d9] to-[#5de729] blur group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt animate-gradient">
      
      </div> */}
      {/* <div className="animatedDiv mx-auto my-7 mt-10 p-2 border-2 border-secondary-100 bg-primary-500 rounded-lg shadow-lg w-7/12 justify-between"> */}
      <div className="animatedDiv mx-auto my-7 mt-20 mb-20 p-2 border-2 border-secondary-100 bg-primary-500 rounded-lg shadow-lg w-3/12 origin-bottom opacity-0 three-d">
        <div className="flex justify-center items-center">
          <div className="text text-2xl"></div>
          <div className="cursor mt-2">_</div>
        </div>
        {/* <div className="phrases opacity-0">Crafting User-Centric Digital Experiences</div> */}
      </div>
      {/* <div className="flex justify-end">
        <Image src={fourstar} height={100} width={90} alt="star" />
        <Image src={fourstar} height={100} width={90} alt="star" />
        <Image
          src={fourstar}
          className="mb-2"
          height={100}
          width={90}
          alt="star"
        />
      </div> */}
      <div className="flex justify-center items-center mt-35 ">
        <Image
          className="animateFlower white-filter mx-2"
          src={nflower}
          height={100}
          width={70}
          alt="star"
        />
        <Image
          className="animateFlower white-filter mx-2"
          src={nflower}
          height={100}
          width={70}
          alt="star"
        />
        <Image
          className="animateFlower white-filter mx-2"
          src={nflower}
          height={100}
          width={70}
          alt="star"
        />
      </div>
      <div>
        {/* <AboutCards /> */}
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}
