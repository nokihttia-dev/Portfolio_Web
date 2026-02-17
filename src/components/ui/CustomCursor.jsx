"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleOver = (e) => setHovering(!!e.target.closest('a, button, .interactive'));
    
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-100 mix-blend-difference hidden md:block bg-white"
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        scale: hovering ? 4 : 1,
        opacity: hovering ? 0.5 : 1
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    />
  );
}
