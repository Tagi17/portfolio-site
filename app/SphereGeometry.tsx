// 'use client'

// import * as THREE from "three";

// import React, { useEffect, useRef } from "react";

// import { gsap } from "gsap";

// //particle code, io commented out the sphere code 
// const SphereAnimation: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const mount = mountRef.current;
//     if (!mountRef.current) return;

//     const width = mountRef.current.clientWidth;
//     const height = mountRef.current.clientHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(width, height);
//     mountRef.current.appendChild(renderer.domElement);

//     // const sphereGeometry = new THREE.SphereGeometry(5, 32, 32);
//     // const sphereMaterial = new THREE.MeshBasicMaterial({
//     //   color: 0xff6347,
//     //   wireframe: true,
//     // });
//     // const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//     // scene.add(sphere);
//     // camera.position.z = 30;

//     // Create particles
//     const particleMaterial = new THREE.SpriteMaterial({
//       color: 0xffffff,
//     });
//     const particles: THREE.Sprite[] = [];

//     for (let i = 0; i < 100; i++) {
//       const particle = new THREE.Sprite(particleMaterial);
//       particle.position.set(Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10);
//       particle.scale.set(0.1, 0.1, 0.1);
//       scene.add(particle);
//       particles.push(particle);
//     }

//     // GSAP animation for particles
//     particles.forEach(particle => {
//       const duration = 2 + Math.random() * 10;
//       gsap.to(particle.position, {
//         x: `+=${Math.random() * 20 - 10}`,
//         y: `+=${Math.random() * 20 - 10}`,
//         z: `+=${Math.random() * 20 - 10}`,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         duration,
//       });
//     });

//     // GSAP animation for the sphere
//     // gsap.to(sphere.rotation, {
//     //   x: 2 * Math.PI,
//     //   y: 2 * Math.PI,
//     //   duration: 10,
//     //   repeat: -1,
//     //   ease: "none",
//     // });

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle window resize
//     const onWindowResize = () => {
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };
//     window.addEventListener("resize", onWindowResize, false);

//     // Clean up
//     return () => {
//         if (mount) { // Use the variable defined at the start of useEffect
//           mount.removeChild(renderer.domElement);
//         }
//         window.removeEventListener("resize", onWindowResize, false);
//         // gsap.killTweensOf(sphere.rotation);
//         particles.forEach(particle => {
//           gsap.killTweensOf(particle.position);
//         });
//       };
//     }, []);

//   return <div className="w-full h-screen bg-transparent" ref={mountRef} />;
// };

// export default SphereAnimation;
