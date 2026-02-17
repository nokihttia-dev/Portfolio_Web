"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';
import GlitchText from '@/components/ui/GlitchText';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-20">
      <div className="container mx-auto max-w-6xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-500 font-mono text-xs mb-8">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            {PORTFOLIO_CONTENT.meta.availableStatus}
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-white">
            <span className="block text-gray-600 text-4xl md:text-6xl mb-2">HELLO, I AM _PUNG_</span>
            <GlitchText text={PORTFOLIO_CONTENT.profile.name} />
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10">
            {PORTFOLIO_CONTENT.profile.role} — <span className="text-white">Engineering</span> Building scalable full-stack systems from database to UI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="group relative bg-white text-black px-8 py-4 font-mono font-bold interactive overflow-hidden flex items-center justify-center sm:justify-start"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                VIEW PROJECTS <ArrowRight size={16} />
              </span>
              <div className="absolute inset-0 bg-green-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out z-0" />
            </a>
            
            <a 
              href="#contact" 
              className="px-8 py-4 font-mono font-bold border border-white/20 text-white hover:bg-white/10 transition-colors interactive text-center"
            >
              CONTACT
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1 }} 
        className="absolute bottom-10 left-6 md:left-20 flex items-center gap-4 text-gray-500 font-mono text-xs"
      >
        <div className="h-10 w-px bg-linear-to-b from-transparent via-gray-500 to-transparent"></div>
        <span>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  );
}
