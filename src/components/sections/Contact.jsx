"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { PORTFOLIO_CONTENT } from "@/data/content";

export default function ContactSection() {
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PORTFOLIO_CONTENT.socials.email
  )}`;

  return (
    <section
      id="contact"
      className="relative py-40 px-6 md:px-20 min-h-[80vh] flex flex-col justify-center overflow-hidden bg-black border-t border-white/10"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.15),transparent_60%)]" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 border border-green-500/30 bg-green-500/10 text-green-400 px-6 py-2 rounded-full mb-10 font-mono text-xs tracking-widest">
            <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full" />
            STATUS: OPEN_FOR_OPPORTUNITIES
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-8xl font-extrabold text-white leading-tight tracking-tight">
            BUILD
            <span className="block text-green-400 drop-shadow-[0_0_15px_rgba(0,255,100,0.7)]">
              SCALABLE SYSTEMS
            </span>
          </h2>

          {/* Terminal Subtitle */}
          <p className="mt-8 text-gray-400 font-mono text-sm md:text-base">
            &gt; Initializing collaboration protocol...
            <br />
            &gt; Ready to engineer reliable web architecture.
            <span className="animate-pulse text-green-400"> _</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-14">
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-10 py-4 font-mono font-bold text-sm tracking-widest hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(0,255,100,0.4)]"
            >
              <div className="flex items-center gap-2 justify-center">
                <Mail size={18} /> INITIATE_CONTACT
              </div>
            </a>

            <div className="flex gap-3 justify-center">
              <a
                href={PORTFOLIO_CONTENT.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all"
              >
                <Github size={22} />
              </a>

              <a
                href={PORTFOLIO_CONTENT.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>

        </motion.div>
      </div>

      {/* System Footer */}
      <footer className="absolute bottom-0 w-full text-xs font-mono text-green-500/60 border-t border-green-500/10 py-3 px-6 flex justify-between">
        <span>
          © {new Date().getFullYear()} {PORTFOLIO_CONTENT.profile.name}
        </span>
        <span>SYSTEM_STATUS: ONLINE</span>
      </footer>
    </section>
  );
}
