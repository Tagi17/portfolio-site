// // ThreeJSAnimation.tsx

// import * as THREE from 'three';

// import React, { useEffect, useRef } from 'react';

// type ThreeJSAnimationProps = {
//   containerRef: React.RefObject<HTMLDivElement>;
// };

// const ThreeJSAnimation: React.FC<ThreeJSAnimationProps> = ({ containerRef }) => {
//     const mountRef = useRef<HTMLDivElement>(null);
  
//     useEffect(() => {
//       // const mount = mountRef.current;
//       if(!mount) return;
  
//       // Scene setup
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
//       camera.position.z = 50;
  
//       // Renderer setup
//       const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//       renderer.setSize(mount.clientWidth, mount.clientHeight);
//       mount.appendChild(renderer.domElement);
  
//       // Grid setup
//       const gridHelper = new THREE.GridHelper(100, 100, 0xffffff, 0xffffff);
//       gridHelper.material.opacity = 0.2;
//       gridHelper.material.transparent = true;
//       scene.add(gridHelper);
  
//       // Custom Shader Material
//       const material = new THREE.ShaderMaterial({
//         uniforms: {
//           time: { value: 0 },
//           // Add other uniforms for the glow effect
//         },
//         vertexShader: `
//         void main() {
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//         fragmentShader:  `
//         void main() {
//           gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Set color to white
//         }
//       `,
//         transparent: true,
//         // Add other material properties for the glow effect
//       });
      
//       // Line segments setup
//       // You will need to create a geometry that matches your grid lines
//       const lineGeometry = new THREE.BufferGeometry();
//       // Add the positions of your line vertices to the geometry
  
//       const lineSegments = new THREE.LineSegments(lineGeometry, material);
//       scene.add(lineSegments);
  
//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);
//         // Update the uniforms to create the moving light effect
//         material.uniforms.time.value = performance.now() / 1000;
//         renderer.render(scene, camera);
//       };
//       animate();
  
//       // Handle resize
//       const onResize = () => {
//         if (!mount) return;
//         camera.aspect = mount.clientWidth / mount.clientHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(mount.clientWidth, mount.clientHeight);
//       };
//       window.addEventListener('resize', onResize);
  
//       // Cleanup
//       return () => {
//         mount.removeChild(renderer.domElement);
//         window.removeEventListener('resize', onResize);
//         scene.remove(lineSegments);
//         lineGeometry.dispose();
//         material.dispose();
//       };
//     }, []);
  
//     return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
//   };
  
//   export default ThreeJSAnimation;