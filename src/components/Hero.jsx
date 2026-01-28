import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Hero({ onNavigate }) {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    requestAnimationFrame(() => {
      const x = (e.clientX - window.innerWidth / 2) / 30;
      const y = (e.clientY - window.innerHeight / 2) / 30;
      setMousePosition({ x, y });
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

const textShadow = `
  ${mousePosition.x * 0.3}px ${mousePosition.y * 0.3}px 0 #E60012,
  ${mousePosition.x * 0.6}px ${mousePosition.y * 0.6}px 0 #A00008,
  ${mousePosition.x}px ${mousePosition.y}px 10px rgba(230, 0, 18, 0.4)
`;

  const menuItems = [
    { id: 'about', label: 'PROFILE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div className="hero">
      <div className="bg-pattern"></div>
      <div className="diagonal-stripe stripe-1"></div>
      <div className="diagonal-stripe stripe-2"></div>
      <div className="diagonal-stripe stripe-3"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="title-wrapper">
          <h1 className="glitch-text" style={{ textShadow }}>JEET SHARMA</h1>
          <div className="subtitle-box">
            <p className="subtitle">SOFTWARE ENGINEER</p>
          </div>
        </div>
        <div className="tagline">
          <span className="tagline-text">
            // Full-Stack Developer | Backend Specialist | Music Tech Enthusiast
          </span>
        </div>
      </motion.div>

      <motion.nav
        className="main-menu"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="menu-item"
            onClick={() => onNavigate(item.id)}
            whileHover={{ x: 10 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <span className="menu-icon">▶</span>
            <span className="menu-text">{item.label}</span>
          </motion.div>
        ))}
      </motion.nav>
    </div>
  );
}

export default Hero;