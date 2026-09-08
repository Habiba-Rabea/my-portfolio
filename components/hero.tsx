"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-16 overflow-hidden">
      {/* Purple Glow Background Effects */}
      <div className="absolute w-[400px] h-[400px] bg-purple-900/30 rounded-full blur-[120px] -top-10 -left-10 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-fuchsia-900/20 rounded-full blur-[120px] bottom-0 -right-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text Details */}
          <div className="md:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-purple-300 mb-6 border border-purple-500/30"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Full-Stack & .NET Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4"
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
                Habiba Rabea
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              Full-Stack Software Developer specializing in <strong className="text-purple-300">.NET / C#</strong> and <strong className="text-purple-300">React</strong>. Crafting scalable web applications, robust APIs, and intelligent systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white hover:bg-purple-500/10 font-semibold transition-all hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl p-1.5 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-600 shadow-2xl shadow-purple-900/50"
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="/my-portfolio/habiba.png"
                  alt="Habiba Rabee"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}