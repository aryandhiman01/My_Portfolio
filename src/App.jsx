// src/App.jsx
import { lazy, Suspense, useEffect, useState, useCallback, memo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import './styles/style.css';

// Lazy load components with React.lazy
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

// Memoized 3D Background Component for better performance
const ThreeDBackground = memo(function ThreeDBackground({ isMobile }) {
  // Skip 3D rendering on mobile for better performance
  if (isMobile) {
    return null;
  }

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
      camera={{ position: [0, 0, 5] }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5, max: 1 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#00f6ff" intensity={0.8} />
      <pointLight position={[-10, -10, 10]} color="#7f5cff" intensity={0.6} />
      
      {/* Floating 3D Shapes */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 1, 0]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color="#00f6ff" 
            wireframe 
            transparent 
            opacity={0.1}
            emissive="#00f6ff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-2, -1, 0]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial 
            color="#7f5cff" 
            wireframe 
            transparent 
            opacity={0.1}
            emissive="#7f5cff"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
      
      <Stars 
        radius={100} 
        depth={50} 
        count={2000}
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
      />
    </Canvas>
  );
});

// Memoized Scroll Progress with throttled updates
const ScrollProgress = memo(function ScrollProgress() {
  const updateProgress = useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }
  }, []);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateProgress]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      background: 'rgba(255, 255, 255, 0.1)',
      zIndex: 1000
    }}>
      <div 
        id="scroll-progress"
        style={{
          height: '100%',
          background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
          width: '0%',
          transition: 'width 0.1s ease'
        }}
      />
    </div>
  );
});


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <ThreeDBackground />
      <ScrollProgress />
      
      {/* Floating Background Elements */}
      <div className="floating-element floating-1" />
      <div className="floating-element floating-2" />
      <div className="floating-element floating-3" />
      
      <Suspense fallback={
        <div style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050507',
          color: 'white',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            borderTop: '3px solid #00f6ff',
            borderRadius: '50%',
            animation: 'rotate 1s linear infinite'
          }} />
          <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Loading Immersive Experience...
          </p>
        </div>
      }>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;