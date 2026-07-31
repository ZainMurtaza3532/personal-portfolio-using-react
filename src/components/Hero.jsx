import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

// 1. Optimization: Moved configuration array outside the component 
// to prevent recreation on every re-render.
const SOCIAL_LINKS = [
  { 
    icon: <Github className="w-5 h-5" />, 
    label: 'GitHub', 
    color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
    link: "https://github.com/ZainMurtaza3532"
  },
  { 
    icon: <Linkedin className="w-5 h-5" />, 
    label: 'LinkedIn', 
    color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
    link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/"
  },
  { 
    icon: <Twitter className="w-5 h-5" />, 
    label: 'Twitter', 
    color: 'hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]',
    link: "#"
  },
  { 
    icon: <Mail className="w-5 h-5" />, 
    label: 'Email', 
    color: 'hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335]',
    link: "mailto:your.email@example.com"
  }
];

const Hero = () => {
  // 2. Fallback Height: Initializing with a standard 80px fallback to prevent Cumulative Layout Shift (CLS)
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    
    const updateHeight = () => {
      setHeaderHeight(header.offsetHeight);
    };

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white selection:bg-purple-200"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Gradient & Animated Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pointer-events-none">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        
        {/* Decorative background blobs */}
        <div className="absolute top-20 left-10 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 md:right-20 w-72 h-72 md:w-96 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 md:left-40 w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right" data-aos-duration="1200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight leading-none">
              Hi, I'm <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-[length:200%_auto] animate-gradient-text">
                Zain Murtaza
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6" data-aos="fade-right" data-aos-delay="150">
              Creative Web Developer
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed" data-aos="fade-right" data-aos-delay="250">
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code, intuitive design, and bringing digital ideas to life.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10" data-aos="fade-right" data-aos-delay="350">
              {SOCIAL_LINKS.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${social.color}`}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 50}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" data-aos="fade-right" data-aos-delay="450">
              <button
                onClick={(e) => handleScrollTo(e, '#about')}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="group px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              
              {/* Decorative Background Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-200/60 scale-[1.08] lg:scale-[1.06] z-0 transition-transform duration-700 hover:scale-[1.12]"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-gray-50" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="/img.png"
                  alt="Zain Murtaza"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
              
              {/* Floating Badge 1: Code */}
              <div 
                className="absolute -top-3 -right-3 lg:-top-5 lg:-right-5 w-14 h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20" 
                data-aos="zoom-in" 
                data-aos-delay="400"
              >
                <Code className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              
              {/* Floating Badge 2: Palette */}
              <div 
                className="absolute -bottom-3 -left-3 lg:-bottom-5 lg:-left-5 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20" 
                data-aos="zoom-in" 
                data-aos-delay="500" 
                style={{ animationDelay: '-1.5s' }}
              >
                <Palette className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              
              {/* Floating Badge 3: Zap */}
              <div 
                className="absolute top-1/2 -right-5 lg:-right-8 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20 transform -translate-y-1/2" 
                data-aos="zoom-in" 
                data-aos-delay="600" 
                style={{ animationDelay: '-3s' }}
              >
                <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={(e) => handleScrollTo(e, '#about')}
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-600 transition-colors animate-bounce p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          data-aos="fade-up"
          data-aos-delay="800"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
