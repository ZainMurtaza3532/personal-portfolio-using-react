import React, { useState, useEffect, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Component Imports
import Header from './components/Header';
// import Hero from './components/Hero'; // Assuming you have this
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; 

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true); 

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
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 50,
      });
      // Timeout ensures the DOM is fully rendered after preloader disappears before calculating scroll points
      setTimeout(() => AOS.refresh(), 100);
    }
  }, [isLoading]); 

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <div className={`min-h-screen bg-[#0B1115] transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main>
          {/* <Hero /> */}
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
