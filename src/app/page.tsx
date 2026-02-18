"use client";
import { useScroll, useSpring, motion } from 'framer-motion';

// Imports components
import GridBackground from '@/components/ui/Background';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import ProjectsSection from '@/components/sections/Projects';
import ContactSection from '@/components/sections/Contact';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden font-sans">
      <CustomCursor />
      <GridBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-50 mix-blend-screen" 
        style={{ scaleX }} 
      />

      <div className="relative z-10">
        <Navbar />
        
        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
