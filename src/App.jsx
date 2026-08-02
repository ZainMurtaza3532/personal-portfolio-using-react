import React, { useState, useEffect, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// 1. Create and export the ThemeContext
export const ThemeContext = createContext();

function App() {
  // 2. Initialize theme state (default to dark to match your previous premium design)
  const [theme, setTheme] = useState('dark');

  // 3. Load saved theme or system preference on mount
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

  // 4. Apply the dark class to the HTML document when theme changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });

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
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    // 5. Wrap the app in the ThemeProvider
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* 6. Add dynamic background colors for the root app wrapper */}
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education/>  
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
