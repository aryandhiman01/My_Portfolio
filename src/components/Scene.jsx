import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Scene() {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    mountRef.current.appendChild(renderer.domElement);

    // Simplified geometry for mobile
    const geometry = isMobile ? 
      new THREE.SphereGeometry(0.8, 16, 16) : 
      new THREE.IcosahedronGeometry(1, 0);
    
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x00f6ff,
      wireframe: true,
      emissive: 0x00f6ff,
      emissiveIntensity: 0.1
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f6ff, 0.8);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Reduced particles for mobile
    const particlesCount = isMobile ? 200 : 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (isMobile ? 5 : 10);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.01 : 0.02,
      color: 0x00f6ff,
      transparent: true,
      opacity: 0.4
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = isMobile ? 4 : 5;

    // Mouse interaction (disabled on mobile)
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      if (isMobile) return;
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += isMobile ? 0.001 : 0.002;
      mesh.rotation.y += isMobile ? 0.002 : 0.003;
      particlesMesh.rotation.y += isMobile ? 0.0005 : 0.001;

      // Smooth mouse follow (only on desktop)
      if (!isMobile) {
        mesh.position.x += (mouseX * 2 - mesh.position.x) * 0.05;
        mesh.position.y += (mouseY * 2 - mesh.position.y) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isMobile]);

  return <div ref={mountRef} className="three-scene" style={{ width: '100%', height: '100%' }} />;
}