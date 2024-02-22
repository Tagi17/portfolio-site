import * as THREE from 'three';

import React, { FC, useEffect, useRef } from 'react';

type ThreeJSAnimationProps = {
    containerRef: React.RefObject<HTMLDivElement>;
  };
  

const GridAnimation:  FC<ThreeJSAnimationProps> = ({ containerRef }) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const mount = containerRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 50, 50);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const uniforms = {
            horizon: { type: 'f', value: 0.5 }, // Adjust this to move the "horizon" up or down
            time: { type: 'f', value: 0.0 },
        };

        const vertexShader = `
            uniform float horizon;
            uniform float time;
            varying float vScale;
            void main() {
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                float distance = worldPosition.z * sin(time * 0.5); // Simulate movement towards horizon
                vScale = 1.0 + abs(distance) * 0.1; // Scale factor increases with "distance" from horizon
                gl_Position = projectionMatrix * viewMatrix * vec4(worldPosition.xyz * vScale, 1.0);
            }
        `;

        const fragmentShader = `
            varying float vScale;
            void main() {
                gl_FragColor = vec4(vec3(vScale), 1.0); // Color changes with scale for visual effect
            }
        `;

        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            wireframe: true,
        });

        const geometry = new THREE.PlaneGeometry(100, 100, 50, 50); // Adjust grid size and division
        const plane = new THREE.Mesh(geometry, material);
        plane.rotateX(-Math.PI / 2);
        scene.add(plane);

        const onResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', onResize);

        const animate = () => {
            requestAnimationFrame(animate);
            uniforms.time.value += 0.01; // Increment time for animation
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('resize', onResize);
            mount.removeChild(renderer.domElement);
        };
    }, [containerRef]);

    return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default GridAnimation;
