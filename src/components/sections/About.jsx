"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 relative border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
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
          
          {/* Right Column: Skills Graph */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="font-mono text-green-500 mb-6 flex items-center gap-2">
              <Zap size={16} /> SKILL_SET_ANALYSIS
            </h3>
            <div className="space-y-6">
              {PORTFOLIO_CONTENT.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs font-mono mb-2 text-gray-400">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white" 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${skill.level}%` }} 
                      transition={{ duration: 1, delay: 0.1 + (index * 0.1) }} 
                      viewport={{ once: true }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
