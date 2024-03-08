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
    gsap.set(".slide", { height: "0", opacity: '0' });

    let sections = gsap.utils.toArray(".slide-item");

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".main-slide",
        pin: "true",
        scrub: 0.1,
        end: "+=300",
        onEnter: () => {
          gsap.to(".slide", { height: "auto", opacity: 1, duration: 1});
        }
      }
    })
    gsap.to(".item-1", {
      y: -130,
      duration: 2,
      ease: "elastic",
      scrollTrigger: {
        trigger: ".item-1",
        containerAnimation: scrollTween,
        start: "left center",
        toggleActions: "play none none reset",
        id: "1",
      }      
    });
    // let sectionItems = document.querySelector(".main-slide") as HTMLElement;
    // let tween: GSAPAnimation | undefined;
    // let panels = gsap.utils.toArray(".main-slide .slide-item .item");
    // const width = window.innerHeight * (panels.length - 1);
    // const links = gsap.utils.toArray(".navTitle") as HTMLElement[];
    // const modifiedLength = links.length - 1;
    // let activeLink = 0;
    // const snapPoints = links.map((_, i) => i / modifiedLength);
    // const mySnap = gsap.utils.snap(snapPoints);
    // links[activeLink].classList.toggle("active");

    // function setupScrollTweens() {
    //   tween = gsap.to(panels, {
    //     xPercent: -50 * (panels.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: ".main-slide",
    //       pin: true,
    //       scrub: 0.1,
    //       end: `+=100`,
    //       onUpdate: (self) => {
    //         const newIndex = mySnap(self.progress) * modifiedLength;
    //         if (newIndex !== activeLink) {
    //           links[activeLink].classList.toggle("active");
    //           links[newIndex].classList.toggle("active");
    //           activeLink = newIndex;
    //         }
    //       }
    //     }
    //   });
    // }
    // setupScrollTweens();

    // document.querySelectorAll(".navTitle").forEach((anchor) => {
    //   anchor.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     const target = e.currentTarget as HTMLElement;
    //     const targetHref = target.getAttribute("href");
    //     if (targetHref) {
    //       let targetElem = document.querySelector(targetHref) as HTMLElement;
    //       if (targetElem) {
    //         if (tween && 'scrollTrigger' in tween && tween.scrollTrigger) {
    //           const range = gsap.utils.mapRange(0, width, 0, tween.scrollTrigger.end);
    //           const yPos = range(targetElem.offsetLeft);
    //           gsap.to(window, {
    //             scrollTo: {
    //               y: yPos,
    //               autoKill: false
    //             },
    //             duration: 0.5
    //           });
    //         }
    //       }
    //     }
    //   });
    // });

    const items = gsap.utils.toArray(".item1 .content1") as HTMLElement[];

    const endValue = items.reduce(
      (acc, item) => acc + item.offsetHeight,
      window.innerHeight
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordion-section1",
        start: "top 40%",
        // end: "+=" + 100 * items.length + "%",
        end: "+=600",
        // pin: false,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
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
          <div
            className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
            id="about-me"
            data-label="label0"
          >
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
          <div
            className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
            id="projects"
            data-label="label1"
          >
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">Projects</div>
            </div>
            <div className="content1 three-d text-3xl px-14 py-9">
              <div>
                Currently working on the smart-dashboard, churro-relay, and The
                League
              </div>
              <div className="p-5"></div>
              <div className="main-slide">
                <div className="slides-container">
                  <div className="navTitle-wrap">
                    <div className="sections-inner">
                      <div className="slide-item link-1">
                        <div className="section2 navTitle" id="button1"></div>
                        <a href="#item1" className="section2 navTitle"></a>
                      </div>
                      <div className="slide-item link-2">
                        <div className="section2 navTitle" id="button2"></div>
                        <a href="#item2" className="section2 navTitle"></a>
                      </div>
                      <div className="slide-item link-3">
                        <div className="section2 navTitle" id="button3"></div>
                        <a href="#item3" className="section2 navTitle"></a>
                      </div>
                      <div className="slide-item link-4">
                        <div className="section2 navTitle" id="button4"></div>
                        <a href="#item4" className="section2 navTitle"></a>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="slide">
                  <div className="slide-item item1" id="item1">
                    <div className="item item-1">
                      <div className="objects">Relay Project is about</div>
                      <div className="image">
                        <Image
                          src={defi}
                          height={50}
                          width={50}
                          alt={"image"}
                        />
                      </div>
                    </div>
                    <div className="slide-item item2" id="item2">
                      <div className="item item-2">
                        <div className="objects">Relay Project is about</div>
                        <div className="image">
                          <Image
                            src={defi}
                            height={50}
                            width={50}
                            alt={"image"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="slide-item item3" id="item3">
                      <div className="item item-3">
                        <div className="objects">Relay Project is about</div>
                        <div className="image">
                          <Image
                            src={defi}
                            height={50}
                            width={50}
                            alt={"image"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="slide-item item4" id="item4">
                      <div className="item item-4">
                        <div className="objects">Relay Project is about</div>
                        <div className="image">
                          <Image
                            src={defi}
                            height={50}
                            width={50}
                            alt={"image"}
                          />
                        </div>
                      </div>
                  </div>
                </div>
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
                <div className="three-d text-5xl font-bold p-2">Boop</div>
              </div>
              <div className="content1 three-d text-2xl px-8 py-8">
                <div>
                  Libero assumenda iste, tempora eos facilis consectetur cum
                  esse officia magnam repudiandae mollitia itaque voluptates
                  corporis eveniet perferendis saepe hic aliquid veritatis ipsa
                  similique voluptatibus nisi harum. Voluptates blanditiis nam,
                  aliquid distinctio repellendus molestiae numquam doloremque
                  totam impedit. Recusandae laborum debitis quidem assumenda
                  laudantium perferendis reprehenderit repellendus quos, labore
                  ratione, laboriosam autem!
                </div>
                <div className="p-5"></div>
              </div>
            </div>
        </div>
        {/* </Parallax> */}
      </div>
    </div>
  );
};

export default ProjectCard;
