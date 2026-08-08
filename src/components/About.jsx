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
  const reduceMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden">
      {/* Background blobs - lighter on mobile */}
      <div
        aria-hidden
        className={`absolute top-1/3 -left-20 w-80 h-80 sm:w-96 sm:h-96 bg-[#00D49F]/15 rounded-full blur- sm:blur- mix-blend-screen pointer-events-none ${!reduceMotion? 'animate-pulse' : ''}`}
        style={{ animationDuration: '8s' }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-emerald-950/30 rounded-full blur- sm:blur- mix-blend-screen pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Visual Side */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none transition-all duration-700 ease-out opacity-100 translate-x-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D49F]/25 via-emerald-500/10 to-transparent rounded-[2.5rem] blur-2xl -rotate-2 scale-105" />

          <div className="relative z-10 rounded-[2.5rem] overflow-hidden bg-[#121C22]/80 backdrop-blur-xl border-white/10 aspect-[4/5] p-2.5 group shadow-2xl">
            <div className="w-full h-full rounded-2xl overflow-hidden relative border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1115]/90 via-[#00D49F]/5 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700 z-10" />
              <img
                src="/img.png"
                alt="Portrait of Zain Murtaza, Fullstack Developer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out will-change-transform"
              />
            </div>
          </div>

          {/* Floating Badge */}
          <div className={`absolute -bottom-5 -right-5 sm:bottom-6 sm:-right-8 z-20 bg-[#121C22]/95 backdrop-blur-xl border-[#00D49F]/40 p-4 rounded-2xl shadow-[0_8px_32px_rgba(0,212,159,0.15)] flex items-center gap-3 ${!reduceMotion? 'animate-float' : ''}`}>
            <div className="w-10 h-10 rounded-xl bg-[#00D49F]/20 flex items-center justify-center border-[#00D49F]/40">
              <Sparkles className="w-5 h-5 text-[#00D49F]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Specialized in</p>
              <p className="text-sm font-bold text-white">Next.js & TypeScript</p>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 transition-all duration-700 delay-150 ease-out opacity-100 translate-x-0">
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00D49F]/10 border-[#00D49F]/30 text-[#00D49F] text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 mr-2" />
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Building ideas into <br className="hidden sm:block"/>
              <span className="bg-gradient-to-r from-[#00D49F] via-emerald-300 to-teal-100 bg-clip-text text-transparent">
                high-impact applications
              </span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p>
                I&apos;m Zain Murtaza, a fullstack developer crafting modern web apps with Next.js, TypeScript, and Supabase. I bridge heavy engineering with clean, user-centric design.
              </p>
              <p className="text-gray-400">
                From complex data workflows to fluid interfaces, I write code that stays fast and maintainable under real traffic.
              </p>
            </div>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-300">
            {['Production-Ready Code', 'Responsive UI/UX', 'API & DB Design', 'Performance Optimization'].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#00D49F] flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#121C22]/70 backdrop-blur-md border-white/5 rounded-2xl p-5 group hover:-translate-y-1.5 hover:bg-[#121C22] hover:border-[#00D49F]/40 hover:shadow-[0_12px_40px_rgba(0,212,159,0.12)] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#00D49F]/30 opacity-100 translate-y-0"
                style={{ transitionDelay: `${500 + idx * 100}ms` }}
                tabIndex={0}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D49F]/25 to-transparent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border-[#00D49F]/20">
                  <feature.icon className="w-6 h-6 text-[#00D49F]" />
                </div>
                <h4 className="text-gray-100 font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="/cv.pdf"
              download
              className="flex justify-center items-center gap-2 bg-[#00D49F] hover:bg-[#00E5AC] text-[#0B1115] px-8 py-3.5 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(0,212,159,0.25)] hover:shadow-[0_0_35px_rgba(0,212,159,0.45)] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#00D49F]/30 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="flex justify-center items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#00D49F]/20"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
