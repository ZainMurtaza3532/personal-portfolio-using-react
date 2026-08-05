import React from 'react';
import { Code2, Layout, Zap, Download, ArrowRight } from 'lucide-react';

const features = [
  { icon: Code2, title: 'Clean Code', desc: 'Maintainable & scalable' },
  { icon: Layout, title: 'Fullstack', desc: 'End-to-end solutions' },
  { icon: Zap, title: 'Performance', desc: 'Optimized experiences' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden relative">
      {/* Optional: Subtle background gradient blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D49F] rounded-full mix-blend-multiply filter blur-[128px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Visual Profile Side */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-aos="fade-right" data-aos-duration="1200">
          {/* Glowing backdrop effect behind the image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00D49F]/20 to-transparent rounded-[2rem] blur-2xl transform -rotate-3 scale-105" />
          
          <div className="relative z-10 rounded-[2rem] overflow-hidden bg-[#121C22] border border-white/5 aspect-[4/5] p-3 flex items-center justify-center group">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[#00D49F]/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                 src="/img.png" // Replace with your image path
                 alt="Zain Murtaza"
                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
          
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00D49F]/10 border border-[#00D49F]/20 text-[#00D49F] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00D49F] mr-2 animate-pulse" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
              I build scalable and <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D49F] to-emerald-300">
                user-focused
              </span> web apps.
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg font-light">
              <p>
                I'm a fullstack developer specializing in Next.js and modern web technologies. I enjoy building fast, scalable, and visually clean applications that solve real-world problems. My focus is on writing maintainable code and delivering smooth user experiences.
              </p>
              <p>
                Over time, I've worked with tools like TypeScript, Supabase, and modern UI systems to create projects that are both functional and production-ready.
              </p>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#121C22]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5 text-center group hover:-translate-y-1 hover:border-[#00D49F]/40 hover:shadow-[0_0_20px_rgba(0,212,159,0.1)] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00D49F]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-[#00D49F]" />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="flex items-center gap-2 bg-[#00D49F] hover:bg-[#00b386] text-[#0B1115] px-6 py-3 rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,212,159,0.3)]">
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <a href="#contact" className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-medium border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all group">
              Contact Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
