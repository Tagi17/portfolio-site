'use client'

import "./style.scss";

import React, { useEffect } from 'react';

import Image from "next/image";
import Parallax from "./parallax";

const ProjectCard = () => {

    return (
      <div>
      <Parallax speed={1} className={"self-end"}>
        <div className="text-5xl mt-40">Projects</div>
        <div className="mx-auto mt-3 p-2 border-2 border-primary-300 bg-primary-500 rounded-lg mb-44">
          <div className="grid md:grid-cols-2 ml-10 my-14">
            <div className="text-3xl leading-normal">
              These are projects i have worked only
              Here we have the dashboard
              here is a relay projectshere is the shuttle tracker
            </div>
           
      
          </div>
        </div>
        </Parallax>
      </div>
    );
  };
  
  export default ProjectCard;