"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function ContactSection() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PORTFOLIO_CONTENT.socials.email
  )}`;

  return (
    <section id="contact" className="py-32 px-6 md:px-20 min-h-[70vh] flex flex-col justify-center relative border-t border-white/10 overflow-hidden bg-neutral-950">
      <div className="container mx-auto max-w-4xl text-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
        >
          <div className="inline-block border border-green-500/30 bg-green-500/10 text-green-500 px-6 py-2 rounded-full mb-8 font-mono text-sm">
            <span className="animate-pulse inline-block w-2 h-2 bg-green-500 rounded-full mr-2"/>
            OPEN FOR OPPORTUNITIES
          </div>
          
          <h2 className="text-5xl md:text-8xl font-bold mb-8 text-white leading-tight">
            LET&apos;S BUILD <br/> THE FUTURE
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a 
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive bg-white text-black px-10 py-4 font-mono font-bold text-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={20} /> SEND EMAIL
            </a>
            <div className="flex gap-2 justify-center">
              <a 
                href={PORTFOLIO_CONTENT.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all"
              >
                <Github size={24} />
              </a>
              <a 
                href={PORTFOLIO_CONTENT.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="interactive p-4 border border-white/20 text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="absolute bottom-6 w-full text-center px-6 text-xs font-mono text-gray-600 uppercase flex justify-between container mx-auto left-0 right-0">
        <span>© {new Date().getFullYear()} {PORTFOLIO_CONTENT.profile.name}</span>
        <span>SYSTEM: ONLINE</span>
      </footer>
    </section>
  );
}
