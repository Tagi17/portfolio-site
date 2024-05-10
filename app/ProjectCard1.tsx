// "use client";

// import "./globals.css";

// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

// import { Draggable } from "gsap/Draggable";
// import Image from "next/image";
// import NavLinks from "./NavLinks";
// import Parallax from "./parallax";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import defi from "./defi.png";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

// const slides = [
//   {
//     id: 'item1',
//     title: 'Smart-Dashboard',
//     description: 'Smart-Dashboard is a web application designed to provide users with a comprehensive dashboard for managing their crypto assets and interacting with the blockchain.',
//     imageSrc: defi,
//   },
//   {
//     id: 'item2',
//     title: 'Churro-Relay',
//     description: 'Churro-Relay is about...',
//     imageSrc: defi,
//   },
//   {
//     id: 'item2',
//     title: 'The-League',
//     description: 'The League is about...',
//     imageSrc: defi,
//   },
// ];


// const ProjectCard1 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   useGSAP(() => {
//     const items = document.querySelector(".item1");

//     // const endValue = items.reduce(
//     //   (acc, item) => acc + item.offsetHeight,
//     //   window.innerHeight
//     // );

//     const tlCards = gsap.timeline({
//       defaults: {
//         ease: "none",
//         duration: 1,
//       },
//       scrollTrigger: {
//         trigger: ".accordion-section1",
//         start: "top 30%",
//         end: "+=700",
//         // scrub: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         markers: true,
//       },
//     });
//     gsap.set(".content1", { opacity: 0, height: 0 });
//     gsap.set(".wrapper1", { autoAlpha: 1 });

//     return () => {
//       tlCards.kill();
//     };
//   });

//   return (
//     <div>
//       <div className="section1 accordion-section1 flex justify-center items-center min-h-screen h-screen">
//           <div
//             className="item1 mb-12 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl overflow-hidden"
//             id="about-me"
//             data-label="label0"
//           >
//               <div className="three-d text-5xl font-bold p-3 ">About Me</div>
//             </div>
//             <div className="content1 three-d text-3xl px-14 py-20">
//               Fuelled by a passion for crafting impactful products, my journey
//               into programming began with Girls Who Code—a pivotal experience
//               that into programming began with Girls Who Code—an experience that
//               sparked my curiosity in tech. It wasn&apos;t until I encountered
//               Bitcoin that I found my true calling. The revolutionary technology
//               behind it not only captivated me but also unveiled a realm of
//               exciting possibilities. Now, I&apos;m on a mission to explore this
//               frontier and leverage my design skills to enhance user experiences
//               exciting possibilities. Now, I&apos;m integrating blockchain into
//               my projects and I leverage my design skills to enhance user
//               experiences in innovative ways.
//               <div className="p-6"></div>
//             </div>
//           </div>
//       </div>
//   );
// };

// export default ProjectCard1;
