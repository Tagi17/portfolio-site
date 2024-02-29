"use client";

import "./globals.css";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import Image from "next/image";
import Parallax from "./parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import glow from "./glow.png";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutCards = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const [inView, setInView] = useState(false);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = document.querySelector("#cards-container");

    const sections: (HTMLElement | null)[] = [
      aboutRef.current,
      projectRef.current,
    ];


    const items = gsap.utils.toArray(".boxy .content") as HTMLElement[];
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".accordion-section",
          start: "top top",
          end: "+=" + 100 * items.length + "%",
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
          markers: true
        }
      })
      
      gsap.set(".boxy:not(:first-child) .content", { height: 0 });

      items.forEach((boxy, i) => {
        if (items[i+1]) {
          tl.to(boxy, {height: 0})
            .to(items[i + 1], { height: "auto"}, "<");
        }
      });
      gsap.set(".wrapper", {autoAlpha: 1});
      
  }, []);

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
    <div id="cards-container" className="cards-container">
      {/* <div ref={aboutRef} className={`text-5xl mt-20 mx-auto p-2 rounded-lg shadow-xl mb-20 overflow-hidden${inView ? "in-view" : "" }`}> */}
        <Parallax speed={1}>
          {/* <Parallax speed={1} className={"self-end"}> */}
          <div className="accordion-section">
            <div className="wrapper">
              <div className="boxy overflow-hidden">
                <div className="card mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl mb-30 max-h-32 overflow-hidden opacity-14 transition-opacity duration-300 ease-in-out">
                  <div className="text-5xl mt-10 three-d ml-8">Cars</div>
                  <div className="grid md:grid-cols-2 ml-10 my-14">
                    <div className="text-3xl leading-normal three-d content">
                      Fuelled by a passion for crafting impactful products, my journey
                      into programming began with Girls Who Code—an experience that
                      sparked my curiosity in tech. It wasn&apos;t until I encountered
                      Bitcoin that I found my true calling. The technology behind it
                      not only captivated me but also unveiled a realm of exciting
                      possibilities. Now, I&apos;m integrating blockchain into my
                      projects and I leverage my design skills to enhance user
                      experiences in innovative ways.
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
        </Parallax>
        <div>
          <Parallax speed={1}>
            {/* <Parallax speed={1} className={"self-end"}> */}
            <div className="accordion-section">
              <div className="wrapper">
                <div className="boxy overflow-hidden">
                  <div ref={projectRef} className="card box mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg mb-20 max-h-32 overflow-hidden opacity-14 transition-opacity duration-300 ease-in-out ">
                    <div className="text-5xl mt-10 three-d ml-8">Boats</div>
                    <div className="grid md:grid-cols-2 ml-10 my-14">
                      <div className="text-3xl leading-normal content">
                        These are projects i have worked only Here we have the
                        dashboard here is a relay projectshere is the shuttle tracker
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      {/* </div> */}
      {/* <div>
      <Parallax speed={1} className={"self-end"}>
      <div ref={projectRef} className="box mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg mb-44 max-h-32 overflow-hidden opacity-14 transition-opacity duration-300 ease-in-out ">
        <div className="text-5xl mt-10 three-d ml-8">Planes</div>
          <div className="grid md:grid-cols-2 ml-10 my-14">
            <div className="text-3xl leading-normal">
              These are projects i have worked only
              Here we have the dashboard
              here is a relay projectshere is the shuttle tracker
            </div>
          </div>
        </div>
        </Parallax>
      </div> */}
    </div>
  );
};

export default AboutCards;
