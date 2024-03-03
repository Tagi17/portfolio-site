"use client";

import "./globals.css";

import React, { useEffect, useLayoutEffect, useRef } from "react";

import Image from "next/image";
import Parallax from "./parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ProjectCard = () => {
  const container = useRef();

  useGSAP(() => {
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
        // pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
        // toggleAction: "restart complete reverse reset",
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

  // useLayoutEffect(() => {});

  return (
    <div>
      {/* <Parallax speed={1}> */}
      <div className="section1 accordion-section1 flex justify-center items-center min-h-screen h-screen">
        <div className="wrapper1 w-full px-4 md:px-20 max-w-screen-xl mx-auto">
          <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden  ">
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-5 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">About Me</div>
            </div>
            <div className="content1 three-d text-3xl px-8 py-9">
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
          <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
            <div className="header1 bg-primary-600 text-white text-xl font-bold p-4 cursor-pointer">
              <div className="three-d text-5xl font-bold p-3">Projects</div>
            </div>
            <div className="content1 three-d text-3xl px-8 py-8">
              <div>
                Tempore provident consectetur saepe minima a ratione harum fugit
                nihil adipisci nemo at necessitatibus modi praesentium alias aut
                eligendi maxime quisquam sit porro totam id, qui cupiditate
                maiores dolore! Non repudiandae ex explicabo iusto inventore ut?
                Quasi commodi eius itaque voluptate deserunt!
              </div>
              <div className="p-5"></div>
            </div>
          </div>
          <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
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
