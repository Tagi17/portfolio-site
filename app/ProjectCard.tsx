"use client";

import "./globals.css";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Draggable } from "gsap/Draggable";
import Image from "next/image";
import Parallax from "./parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import defi from "./defi.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP, Draggable);
}

const ProjectCard = () => {
  const infoList = useRef(null);
  const imageList = useRef(null);

  const progressWrap = gsap.utils.wrap(0, 1);

  useGSAP(() => {
    const slides = gsap.utils.toArray(".slide .objects, .slide .image");
    const sections = gsap.utils.toArray(".section2");
    // const buttons = gsap.utils.toArray('.section2');
    gsap.set(slides, { autoAlpha: 0 });
    const changeItems = gsap.utils.toArray(".objects .image") as HTMLElement[];

    // const scrollTween = gsap.to(changeItems, {
    //   xPercent: -100 * (changeItems.length - 1),
    //   ease: "none",
    //   scrollTrigger:{
    //     trigger: ".slides-container",
    //     toggleActions: 'restart none resume reset',
    //     scrub: 0.1,
    //     markers: true
    //   },
    // });

    // buttons.forEach((button, i) => {
    //   ScrollTrigger.create({
    //     trigger: button,
    //     start: "top center", // Adjust these values based on your layout
    //     onEnter: () => showContent(i),
    //     onEnterBack: () => showContent(i),
    //   });
    // });
    // gsap.set(".section2:not(:first-child) .objects", { height: "0" });
    const slidesContainer = document.querySelector(".slides-container") as HTMLElement | null;
    if (!slidesContainer) {
      throw new Error("Slides container not found");
    }
    const endValue1 = "+=" + slidesContainer.offsetWidth;
    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".slides-container",
        toggleActions: "restart none resume reset",
        pin: true,
        scrub: 0.1,
        markers: true,
        end: () => endValue1,
      },
    });
    function updateSlideContent(index: number) {
      gsap.set(".slide > div", { autoAlpha: 0 });
      gsap.to(".slide .objects:nth-of-type(" + (index + 1) + ")", {
        autoAlpha: 1,
        duration: 0.5,
      });
      sections.forEach((section, i) => {
        const element = section as HTMLElement;
        ScrollTrigger.create({
          trigger: element,
          start: "left center",
          end: "right center",
          containerAnimation: scrollTween,
          onEnter: () => updateSlideContent(i),
          onEnterBack: () => updateSlideContent(i),
        });
      });
      // gsap.to(".slide .image:nth-of-type(" + (index + 1) + ")", {
      //   autoAlpha: 1,
      //   duration: 0.5,
      // });
    }

    changeItems.forEach((section2, i) => {
      gsap.to(".section2", {
        x: 100,
        opacity: 0,
      });
      // if (changeItems[i + 1]) {
      //   tlChange.to(section2, { height: 0 }).to(changeItems[i + 1], { height: "auto" }, "<");
      // }
    });

    const items = gsap.utils.toArray(".item1 .content1") as HTMLElement[];

    const endValue = items.reduce(
      (acc, item) => acc + item.offsetHeight,
      window.innerHeight
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordion-section1",
        start: "top 30%",
        // end: "+=" + 100 * items.length + "%",
        end: "+=600",
        // pin: false,
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    gsap.set(".item1:not(:first-child) .content1", { height: "0" });

    items.forEach((item1, i) => {
      if (items[i + 1]) {
        tl.to(item1, { height: 0 }).to(items[i + 1], { height: "auto" }, "<");
      }
    });

    gsap.set(".wrapper1", { autoAlpha: 1 });

    return () => {
      tl.kill();
    };
  });

  return (
    <div>
      {/* <Parallax speed={1}> */}
      <div className="section1 accordion-section1 flex justify-center items-center min-h-screen h-screen">
        <div className="wrapper1 w-full px-4 md:px-20 max-w-screen-xl mx-auto">
          <div className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden  ">
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-5 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">About Me</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-9">
              <div className="">
                Fuelled by a passion for crafting impactful products, my journey
                into programming began with Girls Who Code—an experience that
                sparked my curiosity in tech. It wasn&apos;t until I encountered
                Bitcoin that I found my true calling. The technology behind it
                not only captivated me but also unveiled a realm of exciting
                possibilities. Now, I&apos;m integrating blockchain into my
                projects and I leverage my design skills to enhance user
                experiences in innovative ways.
              </div>
              <div className="p-5"></div>
            </div>
          </div>
          <div className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">Projects</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-9">
              <div>
                Currently working on the smart-dashboard, churro-relay, and The
                League
              </div>
              <div className="p-5"></div>
              <div className="slides-container">
                <div className="sections-inner">
                  <div className="section2" id="button1"></div>
                  <div className="section2" id="button2"></div>
                  <div className="section2" id="button3"></div>
                  <div className="section2" id="button4"></div>
                </div>
              </div>
              <div className="slide">
                <div className="">
                  <div className="objects">Relay Project is about</div>
                  <div className="image">
                    <Image src={defi} height={50} width={50} alt={"image"} />
                  </div>
                  <div className="objects">Relay Project is about</div>
                  <div className="image">
                    <Image src={defi} height={50} width={50} alt={"image"} />
                  </div>
                  <div className="objects">Relay Project is about</div>
                  <div className="image">
                    <Image src={defi} height={50} width={50} alt={"image"} />
                  </div>
                  <div className="objects">Relay Project is about</div>
                  <div className="image">
                    <Image src={defi} height={50} width={50} alt={"image"} />
                  </div>
                </div>
              </div>
              <div className="p-1"></div>
            </div>
          </div>
          <div className="item2 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-2">Boop</div>
            </div>
            <div className="content1 three-d text-2xl p-4">
              <div>
                Libero assumenda iste, tempora eos facilis consectetur cum esse
                officia magnam repudiandae mollitia itaque voluptates corporis
                eveniet perferendis saepe hic aliquid veritatis ipsa similique
                voluptatibus nisi harum. Voluptates blanditiis nam, aliquid
                distinctio repellendus molestiae numquam doloremque totam
                impedit. Recusandae laborum debitis quidem assumenda laudantium
                perferendis reprehenderit repellendus quos, labore ratione,
                laboriosam autem!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </div>
  );
};

export default ProjectCard;
