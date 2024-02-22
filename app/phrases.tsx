'use client'

import React, { useEffect } from "react";

import gsap from "gsap";

export default function Phrases() {
  useEffect(() => {
    const words = ["Creative Coder", "Developer", "Desinger"];

    let cursor = gsap.to('.cursor', {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    
    let boxTL = gsap.timeline()
    boxTL.to('.animatedDiv', {duration: 1, width: '17vw', delay: 0.5, ease: "power4.inOut"})
  }, []);


  
  return (
    <div>
      <div>phrases</div>
    </div>
  );
}
