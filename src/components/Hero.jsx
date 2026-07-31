import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap, Sparkles, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    const header = document.querySelector('header');
    
    const updateHeight = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeight();
    
    const resizeObserver = new ResizeObserver(updateHeight);
    if (header) resizeObserver.observe(header);
    
    return () => {
      if (header) resizeObserver.unobserve(header);
    };
  }, []);
  
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:shadow-[0_0_15px_rgba(17,24,39,0.3)]',
      link: "https://github.com/ZainMurtaza3532"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]',
      link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      color: 'hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.3)]',
      link: "#"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      color: 'hover:bg-[#EA4335] hover:text-white hover:border-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.3)]',
      link: "mailto:your.email@example.com"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Gradients & Textures */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0">
        {/* Subtle Dot Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        
        {/* Animated Background Blobs */}
        <div className="absolute top-20 left-10 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 md:right-20 w-72 h-72 md:w-96 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 md:left-40 w-72 h-72 md:w-96 md:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content (Text) */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Pill Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-purple-100 shadow-sm mb-8"
              data-aos="fade-down" 
              data-aos-duration="1000"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
                Available for new projects
              </span>
            </div>

            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight" 
              data-aos="fade-right" 
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              Hi, I'm <br className="hidden lg:block" />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur-[20px] opacity-20 rounded-lg"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
                  Zain Murtaza
                </span>
              </span>
            </h1>
            
            <h2 
              className="text-2xl md:text-3xl font-bold text-gray-700 mb-6 flex items-center justify-center lg:justify-start gap-3" 
              data-aos="fade-right" 
              data-aos-delay="200"
            >
              Creative Web Developer
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </h2>
            
            <p 
              className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed font-medium" 
              data-aos="fade-right" 
              data-aos-delay="300"
            >
              I craft beautiful, scalable, and highly performant web experiences. 
              Transforming complex problems into elegant, user-friendly digital solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12" data-aos="fade-right" data-aos-delay="400">
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <a
                href="#contact"
                className="group px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 font-bold rounded-xl border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4" data-aos="fade-up" data-aos-delay="500">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-gray-600 shadow-sm transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${social.color}`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
          </div>
          
          {/* Right Content (Image & Floating Elements) */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0" data-aos="zoom-in" data-aos-duration="1200">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
              
              {/* Outer Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400 blur-xl opacity-20 animate-pulse"></div>
              
              {/* Rotating Dashed Border */}
              <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-purple-300/60 scale-[1.05] z-0 animate-[spin_20s_linear_infinite]"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-gradient-to-b from-gray-50 to-gray-100 group">
                <img
                  src="/img.png"
                  alt="Zain Murtaza - Web Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient for image pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Element 1 - Code */}
              <div 
                className="absolute top-10 -right-4 lg:-right-8 w-16 h-16 lg:w-20 lg:h-20 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl flex items-center justify-center text-purple-600 shadow-xl z-20 hover:scale-110 transition-transform duration-300 cursor-pointer" 
                style={{ animation: 'bounce 4s infinite' }}
              >
                <div className="bg-purple-100 p-3 lg:p-4 rounded-xl">
                  <Code className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
              </div>
              
              {/* Floating Element 2 - Palette */}
              <div 
                className="absolute -bottom-4 left-10 lg:left-4 w-14 h-14 lg:w-16 lg:h-16 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl flex items-center justify-center text-pink-500 shadow-xl z-20 hover:scale-110 transition-transform duration-300 cursor-pointer" 
                style={{ animation: 'bounce 5s infinite 1s' }}
              >
                <div className="bg-pink-100 p-2 lg:p-3 rounded-xl">
                  <Palette className="w-5 h-5 lg:w-7 lg:h-7" />
                </div>
              </div>
              
              {/* Floating Element 3 - Zap/Performance */}
              <div 
                className="absolute top-1/2 -left-8 lg:-left-12 w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl flex items-center justify-center text-yellow-500 shadow-xl z-20 hover:scale-110 transition-transform duration-300 cursor-pointer transform -translate-y-1/2" 
                style={{ animation: 'bounce 4.5s infinite 2s' }}
              >
                <div className="bg-yellow-100 p-2 rounded-xl">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </div>

            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Scroll Down</span>
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-purple-600 transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-sm border border-gray-100 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
