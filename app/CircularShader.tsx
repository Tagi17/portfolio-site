'use client'

import "./globals.css";

import * as THREE from "three";

import React, { useEffect, useRef } from "react";

type ThreeJSAnimationProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const CircularShader: React.FC<ThreeJSAnimationProps> = ({ containerRef }) => {
    useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const clock = new THREE.Clock();
    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);

    const uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
    };

    const vertexShader: string = `
      varying vec2 vUv;
      void main() {
        gl_Position = vec4(position, 1.0);
        vUv = uv;
      }
    `;

    const fragmentShader: string = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      varying vec2 vUv;

      void main() {
        vec2 uv = (gl_FragCoord.xy - u_resolution * .5) / u_resolution.yy + 0.5;
        float vTime = u_time * .25 + step(length(uv - .5), .5);
        vec2 uv2 = fract(uv * 2. + sin(vTime));
        vec2 uv3 = fract(uv * 3. + cos(vTime));
        vec2 uv4 = fract(uv * 4. + sin(vTime));

        vec3 color = vec3(1.);
        vec3 colorPi = vec3(uv2.x, uv2.y, 1.);
        vec3 colorPl = vec3(1., uv2.x, uv2.y);
        vec3 colorW = vec3(uv2.x, 1., uv2.y);
        color = mix(colorPi, 1. - colorPl, step(length(uv - .5), .5));
        color = mix(colorW, 1. - color, step(length(uv2 - .5), .5));
        color = mix(colorW, 1. - color, step(length(uv3 - .5), .5));
        color = mix(colorW, 1. - color, step(length(uv4 - .5), .5));
    

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.domElement.classList.add('circular-shader-canvas');
    
    const setRendererSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        renderer.setSize(width, height);
        uniforms.u_resolution.value.x = width;
        uniforms.u_resolution.value.y = height;
      }
    };

    currentContainer.appendChild(renderer.domElement);
    setRendererSize(); // Initial set

    window.addEventListener("resize", setRendererSize);

    const render = () => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    animate();

    return () => {
      window.removeEventListener("resize", setRendererSize);
      currentContainer?.removeChild(renderer.domElement);
    };
  }, [containerRef]);

  return <div ref={containerRef} className="rounded-lg overflow-hidden"  style={{ width: "100%", height: "30vh" }} />;
};

export default CircularShader;
