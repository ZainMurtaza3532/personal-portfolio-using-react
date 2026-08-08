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
import Preloader from './components/Preloader';
import { ThemeContext } from './context/ThemeContext';

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
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const title = 'Zain Murtaza | Fullstack Developer';
    document.title = title;

    const description = 'Portfolio of Zain Murtaza, a fullstack developer building modern, scalable, and SEO-friendly web applications.';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-cubic',
        offset: 50,
      });
      setTimeout(() => AOS.refresh(), 100);
    }
  }, [isLoading]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-[#00D49F] focus:px-4 focus:py-2 focus:text-[#0B1115] focus:font-semibold"
      >
        Skip to content
      </a>

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen bg-[#0B1115] transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <main id="main-content" tabIndex="-1">
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
