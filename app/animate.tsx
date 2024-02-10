"use client";

import "./globals.css";

import * as THREE from "three";

import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

const SphereAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(20, 8, 6);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6347,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material); // Renamed to `sphere` following naming convention
    scene.add(sphere);
    scene.background = null; // Ensure the background is transparent

    // Camera position
    camera.position.z = 50; // Adjusted to fully view the sphere

    // GSAP animation
    gsap.to(sphere.rotation, {
      x: 2 * Math.PI,
      y: 2 * Math.PI,
      duration: 10,
      repeat: -1,
      ease: "none",
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onWindowResize, false);

    // Clean up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onWindowResize, false);
      gsap.killTweensOf(sphere.rotation);
    };
  }, []);

  return <div className="w-full h-screen bg-transparent" ref={mountRef} />;
};

export default SphereAnimation;
