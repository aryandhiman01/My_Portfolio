import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, Palette, Cpu, Zap, 
  Server, Database, Cloud, Smartphone,
  GitBranch, Layers, Globe, Terminal,
  Sparkles, TrendingUp, Settings, TestTube,
  Send
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');
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

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const x = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 50] : [0, 100]);

  const categories = {
    frontend: {
      title: 'Frontend Development',
      color: '#00f6ff',
      icon: <Code size={isMobile ? 20 : 24} />,
      skills: [
        { name: 'React.js', level: 88, icon: <Code size={16} /> },
        { name: 'Next.js', level: 82, icon: <Zap size={16} /> },
        { name: 'HTML5 / CSS3', level: 92, icon: <Palette size={16} /> },
        { name: 'JavaScript', level: 90, icon: <Cpu size={16} /> },
        { name: 'Tailwind CSS', level: 85, icon: <Smartphone size={16} /> },
      ]
    },
    backend: {
      title: 'Backend & Database',
      color: '#7f5cff',
      icon: <Server size={isMobile ? 20 : 24} />,
      skills: [
        { name: 'Node.js / Express', level: 85, icon: <Server size={16} /> },
        { name: 'Python / Django', level: 80, icon: <Settings size={16} /> }, 
        { name: 'MongoDB / PostgreSQL', level: 82, icon: <Database size={16} /> },
        { name: 'RESTful APIs', level: 88, icon: <Globe size={16} /> },
        { name: 'Authentication (JWT)', level: 78, icon: <Terminal size={16} /> }
      ]
    },
    programming: {
      title: 'Programming & Tools',
      color: '#ff2e63',
      icon: <Cpu size={isMobile ? 20 : 24} />,
      skills: [
        { name: 'C++ / Java', level: 85, icon: <Cpu size={16} /> },
        { name: 'Python', level: 87, icon: <Code size={16} /> },
        { name: 'Git & GitHub', level: 90, icon: <GitBranch size={16} /> },
        { name: 'DSA', level: 88, icon: <Layers size={16} /> },
        { name: 'Postman', level: 75, icon: <Send size={16} /> }
      ]
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="skills" 
      style={{ 
        minHeight: '100vh',
        padding: isMobile ? '60px 20px' : '120px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <motion.div 
        style={{ rotate, x }}
        className="parallax-layer layer-3"
      >
        <div style={{
          position: 'absolute',
          width: isMobile ? '200px' : '400px',
          height: isMobile ? '200px' : '400px',
          background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.1), rgba(255, 46, 99, 0.1))',
          top: '50%',
          left: '10%',
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
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '50px' : '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px',
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50px',
              marginBottom: isMobile ? '20px' : '30px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                width: isMobile ? '16px' : '20px',
                height: isMobile ? '16px' : '20px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f6ff, #7f5cff)'
              }}
            />
            <span style={{
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              fontWeight: '600',
              letterSpacing: isMobile ? '1px' : '2px',
              color: '#00f6ff'
            }}>
              TECHNICAL EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              fontSize: isMobile ? '2rem' : 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '15px' : '20px'
            }}
          >
            Skills & <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Proficiency</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Strengthening Full-stack development with focus on scalable web applications
          </motion.p>
        </div>

        {/* Skill Category Selector */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: isMobile ? '12px' : '20px',
          marginBottom: isMobile ? '40px' : '60px',
          flexWrap: 'wrap'
        }}>
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? -2 : -5 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                background: activeCategory === key ? 
                  `linear-gradient(135deg, ${category.color}, ${category.color}dd)` : 
                  'rgba(255, 255, 255, 0.05)',
                borderColor: activeCategory === key ? category.color : 'rgba(255, 255, 255, 0.2)'
              }}
              style={{
                padding: isMobile ? '12px 20px' : '15px 30px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                color: 'white',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '10px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span style={{ color: category.color }}>{category.icon}</span>
              {isMobile ? category.title.split(' ')[0] : category.title}
            </motion.button>
          ))}
        </div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass"
          style={{ 
            padding: isMobile ? '25px' : '50px',
            borderRadius: '16px',
            marginBottom: isMobile ? '40px' : '80px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: isMobile ? '15px' : '20px',
            marginBottom: isMobile ? '30px' : '40px'
          }}>
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              style={{
                width: isMobile ? '50px' : '60px',
                height: isMobile ? '50px' : '60px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${categories[activeCategory].color}22, ${categories[activeCategory].color}44)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: isMobile ? '1.5rem' : '1.8rem',
                color: categories[activeCategory].color,
                flexShrink: 0
              }}
            >
              {categories[activeCategory].icon}
            </motion.div>
            <div>
              <h3 style={{ 
                fontSize: isMobile ? '1.3rem' : '1.8rem', 
                marginBottom: '5px',
                color: categories[activeCategory].color
              }}>
                {categories[activeCategory].title}
              </h3>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                Hands-on experience with modern web technologies
              </p>
            </div>
          </div>

          {/* Skills Progress Bars */}
          <div>
            {categories[activeCategory].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                viewport={{ once: true }}
                style={{ marginBottom: isMobile ? '25px' : '30px' }}
              >
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: isMobile ? '10px' : '15px'
                  }}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{ 
                        color: categories[activeCategory].color,
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span style={{ 
                      fontSize: isMobile ? '0.95rem' : '1.1rem',
                      fontWeight: '500'
                    }}>
                      {skill.name}
                    </span>
                  </div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    style={{ 
                      fontWeight: '700',
                      fontSize: isMobile ? '0.95rem' : '1.1rem',
                      background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}dd)`,
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                
                <div style={{
                  height: isMobile ? '8px' : '10px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 1.2 + i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}bb)`,
                      borderRadius: '4px',
                      position: 'relative'
                    }}
                  >
                    <motion.div
                      animate={{ 
                        left: ['0%', '100%', '0%']
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        width: '30%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        borderRadius: '4px'
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ 
            padding: isMobile ? '30px' : '60px',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px'
          }}
        >
          <h3 style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            marginBottom: isMobile ? '25px' : '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '10px' : '15px'
          }}>
            <TrendingUp style={{ color: '#00f6ff' }} />
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Technology Stack</span>
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '10px' : '15px',
            justifyContent: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              'React.js', 'Next.js', 'Node.js', 'Express.js', 'JavaScript', 'Python',
              'MongoDB', 'PostgreSQL', 'Django REST', 'HTML5', 'CSS3', 'Git',
              'Postman', 'Google Maps API', 'Open Weather API', 'Socket.IO', 'JWT',
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  delay: 1.2 + i * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: isMobile ? 1.05 : 1.15, 
                  y: isMobile ? -4 : -8,
                  color: '#00f6ff'
                }}
                viewport={{ once: true }}
                style={{
                  padding: isMobile ? '8px 16px' : '12px 25px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '500',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}