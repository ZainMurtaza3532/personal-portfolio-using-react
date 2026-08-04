import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Sleek Loading Screen Component
const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1115]">
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 w-24 h-24 border-t-2 border-b-2 border-[#00D49F] rounded-full animate-spin"></div>
        
        {/* Inner pulsing logo */}
        <div className="w-16 h-16 bg-[#121C22] border border-white/5 rounded-full flex items-center justify-center text-[#00D49F] animate-pulse">
          <span className="font-mono font-bold text-xl">&lt;/&gt;</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animations for scrolling
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 50,
    });

    // Simulate a loading sequence (adjust the time as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    // Smooth scroll handler for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1115] text-white selection:bg-[#00D49F]/20 selection:text-[#00D49F] overflow-hidden">
      {isLoading ? (
        <Preloader />
      ) : (
        /* Page Load Fade-in Animation */
        <div className="animate-page-enter">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />  
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
