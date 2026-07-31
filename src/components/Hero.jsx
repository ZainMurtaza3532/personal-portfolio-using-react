import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

const SOCIAL_LINKS = [
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', color: 'hover:bg-gray-800 hover:text-white hover:border-gray-700', link: "https://github.com/ZainMurtaza3532" },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', color: 'hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/30', link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/" },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', color: 'hover:bg-[#1DA1F2]/20 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30', link: "#" },
  { icon: <Mail className="w-5 h-5" />, label: 'Email', color: 'hover:bg-[#EA4335]/20 hover:text-[#EA4335] hover:border-[#EA4335]/30', link: "mailto:your.email@example.com" }
];

const HeroSplitLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const updateHeight = () => setHeaderHeight(header.offsetHeight + 40); // Added buffer for the floating header
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
      className="min-h-screen w-full bg-[#0a0a0a] flex flex-col justify-between overflow-hidden relative selection:bg-[#9300ff]/30"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9300ff] opacity-[0.15] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Split Content Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 my-auto py-12 relative z-10">
        
        {/* Left Side: Dynamic Text & Actions Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8" data-aos="fade-right" data-aos-duration="1000">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm font-medium w-fit backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9300ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9300ff]"></span>
            </span>
            Available for Freelance & Full-time Roles
          </div>
          
          {/* Hero Typography */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Creating Digital <br /> Experiences That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9300ff] via-[#b545ff] to-pink-500 drop-shadow-lg">
                Matter.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
              Hi, I'm <strong className="text-white font-semibold">Zain Murtaza</strong>, a Creative Web Developer based in Pakistan. I combine clean architecture with intuitive interactive designs to construct seamless web solutions.
            </p>
          </div>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={(e) => handleScrollTo(e, '#about')}
              className="px-8 py-3.5 bg-[#9300ff] text-white font-semibold rounded-2xl shadow-[0_0_30px_rgba(147,0,255,0.3)] hover:shadow-[0_0_40px_rgba(147,0,255,0.5)] hover:bg-[#a624ff] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <span>View Portfolio</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 bg-white/5 text-white border border-white/10 font-semibold rounded-2xl hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Side: Structured Framed Graphic Showcase */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="relative w-full max-w-[420px] aspect-[4/5] group">
            
            {/* Animated Glow Behind Image */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#9300ff] to-pink-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Main Visual Box Frame */}
            <div className="w-full h-full bg-[#131313] border border-white/10 rounded-[2rem] p-4 shadow-2xl relative z-10 flex flex-col justify-between backdrop-blur-xl transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* Fake Window Controls Header */}
              <div className="flex items-center gap-2 pb-4 border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></span>
              </div>
              
              {/* Image Frame Canvas */}
              <div className="w-full flex-grow my-4 rounded-xl overflow-hidden bg-[#1a1a1a] relative">
                <img
                  src="/img.png"
                  alt="Zain Murtaza Portfolio Showcase"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating Tech Stack Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-sm font-medium text-white flex items-center gap-2 shadow-xl">
                  <Code className="w-4 h-4 text-[#9300ff]" /> React / Tailwind
                </div>
              </div>

              {/* Designer Footprint Info block inside frame */}
              <div className="flex items-center justify-between pt-2 px-1">
                <div>
                  <h4 className="text-base font-bold text-white">Zain Murtaza</h4>
                  <p className="text-sm text-gray-400">UI Engineer & Developer</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9300ff] shadow-inner">
                  <Palette className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Footer Strip Container: Socials & Quick details */}
      <div className="w-full border-t border-white/5 bg-black/30 backdrop-blur-md relative z-20 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 tracking-wide font-medium">
            © 2026 Zain Murtaza <span className="hidden sm:inline">—</span> <br className="sm:hidden" /> Crafted with attention to detail
          </p>
          
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
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
