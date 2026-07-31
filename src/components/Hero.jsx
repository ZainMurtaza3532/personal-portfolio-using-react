import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

const SOCIAL_LINKS = [
  { 
    icon: <Github className="w-5 h-5" />, 
    label: 'GitHub', 
    color: 'hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300 dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-700', 
    link: "https://github.com/ZainMurtaza3532" 
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    label: 'LinkedIn', 
    color: 'hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 dark:hover:bg-[#0A66C2]/20 dark:hover:text-[#0A66C2] dark:hover:border-[#0A66C2]/30', 
    link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/" 
  },
  { 
    icon: <Twitter className="w-5 h-5" />, 
    label: 'Twitter', 
    color: 'hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 dark:hover:bg-[#1DA1F2]/20 dark:hover:text-[#1DA1F2] dark:hover:border-[#1DA1F2]/30', 
    link: "#" 
  },
  { 
    icon: <Mail className="w-5 h-5" />, 
    label: 'Email', 
    color: 'hover:bg-[#EA4335]/10 hover:text-[#EA4335] hover:border-[#EA4335]/30 dark:hover:bg-[#EA4335]/20 dark:hover:text-[#EA4335] dark:hover:border-[#EA4335]/30', 
    link: "mailto:your.email@example.com" 
  }
];

const HeroSplitLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const updateHeight = () => setHeaderHeight(header.offsetHeight + 40); 
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
      className="min-h-screen w-full bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 flex flex-col justify-between overflow-hidden relative selection:bg-[#9300ff]/30"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9300ff] opacity-10 dark:opacity-[0.15] blur-[100px] dark:blur-[120px] rounded-full pointer-events-none transition-opacity duration-500"></div>

      {/* Main Split Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 my-auto py-12 relative z-10">
        
        {/* Left Side: Dynamic Text & Actions Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8" data-aos="fade-right" data-aos-duration="1000">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-purple-50/80 border-purple-100 text-purple-700 dark:bg-white/5 dark:border-white/10 dark:text-gray-300 border px-4 py-2 rounded-full text-sm font-medium w-fit backdrop-blur-sm transition-colors duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9300ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9300ff]"></span>
            </span>
            Available for Freelance & Full-time Roles
          </div>
          
          {/* Hero Typography */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
              Creating Digital <br /> Experiences That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9300ff] via-[#b545ff] to-pink-500 drop-shadow-sm dark:drop-shadow-lg">
                Matter.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed font-light transition-colors duration-300">
              Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Zain Murtaza</strong>, a Creative Web Developer based in Pakistan. I combine clean architecture with intuitive interactive designs to construct seamless web solutions.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={(e) => handleScrollTo(e, '#about')}
              className="px-8 py-3.5 bg-[#9300ff] text-white font-semibold rounded-2xl shadow-lg dark:shadow-[0_0_30px_rgba(147,0,255,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(147,0,255,0.5)] hover:bg-[#a624ff] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 dark:bg-white/5 dark:text-white dark:border-white/10 font-semibold rounded-2xl dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side: Structured Framed Graphic Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="relative w-full max-w-[420px] aspect-[4/5] group">
            
            {/* Animated Glow Behind Image */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#9300ff] to-pink-500 rounded-[2rem] blur-xl dark:blur-2xl opacity-10 dark:opacity-20 group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Main Visual Box Frame */}
            <div className="w-full h-full bg-white dark:bg-[#131313] border border-slate-200/80 dark:border-white/10 rounded-[2rem] p-4 shadow-xl dark:shadow-2xl relative z-10 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]">
              
              {/* Fake Window Controls Header */}
              <div className="flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-white/5 transition-colors duration-300">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm dark:shadow-[0_0_10px_rgba(255,95,86,0.5)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm dark:shadow-[0_0_10px_rgba(255,189,46,0.5)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm dark:shadow-[0_0_10px_rgba(39,201,63,0.5)]"></span>
              </div>
              
              {/* Image Frame Canvas */}
              <div className="w-full flex-grow my-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-[#1a1a1a] relative transition-colors duration-300">
                <img
                  src="/img.png"
                  alt="Zain Murtaza Portfolio Showcase"
                  className="w-full h-full object-cover grayscale-0 opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating Tech Stack Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/60 border border-slate-200 dark:border-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-sm font-medium text-slate-800 dark:text-white flex items-center gap-2 shadow-lg dark:shadow-xl transition-colors duration-300">
                  <Code className="w-4 h-4 text-[#9300ff]" /> React / Tailwind
                </div>
              </div>

              {/* Designer Footprint Info block inside frame */}
              <div className="flex items-center justify-between pt-2 px-1">
                <div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-white transition-colors duration-300">Zain Murtaza</h4>
                  <p className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">UI Engineer & Developer</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 flex items-center justify-center text-[#9300ff] shadow-sm dark:shadow-inner transition-colors duration-300">
                  <Palette className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Strip Container: Socials & Quick details */}
      <div className="w-full border-t border-slate-200/60 dark:border-white/5 bg-white/50 dark:bg-black/30 backdrop-blur-md relative z-20 py-6 mt-12 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 dark:text-gray-500 tracking-wide font-medium transition-colors duration-300">
            © 2026 Zain Murtaza <span className="hidden sm:inline">—</span> <br className="sm:hidden" /> Crafted with attention to detail
          </p>
          
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 transition-all duration-300 ${social.color} shadow-sm dark:shadow-none`}
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
