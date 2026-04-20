import { motion } from 'framer-motion';

// Optimized for mobile: Reduced complexity and faster animations
export const StaggerContainer = ({ children, delay = 0.15 }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }} // Reduced from 0.3 to trigger earlier
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: delay
        }
      }
    }}
  >
    {children}
  </motion.div>
);

// Optimized SlideInLeft for Mobile
export const SlideInLeft = ({ children, delay = 0, duration = 0.4 }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }} // Trigger earlier with margin
    transition={{ 
      duration: duration, // Faster on mobile
      delay,
      ease: "easeOut",
      type: "spring",
      stiffness: 150, // Faster spring
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

// Optimized SlideInRight for Mobile
export const SlideInRight = ({ children, delay = 0, duration = 0.4 }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    transition={{ 
      duration: duration,
      delay,
      ease: "easeOut",
      type: "spring",
      stiffness: 150,
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

// Optimized SlideInUp for Mobile
export const SlideInUp = ({ children, delay = 0, duration = 0.4 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    transition={{ 
      duration: duration,
      delay,
      ease: "easeOut",
      type: "spring",
      stiffness: 150,
      damping: 20
    }}
  >
    {children}
  </motion.div>
);

// Optimized ScaleIn for Mobile
export const ScaleIn = ({ children, delay = 0, duration = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    transition={{ 
      duration: duration,
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
);

// Optimized FadeIn for Mobile
export const FadeIn = ({ children, delay = 0, duration = 0.3 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    transition={{ 
      duration: duration,
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
);

// Optimized FlipCard for Mobile (simpler version)
export const FlipCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: 90 }}
    whileInView={{ opacity: 1, rotateY: 0 }}
    viewport={{ once: true, amount: 0.1, margin: "-50px" }}
    transition={{ 
      duration: 0.5,
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
);

// New: QuickSlideIn for mobile (instant animation)
export const QuickSlideInLeft = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.05, margin: "-30px" }} // Very early trigger
    transition={{ 
      duration: 0.25, // Very fast
      delay,
      ease: "linear"
    }}
  >
    {children}
  </motion.div>
);

// New: InstantFade for critical content
export const InstantFade = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.05, margin: "-20px" }}
    transition={{ 
      duration: 0.2,
      delay,
      ease: "linear"
    }}
  >
    {children}
  </motion.div>
);

// Responsive animation wrapper
export const ResponsiveMotion = ({ children, mobileDelay = 0, desktopDelay = 0 }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isMobile ? -20 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: isMobile ? 0.05 : 0.1 }}
      transition={{ 
        duration: isMobile ? 0.25 : 0.4,
        delay: isMobile ? mobileDelay : desktopDelay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};