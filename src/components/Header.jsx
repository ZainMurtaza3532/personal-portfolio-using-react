import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import logo from '/public/images/abc.png'; 

const Logo = () => {
  return (
    <a href="#home" className="flex items-center group focus:outline-none" data-aos="fade-right">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-full flex items-center justify-center text-[#00D49F]">
        <span className="font-mono font-bold text-lg">&lt;/&gt;</span>
      </div>
      <span className="text-xl md:text-2xl font-bold text-white ml-2 tracking-tight transition-colors">
        NextDev
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
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'experience', 'testimonials', 'contact'];
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
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

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
      
      <div className={`relative flex items-center justify-between p-2 rounded-full transition-all duration-300 w-full max-w-7xl ${
        isScrolled || isMenuOpen
          ? 'bg-[#121C22]/90 backdrop-blur-md shadow-2xl border border-white/5' 
          : 'bg-transparent border border-transparent'
      }`}>
        
        {/* Logo */}
        <div className="pl-2">
          <Logo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center bg-[#121C22] border border-white/5 rounded-full px-2 py-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white/10 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex pr-2">
           <a 
             href="/cv.pdf" 
             className="flex items-center gap-2 px-6 py-2.5 bg-[#00D49F] text-[#0B1115] hover:bg-[#00F0B5] rounded-full text-sm font-bold transition-colors duration-300"
           >
             <Download className="w-4 h-4" />
             download CV
           </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex lg:hidden pr-1">
          <button
            className="p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div 
        className={`lg:hidden absolute top-[110%] left-4 right-4 rounded-2xl bg-[#121C22]/95 backdrop-blur-xl border border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'opacity-100 scale-y-100 translate-y-0 visible' : 'opacity-0 scale-y-95 -translate-y-4 invisible'
        } origin-top`}
      >
        <nav className="p-4 flex flex-col space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href, item.id)}
              className={`block w-full px-5 py-3.5 rounded-xl transition-colors text-base font-medium ${
                activeSection === item.id
                  ? 'bg-white/10 text-[#00D49F]'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="/cv.pdf" 
            className="flex items-center justify-center gap-2 w-full mt-4 px-5 py-3.5 bg-[#00D49F] text-[#0B1115] font-bold rounded-xl"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
