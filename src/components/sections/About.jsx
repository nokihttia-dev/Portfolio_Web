"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONTENT } from '@/data/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 relative border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <p className="font-mono text-xs text-green-500/70 mb-4">$ about.sync() :: profile context loaded</p>
        <p className="font-mono text-xs md:text-sm text-gray-400 mb-10">
          &gt; Terminal: Enumerating core specs and engineering capabilities
          <span className="animate-pulse text-green-400"> _</span>
        </p>
        <SectionHeader title="About" subtitle="core_specs" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Text Info */}
          <div>
            <p className="text-2xl font-light leading-relaxed mb-8 text-gray-200">
              {PORTFOLIO_CONTENT.profile.description}
            </p>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 font-mono text-sm text-gray-500 mt-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-gray-300 mb-1">LOCATION</span>
                {PORTFOLIO_CONTENT.profile.location}
              </div>
              <div>
                <span className="block text-gray-300 mb-1">EXPERIENCE</span>
                {PORTFOLIO_CONTENT.profile.experience}
              </div>
              <div>
                <span className="block text-gray-300 mb-1">EDUCATION</span>
                {PORTFOLIO_CONTENT.profile.education}
              </div>
            </div>
          </div>
          

              <div className="font-mono text-sm space-y-2 p-4 bg-black/40 rounded border border-white/5">
                <p className="text-green-500/70 mb-4">$ system.get_capabilities()</p>
                {PORTFOLIO_CONTENT.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-500">[{skill.category}]</span>
                    <span className="text-gray-200">{skill.name}</span>
                  </div>
                ))}
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-green-500"
                />
              </div>
        </div>
      </div>
    </section>
  );
}
