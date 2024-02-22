"use client";

import * as THREE from "three";

import React, { FC, useEffect, useRef } from "react";

type ThreeJSAnimationProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const Animationgrid: FC<ThreeJSAnimationProps> = ({ containerRef }) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const mount = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    camera.position.set(0, 5, 5);
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(100, 100, 100, 100); // Increase segments for smoother animation
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const grid = new THREE.Mesh(geometry, material);
    grid.rotation.x = -Math.PI / 2; // Rotate the grid to lay flat
    scene.add(grid);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const positions = geometry.attributes.position;
      const count = positions.count;
      const speed = 0.05;

      for (let i = 0; i < geometry.attributes.position.count; i++) {
        let z = geometry.attributes.position.getZ(i);
        z -= elapsedTime * speed;

        if (z < -100) z += 200;
        geometry.attributes.position.setZ(i, z);
      }
      geometry.attributes.position.needsUpdate = true;

      const glowMaterial = new THREE.ShaderMaterial({
        vertexShader: `...`, // Define vertex shader
        fragmentShader: `...`, // Define fragment shader for the glow effect
        uniforms: {},
        transparent: true,
        blending: THREE.AdditiveBlending,
      });

      renderer.render(scene, camera);
    };

    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
    };
  }, [containerRef]);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Animationgrid;
