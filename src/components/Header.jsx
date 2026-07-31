import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import logo from '/public/images/abc.png'; 

const Logo = () => {
  return (
    <a href="#home" className="flex items-center group focus:outline-none" data-aos="fade-right">
      <img
        src={logo}
        alt="Zain Logo"
        className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <span className="text-xl md:text-2xl font-extrabold text-white ml-2 tracking-tight hidden lg:block">
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
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
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
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

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
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full" data-aos="fade-down" data-aos-duration="800">
      
      {/* Floating Pill Container (Matches Screenshot) */}
      <div className={`relative flex items-center justify-between lg:justify-center p-1.5 md:p-2 rounded-full transition-all duration-300 w-full max-w-7xl lg:w-auto ${
        isScrolled || isMenuOpen
          ? 'bg-[#2a2a2a]/85 backdrop-blur-md shadow-2xl border border-white/10' 
          : 'bg-[#2a2a2a]/60 backdrop-blur-sm border border-transparent'
      }`}>
        
        {/* Mobile Logo (Visible only on small screens within the pill) */}
        <div className="lg:hidden pl-2">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#9300ff] text-white shadow-md' // The bright purple from your screenshot
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Divider line matching screenshot */}
          <div className="w-[1px] h-8 bg-gray-500/40 mx-2"></div>
          
          {/* Theme Toggle matching screenshot (White circle with purple sun) */}
          <button 
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#9300ff] hover:scale-105 transition-transform"
            aria-label="Toggle Theme"
          >
            <Sun className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 lg:hidden pr-1">
          <button 
            className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#9300ff]"
            aria-label="Toggle Theme"
          >
            <Sun className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`lg:hidden absolute top-[110%] left-4 right-4 rounded-3xl bg-[#2a2a2a]/95 backdrop-blur-xl shadow-2xl border border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0 visible' : 'opacity-0 scale-y-95 -translate-y-4 invisible'
        } origin-top`}
      >
        <nav className="p-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.id)}
              aria-current={activeSection === item.id ? 'page' : undefined}
              className={`block w-full px-5 py-3.5 rounded-2xl transition-colors text-base font-medium ${
                activeSection === item.id
                  ? 'bg-[#9300ff] text-white shadow-sm'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
