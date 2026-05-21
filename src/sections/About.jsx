// src/sections/About.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { 
  Target, Award, Book, GraduationCap, Briefcase,
  Code, Users, Sparkles, Zap, Shield, Trophy, Calendar,
  Brain, Building, Rocket, TrendingUp, BookOpen
} from 'lucide-react';
import { StaggerContainer, SlideInLeft, SlideInRight, FlipCard } from '../components/Animations';

export default function About() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    const resizeHandler = () => {
      checkMobile();
      if (window.innerWidth > 768) {
        setExpandedCard(null); // Reset expanded state on desktop
      }
    };
    
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  // Optimized toggle function
  const toggleCard = useCallback((id) => {
    if (!isMobile) return;
    setExpandedCard(prev => prev === id ? null : id);
  }, [isMobile]);

  // Academic stats from resume
  const academicStats = [
    { value: '9.15', label: 'Current CGPA', icon: GraduationCap, color: '#00f6ff', desc: 'B.Tech CSE, 2nd Year' },
    { value: '100%', label: 'Class X Score', icon: Award, color: '#7f5cff', desc: 'HPBOSE Board' },
    { value: '93.6%', label: 'Class XII Score', icon: Book, color: '#ff2e63', desc: 'HPBOSE Board' },
    { value: '5+', label: 'Major Projects', icon: Rocket, color: '#00f6ff', desc: 'Full-Stack Apps' }
  ];

  // Industry Experience
  const industryExperience = [
    {
      id: 1,
      company: 'Codveda Technologies',
      role: 'Frontend Developer Intern',
      period: 'July 2025 – August 2025',
      achievements: [
        'Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js',
        'Improved UI performance and cross-device responsiveness through optimized components',
        'Followed software engineering best practices for clean, maintainable code'
      ],
      tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      color: '#00f6ff',
      icon: Code
    },
    {
      id: 2,
      company: 'Training Advisory Council (TAC)',
      role: 'Management Lead',
      period: 'Ongoing',
      achievements: [
        'Led planning and execution of technical workshops',
        'Managed placement drives and student development initiatives',
        'Organized skill development programs at CGC University'
      ],
      tech: ['Leadership', 'Event Management', 'Team Coordination'],
      color: '#ff2e63',
      icon: TrendingUp
    },
    {
      id: 3,
      company: 'D4 Community',
      role: 'Core Member',
      period: 'Ongoing',
      achievements: [
        'Contributed to technical planning and development activities',
        'Participated in collaborative learning initiatives',
        'Worked on team-based technical projects'
      ],
      tech: ['Team Collaboration', 'Technical Planning', 'Development'],
      color: '#7f5cff',
      icon: Users
    }
  ];

  // Development Philosophy
  const developmentPhilosophy = [
    {
      title: 'Real-World Impact',
      description: 'Building projects that address actual societal and environmental challenges',
      icon: Target,
      color: '#00f6ff'
    },
    {
      title: 'Software Engineering Best Practices',
      description: 'Follow clean code principles and maintainable architecture for scalable applications',
      icon: Shield,
      color: '#7f5cff'
    },
    {
      title: 'Team Collaboration',
      description: 'Experience in agile development and team-based project environments',
      icon: Users,
      color: '#ff2e63'
    },
    {
      title: 'Performance Optimization',
      description: 'Focus on optimized components and responsive design for better user experience',
      icon: Zap,
      color: '#00f6ff'
    }
  ];

  // Pre-calculated values for performance
  const clamp = (min, vw, max) => `clamp(${min}px, ${vw}vw, ${max}px)`;

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="about-section"
      style={{ 
        minHeight: '100vh',
        padding: isMobile ? '40px 20px' : '80px 10%',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="about-background"
      >
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: clamp(200, 80, 500),
          height: clamp(200, 80, 500),
          background: 'radial-gradient(circle, rgba(0, 246, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: clamp(200, 80, 500),
          height: clamp(200, 80, 500),
          background: 'radial-gradient(circle, rgba(127, 92, 255, 0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          zIndex: 1
        }} />
      </motion.div>

      <div style={{ 
        maxWidth: '100%', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
        width: '100%'
      }}>
        <StaggerContainer delay={0.2}>
          {/* Section Header */}
          <div style={{ 
            marginBottom: clamp(40, 8, 80),
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <SlideInLeft>
              <motion.div
                className="glass"
                whileHover={{ scale: 1.02 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: `${clamp(8, 2, 12)} ${clamp(16, 3, 24)}`,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '50px',
                  marginBottom: clamp(20, 4, 30),
                  backdropFilter: 'blur(10px)'
                }}
              >
                <motion.div
                  animate={{ width: ['20px', '40px', '20px'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    height: '2px',
                    background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                    borderRadius: '1px',
                    minWidth: '20px'
                  }}
                />
                <span style={{
                  fontSize: clamp(11.2, 2, 14.4),
                  fontWeight: '600',
                  letterSpacing: clamp(1, 0.5, 2),
                  color: '#00f6ff',
                  whiteSpace: 'nowrap'
                }}>
                  PROFESSIONAL JOURNEY
                </span>
              </motion.div>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <h2 style={{
                fontSize: clamp(32, 6, 56),
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: clamp(15, 3, 20),
                textAlign: isMobile ? 'center' : 'left'
              }}>
                About <span style={{
                  background: 'linear-gradient(90deg, #00f6ff, #7f5cff, #ff2e63)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}>Aryan Dhiman</span>
              </h2>
            </SlideInLeft>

            <SlideInLeft delay={0.4}>
              <div style={{
                fontSize: clamp(16, 3, 19.2),
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                lineHeight: '1.6',
                marginBottom: clamp(15, 3, 20),
                textAlign: isMobile ? 'center' : 'left',
                margin: isMobile ? '0 auto' : '0'
              }}>
                <strong style={{ color: '#00f6ff' }}>Computer Science and Engineering undergraduate</strong> with hands-on 
                experience in designing, developing, and testing scalable web applications.
              </div>
              <div style={{
                fontSize: clamp(14.4, 2.5, 17.6),
                color: 'rgba(255, 255, 255, 0.6)',
                maxWidth: '800px',
                lineHeight: '1.6',
                textAlign: isMobile ? 'center' : 'left',
                margin: isMobile ? '0 auto' : '0'
              }}>
                Actively strengthening <strong style={{ color: '#7f5cff' }}>full-stack web development</strong>, 
                <strong style={{ color: '#00f6ff' }}> Data Structures & Algorithms</strong>, and 
                <strong style={{ color: '#ff2e63' }}> object-oriented programming</strong> through practical experience.
              </div>
            </SlideInLeft>
          </div>

          {/* Academic & Project Stats Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: clamp(15, 3, 25),
            marginBottom: clamp(40, 8, 80)
          }}>
            {academicStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <FlipCard key={stat.label} delay={0.6 + i * 0.1}>
                  <motion.div
                    className="glass"
                    whileHover={{ 
                      scale: isMobile ? 1.02 : 1.05,
                      rotateY: isMobile ? 0 : 180
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      padding: `${clamp(20, 4, 35)} ${clamp(15, 3, 25)}`,
                      textAlign: 'center',
                      height: '100%',
                      borderRadius: clamp(15, 3, 20),
                      border: `1px solid ${stat.color}22`,
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      position: 'relative',
                      overflow: 'hidden',
                      minHeight: isMobile ? 'auto' : '200px'
                    }}
                  >
                    <motion.div
                      style={{ position: 'relative', height: '100%' }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                          width: clamp(40, 8, 60),
                          height: clamp(40, 8, 60),
                          margin: `0 auto ${clamp(15, 3, 20)}`,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${stat.color}22, ${stat.color}44)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: clamp(19.2, 3, 28.8),
                          color: stat.color
                        }}
                      >
                        <Icon />
                      </motion.div>
                      <div style={{
                        fontSize: clamp(28.8, 5, 40),
                        fontWeight: '700',
                        marginBottom: clamp(3, 1, 5),
                        background: `linear-gradient(90deg, ${stat.color}, ${stat.color}dd)`,
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        lineHeight: '1'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{ 
                        color: '#fff',
                        fontSize: clamp(14.4, 2.5, 17.6),
                        fontWeight: '600',
                        marginBottom: clamp(5, 1, 8),
                        lineHeight: '1.2'
                      }}>
                        {stat.label}
                      </div>
                      <div style={{ 
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: clamp(12, 2, 14.4),
                        lineHeight: '1.4'
                      }}>
                        {stat.desc}
                      </div>
                    </motion.div>

                    {!isMobile && (
                      <motion.div
                        initial={{ opacity: 0, rotateY: 180 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          padding: '25px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${stat.color}11, ${stat.color}22)`,
                          borderRadius: '20px',
                          backfaceVisibility: 'hidden'
                        }}
                      >
                        <Sparkles style={{ 
                          color: stat.color, 
                          fontSize: clamp(24, 4, 40),
                          marginBottom: '15px'
                        }} />
                        <div style={{
                          color: '#fff',
                          fontSize: clamp(14.4, 2.5, 16),
                          fontWeight: '600',
                          textAlign: 'center',
                          lineHeight: '1.2'
                        }}>
                          {stat.label.includes('CGPA') ? 'Academic Excellence' : 'Project Excellence'}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </FlipCard>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr',
            gap: clamp(30, 6, 60),
            marginBottom: clamp(40, 8, 80)
          }}>
            
            {/* Industry Experience */}
            <SlideInLeft delay={0.8}>
              <div className="glass" style={{ 
                padding: isMobile ? clamp(20, 4, 25) : clamp(30, 5, 40),
                borderRadius: clamp(15, 3, 20),
                border: '1px solid rgba(0, 246, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ 
                  fontSize: clamp(22.4, 4, 28.8),
                  marginBottom: clamp(20, 4, 30),
                  display: 'flex',
                  alignItems: 'center',
                  gap: clamp(8, 2, 12),
                  color: '#fff',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  textAlign: isMobile ? 'center' : 'left'
                }}>
                  <Building style={{ color: '#00f6ff' }} />
                  Internship Experience & Leadership
                </h3>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: clamp(20, 3, 25)
                }}>
                  {industryExperience.map((exp, index) => {
                    const Icon = exp.icon;
                    const isExpanded = expandedCard === exp.id;
                    
                    return (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                        whileHover={isMobile ? {} : { 
                          y: -8, 
                          transition: { type: "spring", stiffness: 300 } 
                        }}
                        className="glass"
                        onClick={() => toggleCard(exp.id)}
                        style={{
                          padding: clamp(20, 3, 25),
                          background: `linear-gradient(135deg, ${exp.color}11, ${exp.color}05)`,
                          border: `1px solid ${exp.color}22`,
                          borderRadius: clamp(12, 2, 16),
                          position: 'relative',
                          overflow: 'hidden',
                          backdropFilter: 'blur(10px)',
                          cursor: isMobile ? 'pointer' : 'default'
                        }}
                      >
                        {/* Company Header */}
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start',
                          gap: clamp(12, 2, 15),
                          marginBottom: isMobile && !isExpanded ? 0 : clamp(15, 3, 20)
                        }}>
                          <div style={{
                            width: clamp(40, 8, 50),
                            height: clamp(40, 8, 50),
                            borderRadius: clamp(8, 2, 12),
                            background: `linear-gradient(135deg, ${exp.color}22, ${exp.color}44)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: clamp(16, 3, 24),
                            color: exp.color,
                            flexShrink: 0
                          }}>
                            <Icon />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              justifyContent: 'space-between',
                              gap: '10px'
                            }}>
                              <h4 style={{ 
                                fontSize: clamp(16, 3, 20.8),
                                fontWeight: '700',
                                color: '#fff',
                                marginBottom: clamp(3, 1, 5),
                                lineHeight: '1.2',
                                wordBreak: 'break-word',
                                flex: 1
                              }}>
                                {exp.company}
                              </h4>
                              {isMobile && (
                                <motion.div
                                  animate={{ rotate: isExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  style={{
                                    color: exp.color,
                                    fontSize: clamp(16, 3, 19.2),
                                    flexShrink: 0,
                                    marginTop: '2px'
                                  }}
                                >
                                  ▼
                                </motion.div>
                              )}
                            </div>
                            <div style={{ 
                              fontSize: clamp(13.6, 2.5, 16),
                              color: exp.color,
                              fontWeight: '600',
                              marginBottom: clamp(3, 1, 5),
                              wordBreak: 'break-word'
                            }}>
                              {exp.role}
                            </div>
                            <div style={{ 
                              fontSize: clamp(12, 2, 13.6),
                              color: 'rgba(255, 255, 255, 0.6)',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '5px',
                              flexWrap: 'wrap'
                            }}>
                              <Calendar size={isMobile ? 12 : 14} />
                              {exp.period}
                            </div>
                          </div>
                        </div>

                        {/* Collapsible Content with optimized animation */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isMobile && !isExpanded ? 0 : 'auto',
                            opacity: isMobile && !isExpanded ? 0 : 1
                          }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          style={{
                            overflow: 'hidden',
                            willChange: 'height, opacity'
                          }}
                        >
                          {/* Achievements */}
                          <div style={{ 
                            marginBottom: clamp(15, 3, 20)
                          }}>
                            <h5 style={{ 
                              fontSize: clamp(14.4, 2.5, 16),
                              color: 'rgba(255, 255, 255, 0.9)',
                              marginBottom: clamp(10, 2, 12),
                              fontWeight: '600'
                            }}>
                              Key Contributions:
                            </h5>
                            <ul style={{ 
                              paddingLeft: clamp(16, 3, 20),
                              margin: 0
                            }}>
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 1 + index * 0.1 + i * 0.03, duration: 0.3 }}
                                  style={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    fontSize: clamp(12.8, 2.5, 14.4),
                                    lineHeight: '1.5',
                                    marginBottom: clamp(8, 1.5, 10),
                                    listStyleType: 'none',
                                    position: 'relative',
                                    wordBreak: 'break-word'
                                  }}
                                >
                                  <span style={{
                                    position: 'absolute',
                                    left: '-12px',
                                    top: '8px',
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50%',
                                    background: exp.color
                                  }} />
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <div style={{ 
                              display: 'flex', 
                              flexWrap: 'wrap',
                              gap: clamp(6, 1.5, 8)
                            }}>
                              {exp.tech.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 1.2 + index * 0.1 + i * 0.05, duration: 0.2 }}
                                  whileHover={isMobile ? {} : { scale: 1.1, y: -2 }}
                                  whileTap={{ scale: 0.95 }}
                                  style={{
                                    padding: `${clamp(5, 1, 7)} ${clamp(9, 2, 13)}`,
                                    background: `rgba(${parseInt(exp.color.slice(1, 3), 16)}, ${parseInt(exp.color.slice(3, 5), 16)}, ${parseInt(exp.color.slice(5, 7), 16)}, 0.15)`,
                                    border: `1px solid ${exp.color}33`,
                                    borderRadius: '20px',
                                    fontSize: clamp(11.2, 2, 12.8),
                                    color: exp.color,
                                    fontWeight: '500',
                                    whiteSpace: 'nowrap'
                                  }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </motion.div>

                        {/* Mobile Expand/Collapse Instruction */}
                        {isMobile && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '12px',
                            color: exp.color,
                            fontSize: clamp(11.2, 2, 12.8),
                            gap: '5px',
                            padding: '6px',
                            background: `${exp.color}08`,
                            borderRadius: '6px',
                            border: `1px solid ${exp.color}20`
                          }}>
                            {isExpanded ? 'Tap to collapse ▲' : 'Tap to expand ▼'}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </SlideInLeft>

            {/* Development Philosophy & Certifications */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: clamp(25, 4, 40)
            }}>
              
              {/* Development Philosophy */}
              <SlideInLeft delay={1}>
                <div className="glass" style={{ 
                  padding: clamp(25, 4, 35),
                  borderRadius: clamp(15, 3, 20),
                  border: '1px solid rgba(127, 92, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  height: isMobile ? 'auto' : '100%'
                }}>
                  <h3 style={{ 
                    fontSize: clamp(22.4, 4, 28.8),
                    marginBottom: clamp(20, 4, 30),
                    display: 'flex',
                    alignItems: 'center',
                    gap: clamp(8, 2, 12),
                    color: '#fff',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    textAlign: isMobile ? 'center' : 'left'
                  }}>
                    <Brain style={{ color: '#7f5cff' }} />
                    Development Philosophy
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: clamp(15, 3, 25)
                  }}>
                    {developmentPhilosophy.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                          whileHover={isMobile ? {} : { scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'row' : 'column',
                            gap: clamp(12, 2, 15),
                            alignItems: isMobile ? 'flex-start' : 'center',
                            padding: clamp(15, 3, 20),
                            background: `linear-gradient(135deg, ${item.color}11, ${item.color}05)`,
                            border: `1px solid ${item.color}22`,
                            borderRadius: clamp(12, 2, 16),
                            textAlign: isMobile ? 'left' : 'center'
                          }}
                        >
                          <motion.div
                            whileHover={{ rotate: isMobile ? 0 : 360, scale: isMobile ? 1 : 1.1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                              width: clamp(40, 8, 45),
                              height: clamp(40, 8, 45),
                              borderRadius: clamp(8, 2, 12),
                              background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                              color: item.color,
                              fontSize: clamp(16, 3, 19.2)
                            }}
                          >
                            <Icon />
                          </motion.div>
                          <div style={{ flex: 1 }}>
                            <h4 style={{ 
                              fontSize: clamp(15.2, 2.5, 17.6),
                              fontWeight: '600',
                              color: '#fff',
                              marginBottom: clamp(5, 1, 8),
                              lineHeight: '1.2',
                              wordBreak: 'break-word'
                            }}>
                              {item.title}
                            </h4>
                            <p style={{ 
                              color: 'rgba(255, 255, 255, 0.6)',
                              fontSize: clamp(12.8, 2.5, 15.2),
                              lineHeight: '1.5',
                              margin: 0,
                              wordBreak: 'break-word'
                            }}>
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </SlideInLeft>

              {/* Certifications & Career Objective */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: clamp(25, 4, 30)
              }}>
                
                {/* Certifications */}
                <SlideInRight delay={1.2}>
                  <div className="glass" style={{ 
                    padding: clamp(20, 3, 25),
                    borderRadius: clamp(15, 3, 20),
                    border: '1px solid rgba(0, 246, 255, 0.1)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{ 
                      fontSize: clamp(19.2, 3.5, 24),
                      marginBottom: clamp(15, 3, 20),
                      display: 'flex',
                      alignItems: 'center',
                      gap: clamp(8, 2, 12),
                      color: '#fff',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      <BookOpen style={{ color: '#00f6ff' }} />
                      Certifications
                    </h3>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column',
                      gap: clamp(12, 2, 15)
                    }}>
                      {[
                        {
                          title: 'Technology Job Simulation',
                          issuer: 'Deloitte (Forage)',
                          icon: Briefcase,
                          color: '#00f6ff'
                        },
                        {
                          title: 'Python Fundamentals',
                          issuer: 'Infosys Springboard',
                          icon: Code,
                          color: '#7f5cff'
                        }
                      ].map((cert, i) => {
                        const Icon = cert.icon;
                        return (
                          <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                            whileHover={isMobile ? {} : { x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: clamp(12, 2, 15),
                              padding: clamp(12, 2, 15),
                              background: `linear-gradient(135deg, ${cert.color}11, ${cert.color}05)`,
                              borderRadius: clamp(10, 2, 12),
                              border: `1px solid ${cert.color}22`
                            }}
                          >
                            <div style={{
                              width: clamp(35, 7, 40),
                              height: clamp(35, 7, 40),
                              borderRadius: clamp(8, 2, 10),
                              background: `linear-gradient(135deg, ${cert.color}22, ${cert.color}44)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: cert.color,
                              flexShrink: 0,
                              fontSize: clamp(14.4, 2.5, 17.6)
                            }}>
                              <Icon />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <div style={{ 
                                fontSize: clamp(14.4, 2.5, 16),
                                fontWeight: '600',
                                color: '#fff',
                                marginBottom: '3px',
                                wordBreak: 'break-word'
                              }}>
                                {cert.title}
                              </div>
                              <div style={{ 
                                fontSize: clamp(12, 2, 13.6),
                                color: 'rgba(255, 255, 255, 0.6)',
                                wordBreak: 'break-word'
                              }}>
                                {cert.issuer}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </SlideInRight>

                {/* Career Objective */}
                <SlideInRight delay={1.4}>
                  <div className="glass" style={{ 
                    padding: clamp(20, 3, 25),
                    borderRadius: clamp(15, 3, 20),
                    border: '1px solid rgba(255, 46, 99, 0.1)',
                    background: 'linear-gradient(135deg, rgba(255, 46, 99, 0.05), rgba(255, 46, 99, 0.02))',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <h3 style={{ 
                      fontSize: clamp(19.2, 3.5, 24),
                      marginBottom: clamp(15, 3, 20),
                      display: 'flex',
                      alignItems: 'center',
                      gap: clamp(8, 2, 12),
                      color: '#fff',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      textAlign: isMobile ? 'center' : 'left'
                    }}>
                      <Target style={{ color: '#ff2e63' }} />
                      Career Objective
                    </h3>
                    <p style={{ 
                      lineHeight: '1.6', 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: clamp(15, 3, 20),
                      fontSize: clamp(13.6, 2.5, 15.2),
                      textAlign: isMobile ? 'center' : 'left',
                      wordBreak: 'break-word'
                    }}>
                      Seeking a <strong style={{ color: '#ff2e63' }}>Software Engineering Internship</strong> 
                      to apply skills, learn from professionals, and contribute 
                      to impactful solutions in a dynamic team.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: clamp(6, 1.5, 10),
                      flexWrap: 'wrap',
                      justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                      {['Internship Ready', 'Quick Learner', 'Adaptable', 'Problem Solver'].map((tag, i) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.5 + i * 0.1, duration: 0.2 }}
                          whileHover={isMobile ? {} : { scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            padding: `${clamp(5, 1, 7)} ${clamp(9, 2, 13)}`,
                            background: 'rgba(255, 46, 99, 0.1)',
                            border: '1px solid rgba(255, 46, 99, 0.3)',
                            borderRadius: '20px',
                            fontSize: clamp(11.2, 2, 12.8),
                            color: '#ff2e63',
                            fontWeight: '500',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </SlideInRight>
              </div>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
