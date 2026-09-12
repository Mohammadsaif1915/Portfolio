import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;
    setVisible(true);

    const updatePos = (e) => setPos({ x: e.clientX, y: e.clientY });
    const handleOver = (e) => {
      setIsHovering(!!(e.target.closest && e.target.closest('a, button, .tech-orb, input, textarea')));
    };

    window.addEventListener('mousemove', updatePos);
    window.addEventListener('mouseover', handleOver);
    return () => {
      window.removeEventListener('mousemove', updatePos);
      window.removeEventListener('mouseover', handleOver);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.2 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: pos.x - 17,
          y: pos.y - 17,
          scale: isHovering ? 1.6 : 1,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
