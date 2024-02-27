'use client'

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Image from "next/image";
import Parallax from "./parallax";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import glow from "./glow.png";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const AboutCards = () => {
    const cardRef = useRef(null);
    const boxRef = useRef(null);
    const [inView, setInView] = useState(false);

    // useLayoutEffect(() =>{
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: cardRef.current,
    //       start: "20px 50% ", // when the top of the trigger hits the bottom of the viewport
    //       markers: true,
    //       end: "bottom top", // when the bottom of the trigger hits the top of the viewport
    //       scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    //       toggleActions: "restart none none none"
    //     }
    //   });
  
    //   tl.from(cardRef.current, {
    //     y: 100, // starts 50 pixels down from the original position
    //     autoAlpha: 0, // start with the card completely transparent
    //     ease: 'none'
    //   });
  
    // }, []);
  
    useLayoutEffect(() => {
      gsap.matchMedia({
        "(min-width: 500px)": function() {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          });

          tl.from(cardRef.current, {
            height: 0,
            ease: "none",
          });
        },
        "all": function() {
          // Define the timeline for all screens
          // You can define animations here that will run on all screen sizes
        },
      });
      
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }, []);
    

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={cardRef} className={`text-5xl mt-20 mx-auto p-2 rounded-lg shadow-xl mb-20 ${inView ? 'in-view' : ''}`}>
    <Parallax speed={1} className={"self-end"}>
      <div className="text-5xl mt-20 three-d">About Me</div>
      <div className="mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl mb-20 boxy">
        <div className="grid md:grid-cols-2 ml-10 my-14">
          <div className="text-3xl leading-normal">
            Fuelled by a passion for crafting impactful products, my journey
            into programming began with Girls Who Code—an experience that
            sparked my curiosity in tech. It wasn&apos;t until I encountered
            Bitcoin that I found my true calling. The technology
            behind it not only captivated me but also unveiled a realm of
            exciting possibilities. Now, I&apos;m integrating blockchain into my projects and I leverage my design skills to enhance user experiences
            in innovative ways.
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
      </Parallax>
    </div>
  );
};

export default AboutCards;
