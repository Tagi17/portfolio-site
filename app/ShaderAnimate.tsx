import * as THREE from 'three';

import React, { FC, useEffect, useRef } from 'react';

type ThreeJSAnimationProps = {
    containerRef: React.RefObject<HTMLDivElement>;
  };
  

  const vertexShader = `
  uniform float time;
  varying vec3 vPosition;

  void main() {
    vPosition = position;
    
    // Calculate the new position here
    // For simplicity, let's just simulate growth in size over time
    float growthFactor = 1.0 + sin(time + position.x) * 0.5;
    
    vec3 newPosition = position * growthFactor;
    newPosition.z += sin(time + position.x) * 5.0; // Simulate movement along z-axis
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 color;
  varying vec3 vPosition;

  void main() {
    gl_FragColor = vec4(color, 1.0);
  }
`;

const ShaderAnimate: FC<ThreeJSAnimationProps> = ({ containerRef }) => {

    useEffect(() => {
        // Early return if the ref is null to address TypeScript errors
        if (!containerRef.current) return;

        const currentContainer = containerRef.current; // Capture the current value for cleanup

        // Scene setup
        const scene = new THREE.Scene();
        const width = currentContainer.clientWidth;
        const height = currentContainer.clientHeight;
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        currentContainer.appendChild(renderer.domElement);

        // Adapted shader code
        const fragmentShader = `... your GLSL code adapted for Three.js ...`;
        const vertexShader = `... basic vertex shader or adapted from your code ...`;

        const uniforms = {
            time: { value: 0.0 },
            color: { value: new THREE.Color(0x00ff00) }, // Green color
          };

        const shaderMaterial = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            wireframe: true,
            side: THREE.DoubleSide,
          });

          const planeGeometry = new THREE.PlaneGeometry(100, 10, 10, 10);
          const plane = new THREE.Mesh(planeGeometry, shaderMaterial);
        plane.rotateX(-Math.PI / 2);
        scene.add(plane);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, shaderMaterial);
        scene.add(mesh);

        const onResize = () => {
            const width = currentContainer.clientWidth;
            const height = currentContainer.clientHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            shaderMaterial.uniforms.iResolution.value.set(width, height, 1);
        };
        window.addEventListener('resize', onResize);

        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            shaderMaterial.uniforms.iTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            if (currentContainer) { // Check again for TypeScript, though it's captured
                currentContainer.removeChild(renderer.domElement);
            }
        };
    }, [containerRef]); // Dependency on containerRef to re-run if it changes

    return <div ref={containerRef} />;
};

export default ShaderAnimate;
