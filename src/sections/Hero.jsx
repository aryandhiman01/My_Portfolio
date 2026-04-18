import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Mail, Phone, MapPin, Award, ExternalLink, GraduationCap, Github, Linkedin, FileText, Download, Globe } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', isMobile ? '30%' : '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set loaded after component mounts
    setIsLoaded(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contactInfo = [
    { 
      icon: <Mail size={isMobile ? 16 : 18} />, 
      text: 'aryandhiman2605@gmail.com', 
      href: 'mailto:aryandhiman2605@gmail.com' 
    },
    { 
      icon: <Phone size={isMobile ? 16 : 18} />, 
      text: '+91 9805297267', 
      href: 'tel:+919805297267' 
    },
    { 
      icon: <MapPin size={isMobile ? 16 : 18} />, 
      text: 'Mohali, Punjab', 
      href: '#' 
    },
    { 
      icon: <GraduationCap size={isMobile ? 16 : 18} />, 
      text: 'CGC Jhanjeri | CGPA: 9.15', 
      href: '#' 
    }
  ];

  const professionalLinks = [
    { 
      icon: <Github size={isMobile ? 20 : 24} />, 
      label: 'GitHub', 
      href: 'https://github.com/aryan-26-prog', 
      color: '#00f6ff', 
      desc: 'View My Code',
      external: true
    },
    { 
      icon: <Linkedin size={isMobile ? 20 : 24} />, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/aryan-dhiman-2605ad', 
      color: '#7f5cff', 
      desc: 'Connect Professionally',
      external: true
    },
    { 
      icon: <FileText size={isMobile ? 20 : 24} />, 
      label: 'Resume', 
      href: '/ARYAN-DHIMAN-RESUME.pdf', 
      color: '#ff2e63', 
      desc: 'Download PDF',
      download: true
    },
    { 
      icon: <Globe size={isMobile ? 20 : 24} />, 
      label: 'Portfolio', 
      href: '#projects', 
      color: '#00f6ff', 
      desc: 'Live Projects',
      external: false
    }
  ];

  useEffect(() => {
    if (!isLoaded) return;
    
    const createParticles = () => {
      const container = document.querySelector('.hero-particles');
      if (!container) return;
      
      container.innerHTML = '';
      const particleCount = isMobile ? 30 : 80; 
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background: ${i % 3 === 0 ? '#00f6ff' : i % 3 === 1 ? '#7f5cff' : '#ff2e63'};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          border-radius: 50%;
          filter: blur(${Math.random() * 0.8 + 0.3}px);
          opacity: ${Math.random() * 0.15 + 0.05};
          animation: float ${Math.random() * 6 + 3}s ease-in-out infinite;
          animation-delay: ${Math.random() * 2}s;
          z-index: 1;
          pointer-events: none;
        `;
        
        container.appendChild(particle);
      }
    };

    createParticles();
    const handleResize = () => {
      setTimeout(createParticles, 100); // Debounce resize
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      const container = document.querySelector('.hero-particles');
      if (container) container.innerHTML = '';
    };
  }, [isMobile, isLoaded]);

  return (
    <section 
      ref={heroRef} 
      className="hero-section" 
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '20px 20px' : '60px 10%'
      }}
    >
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="hero-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${isMobile ? '40%' : '30%'} ${isMobile ? '30%' : '20%'}, rgba(0, 246, 255, ${isMobile ? '0.08' : '0.12'}) 0%, transparent 50%), radial-gradient(circle at ${isMobile ? '60%' : '70%'} ${isMobile ? '70%' : '80%'}, rgba(127, 92, 255, ${isMobile ? '0.04' : '0.08'}) 0%, transparent 50%)`,
          zIndex: 1
        }} />
      </motion.div>

      {/* Particles Container */}
      <div className="hero-particles" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        padding: '0',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', width: '100%' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              marginBottom: isMobile ? '20px' : '30px',
              display: 'inline-block'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                padding: isMobile ? '10px 16px' : '12px 24px',
                borderRadius: '50px',
                background: 'rgba(0, 246, 255, 0.1)',
                border: '1px solid rgba(0, 246, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  width: isMobile ? '6px' : '8px',
                  height: isMobile ? '6px' : '8px',
                  background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                  borderRadius: '50%'
                }}
              />
              <span style={{
                fontSize: isMobile ? '0.75rem' : '0.9rem',
                fontWeight: '600',
                letterSpacing: '1px',
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                ASPIRING FULL-STACK DEVELOPER
              </span>
            </motion.div>
          </motion.div>

          {/* Main Heading  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 style={{
              fontSize: isMobile ? '2.2rem' : 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: 1.1,
              marginBottom: isMobile ? '15px' : '20px',
              color: '#fff'
            }}>
              <span style={{ 
                display: 'block',
                marginBottom: isMobile ? '8px' : '10px'
              }}>
                Hi, I'm{' '}
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'inline'
                  }}
                >
                  Aryan Dhiman
                </motion.span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{ 
                  color: 'rgba(255, 255, 255, 0.9)',
                  display: 'block',
                  fontSize: isMobile ? '1.3rem' : 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '600'
                }}
              >
                MERN-Stack Developer | CSE Undergrad
              </motion.span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              lineHeight: 1.6,
              marginBottom: isMobile ? '25px' : '30px'
            }}>
              Passionate Computer Science Engineering student with expertise in{' '}
              <strong style={{ color: '#00f6ff' }}>designing, developing, and testing scalable web applications</strong>. 
              Currently pursuing B.Tech at CGC Jhanjeri with{' '}
              <strong style={{ color: '#7f5cff' }}>CGPA 9.15</strong>. 
              Actively seeking Software Engineering Internship opportunities.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isMobile ? '12px' : '15px',
              marginBottom: isMobile ? '30px' : '40px'
            }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: 'rgba(0, 246, 255, 0.4)',
                    backgroundColor: 'rgba(0, 246, 255, 0.05)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '12px' : '15px',
                    padding: isMobile ? '14px 16px' : '16px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.03)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: isMobile ? '40px' : '45px',
                      height: isMobile ? '40px' : '45px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(127, 92, 255, 0.1))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f6ff',
                      flexShrink: 0
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div style={{ 
                    overflow: 'hidden',
                    minWidth: 0 // Important for text truncation
                  }}>
                    <div style={{ 
                      fontSize: isMobile ? '0.85rem' : '0.9rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {info.text}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '12px' : '20px', 
              flexWrap: 'wrap', 
              marginBottom: isMobile ? '40px' : '50px' 
            }}>
              <motion.a
                href="#projects"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 10px 30px rgba(0, 246, 255, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '10px',
                  padding: isMobile ? '14px 24px' : '15px 30px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                  color: '#000',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  textDecoration: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  justifyContent: 'center',
                  flex: isMobile ? '1' : 'auto',
                  minWidth: isMobile ? '140px' : 'auto'
                }}
              >
                <span>View My Projects</span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronDown size={isMobile ? 18 : 20} />
                </motion.div>
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(0, 246, 255, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '10px',
                  padding: isMobile ? '14px 24px' : '15px 30px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  justifyContent: 'center',
                  flex: isMobile ? '1' : 'auto',
                  minWidth: isMobile ? '140px' : 'auto'
                }}
              >
                <span>Contact Me</span>
                <ExternalLink size={isMobile ? 16 : 18} />
              </motion.a>

              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '10px',
                  padding: isMobile ? '14px 24px' : '15px 30px',
                  borderRadius: '12px',
                  background: 'rgba(255, 46, 99, 0.1)',
                  color: '#ff2e63',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 46, 99, 0.3)',
                  cursor: 'pointer',
                  justifyContent: 'center',
                  flex: isMobile ? '1' : 'auto',
                  minWidth: isMobile ? '140px' : 'auto'
                }}
              >
                <Award size={isMobile ? 16 : 18} />
                <span>Achievements</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Professional Links - FIXED Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ marginTop: isMobile ? '30px' : '40px' }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: isMobile ? '10px' : '15px',
              marginBottom: isMobile ? '20px' : '25px'
            }}>
              <div style={{
                height: '1px',
                flex: 1,
                background: 'linear-gradient(90deg, #00f6ff, transparent)',
                borderRadius: '1px'
              }} />
              <span style={{
                fontSize: isMobile ? '0.8rem' : '0.9rem',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.6)',
                whiteSpace: 'nowrap',
                padding: '0 10px'
              }}>
                PROFESSIONAL LINKS
              </span>
              <div style={{
                height: '1px',
                flex: 1,
                background: 'linear-gradient(90deg, transparent, #7f5cff)',
                borderRadius: '1px'
              }} />
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '12px' : '15px'
            }}>
              {professionalLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  download={link.download}
                  whileHover={{ 
                    y: -5,
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${link.color}22`
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                  style={{
                    padding: isMobile ? '16px' : '20px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    border: `1px solid ${link.color}22`,
                    background: `linear-gradient(135deg, ${link.color}11, ${link.color}05)`,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear"
                    }}
                    style={{
                      width: isMobile ? '40px' : '50px',
                      height: isMobile ? '40px' : '50px',
                      borderRadius: '12px',
                      background: `linear-gradient(135deg, ${link.color}22, ${link.color}44)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '1.2rem' : '1.5rem',
                      color: link.color
                    }}
                  >
                    {link.icon}
                  </motion.div>
                  <div style={{ width: '100%' }}>
                    <div style={{ 
                      fontWeight: '600',
                      fontSize: isMobile ? '0.9rem' : '1rem',
                      color: '#fff',
                      marginBottom: '4px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {link.label}
                    </div>
                    <div style={{ 
                      fontSize: isMobile ? '0.75rem' : '0.85rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      lineHeight: 1.2
                    }}>
                      {link.desc}
                    </div>
                  </div>
                  {link.download && (
                    <Download size={isMobile ? 16 : 18} style={{ 
                      color: link.color,
                      opacity: 0.8
                    }} />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }}
      >
        <span style={{
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          letterSpacing: '1px'
        }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} color="rgba(255, 255, 255, 0.3)" />
        </motion.div>
      </motion.div>

      {/* Mobile Optimizations */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 60px;
          }
          
          /* Ensure text is visible */
          h1 span {
            display: inline !important;
          }
          
          /* Fix professional links layout */
          .professional-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          /* Improve touch targets */
          a, button {
            min-height: 44px;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem !important;
          }
          
          .professional-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Keyframes for float animation */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-15px); 
          }
        }
      `}</style>
    </section>
  );
}