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
        start: "top 50%",
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
        <div className="section1 accordion-section1 flex justify-center h-screen">
          <div className="wrapper1 w-full px-[200px] pb-0">
            <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
              <div className="header1 bg-primary-100 text-white text-xl font-bold p-5 cursor-pointer">
                <div className="three-d text-xl font-bold">About Me</div>
              </div>
              <div className="content1 three-d p-5">
                <p>
                    Fuelled by a passion for crafting impactful products, my journey into programming began with Girls Who Code—an experience that sparked my curiosity in tech. It wasn&apos;t until I encountered Bitcoin that I found my true calling. The technology behind it not only captivated me but also unveiled a realm of exciting possibilities. Now, I&apos;m integrating blockchain into my projects and I leverage my design skills to enhance user experiences in innovative ways.
                </p>
              </div>
            </div>
            <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
              <div className="header1 bg-primary-100 text-white text-xl font-bold p-4 cursor-pointer">
                <h1>Projects</h1>
              </div>
              <div className="content1 three-d p-4">
                <p>
                  Tempore provident consectetur saepe minima a ratione harum
                  fugit nihil adipisci nemo at necessitatibus modi praesentium
                  alias aut eligendi maxime quisquam sit porro totam id, qui
                  cupiditate maiores dolore! Non repudiandae ex explicabo iusto
                  inventore ut? Quasi commodi eius itaque voluptate deserunt!
                </p>
              </div>
            </div>
            <div className="item1 mb-10 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden">
              <div className="header1 bg-primary-100 text-white text-xl font-bold p-4 cursor-pointer">
                <h1>Header Three</h1>
              </div>
              <div className="content1 p-4">
                <p>
                  Libero assumenda iste, tempora eos facilis consectetur cum
                  esse officia magnam repudiandae mollitia itaque voluptates
                  corporis eveniet perferendis saepe hic aliquid veritatis ipsa
                  similique voluptatibus nisi harum. Voluptates blanditiis nam,
                  aliquid distinctio repellendus molestiae numquam doloremque
                  totam impedit. Recusandae laborum debitis quidem assumenda
                  laudantium perferendis reprehenderit repellendus quos, labore
                  ratione, laboriosam autem!
                </p>
              </div>
            </div>
          </div>
        </div>
      {/* </Parallax> */}
    </div>
  );
};

export default ProjectCard;
