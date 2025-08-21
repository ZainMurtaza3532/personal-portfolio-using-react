import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      color: 'hover:bg-gray-800 hover:text-white',
      link: "https://github.com/ZainMurtaza3532"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      color: 'hover:bg-blue-700 hover:text-white',
      link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      color: 'hover:bg-blue-500 hover:text-white',
      link: "#"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      color: 'hover:bg-red-600 hover:text-white',
      link: "#"
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-white/40"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right" data-aos-duration="1200">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6" data-aos="fade-right" data-aos-delay="100">
              Hi, I'm <span className="text-gradient">Zain</span>
            </h1>
            <h2 className="text-3xl md:text-4xl text-gray-600 mb-8" data-aos="fade-right" data-aos-delay="200">
               Web Developer
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl" data-aos="fade-right" data-aos-delay="300">
              I craft beautiful, responsive web experiences with modern technologies. 
              Passionate about clean code, intuitive design, and bringing ideas to life.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-5 mb-10" data-aos="fade-right" data-aos-delay="400">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color}`}
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={500 + index * 100}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="600">
              <button
                onClick={scrollToAbout}
                className="btn-modern flex items-center justify-center gap-2 text-lg"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-lg"
              >
                <span>Get In Touch</span>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1200">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl" data-aos="zoom-in" data-aos-delay="300">
                <img
                  src="/img.png"
                  alt="Zain - Web Developer"
                  className="w-80 h-80 md:w-110 md:h-110 object-cover"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float" data-aos="zoom-in" data-aos-delay="500">
                <Code className="w-10 h-10" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float" data-aos="zoom-in" data-aos-delay="700" style={{ animationDelay: '1s' }}>
                <Palette className="w-8 h-8" />
              </div>
              
              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float" data-aos="zoom-in" data-aos-delay="900" style={{ animationDelay: '2s' }}>
                <Zap className="w-7 h-7" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700 transition-colors animate-bounce"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <ArrowDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;