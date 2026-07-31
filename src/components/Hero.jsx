import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    const header = document.querySelector('header');
    
    const updateHeight = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Initial check
    updateHeight();
    
    // Using ResizeObserver for more reliable dimension tracking
    const resizeObserver = new ResizeObserver(() => updateHeight());
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
      color: 'hover:bg-gray-900 hover:text-white',
      link: "https://github.com/ZainMurtaza3532"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      color: 'hover:bg-[#0A66C2] hover:text-white',
      link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      color: 'hover:bg-[#1DA1F2] hover:text-white',
      link: "#"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      color: 'hover:bg-[#EA4335] hover:text-white',
      link: "mailto:your.email@example.com"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background Gradient & Animated Blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 md:left-20 w-72 h-72 md:w-96 md:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-40 right-10 md:right-20 w-72 h-72 md:w-96 md:h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 md:left-40 w-72 h-72 md:w-96 md:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start" data-aos="fade-right" data-aos-duration="1200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 tracking-tight" data-aos="fade-right" data-aos-delay="100">
              Hi, I'm <br className="hidden lg:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Zain Murtaza
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6" data-aos="fade-right" data-aos-delay="200">
              Creative Web Developer
            </h2>
            
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed" data-aos="fade-right" data-aos-delay="300">
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code, intuitive design, and bringing ideas to life.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10" data-aos="fade-right" data-aos-delay="400">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-gray-600 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${social.color}`}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto" data-aos="fade-right" data-aos-delay="600">
              <button
                onClick={scrollToAbout}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
      {/* Right Image */}
<div className="lg:w-1/2 flex justify-center mt-12 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
  
  {/* The wrapper strictly dictates the size. Made slightly taller for a portrait look. */}
  <div className="relative w-64 h-72 sm:w-72 sm:h-80 lg:w-96 lg:h-[30rem]">
    
    {/* Decorative Background Offset Layer */}
    {/* Uses an offset (translate) instead of scale for a cleaner geometric look */}
    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-purple-300/80 translate-x-3 translate-y-3 lg:translate-x-5 lg:translate-y-5 z-0 transition-transform duration-700 hover:translate-x-6 hover:translate-y-6"></div>
    
    {/* Main Image Container */}
    <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative z-10 bg-white" data-aos="zoom-in" data-aos-delay="300">
      <img
        src="/img.png"
        alt="Zain Murtaza - Web Developer"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
    
    {/* Floating Elements */}
    
    {/* Code Icon (Top Right) */}
    {/* Slightly adjusted positioning to sit well on the new angled corners */}
    <div 
      className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20" 
      data-aos="zoom-in" 
      data-aos-delay="500"
    >
      <Code className="w-8 h-8 lg:w-10 lg:h-10" />
    </div>
    
    {/* Palette Icon (Bottom Left) */}
    <div 
      className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20" 
      data-aos="zoom-in" 
      data-aos-delay="700" 
      style={{ animationDelay: '1s' }}
    >
      <Palette className="w-6 h-6 lg:w-8 lg:h-8" />
    </div>
    
    {/* Zap Icon (Middle Right) */}
    <div 
      className="absolute top-1/2 -right-6 lg:-right-8 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl animate-float z-20 transform -translate-y-1/2" 
      data-aos="zoom-in" 
      data-aos-delay="900" 
      style={{ animationDelay: '2s' }}
    >
      <Zap className="w-6 h-6 lg:w-7 lg:h-7" />
    </div>

  </div>
</div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-purple-600 transition-colors animate-bounce p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          data-aos="fade-up"
          data-aos-delay="1000"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
