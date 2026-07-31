import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // Added Moon icon
import logo from '/public/images/abc.png'; 
import { ThemeContext } from '../App'; // Import the context from App.js

const Logo = () => {
  return (
    <a href="#home" className="flex items-center group focus:outline-none" data-aos="fade-right">
      <img
        src={logo}
        alt="Zain Logo"
        className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
      />
      {/* Added dynamic text color for light/dark mode */}
      <span className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white ml-2 tracking-tight hidden lg:block transition-colors">
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
  
  // Consume the theme context
  const { theme, setTheme } = useContext(ThemeContext);
  
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

  // Theme Toggle Handler
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full" data-aos="fade-down" data-aos-duration="800">
      
      {/* Floating Pill Container */}
      <div className={`relative flex items-center justify-between lg:justify-center p-1.5 md:p-2 rounded-full transition-all duration-300 w-full max-w-7xl lg:w-auto ${
        isScrolled || isMenuOpen
          ? 'bg-white/80 dark:bg-[#2a2a2a]/85 backdrop-blur-md shadow-2xl border border-gray-200 dark:border-white/10' 
          : 'bg-white/50 dark:bg-[#2a2a2a]/60 backdrop-blur-sm border border-transparent'
      }`}>
        
        {/* Mobile Logo */}
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
                  ? 'bg-[#9300ff] text-white shadow-md' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* Divider line */}
          <div className="w-[1px] h-8 bg-gray-300 dark:bg-gray-500/40 mx-2"></div>
          
          {/* Desktop Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white flex items-center justify-center text-[#9300ff] hover:scale-105 transition-transform border border-gray-200 dark:border-transparent"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 lg:hidden pr-1">
          {/* Mobile Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white flex items-center justify-center text-[#9300ff] border border-gray-200 dark:border-transparent"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            className="p-2 rounded-full text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
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
        className={`lg:hidden absolute top-[110%] left-4 right-4 rounded-3xl bg-white/95 dark:bg-[#2a2a2a]/95 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${
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
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 dark:hover:text-white'
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
