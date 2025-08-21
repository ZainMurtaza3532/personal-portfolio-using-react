import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education'; 
import Projects from './components/Projects';
import Contact from './components/Contact';
import Team from './components/Team'; 
import Footer from './components/Footer';

function App() {
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
    <div className="min-h-screen bg-gradient-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />  
        <Projects />
        <Team /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;