import React from 'react';
import {
  Code2,
  Layout,
  Zap,
  Download,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Code2, title: 'Clean Architecture', desc: 'Maintainable, testable & scalable codebases' },
  { icon: Layout, title: 'Fullstack Mastery', desc: 'End-to-end solutions from DB to UI' },
  { icon: Zap, title: 'High Performance', desc: 'Optimized experiences & fast load times' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden relative">
      
      {/* Dynamic Background Enhancements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D49F]/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-950/40 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Visual Profile Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D49F]/20 via-emerald-500/5 to-transparent rounded-[2.5rem] blur-2xl transform -rotate-3 scale-105 transition-transform duration-700" />
          
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[#121C22]/90 backdrop-blur-2xl border border-white/10 aspect-[4/5] p-3 flex items-center justify-center shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1115] via-[#00D49F]/10 to-transparent opacity-50 hover:opacity-10 transition-opacity duration-700 z-10" />
              <img 
                 src="/img.png" 
                 alt="Portrait of Zain Murtaza, Fullstack Developer"
                 loading="lazy"
                 className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transform hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 z-20 bg-[#121C22]/95 backdrop-blur-xl border border-[#00D49F]/30 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-slow"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00D49F]/15 flex items-center justify-center border border-[#00D49F]/30">
              <Sparkles className="w-5 h-5 text-[#00D49F]" aria-label="Sparkles Icon" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Specialized in</p>
              <p className="text-sm font-bold text-white">Next.js & TypeScript</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="space-y-8 mt-6 lg:mt-0"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D49F]/10 border border-[#00D49F]/20 text-[#00D49F] text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(0,212,159,0.15)]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" aria-label="Sparkles Icon" />
              About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
              I craft digital experiences that merge <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D49F] via-emerald-300 to-teal-100 drop-shadow-sm">
                engineering precision with design elegance
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                I&apos;m Zain Murtaza, a fullstack developer passionate about building modern web architecture with Next.js, TypeScript, and Supabase. My journey began with curiosity-driven coding projects, evolving into professional solutions that balance technical depth with user-centric design.
              </p>
              <p className="text-gray-400 text-base">
                From optimizing complex data workflows to engineering fluid interfaces, my mission is simple: write clean, scalable code that delivers seamless experiences under real-world traffic.
              </p>
            </div>
          </div>

          {/* Quick Highlight Checklist */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            {["Production-Ready Code","Responsive UI/UX Design","API Integration & DB Design","Performance Optimization"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D49F]" aria-label="Check Icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#121C22]/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 transition-all duration-300 ease-out"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D49F]/20 to-transparent flex items-center justify-center mb-4 border border-[#00D49F]/10">
                  <feature.icon className="w-6 h-6 text-[#00D49F]" aria-label={`${feature.title} Icon`} />
                </div>
                <h4 className="text-gray-100 font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a 
              href="/cv.pdf" 
              download
              className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#00D49F] hover:bg-[#00E5AC] text-[#0B1115] px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,212,159,0.2)] hover:shadow-[0_0_30px_rgba(0,212,159,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" aria-label="Download Icon" />
              Download CV
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto flex justify-center items-center gap-2 text-gray-200 px-8 py-3.5 rounded-full font-semibold border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all group"
            >
              Contact Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" aria-label="Arrow Icon" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap
