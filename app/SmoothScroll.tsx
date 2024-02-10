"use client";

import React, { ReactNode, useEffect, useRef } from 'react';

import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps{
    children: ReactNode;
}   

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
export default SmoothScroll;