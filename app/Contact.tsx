import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {
  return (
    <div>
      <div className="three-d text-5xl font-bold p-3 pt-37 text-center" id="contact">Contact Me</div>
        {/* <div className="flex justify-center items-center m-0">
          <div className="w-3/4 h-5 transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#ea00d9] to-[#5de729] blur group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt animate-gradient"></div>
        </div> */}
      <div className="mx-auto mt-10 p-2 border-2 border-secondary-500 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
      <div className="mx-auto mt-10 p-2 border-2 border-secondary-500 bg-primary-500 rounded-lg shadow-lg w-7/12 flex items-center justify-between">
        <div className="three-d text-2xl">
          Name:
        </div>
        
     </div>
     </div>
    </div>
  );
};

export default Contact;
