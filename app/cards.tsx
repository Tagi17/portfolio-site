'use client'

import React, { useEffect, useRef, useState } from 'react';

import Image from "next/image";
import Parallax from "./parallax";
import glow from "./glow.png";

const Cards = () => {
    const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <div ref={cardRef} className={`parallax-card text-5xl mt-20 mx-auto mt-3 p-2 border-2 rounded-lg shadow-xl mb-20 ${inView ? 'in-view' : ''}`}>
    <Parallax speed={1} className={"self-end"}>
      <div className="text-5xl mt-20">About Me</div>
      <div className="mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg shadow-xl mb-20">
        <div className="grid md:grid-cols-2 ml-10 my-14">
          <div className="text-3xl leading-normal">
            Fuelled by a passion for crafting impactful products, my journey
            into programming began with Girls Who Code—a pivotal experience that
            sparked my curiosity in tech. It wasn&apos;t until I encountered
            Bitcoin that I found my true calling. The revolutionary technology
            behind it not only captivated me but also unveiled a realm of
            exciting possibilities. Now, I&apos;m on a mission to explore this
            frontier and leverage my design skills to enhance user experiences
            in innovative ways.
          </div>
          <div className="ml-20 flex justify-center items-center">
            <Image
              className="rounded-lg"
              src={glow}
              height={100}
              width={400}
              alt="logo"
            />
          </div>
        </div>
      </div>
      </Parallax>
    </div>
  );
};

export default Cards;
