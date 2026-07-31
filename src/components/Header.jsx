import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/public/images/abc.png'; 

const Logo = () => {
  return (
    <a href="#home" className="flex items-center group focus:outline-none" data-aos="fade-right">
      <div className="relative overflow-hidden rounded-full p-1">
        <img
          src={logo}
          alt="Zain Logo"
          className="w-10 h-10 md:w-12 md:h-12 object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 ml-2 tracking-tight group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-500">
        ZAIN
      </span>
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const rafRef = useRef(null);
  
  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'team', 'contact'];
      // Offset by 150px to trigger the active state slightly before the section hits the exact top
      const scrollPosition = window.scrollY + 150; 
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const scrollToSection = useCallback((e, href, id) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-white/20 py-3' 
          : 'bg-transparent border-transparent py-5 lg:py-6'
      }`}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Logo />
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className="relative group px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none"
              >
                <span className={`transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-purple-600'
                    : 'text-gray-600 group-hover:text-purple-500'
                }`}>
                  {item.name}
                </span>
                
                {/* Animated Bottom Line */}
                <span 
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 ease-out transform -translate-x-1/2 rounded-full ${
                    activeSection === item.id 
                      ? 'w-[80%] opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-[80%] group-hover:opacity-100'
                  }`}
                />
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
              isScrolled 
                ? 'bg-white/50 text-gray-800 hover:bg-white/80' 
                : 'text-gray-800 hover:bg-white/20'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                <Menu className="w-6 h-6" />
              </span>
              <span className={`absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                <X className="w-6 h-6" />
              </span>
            </div>
          </button>
        </div>
        
        {/* Mobile Nav Dropdown */}
        <div 
          className={`md:hidden absolute top-[110%] left-4 right-4 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl border border-white/50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden origin-top ${
            isMenuOpen 
              ? 'opacity-100 scale-y-100 translate-y-0 visible pointer-events-auto' 
              : 'opacity-0 scale-y-95 -translate-y-4 invisible pointer-events-none'
          }`}
        >
          <nav className="p-3 space-y-1 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.id)}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`flex items-center w-full px-5 py-3 rounded-xl transition-all duration-300 text-base font-semibold ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-purple-500'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
