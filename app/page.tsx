"use client";

import "./globals.css";

import React, {
  use,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import Animationgrid from "./animateGrid";
import CircularShader from "./CircularShader";
import CoinApi from "./CoinApi";
import Contact from "./Contact";
import GridAnimation from "./gridThree";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";
import Links1 from "./Links1";
import NODE from "./NODE.png";
import Navbar from "./navbar";
import ProjectCard from "./ProjectCard";
import ProjectCard1 from "./ProjectCard1";
import Script from "next/script";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShaderAnimate from "./ShaderAnimate";
import ShaderCode from "./ShaderCode";
import TextPlugin from "gsap/TextPlugin";
import ThreeAnimation from "./threeAnimation";
import animateStar from "./animateStar.png";
import clear from "./clear.png";
import flower from "./flower.png";
import fourstar from "./fourstar.png";
import gflower from "./gflower.png";
import gsap from "gsap";
import nflower from "./nflower.png";
import { useGSAP } from "@gsap/react";
import whiteStar from "./whiteStar.png";
import white_star from "./white_star.png";

gsap.registerPlugin(TextPlugin);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

//slowly fade in

export default function Home() {
  useGSAP(() => {
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
      if (document.querySelector(".text")) {
        tl.to(".text", { duration: 1, text: words });
        masterTl.add(tl); //now pass in child timeline to master timeline
      }
    });
  });
  const flowerTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".flower",
      start: "20",
    },
  });
  const [activeTrackerIndex, setActiveTrackerIndex] = useState<number | null>(
    null
  );
  const [trackerVisibility, setTrackerVisibility] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setActiveTrackerIndex(index);
    setTrackerVisibility(true); // Correctly shows the tracker on hover.
  };
  
  const handleMouseLeave = () => {
    // Use a timeout to give the user a chance to move to the tracker.
    setTimeout(() => {
      // Check if the active tracker index is still the same as the one being hovered over before hiding.
      // This prevents hiding the tracker if quickly moving between images.
      if (trackerVisibility && activeTrackerIndex !== null) {
        setActiveTrackerIndex(null);
        setTrackerVisibility(false);
      }
    }, 500); // Delay before hiding the tracker to allow moving to it.
  };
  
  const handleClick = (index: number) => {
    // If the tracker is already visible and clicked again, it should toggle visibility.
    if (activeTrackerIndex === index && trackerVisibility) {
      setTrackerVisibility(false);
      setActiveTrackerIndex(null); // Optionally reset, depending on desired behavior when toggling off.
    } else {
      setActiveTrackerIndex(index);
      setTrackerVisibility(true); // Show and "lock" the tracker on click.
    }
  };
  
  const handleTrackerMouseLeave = () => {
    // Delay the hiding when leaving the tracker to avoid immediate disappearance.
    setTimeout(() => {
      setTrackerVisibility(false);
      setActiveTrackerIndex(null);
    }, 500);
  };
  
  interface Tracker {
    type: string;
    text?: string;
    component?: JSX.Element;
  }

  const renderTrackerContent = (tracker: Tracker) => {
    if (tracker.type === "text" && tracker.text) {
      // Directly render content based on the exact text
      let content;
      if (tracker.text.trim() === "https://github.com/Tagi17") {
        // For GitHub link
        content = (
          <span>My GitHub:&nbsp;
            <a href="https://github.com/Tagi17" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Tagi17
            </a>
          </span>
        );
      } else if (tracker.text.includes("Medium")) {
        // For Medium link, ensuring the text includes 'Medium'
        content = (
          <span>Read my articles here on&nbsp;
            <a href="https://medium.com/@inzhagey" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              Medium
            </a>
          </span>
        );
      } else {
        // Default text rendering
        content = <span>{tracker.text}</span>;
      }
  
      return <div className="text-white text-2xl three-d py-3 px-3">{content}</div>;
    } else if (tracker.type === "component" && tracker.component) {
      return tracker.component;
    } else {
      return null; // Or some fallback JSX if necessary
    }
  };
  const images = [
    {
      src: "/path/to/flower/image.jpg",
      tracker: { type: "component", component: <CoinApi /> },
    },
    {
      src: "/path/to/flower/image.jpg",
      tracker: { type: "text", text: "https://github.com/Tagi17 " },
    },
    {
      src: "/path/to/flower/image.jpg",
      tracker: { type: "text", text: "Read my articles here on Medium" },
    },
  ];

  const trackers = document.querySelectorAll(".tracker");
  gsap.set(trackers, { opacity: 0 });
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    flowerTL.to(box, {
      opacity: 1,
    });
    box.addEventListener("mouseenter", () => {
      gsap.to(trackers[index], { opacity: 1, duration: 0.3 });
    });
    box.addEventListener("mouseleave", () => {
      gsap.to(trackers[index], { opacity: 0, duration: 0.3 });
    });
  });
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
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js"
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
      <div className="flex justify-center items-center mt-35 flower">
        {images.map((image, index) => {
          return (
            <div key={index} className="relative">
              <Image
                className="animateFlower white-filter mx-2 box"
                src={nflower}
                height={100}
                width={70}
                alt="flower"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(index)}
              />
              {activeTrackerIndex === index && (
                <div className="absolute border-2 border-secondary-500 bg-primary-500 rounded-lg shadow-xl overflow-hidden tracker w-80 mt-5 pt-2 px-5 pr-2 mr-5" onMouseLeave={handleTrackerMouseLeave}>
                  <div className="text-white text-2xl three-d py-3 px-3">

                    {renderTrackerContent(image.tracker)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
      </div>

      <div>
        {/* <ProjectCard /> */}
        {/* <ProjectCard1 /> */}
        <Links />
        <Contact/>
        {/* <Links1/> */}
      </div>
    </div>
  );
}
