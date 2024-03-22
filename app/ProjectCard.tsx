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
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ProjectCard = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray(".item1 .content1") as HTMLElement[];
    const sections = gsap.utils.toArray(".objects .image") as HTMLElement[];

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
        start: "top 40%",
        end: "+=600",
        scrub: true,
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
      const totalDuration = 8;
      const delayBetweenItems = 2;
      slideItems.forEach((slideItem, index) => {
        gsap.set(slideItem, { xPercent: 100 });
        const startTime = index * (totalDuration + delayBetweenItems);
        tlCards
          .to(
            slideItem,
            {
              xPercent: 0,
              opacity: 1,
              duration: totalDuration / 2,
              ease: "power1.inOut",
            },
            startTime
          )
          .to(
            slideItem,
            {
              xPercent: -100,
              opacity: 0,
              duration: totalDuration / 2,
              ease: "power1.inOut",
            },
            `+=${totalDuration / 2}`
          );
      });
    });
    tlCards.to({}, { duration: 0.25 });
    tlCards.to(items, { height: 0 }, "+=0.5");
    gsap.set(".wrapper1", { autoAlpha: 1 });

    return () => {
      tlCards.kill();
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              pariatur quaerat ducimus dolorum fugit reprehenderit assumenda
              ipsum provident, ullam illum ad? Recusandae optio autem quo!
              <div className="p-5"></div>
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
              <div className="main-slide">
                <div className="slide" data-haschild="true">
                  <div className="slideItem item1" id="item1">
                    <div className="item item-1">
                      <div className="objects">Smart-Dashboard is about</div>
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
                  <div className="slideItem item2" id="item2">
                    <div className="item item-2">
                      <div className="objects">Churro-Relay is about</div>
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
                  <div className="slideItem item3" id="item3">
                    <div className="item item-3">
                      <div className="objects">The League is about</div>
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
                  <div className="slideItem item4" id="item4">
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
                <div className="p-1"></div>
              </div>
              <div className="slides-container">
                <div className="navTitle-wrap">
                  <div className="sections-inner">
                    <div className=" link-1">
                      <div className="section2 navTitle" id="button1"></div>
                      <a href="#item1" className="section2 navTitle"></a>
                    </div>
                    <div className=" link-2">
                      <div className="section2 navTitle" id="button2"></div>
                      <a href="#item2" className="section2 navTitle"></a>
                    </div>
                    <div className=" link-3">
                      <div className="section2 navTitle" id="button3"></div>
                      <a href="#item3" className="section2 navTitle"></a>
                    </div>
                    <div className=" link-4">
                      <div className="section2 navTitle" id="button4"></div>
                      <a href="#item4" className="section2 navTitle"></a>
                    </div>
                  </div>
                </div>
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
                Libero assumenda iste, tempora eos facilis consectetur cum esse
                officia magnam repudiandae mollitia itaque voluptates corporis
                eveniet perferendis saepe hic aliquid veritatis ipsa similique
                voluptatibus nisi harum. Voluptates blanditiis nam, aliquid
                distinctio repellendus molestiae numquam doloremque totam
                impedit.
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
