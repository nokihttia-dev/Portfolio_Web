"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 border-b border-white/10 pb-6 flex justify-between items-end"
    >
      <div>
        <div className="flex items-center gap-2 mb-2 text-green-500 font-mono text-xs tracking-widest uppercase">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          System: {subtitle}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white font-sans uppercase">
          {title}
        </h2>
      </div>
      <Cpu className="hidden md:block w-12 h-12 text-white/20" />
    </motion.div>
  );
}
