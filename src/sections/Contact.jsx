import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Send, 
  Linkedin, Github, Calendar,
  CheckCircle, Loader,
  User, MessageSquare, FileText,
  Briefcase, GraduationCap, Code,
  Instagram, Download
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', inquiryType: '' });
    }, 3000);
  };

  const contactInfo = [
    { 
      icon: <Mail size={isMobile ? 20 : 24} />, 
      title: 'Email', 
      value: 'aryandhiman2605@gmail.com', 
      desc: 'Response within 24 hours',
      color: '#00f6ff',
      link: 'mailto:aryandhiman2605@gmail.com'
    },
    { 
      icon: <Phone size={isMobile ? 20 : 24} />, 
      title: 'Phone', 
      value: '+91 9805297267', 
      desc: 'Available for calls',
      color: '#7f5cff',
      link: 'tel:+919805297267'
    },
    { 
      icon: <MapPin size={isMobile ? 20 : 24} />, 
      title: 'Location', 
      value: 'Mohali, Punjab', 
      desc: 'Pursuing B.Tech CSE at CGC University, Mohali',
      color: '#ff2e63'
    }
  ];

  const socialLinks = [
    { 
      icon: <Linkedin size={isMobile ? 18 : 22} />, 
      platform: 'LinkedIn', 
      url: 'https://linkedin.com/in/aryan-dhiman-2605ad', 
      color: '#0077B5',
      label: 'Connect professionally'
    },
    { 
      icon: <Github size={isMobile ? 18 : 22} />, 
      platform: 'GitHub', 
      url: 'https://github.com/aryandhiman01', 
      color: '#FFFFFF',
      label: 'View projects'
    },
    { 
      icon: <Instagram size={isMobile ? 18 : 22} />, 
      platform: 'Instagram', 
      url: 'https://www.instagram.com/aryandhiman_01', 
      color: '#E1306C',
      label: 'Follow'
    }
  ];

  const inquiryTypes = [
    { icon: <Briefcase size={isMobile ? 18 : 22} />, label: 'Internship', value: 'internship' },
    { icon: <GraduationCap size={isMobile ? 18 : 22} />, label: 'Collaboration', value: 'collaboration' },
    { icon: <Code size={isMobile ? 18 : 22} />, label: 'Technical', value: 'technical' },
    { icon: <MessageSquare size={isMobile ? 18 : 22} />, label: 'General', value: 'general' }
  ];

  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('contact-particles');
      if (!container) return;
      
      container.innerHTML = '';
      const particleCount = isMobile ? 15 : 30;
      
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
          filter: blur(${isMobile ? '0.5px' : '1px'});
          opacity: ${Math.random() * 0.15 + 0.05};
          animation: float ${Math.random() * 8 + 4}s ease-in-out infinite;
          animation-delay: ${Math.random() * 3}s;
          z-index: 1;
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
    return () => {
      const container = document.getElementById('contact-particles');
      if (container) container.innerHTML = '';
    };
  }, [isMobile]);

  return (
    <section id="contact" className="contact-section" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: isMobile ? '60px 20px' : '100px 5%',
      minHeight: isMobile ? 'auto' : '100vh'
    }}>
      
      <div id="contact-particles" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      <div style={{
        position: isMobile ? 'absolute' : 'relative',
        top: '20%',
        right: isMobile ? '-50%' : '10%',
        width: isMobile ? '150px' : '300px',
        height: isMobile ? '150px' : '300px',
        background: 'radial-gradient(circle, rgba(0, 246, 255, 0.1), transparent 70%)',
        borderRadius: '50%',
        filter: isMobile ? 'blur(20px)' : 'blur(40px)',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '60px' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: isMobile ? '8px 16px' : '10px 24px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              marginBottom: isMobile ? '15px' : '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: isMobile ? 'blur(5px)' : 'blur(10px)'
            }}
          >
            <div style={{
              width: '6px',
              height: '6px',
              background: '#00f6ff',
              borderRadius: '50%'
            }} />
            <span style={{
              fontSize: isMobile ? '0.75rem' : '0.85rem',
              fontWeight: '600',
              letterSpacing: '1px',
              color: '#00f6ff'
            }}>
              GET IN TOUCH
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: isMobile ? '15px' : '20px'
            }}
          >
            Let's{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Build Together
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Seeking software engineering internship opportunities to contribute, learn and grow.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: isMobile ? '30px' : '40px',
          marginBottom: isMobile ? '40px' : '60px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: isMobile ? '30px' : '40px'
          }}>
            
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass"
              style={{ 
                padding: isMobile ? '25px' : '40px',
                borderRadius: '16px'
              }}
            >
              <h3 style={{ 
                fontSize: isMobile ? '1.5rem' : '1.8rem', 
                marginBottom: isMobile ? '20px' : '30px',
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? '10px' : '12px'
              }}>
                <User size={isMobile ? 20 : 24} style={{ color: '#00f6ff' }} />
                Contact Information
              </h3>

              <div style={{ marginBottom: isMobile ? '30px' : '40px' }}>
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target={info.link ? '_blank' : '_self'}
                    rel={info.link ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: isMobile ? 0 : 5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '12px' : '15px',
                      padding: isMobile ? '16px' : '20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      marginBottom: isMobile ? '10px' : '15px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{
                      width: isMobile ? '45px' : '50px',
                      height: isMobile ? '45px' : '50px',
                      borderRadius: '10px',
                      background: `rgba(${parseInt(info.color.slice(1, 3), 16)}, ${parseInt(info.color.slice(3, 5), 16)}, ${parseInt(info.color.slice(5, 7), 16)}, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: isMobile ? '1.2rem' : '1.5rem',
                      color: info.color,
                      flexShrink: 0
                    }}>
                      {info.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: isMobile ? '0.75rem' : '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.6)',
                        marginBottom: '2px',
                        fontWeight: '500'
                      }}>
                        {info.title}
                      </div>
                      <div style={{ 
                        fontSize: isMobile ? '0.95rem' : '1.1rem', 
                        fontWeight: '600',
                        marginBottom: '2px',
                        color: '#fff'
                      }}>
                        {info.value}
                      </div>
                      <div style={{ 
                        fontSize: isMobile ? '0.75rem' : '0.85rem', 
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}>
                        {info.desc}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ 
                  marginBottom: isMobile ? '15px' : '20px', 
                  fontSize: isMobile ? '1.1rem' : '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <Code size={isMobile ? 18 : 20} style={{ color: '#00f6ff' }} />
                  Connect with Me
                </h4>
                <div style={{ 
                  display: 'flex', 
                  gap: isMobile ? '10px' : '12px',
                  flexWrap: 'wrap'
                }}>
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: isMobile ? 1.05 : 1.1, y: isMobile ? -2 : -3 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.label}
                      style={{
                        width: isMobile ? '45px' : '50px',
                        height: isMobile ? '45px' : '50px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
                <p style={{
                  fontSize: isMobile ? '0.75rem' : '0.85rem',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: isMobile ? '10px' : '15px'
                }}>
                  Looking for software engineering internship opportunities in web development
                </p>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass"
              style={{ 
                padding: isMobile ? '25px' : '40px',
                borderRadius: '16px'
              }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    style={{ 
                      textAlign: 'center', 
                      padding: isMobile ? '30px 15px' : '40px 20px'
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15 }}
                      style={{
                        width: isMobile ? '60px' : '80px',
                        height: isMobile ? '60px' : '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00f6ff, #7f5cff)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        fontSize: isMobile ? '2rem' : '2.5rem'
                      }}
                    >
                      <CheckCircle />
                    </motion.div>
                    
                    <h3 style={{ 
                      fontSize: isMobile ? '1.5rem' : '1.8rem', 
                      marginBottom: isMobile ? '10px' : '15px',
                      background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent'
                    }}>
                      Message Sent!
                    </h3>
                    
                    <p style={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      marginBottom: isMobile ? '20px' : '30px',
                      fontSize: isMobile ? '0.95rem' : '1.1rem'
                    }}>
                      I'll review your message and get back to you soon regarding internship opportunities.
                    </p>
                    
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        padding: isMobile ? '12px 24px' : '15px 30px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '50px',
                        color: 'white',
                        fontSize: isMobile ? '0.9rem' : '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: isMobile ? '8px' : '10px'
                      }}
                    >
                      <Send size={isMobile ? 16 : 18} />
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 style={{ 
                      fontSize: isMobile ? '1.5rem' : '1.8rem', 
                      marginBottom: isMobile ? '20px' : '30px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: isMobile ? '10px' : '12px'
                    }}>
                      <Send size={isMobile ? 20 : 24} style={{ color: '#00f6ff' }} />
                      Contact for Opportunities
                    </h3>

                    {/* Inquiry Type Selection */}
                    <div style={{ marginBottom: isMobile ? '20px' : '30px' }}>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: isMobile ? '8px' : '12px',
                        marginBottom: isMobile ? '20px' : '25px'
                      }}>
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({...formData, inquiryType: type.value})}
                            style={{
                              padding: isMobile ? '12px 8px' : '15px',
                              background: formData.inquiryType === type.value 
                                ? 'rgba(0, 246, 255, 0.1)' 
                                : 'rgba(255, 255, 255, 0.05)',
                              border: formData.inquiryType === type.value 
                                ? '1px solid #00f6ff' 
                                : '1px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '10px',
                              color: 'white',
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: isMobile ? '6px' : '8px',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div style={{ 
                              fontSize: isMobile ? '1.2rem' : '1.5rem',
                              color: formData.inquiryType === type.value ? '#00f6ff' : 'rgba(255, 255, 255, 0.7)'
                            }}>
                              {type.icon}
                            </div>
                            <div style={{ 
                              fontSize: isMobile ? '0.8rem' : '0.9rem',
                              fontWeight: '500',
                              textAlign: 'center'
                            }}>
                              {type.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Name Input */}
                      <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '6px',
                          fontWeight: '500',
                          fontSize: isMobile ? '0.9rem' : '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <User size={isMobile ? 14 : 16} />
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          onFocus={() => setActiveInput('name')}
                          onBlur={() => setActiveInput(null)}
                          required
                          style={{
                            width: '100%',
                            padding: isMobile ? '14px 16px' : '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'name' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: isMobile ? '0.95rem' : '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            WebkitAppearance: 'none'
                          }}
                          placeholder="Enter your name"
                        />
                      </div>

                      {/* Email Input */}
                      <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '6px',
                          fontWeight: '500',
                          fontSize: isMobile ? '0.9rem' : '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <Mail size={isMobile ? 14 : 16} />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          onFocus={() => setActiveInput('email')}
                          onBlur={() => setActiveInput(null)}
                          required
                          style={{
                            width: '100%',
                            padding: isMobile ? '14px 16px' : '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'email' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: isMobile ? '0.95rem' : '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            WebkitAppearance: 'none'
                          }}
                          placeholder="your.company@example.com"
                        />
                      </div>

                      {/* Message Input */}
                      <div style={{ marginBottom: isMobile ? '24px' : '30px' }}>
                        <label style={{ 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '6px',
                          fontWeight: '500',
                          fontSize: isMobile ? '0.9rem' : '0.95rem',
                          color: 'rgba(255, 255, 255, 0.9)'
                        }}>
                          <FileText size={isMobile ? 14 : 16} />
                          Your Message
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          onFocus={() => setActiveInput('message')}
                          onBlur={() => setActiveInput(null)}
                          required
                          rows="4"
                          style={{
                            width: '100%',
                            padding: isMobile ? '14px 16px' : '16px 20px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: activeInput === 'message' 
                              ? '1px solid #00f6ff' 
                              : '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '10px',
                            color: 'white',
                            fontSize: isMobile ? '0.95rem' : '1rem',
                            outline: 'none',
                            resize: 'vertical',
                            transition: 'all 0.3s ease',
                            fontFamily: 'inherit',
                            minHeight: '100px',
                            WebkitAppearance: 'none'
                          }}
                          placeholder="Tell me about your company and the internship opportunity..."
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          width: '100%',
                          padding: isMobile ? '16px' : '18px',
                          background: isSubmitting 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                          border: 'none',
                          borderRadius: '10px',
                          color: isSubmitting ? 'rgba(255, 255, 255, 0.7)' : '#000',
                          fontSize: isMobile ? '1rem' : '1.1rem',
                          fontWeight: '600',
                          cursor: isSubmitting ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: isMobile ? '10px' : '12px',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Loader size={isMobile ? 18 : 20} />
                            </motion.div>
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send size={isMobile ? 18 : 20} />
                            <span>Send Internship Inquiry</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass"
          style={{ 
            padding: isMobile ? '25px' : '40px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 246, 255, 0.05), rgba(127, 92, 255, 0.05))',
            borderRadius: '16px',
            marginBottom: isMobile ? '30px' : '40px'
          }}
        >
          <h3 style={{ 
            fontSize: isMobile ? '1.5rem' : '1.8rem', 
            marginBottom: isMobile ? '12px' : '15px',
            lineHeight: '1.3'
          }}>
            Ready to discuss{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Internship Opportunities</span>?
          </h3>
          
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1.1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: isMobile ? '20px' : '25px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            2nd year CSE student with hands-on experience in full-stack web development
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '12px' : '15px', 
            justifyContent: 'center',
            flexWrap: 'wrap' 
          }}>
            <motion.a
              href="mailto:aryandhiman2605@gmail.com"
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '14px 24px' : '16px 32px',
                background: 'linear-gradient(90deg, #00f6ff, #7f5cff)',
                border: 'none',
                borderRadius: '50px',
                color: '#000',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                textDecoration: 'none',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <Mail size={isMobile ? 18 : 20} />
              <span>Email Resume</span>
            </motion.a>
            
            <motion.button
              onClick={() => {
                window.open('https://calendly.com', '_blank');
              }}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: isMobile ? '14px 24px' : '16px 32px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                color: 'white',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                width: isMobile ? '100%' : 'auto'
              }}
            >
              <Calendar size={isMobile ? 18 : 20} />
              <span>Schedule Meeting</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          style={{ 
            textAlign: 'center', 
            padding: isMobile ? '20px 15px' : '30px 20px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: isMobile ? '0.8rem' : '0.9rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p>© {new Date().getFullYear()} Aryan Dhiman. All rights reserved.</p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ marginTop: '6px', fontSize: isMobile ? '0.75rem' : '0.85rem' }}
          >
            Built with React, Node.js & MongoDB | Actively seeking Summer 2026 internships
          </motion.p>
          <p style={{ marginTop: '6px', fontSize: isMobile ? '0.75rem' : '0.85rem', color: 'rgba(255, 255, 255, 0.4)' }}>
            CGC Jhanjeri, Mohali | CGPA: 9.15
          </p>
        </motion.div>
      </div>
    </section>
  );
}