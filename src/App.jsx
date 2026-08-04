import React, { useState, useEffect, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero'; // Assumed from your HeroSplitLayout
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // Import the new Preloader

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // ONLY initialize AOS after loading is complete so animations are visible
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 50,
      });
      AOS.refresh();
    }

    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isLoading]); // Dependency on isLoading

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Show Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* Main Content - Fades in smoothly after load */}
      <div className={`min-h-screen bg-[#0B1115] transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
    </ThemeContext.Provider>
  );
}

export default App;
