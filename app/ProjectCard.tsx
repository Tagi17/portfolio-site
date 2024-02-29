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
        start: "top top",
        // end: "+=" + 100 * items.length + "%",
        end: "+=900",
        pin: true,
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

  // useLayoutEffect(() => {});

  return (
    <div>
      {/* <Parallax speed={1}> */}
        <div className="section1 accordion-section1">
          <div className="wrapper1">
            <div className="item1">
              <div className="header1">
                <h1>Header One</h1>
              </div>
              <div className="content1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                  pariatur quaerat ducimus dolorum fugit reprehenderit assumenda
                  ipsum provident, ullam illum ad? Recusandae optio autem quo!
                </p>
              </div>
            </div>
            <div className="item1">
              <div className="header1">
                <h1>Header Two</h1>
              </div>
              <div className="content1">
                <p>
                  Tempore provident consectetur saepe minima a ratione harum
                  fugit nihil adipisci nemo at necessitatibus modi praesentium
                  alias aut eligendi maxime quisquam sit porro totam id, qui
                  cupiditate maiores dolore! Non repudiandae ex explicabo iusto
                  inventore ut? Quasi commodi eius itaque voluptate deserunt!
                </p>
              </div>
            </div>
            <div className="item1">
              <div className="header1">
                <h1>Header Three</h1>
              </div>
              <div className="content1">
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
