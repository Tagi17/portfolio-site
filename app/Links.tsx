// import React from 'react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Links() {
  useGSAP(() => {
    const sections = gsap.utils.toArray(".section") as HTMLElement[];
    sections.forEach((section) => {
      const item = section.querySelector(".item1");
      const content = section.querySelector(".content1");

    gsap.set(content, { autoAlpha: 0, yPercent: -60 });

    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      end: "bottom center",
      scrub: 1,
      onEnter: () => {
        gsap.to(content, {
          duration: 1.5,
          autoAlpha: 1,
          yPercent: 0,
          ease: "power1.inOut"
        });
      },
      onLeaveBack: () => {
        gsap.to(content, {
          duration: 1,
          autoAlpha: 0,
          yPercent: -10,
          ease: "power1.inOut"
        });
      }
    });
  });
});

  return (
    <div>
      <div className="section pt-35">
        <div className="three-d text-5xl font-bold pt-28 text-center item1 " id="about-me">About Me</div>
          <div className="content1 three-d text-3xl px-14 pt-8 pb-20 text-center">
              {/* Fuelled by a passion for crafting impactful products, my journey
              into programming began with Girls Who Code—a pivotal experience
              that into programming began with Girls Who Code—an experience that
              sparked my curiosity in tech. It wasn&apos;t until I encountered
              Bitcoin that I found my true calling. The revolutionary technology
              behind it not only captivated me but also unveiled a realm of   
              exciting possibilities. Now, I&apos;m on a mission to explore this
              frontier and leverage my design skills to enhance user experiences
              exciting possibilities. Now, I&apos;m integrating blockchain into
              my projects and I leverage my design skills to enhance user
              experiences in innovative ways. */}
            Driven by a passion for creating impactful products, my programming journey began with Girls Who Code, which ignited my curiosity in technology. My interest deepened with Bitcoin, leading me to my true calling—the revolutionary potential of blockchain technology. Now, I&apos;m dedicated to integrating blockchain into my projects, using my design skills to innovate and enhance user experiences  
        </div>
      </div>
      <div className="section">
          <div className="three-d text-5xl font-bold p-2 text-center item1 pt-20" id="projects">Projects</div>
            <div className="content1 three-d text-3xl px-14 pt-8 text-center" >
              Currently working on the Smart-Dashboard, Churro-relay, and The League
              <div className="py-4">
              Smart Dashboard is a web application designed to provide users with a comprehensive dashboard for managing their crypto assets and interacting with the blockchain. This project aims to help users monitor their wallet&apos;s content, visualize their crypto portfolio, and access DeFi applications seamlessly.
              </div>
              <div className='py-4'>
              Churro Relay is a decentralized application (DApp) with a focus on an off-chain subscription system that leverages blockchain for wallet signature authentication
              </div>
              <div className='py-4'>
              Contributed to web development of The League, a DeFi trading platform, implementing responsive design and integrating Ethereum smart contracts for dynamic, team-based cryptocurrency trading competitions  
              </div>
          </div>
          </div>
      </div>
  )
}
