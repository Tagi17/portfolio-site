'use client';

import "./globals.css";

import React, {
  use,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import CoinApi from "./CoinApi";
import Contact from "./Contact";
import HomeAnimations from "./HomeAnimations";
import Image from "next/image";
import Links from "./Links";
import Script from "next/script";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import dynamic from "next/dynamic";
import gsap from "gsap";
import nflower from "./nflower.png";
import { useGSAP } from "@gsap/react";

const CircularShader = dynamic(() => import('./CircularShader'), { ssr: false });

gsap.registerPlugin(TextPlugin);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  return (
      <div className="mx-auto w-7/12 my-6">
          <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
              strategy="afterInteractive"
          />
          <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
              strategy="afterInteractive"
          />
          <Script
              src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Draggable.min.js"
              strategy="afterInteractive"
          />

          {/* <div className="text-6xl flex justify-center items-center three-d">
              Welcome, Im Inzhagi
          </div> */}

          {/* Render the HomeAnimations component */}
          <HomeAnimations />

          {/* Additional components specific to this page */}
          <Links />
          <Contact />
      </div>
  );
}
