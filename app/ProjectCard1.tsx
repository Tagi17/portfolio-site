"use client";

import "./globals.css";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Parallax from "./parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import defi from "./defi.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const slides = [
  {
    id: 'item1',
    title: 'Smart-Dashboard',
    description: 'Smart-Dashboard is a web application designed to provide users with a comprehensive dashboard for managing their crypto assets and interacting with the blockchain.',
    imageSrc: defi,
  },
  {
    id: 'item2',
    title: 'Churro-Relay',
    description: 'Churro-Relay is about...',
    imageSrc: defi,
  },
  {
    id: 'item2',
    title: 'The-League',
    description: 'The League is about...',
    imageSrc: defi,
  },
];


const ProjectCard1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useGSAP(() => {
    const items = gsap.utils.toArray(".item1 .content1") as HTMLElement[];

    const endValue = items.reduce(
      (acc, item) => acc + item.offsetHeight,
      window.innerHeight
    );

    const tlCards = gsap.timeline({
      defaults: {
        ease: "none",
        duration: 1,
      },
      scrollTrigger: {
        trigger: ".accordion-section1",
        start: "top 30%",
        end: "+=700",
        // scrub: true,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    gsap.set(".item1:not(:first-child) .content1", { height: "0" });
    gsap.set(".slideItem", { opacity: "0" });

    items.forEach((item1, i) => {
      tlCards
        .to(item1, { height: 0 })
        .to(items[i + 1], { height: "auto" }, "<");

      const slideItems = document.querySelectorAll(".slideItem");
      const totalDuration = 16;
      const delayBetweenItems = 4;
      const staggerDelay = 4;
      slideItems.forEach((slideItem, index) => {
        gsap.set(slideItem, { xPercent: 10, opacity: 0  });
        // const startTime = index * (totalDuration + delayBetweenItems);
        tlCards
          .to(
            slideItem,
            {
              xPercent: 0,
              opacity: 1,
              duration: totalDuration / 2,
              ease: "power1.inOut",
              stagger: staggerDelay / 2,
            }, "+=2"
          
          )
          .to(
            slideItem,
            {
              delay: index * delayBetweenItems,
              xPercent: -100,
              opacity: 0,
              duration: totalDuration / 2,
              ease: "power1.inOut",
              stagger: staggerDelay / 2, // Time between the start of each item's exit animation
            }, "+=2");
          
        
      });
    });
    gsap.set(".wrapper1", { autoAlpha: 1 });

    return () => {
      tlCards.kill();
    };
  });

  return (
    <div>
      <div className="section1 accordion-section1 flex justify-center items-center min-h-screen h-screen">
        <div className="wrapper1 w-full px-4 md:px-20 max-w-screen-xl mx-auto">
          <div
            className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
            id="about-me"
            data-label="label0"
          >
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-5 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">About Me</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-10">
              Fuelled by a passion for crafting impactful products, my journey
              into programming began with Girls Who Code—a pivotal experience
              that into programming began with Girls Who Code—an experience that
              sparked my curiosity in tech. It wasn&apos;t until I encountered
              Bitcoin that I found my true calling. The revolutionary technology
              behind it not only captivated me but also unveiled a realm of
              exciting possibilities. Now, I&apos;m on a mission to explore this
              frontier and leverage my design skills to enhance user experiences
              exciting possibilities. Now, I&apos;m integrating blockchain into
              my projects and I leverage my design skills to enhance user
              experiences in innovative ways.
              <div className="p-6"></div>
            </div>
          </div>
          <div
            className="item1 container mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
            id="projects"
            data-label="label1"
          >
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">Projects</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-9">
              <div>
                {" "}
                Currently working on the smart-dashboard, Churro-relay, and The
                League
              </div>
              <div className="p-5"></div>
              <div className="main-slide relative overflow-hidden ">
                <div className="slide" data-haschild="true">
                {slides.map((slide, index) => (
                  <div key={slide.id} className={`slideItem absolute top-0 left-0 w-full h-full transition-opacity duration-300 ease-linear ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`} style={{ visibility: currentIndex === index ? 'visible' : 'hidden' }}>
                    <div className="item">
                      <div className="objects">{slide.description}</div>
                      <div className="image">
                        <Image src={slide.imageSrc} height={50} width={50} alt={slide.title} />
                      </div>
                    </div>
                  </div>
                ))}
                </div>
                <div className="p-1"></div>
              </div>
            </div>
          </div>
          <div
            className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
            id="contact"
            data-label="label2"
          >
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">Boop</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-9">
              <div>Contact Me Here:</div>
              <div className="p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard1;
