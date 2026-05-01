import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function MouseGlowEffect() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={glowRef}
      className="fixed pointer-events-none z-10"
      style={{
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255, 223, 0, 0.6) 0%, rgba(255, 223, 0, 0.3) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(30px)',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 40px rgba(255, 223, 0, 0.5)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
