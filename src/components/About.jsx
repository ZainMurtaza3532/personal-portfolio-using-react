import React from 'react';
import { Code2, Layout, Zap, Download, ArrowRight, Sparkles } from 'lucide-react';

const features = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable & scalable' },
  { icon: Layout, title: 'Fullstack', desc: 'End-to-end solutions' },
  { icon: Zap, title: 'Performance', desc: 'Optimized experiences' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden relative">
      {/* Background Enhancements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D49F] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-pulse pointer-events-none duration-1000" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Visual Profile Side */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-aos="fade-right" data-aos-duration="1200">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D49F]/30 via-transparent to-emerald-500/10 rounded-[2rem] blur-2xl transform -rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-0" />
          
          <div className="relative z-10 rounded-[2rem] overflow-hidden bg-[#121C22]/80 backdrop-blur-xl border border-white/10 aspect-[4/5] p-3 flex items-center justify-center group shadow-2xl">
            <div className="w-full h-full rounded-xl overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1115] via-[#00D49F]/10 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700 z-10" />
              <img 
                 src="/img.png" 
                 alt="Portrait of Zain Murtaza, Fullstack Developer"
                 loading="lazy"
                 className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-10 mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
          
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00D49F]/10 border border-[#00D49F]/20 text-[#00D49F] text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(0,212,159,0.1)]">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              About Me
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              I build scalable and <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D49F] to-emerald-200 drop-shadow-lg">
                user-focused
              </span> web apps.
            </h2>
            
            <div className="space-y-5 text-gray-300 leading-relaxed text-lg font-normal">
              {/* FIXED: Replaced ' with &apos; */}
              <p>
                I&apos;m a fullstack developer specializing in Next.js and modern web technologies. I enjoy building fast, scalable, and visually clean applications that solve real-world problems. My focus is on writing maintainable code and delivering smooth user experiences.
              </p>
              <p>
                Over time, I&apos;ve worked with tools like TypeScript, Supabase, and modern UI systems to create projects that are both functional and production-ready.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-[#121C22]/60 backdrop-blur-md border border-white/5 rounded-2xl p-6 text-center group hover:-translate-y-2 hover:bg-[#121C22] hover:border-[#00D49F]/40 hover:shadow-[0_8px_30px_rgba(0,212,159,0.12)] transition-all duration-300 ease-out"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D49F]/20 to-transparent flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:text-white transition-all duration-300 border border-[#00D49F]/10">
                  <feature.icon className="w-7 h-7 text-[#00D49F]" />
                </div>
                <h4 className="text-gray-100 font-semibold text-base mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-2">
            <a 
              href="/cv.pdf" 
              download
              className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#00D49F] hover:bg-[#00E5AC] text-[#0B1115] px-8 py-3.5 rounded-full font-bold transition-all hover:shadow-[0_0_25px_rgba(0,212,159,0.4)] hover:-translate-y-0.5 active:translate-y-0"
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
