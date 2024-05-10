// import * as THREE from 'three';

// import React, { FC, useEffect, useRef } from 'react';

// type ThreeJSAnimationProps = {
//   containerRef: React.RefObject<HTMLDivElement>;
// };

// const GridAnimation: FC<ThreeJSAnimationProps> = ({ containerRef }) => {
//     useEffect(() => {
//       if (!containerRef.current) return;
  
//       const mount = containerRef.current;
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(200, mount.clientWidth / mount.clientHeight, 0.1, 1000);
//     //   const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000); //original size not 200
//       const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  
//       renderer.setSize(mount.clientWidth, mount.clientHeight);
//       mount.appendChild(renderer.domElement);
  
//       camera.position.set(0, 5, 5);
//       camera.lookAt(0, 0, 0);

      
  
//       // Axes Helper
//     //   const axesHelper = new THREE.AxesHelper(5);
//     //   scene.add(axesHelper);
  
//       // Grid Helper
//       const gridHelper = new THREE.GridHelper(50, 50, 0xffffff, 0xffffff);
//       scene.add(gridHelper);
  
//       const onResize = () => {
//         camera.aspect = mount.clientWidth / mount.clientHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(mount.clientWidth, mount.clientHeight);
//       };
//       window.addEventListener('resize', onResize);
  
//       const animate = () => {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//       };
//       animate();
  
//       // Clean up on unmount
//       return () => {
//         window.removeEventListener('resize', onResize);
//         mount.removeChild(renderer.domElement);
//       };
//     }, [containerRef]); // Only re-run the effect if the ref changes
  
//     return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
//   };
  
//   export default GridAnimation;
