"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/data/content";
import GlitchText from "@/components/ui/GlitchText";

export default function HeroSection() {
  const codeBlock = useMemo(
    () =>
      [
        "const engineer = {",
        '  name: "Aitthikon Makdee",',
        '  role: "Full-Stack Developer",',
        '  stack: ["React", "Next.js", "Node.js"],',
        '  focus: "Scalable Systems",',
        '  status: "Available"',
        "};",
      ].join("\n"),
    []
  );
  const [typedCode, setTypedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullLength = codeBlock.length;
    const doneTyping = typedCode.length === fullLength;
    const doneDeleting = typedCode.length === 0;

    if (!isDeleting && doneTyping) {
      const holdTimer = setTimeout(() => setIsDeleting(true), 1400);
      return () => clearTimeout(holdTimer);
    }

    if (isDeleting && doneDeleting) {
      const restartTimer = setTimeout(() => setIsDeleting(false), 400);
      return () => clearTimeout(restartTimer);
    }

    const step = isDeleting ? -1 : 1;
    const speed = isDeleting ? 30 : 50;
    const timer = setTimeout(() => {
      setTypedCode(codeBlock.slice(0, typedCode.length + step));
    }, speed);

    return () => clearTimeout(timer);
  }, [typedCode, isDeleting, codeBlock]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative pt-20 overflow-hidden border-t border-white/5">
      <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-136 h-136 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs text-green-500/70 mb-4">
                $ hero.init() :: system boot sequence complete
              </p>
              <p className="font-mono text-xs md:text-sm text-gray-400 mb-8">
                &gt; Terminal: Rendering portfolio experience
                <span className="animate-pulse text-green-400"> _</span>
              </p>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-500 font-mono text-xs mb-8">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                {PORTFOLIO_CONTENT.meta.availableStatus}
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6 text-white">
                <span className="block text-gray-600 text-4xl md:text-6xl mb-2">
                  HELLO, I AM _PUNG_
                </span>
                <GlitchText text={PORTFOLIO_CONTENT.profile.name} />
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed mb-10">
                {PORTFOLIO_CONTENT.profile.role} -
                <span className="text-white"> Engineering</span> Building scalable
                full-stack systems from database to UI.
              </p>

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
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute -inset-3 bg-green-500/10 blur-2xl rounded-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-green-500/20 bg-black/40 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 font-mono text-xs">
                  <span className="text-green-400">live_system.ts</span>
                  <span className="text-gray-500">runtime: active</span>
                </div>
                <div className="p-4 font-mono text-sm min-h-70">
                  <pre className="text-gray-200 whitespace-pre-wrap wrap-break-word">
                    {typedCode}
                    <span className="text-green-400 animate-pulse">|</span>
                  </pre>
                </div>
                <div className="px-4 pb-4 space-y-1 font-mono text-xs">
                  <motion.p
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="text-green-400/90"
                  >
                    [watch] compiling profile snapshot...
                  </motion.p>
                  <motion.p
                    animate={{ opacity: [1, 0.35, 1] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                    className="text-gray-400"
                  >
                    [log] interface ready for collaboration
                  </motion.p>
                </div>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>

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
