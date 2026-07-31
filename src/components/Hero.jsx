import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white', link: "https://github.com/ZainMurtaza3532" },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:bg-[#0A66C2] hover:text-white', link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/" },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:bg-[#1DA1F2] hover:text-white', link: "#" },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', color: 'hover:bg-[#EA4335] hover:text-white', link: "mailto:your.email@example.com" }
];

const HeroSplitLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    
    return () => resizeObserver.disconnect();
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full bg-slate-50 flex flex-col justify-between overflow-hidden relative"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Main Split Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-12">
        
        {/* Left Side: Dynamic Text & Actions Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6" data-aos="fade-right" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium w-fit">
            <Zap className="w-4 h-4 fill-purple-100" /> Available for Freeland & Full-time Roles
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Creating Digital Experiences That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">
              Matter.
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Hi, I'm <strong className="text-slate-800 font-semibold">Zain Murtaza</strong>, a Creative Web Developer based in Pakistan. I combine clean architecture with intuitive interactive designs to construct seamless web solutions.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={(e) => handleScrollTo(e, '#about')}
              className="px-8 py-3.5 bg-slate-950 text-white font-medium rounded-xl shadow-md hover:bg-slate-800 transition-all duration-200 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side: Structured Framed Graphic Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
          <div className="relative w-full max-w-[400px] aspect-square">
            
            {/* Geometric Background accent card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-3xl rotate-6 scale-95 opacity-10 blur-sm"></div>
            
            {/* Main Visual Box Frame */}
            <div className="w-full h-full bg-white border border-slate-200/80 rounded-3xl p-4 shadow-xl relative z-10 flex flex-col justify-between">
              
              {/* Fake Window Controls Header */}
              <div className="flex items-center gap-1.5 pb-3 border-b border-slate-100">
                <span className="w-3 h-3 rounded-full bg-rose-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              </div>
              
              {/* Image Frame Canvas */}
              <div className="w-full flex-grow my-4 rounded-xl overflow-hidden bg-slate-100 border border-slate-100 relative group">
                <img
                  src="/img.png"
                  alt="Zain Murtaza Portfolio Showcase"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Micro tech chips on picture */}
                <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs text-white flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-purple-400" /> React / Tailwind
                </div>
              </div>

              {/* Designer Footprint Info block inside frame */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Zain Murtaza</h4>
                  <p className="text-xs text-slate-400">UI Engineer & Developer</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                  <Palette className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Strip Container: Socials & Quick details */}
      <div className="w-full border-t border-slate-200/60 bg-white/50 backdrop-blur-sm relative z-20 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 tracking-wide uppercase">
            © 2026 Zain Murtaza — Crafted with attention to detail
          </p>
          
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 transition-all duration-200 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSplitLayout;
