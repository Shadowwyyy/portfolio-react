import { useState, useEffect } from 'react';

export const useMouseShadow = () => {
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

  return textShadow;
};