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
import fourstar from "./fourstar.png";
import gsap from "gsap";
import whiteStar from "./whiteStar.png";

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

    let boxTL = gsap.timeline({ delay: 0.5 });
    boxTL.to(".animatedDiv", {
      duration: 1,
      width: "17vw",
      delay: 0.5,
      ease: "power4.inOut",
    });
    // animates from below 7 viewport width, vertically starts 7vw lower than it would noramlly be and then will animate to its normal position
    // .to(".animatedDiv", {opacity: 1, duration: 0.5}) // Make the box visible
    // .from(".phrases", { duration: 1, x: "2vw", ease: "power3.out" })
    // .to(".animatedDiv", { duration: 1, width: "3vw", ease: "elastic.out" });

    gsap
      .timeline({ autoAlpha: 0 })
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
    // .to(".animatedDiv", {opacity: 1, duration: 0.5}) // Make the box visible
    // .from(".animatedDiv", {width: '100%', duration: 1, ease: "power3.out"}) // Rise from the bottom
    // .from(".phrases", {opacity: 0, duration: 1, y: "7vw", ease: "power3.out"}, "-=1.5"); // Animate phrases, starts earlier than slide out to blend animations
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
      <div
        className="rounded-lg mt-2"
        style={{ height: "20vh", width: "100%" }}
      >
        <CircularShader containerRef={threeJSContainerRef} />
      </div>
      <div className="text-white text-6xl mt-40">INZHAGI</div>
      <div className="relative w-full h-5 absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#ea00d9] to-[#711c91] blur group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt animate-gradient">
        {/* <div className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-900 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"></div> */}
      </div>
      {/* <div className="animatedDiv mx-auto my-7 mt-10 p-2 border-2 border-secondary-100 bg-primary-500 rounded-lg shadow-lg w-7/12 justify-between"> */}
      <div className="animatedDiv mx-auto my-7 mt-10 p-2 border-2 border-secondary-100 bg-primary-500 rounded-lg shadow-lg w-7/12 origin-bottom opacity-0">
        <div className="flex justify-center items-center">
          <div className="cursor mt-2 text-center">_</div>
          <div className="text text-2xl text-center"></div>
        </div>
        {/* <div className="phrases opacity-0">Crafting User-Centric Digital Experiences</div> */}
      </div>
      <div className="flex justify-end">
        <Image src={fourstar} height={100} width={90} alt="star" />
        <Image src={fourstar} height={100} width={90} alt="star" />
        <Image
          src={fourstar}
          className="mb-2"
          height={100}
          width={90}
          alt="star"
        />
      </div>
      <div>
        <AboutCards />
      </div>
      <div>
        <ProjectCard />
      </div>
    </div>
  );
}
