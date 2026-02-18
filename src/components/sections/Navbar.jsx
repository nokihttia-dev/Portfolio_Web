"use client";
import React, { useState, useEffect } from 'react';
import { Terminal, Mail } from 'lucide-react';
import { PORTFOLIO_CONTENT } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-mono font-bold text-lg tracking-widest flex items-center gap-2 interactive text-white cursor-pointer select-none">
          <Terminal size={18} className="text-green-500" />
          {PORTFOLIO_CONTENT.meta.title}
        </div>
        
        <div className="hidden md:flex gap-8 font-mono text-xs tracking-wider text-green-500">
          {['About', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-white interactive transition-colors relative group"
            >
              <span className="group-hover:text-green-500 transition-colors">
                {item.toUpperCase()}
              </span>
            </a>
          ))}
        </div>

        <a href="#contact" className="md:hidden text-white interactive">
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
}
