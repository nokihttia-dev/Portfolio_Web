"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONTENT } from '@/data/content';
import SectionHeader from '@/components/ui/SectionHeader';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <p className="font-mono text-xs text-green-500/70 mb-4">$ projects.scan() :: deployment logs indexed</p>
        <p className="font-mono text-xs md:text-sm text-gray-400 mb-10">
          &gt; Terminal: Compiling selected builds and production outcomes
          <span className="animate-pulse text-green-400"> _</span>
        </p>
        <SectionHeader title="Selected Works" subtitle="deployment_logs" />
        
        <div className="flex flex-col gap-20">
          {PORTFOLIO_CONTENT.projects.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.6 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/10 pb-20 last:border-none"
            >
              {/* Text Info */}
              <div className="md:col-span-5 order-2 md:order-1">
                <span className="font-mono text-green-500 text-sm mb-2 block">
                  {project.id}  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light mb-6">
                  {project.description}
                </p>
                {project.bullets?.length > 0 && (
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-6">
                    {project.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(t => (
                    <span key={t} className="text-xs font-mono border border-white/10 bg-white/5 text-gray-300 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

              </div>
              
              {/* Image Preview */}
              <div className="md:col-span-7 order-1 md:order-2 relative group-hover:-translate-y-2 transition-transform duration-500">
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-white/20 relative bg-gray-900">
                  <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
