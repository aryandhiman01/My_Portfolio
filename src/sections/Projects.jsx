import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ExternalLink, Github, Star, 
  Zap, Users, ArrowRight, Code,
  ChevronLeft, ChevronRight,
  Globe, Map, Leaf, ShoppingCart, Activity
} from 'lucide-react';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [-30, 30] : [-100, 100]);

  const projects = [
    {
      title: 'GamEd: Gamified Environmental Education Platform',
      description: 'Full-stack role-based learning platform for environmental education with interactive modules and real-time user engagement analytics.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/aryan-26-prog/GamEd',
      featured: true,
      stats: { performance: '95%', rating: '4.7' },
      color: '#00f6ff',
      icon: <Leaf size={isMobile ? 20 : 24} />,
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    },

    {
      title: 'LifePulse AI: Real-Time Community Health Intelligence Platform',
      description: 'AI-powered platform that analyzes environmental data, community health signals, and disaster risks to provide real-time alerts and coordinated response for citizens, NGOs, and volunteers.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'FastAPI', 'Socket.IO', 'Python'],
      github: 'https://github.com/aryan-26-prog/LifePulse_AI',
      featured: false,
      stats: { performance: '95%', rating: '4.9' },
      color: '#00b894',
      icon: <Activity size={isMobile ? 20 : 24} />,
      images: [
        'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80',
        'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?auto=format&fit=crop&w=800&q=80'
      ]
    },
    
    {
      title: 'Smart Rasoi: AI-Powered Food Redistribution Platform',
      description: 'Real-time platform connecting food donors and NGOs using AI-based image analysis for food quantity and freshness estimation.',
      tags: ['React.js', 'Django REST', 'Google Maps API', 'Python', 'JavaScript'],
      github: 'https://github.com/aryan-26-prog/RasoiAI',
      featured: false,
      stats: { performance: '92%', rating: '4.8' },
      color: '#7f5cff',
      icon: <ShoppingCart size={isMobile ? 20 : 24} />,
      images: [
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      title: 'CivicTrack: Smart Civic Issue Reporting System',
      description: 'Geo-mapped civic issue reporting system with real-time status tracking and admin management for issue verification and resolution.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT'],
      github: 'https://github.com/aryan-26-prog/Civictrack',
      featured: false,
      stats: { performance: '94%', rating: '4.6' },
      color: '#ff2e63',
      icon: <Map size={isMobile ? 20 : 24} />,
      images: [
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://assets.telegraphindia.com/telegraph/2023/Feb/1676930739_ab51ee8c2d6b6ac70ba8bc4678028977.gif',
        'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      title: 'KKV: Digital Farmer Marketplace',
      description: 'Web-based marketplace enabling direct farmer-to-buyer trade with AI-based plant disease detection and live mandi price updates.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP'],
      github: 'https://github.com/aryan-26-prog/Kisaan-Krishi-Aur-Vayapaar',
      featured: false,
      stats: { performance: '90%', rating: '4.5' },
      color: '#00f6ff',
      icon: <Globe size={isMobile ? 20 : 24} />,
      images: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  const [activeImageIndices, setActiveImageIndices] = useState(
    projects.reduce((acc, _, i) => ({ ...acc, [i]: 0 }), {})
  );

  // Auto-change images for each project
  useEffect(() => {
    const timers = [];
    
    projects.forEach((project, index) => {
      if (project.images.length > 1) {
        const timer = setInterval(() => {
          setActiveImageIndices(prev => {
            const currentIndex = prev[index];
            const nextIndex = (currentIndex + 1) % project.images.length;
            return { ...prev, [index]: nextIndex };
          });
        }, 3000); // Change image every 3 seconds
        
        timers.push(timer);
      }
    });

    // Cleanup timers on unmount
    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="projects" 
      style={{ 
        minHeight: '100vh',
        padding: isMobile ? '40px 16px' : '100px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ y }}
        className="parallax-layer layer-2"
      >
        <div style={{
          position: 'absolute',
          width: isMobile ? '120px' : '300px',
          height: isMobile ? '120px' : '300px',
          background: 'linear-gradient(135deg, rgba(127, 92, 255, 0.1), rgba(255, 46, 99, 0.1))',
          bottom: '10%',
          right: '10%',
          filter: 'blur(40px)',
          borderRadius: '50%'
        }} />
      </motion.div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? '6px' : '10px',
              padding: isMobile ? '8px 14px' : '10px 20px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              marginBottom: isMobile ? '16px' : '24px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                width: isMobile ? '12px' : '16px',
                height: isMobile ? '12px' : '16px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f6ff, #7f5cff)'
              }}
            />
            <span style={{
              fontSize: isMobile ? '0.7rem' : '0.85rem',
              fontWeight: '600',
              letterSpacing: isMobile ? '0.5px' : '1px',
              color: '#00f6ff'
            }}>
              REAL-WORLD PROJECTS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
              fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '12px' : '18px',
              padding: isMobile ? '0 10px' : '0'
            }}
          >
            Project <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Showcase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{
              fontSize: isMobile ? '0.9rem' : '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: isMobile ? '100%' : '600px',
              margin: '0 auto',
              lineHeight: '1.5',
              padding: isMobile ? '0 10px' : '0'
            }}
          >
            Full-stack web applications built with modern technologies and real-world impact
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isMobile ? '24px' : '35px',
          marginBottom: isMobile ? '40px' : '70px'
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 80,
                damping: 10
              }}
              whileHover={!isMobile ? { 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              } : {}}
              viewport={{ once: true, amount: 0.2, margin: isMobile ? "-50px" : "0px" }}
              style={{ 
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              {/* Featured Badge - ONLY for GamEd */}
              {project.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    top: isMobile ? '10px' : '12px',
                    right: isMobile ? '10px' : '12px',
                    zIndex: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: isMobile ? '5px 10px' : '6px 12px',
                    background: 'linear-gradient(90deg, #ff2e63, #ff6b9d)',
                    borderRadius: '50px',
                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                    fontWeight: '600',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(255, 46, 99, 0.3)'
                  }}
                >
                  <Star size={isMobile ? 10 : 12} fill="white" />
                  Hackathon Winner
                </motion.div>
              )}

              {/* Project Image Gallery */}
              <div
                style={{
                  height: isMobile ? '200px' : '280px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(45deg, ${project.color}22, ${project.color}44)`,
                  userSelect: 'none'
                }}
              >
                {/* Main Project Image */}
                {project.images && project.images.length > 0 && (
                  <>
                    <motion.img
                      key={activeImageIndices[i]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={project.images[activeImageIndices[i]]}
                      alt={project.title}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.85)',
                        pointerEvents: 'none'
                      }}
                      loading="lazy"
                    />
                    
                    {/* Image Overlay Gradient */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.6) 100%)`,
                      pointerEvents: 'none'
                    }} />
                    
                    {/* Image Navigation Dots */}
                    {project.images.length > 1 && (
                      <div style={{
                        position: 'absolute',
                        visibility: 'hidden',
                        bottom: isMobile ? '12px' : '16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: isMobile ? '6px' : '8px',
                        zIndex: 3
                      }}>
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveImageIndices(prev => ({ ...prev, [i]: idx }));
                            }}
                            style={{
                              width: isMobile ? '8px' : '10px',
                              height: isMobile ? '8px' : '10px',
                              borderRadius: '50%',
                              background: idx === activeImageIndices[i] ? project.color : 'rgba(255, 255, 255, 0.4)',
                              border: 'none',
                              cursor: 'pointer',
                              padding: 0,
                              transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Project Icon Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        zIndex: 2,
                        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
                        background: 'rgba(0, 0, 0, 0.25)',
                        borderRadius: '50%',
                        padding: isMobile ? '12px' : '16px',
                        backdropFilter: 'blur(4px)',
                        pointerEvents: 'none'
                      }}
                    >
                      {project.icon}
                    </div>
                  </>
                )}
              </div>

              {/* Project Content */}
              <div style={{ 
                padding: isMobile ? '20px' : '30px',
                paddingBottom: isMobile ? '16px' : '24px'
              }}>
                <h3 style={{ 
                  fontSize: isMobile ? '1.2rem' : '1.5rem', 
                  marginBottom: isMobile ? '10px' : '12px',
                  lineHeight: '1.3',
                  color: '#fff',
                  fontWeight: '600'
                }}>
                  {project.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: '1.5',
                  marginBottom: isMobile ? '14px' : '18px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  gap: isMobile ? '5px' : '6px',
                  marginBottom: isMobile ? '14px' : '18px'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: isMobile ? '4px 8px' : '5px 10px',
                        background: `rgba(${parseInt(project.color.slice(1, 3), 16)}, ${parseInt(project.color.slice(3, 5), 16)}, ${parseInt(project.color.slice(5, 7), 16)}, 0.1)`,
                        border: `1px solid ${project.color}33`,
                        borderRadius: '50px',
                        fontSize: isMobile ? '0.65rem' : '0.75rem',
                        color: 'white',
                        whiteSpace: 'nowrap',
                        lineHeight: '1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats & Actions - Compact Layout */}
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '12px'
                }}>
                  {/* Stats - Compact */}
                  <div style={{ 
                    display: 'flex', 
                    gap: isMobile ? '8px' : '12px',
                    flexWrap: 'wrap'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: isMobile ? '6px 10px' : '7px 12px',
                      borderRadius: '6px',
                      minWidth: isMobile ? '70px' : '80px',
                      justifyContent: 'center'
                    }}>
                      <Zap size={isMobile ? 12 : 14} style={{ color: project.color }} />
                      <span style={{ 
                        fontSize: isMobile ? '0.75rem' : '0.85rem', 
                        color: 'white',
                        fontWeight: '500'
                      }}>
                        {project.stats.performance}
                      </span>
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      padding: isMobile ? '6px 10px' : '7px 12px',
                      borderRadius: '6px',
                      minWidth: isMobile ? '70px' : '80px',
                      justifyContent: 'center'
                    }}>
                      <Star size={isMobile ? 12 : 14} style={{ color: '#ffd700' }} />
                      <span style={{ 
                        fontSize: isMobile ? '0.75rem' : '0.85rem', 
                        color: 'white',
                        fontWeight: '500'
                      }}>
                        {project.stats.rating}
                      </span>
                    </div>
                  </div>

                  {/* Actions - Compact Circular Buttons */}
                  <div style={{ 
                    display: 'flex', 
                    gap: isMobile ? '6px' : '8px'
                  }}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        width: isMobile ? '36px' : '40px',
                        height: isMobile ? '36px' : '40px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        zIndex: 5,
                        WebkitTapHighlightColor: 'transparent'
                      }}
                    >
                      <Github size={isMobile ? 16 : 18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ 
            padding: isMobile ? '24px' : '50px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            backdropFilter: 'blur(10px)',
            marginBottom: isMobile ? '40px' : '80px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: isMobile ? '1.4rem' : '2.2rem', 
                marginBottom: isMobile ? '12px' : '18px',
                lineHeight: '1.2',
                padding: isMobile ? '0 10px' : '0'
              }}
            >
              Looking for a{' '}
              <span style={{
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>
                Software Engineering Intern?
              </span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                fontSize: isMobile ? '0.9rem' : '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: isMobile ? '100%' : '600px',
                margin: '0 auto',
                lineHeight: '1.5',
                marginBottom: isMobile ? '20px' : '35px',
                padding: isMobile ? '0 10px' : '0'
              }}
            >
              Let's discuss how I can contribute to your team with my full-stack development skills
            </motion.p>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: '0 0 30px rgba(0, 246, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '14px 28px' : '18px 45px',
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                border: 'none',
                borderRadius: '50px',
                color: '#000',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                textDecoration: 'none',
                minHeight: '50px',
                WebkitTapHighlightColor: 'transparent'
              }}
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Contact Me
              </motion.span>
              <ArrowRight size={isMobile ? 16 : 20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}