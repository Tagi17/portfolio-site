import * as THREE from 'three';

import React, { FC, useEffect, useRef } from 'react';

type ThreeJSAnimationProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const GridAnimation: FC<ThreeJSAnimationProps> = ({ containerRef }) => {
    useEffect(() => {
      if (!containerRef.current) return;
  
      const mount = containerRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);
  
      camera.position.set(0, 50, 50);
      camera.lookAt(0, 0, 0);

      const planeGeometry = new THREE.PlaneGeometry(100, 10, 10, 10);
      // const planeGeometry = new THREE.PlaneGeometry(100, 100, 100, 100);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true,
        side: THREE.DoubleSide,
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
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

        plane.position.z += 0.1;
        if (plane.position.z > 100) plane.position.z = -100;
        // camera.fov += 0.05;
        // if (camera.fov > 100) camera.fov = 75; // Reset FOV to avoid extreme zoom
        // camera.updateProjectionMatrix();

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
