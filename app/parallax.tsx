// "use client";

// import React, { ReactNode, useEffect, useRef } from 'react';

// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SmoothScroll from "./SmoothScroll";
// import { gsap } from "gsap";
// import { useWindowSize } from "@studio-freight/hamo";

// interface ParallaxProps {
//     className?: string;
//     children: ReactNode;
//     speed?: number;
//     id?: string;
//   }
  
//   const Parallax: React.FC<ParallaxProps> = ({ className, children, speed = 1, id = 'parallax' }) => {
//     const trigger = useRef<HTMLDivElement>(null);
//     const target = useRef<HTMLDivElement>(null);
  
//     useEffect(() => {
//       if (!trigger.current || !target.current) return;
  
//       gsap.registerPlugin(ScrollTrigger);
  
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: trigger.current,
//           id: id,
//           scrub: true,
//           start: 'top bottom',
//           end: 'bottom top',
//           onUpdate: (self) => {
//             let y = self.progress * (window.innerWidth * speed * 0.1);
//             const maxOffset = 50; // This is an example, adjust as needed
//             y = Math.min(y, maxOffset);
//             gsap.set(target.current, { y });
//           },
//         },
//       });
//       return () => {
//         tl.kill();
//       };
//     }, [id, speed]);
//     // ScrollTrigger.create({
//     //     trigger: trigger.current,
//     //     start: "top bottom",
//     //     end: "bottom top",
//     //     // Adjust the onUpdate or use markers to debug
//     //     markers: true, // Remove in production
//     //     onUpdate: self => {
//     //       const progress = self.progress * (speed * 100); // Example adjustment
//     //       gsap.to(target.current, { y: progress });
//     //     }
//     //   });
    
//     //   // Cleanup function to kill ScrollTriggers on component unmount
//     //   return () => ScrollTrigger.getAll().forEach(instance => instance.kill());
//     // }, [speed]);
  
//     return (
//       <div ref={trigger} className={className}>
//         <div ref={target}>{children}</div>
//       </div>
//     );
//   };
  
//   export default Parallax;
