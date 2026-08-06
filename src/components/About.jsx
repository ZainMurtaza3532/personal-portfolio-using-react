import React from 'react';
import {
  Code2,
  Layout,
  Zap,
  Download,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
const features = [
  { icon: Code2, title: 'Clean Architecture', desc: 'Maintainable, testable & scalable codebases' },
  { icon: Layout, title: 'Fullstack Mastery', desc: 'End-to-end solutions from DB to UI' },
  { icon: Zap, title: 'High Performance', desc: 'Optimized experiences & fast load times' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden relative">
      {/* Dynamic Background Enhancements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00D49F]/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none animate-pulse duration-1000" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-950/40 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Visual Profile Side with Floating Badge */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-aos="fade-right" data-aos-duration="1200">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D49F]/20 via-emerald-500/5 to-transparent rounded-[2.5rem] blur-2xl transform -rotate-3 scale-105 transition-transform duration-700" />
          
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[#121C22]/90 backdrop-blur-2xl border border-white/10 aspect-[4/5] p-3 flex items-center justify-center group shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1115] via-[#00D49F]/10 to-transparent opacity-50 group-hover:opacity-10 transition-opacity duration-700 z-10" />
              <img 
                 src="/img.png" 
                 alt="Portrait of Zain Murtaza, Fullstack Developer"
                 loading="lazy"
                 className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:-right-8 z-20 bg-[#121C22]/95 backdrop-blur-xl border border-[#00D49F]/30 p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce-slow">
            <div className="w-10 h-10 rounded-xl bg-[#00D49F]/15 flex items-center justify-center border border-[#00D49F]/30">
              <Sparkles className="w-5 h-5 text-[#00D49F]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Specialized in</p>
              <p className="text-sm font-bold text-white">Next.js & TypeScript</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 mt-6 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
          
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D49F]/10 border border-[#00D49F]/20 text-[#00D49F] text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(0,212,159,0.15)]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
              Transforming complex ideas into <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D49F] via-emerald-300 to-teal-100 drop-shadow-sm">
                high-impact applications
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg font-normal">
              <p>
                I&apos;m Zain Murtaza, a fullstack developer specializing in building modern web architecture with Next.js, TypeScript, and Supabase. I bridge the gap between heavy technical engineering and pristine, user-centric design.
              </p>
              <p className="text-gray-400 text-base">
                Whether it&apos;s optimizing complex data workflows or engineering fluid user interfaces, my goal is always the same: write clean, maintainable code that scales gracefully under real-world traffic.
              </p>
            </div>
          </div>

          {/* Quick Highlight Checklist */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D49F]" />
              <span>Production-Ready Code</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D49F]" />
              <span>Responsive UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D49F]" />
              <span>API Integration & DB Design</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00D49F]" />
              <span>Performance Optimization</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-[#121C22]/60 backdrop-blur-md border border-white/5 rounded-2xl p-5 group hover:-translate-y-1.5 hover:bg-[#121C22] hover:border-[#00D49F]/40 hover:shadow-[0_10px_30px_rgba(0,212,159,0.1)] transition-all duration-300 ease-out"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D49F]/20 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-[#00D49F]/10">
                  <feature.icon className="w-6 h-6 text-[#00D49F]" />
                </div>
                <h4 className="text-gray-100 font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a 
              href="/cv.pdf" 
              download
              className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#00D49F] hover:bg-[#00E5AC] text-[#0B1115] px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,212,159,0.2)] hover:shadow-[0_0_30px_rgba(0,212,159,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto flex justify-center items-center gap-2 text-gray-200 px-8 py-3.5 rounded-full font-semibold border border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30 transition-all group"
            >
              Contact Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
