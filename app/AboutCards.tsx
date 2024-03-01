"use client";

import "./globals.css";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import Image from "next/image";
import Parallax from "./parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import glow from "./glow.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const AboutCards = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const [inView, setInView] = useState(false);


  useGSAP(() => {
    const items = gsap.utils.toArray(".item .content") as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordion-section",
        start: "top top",
        // end: "+=" + 100 * items.length + "%",
        end: "+=900",
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
      },
    });

    gsap.set(".item:not(:first-child) .content", { height: "0" });

    items.forEach((item, i) => {
      if (items[i + 1]) {
        tl.to(item, { height: 0 }).to(items[i + 1], { height: "auto" }, "<");
      }
    });

    gsap.set(".wrapper", { autoAlpha: 1 });
    
    return () => {
      tl.kill();
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div >
        {/* <Parallax speed={1}> */}
          {/* <Parallax speed={1} className={"self-end"}> */}
          <div className="accordion-section">
            <div className="wrapper">
              <div className="item border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
                <div className="header bg-gray-700 text-white text-xl font-bold p-4 cursor-pointer">
                  Cars
                </div>
                <div className="content p-4 bg-gray-200 text-gray-800 hidden">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        Fuelled by a passion for crafting impactful products, my journey into programming began with Girls Who Code—an experience that sparked my curiosity in tech. It wasn&apos;t until I encountered Bitcoin that I found my true calling. The technology behind it not only captivated me but also unveiled a realm of exciting possibilities. Now, I&apos;m integrating blockchain into my projects and I leverage my design skills to enhance user experiences in innovative ways.
                    </div>
                      <div className="ml-20 flex justify-center items-center">
                        <Image
                          className="rounded-lg"
                          src={glow}
                          height={100}
                          width={400}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        {/* </Parallax> */}
        <div>
        <div className="accordion-section">
            <div className="wrapper">
              <div className="item mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
                <div className="header bg-gray-700 text-white text-xl font-bold p-4 cursor-pointer">
                  Cars
                </div>
                <div className="content p-4 bg-gray-200 text-gray-800 hidden">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        Fuelled by a passion for crafting impactful products, my journey into programming began with Girls Who Code—an experience that sparked my curiosity in tech. It wasn&apos;t until I encountered Bitcoin that I found my true calling. The technology behind it not only captivated me but also unveiled a realm of exciting possibilities. Now, I&apos;m integrating blockchain into my projects and I leverage my design skills to enhance user experiences in innovative ways.
                    </div>
                      <div className="ml-20 flex justify-center items-center">
                        <Image
                          className="rounded-lg"
                          src={glow}
                          height={100}
                          width={400}
                          alt="logo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutCards;
