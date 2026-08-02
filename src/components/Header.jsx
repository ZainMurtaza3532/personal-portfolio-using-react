import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Code, 
  Grid,
  Menu,
  X
} from 'lucide-react';
import logo from '/public/images/abc.png'; 

// ==========================================
// HEADER COMPONENT
// ==========================================
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-dashed border-gray-300 w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo / Name */}
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 bg-gray-100 text-black font-black text-sm tracking-widest uppercase border border-gray-200">
            Zain Murtaza
          </span>
        </div>

        {/* Center: Social / Tech Icons (Pill) */}
        <div className="hidden md:flex items-center gap-1 bg-white border border-gray-200 p-1 shadow-sm rounded-md">
          <a href="#" className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors rounded-sm">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors rounded-sm">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors rounded-sm">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors rounded-sm">
            <Code className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex p-2 bg-gray-100 hover:bg-gray-200 text-black rounded-sm border border-gray-200 transition-colors">
            <Grid className="w-4 h-4" />
          </button>
          <a 
            href="#download" 
            className="hidden md:inline-block px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg"
          >
            Download CV
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 p-4 shadow-xl flex flex-col gap-4">
          <div className="flex justify-center gap-4 border-b border-gray-100 pb-4">
            <Github className="w-5 h-5 text-gray-600" />
            <Linkedin className="w-5 h-5 text-gray-600" />
            <Twitter className="w-5 h-5 text-gray-600" />
            <Mail className="w-5 h-5 text-gray-600" />
          </div>
          <button className="w-full py-3 bg-black text-white text-sm font-bold uppercase tracking-wider">
            Download CV
          </button>
        </div>
      )}
    </header>
  );
};

// ==========================================
// HERO COMPONENT
// ==========================================
const HeroModern = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#fcfcfc] text-black overflow-hidden flex flex-col items-center pt-24 font-sans selection:bg-black selection:text-white">
      
      {/* Background Giant Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none">
        <h1 className="text-[12vw] font-black text-gray-100/60 leading-none tracking-tighter">
          WEB DEVELOPER
        </h1>
      </div>

      {/* Thin Background Connecting Lines (Simulated SVG wireframe) */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 z-0"></div>
      <div className="absolute top-1/2 left-[20%] w-[1px] h-64 bg-gray-200 z-0"></div>
      <div className="absolute top-1/2 right-[20%] w-[1px] h-64 bg-gray-200 z-0"></div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between flex-grow mt-10 lg:mt-0">
        
        {/* Left Column: Intro Card */}
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-full max-w-sm relative">
            <h2 className="text-sm font-black uppercase tracking-wide leading-relaxed mb-6 text-gray-900">
              Hello! I'm Zain<br />
              Software Engineer<br />
              Building UI/UX &<br />
              Scalable Web Apps<br />
              From Pakistan.
            </h2>
            <ul className="space-y-3 text-xs font-medium text-gray-500">
              <li className="flex items-center gap-2">
                <span className="text-gray-300">✛</span> Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">✛</span> React / Tailwind
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">✛</span> Frontend Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gray-300">✛</span> UI/UX Design
              </li>
            </ul>
          </div>
        </div>

        {/* Center Column: Subject Image */}
        <div className="w-full lg:w-2/4 flex justify-center items-end relative h-[500px] lg:h-[700px] z-20">
          {/* Replace src with your actual cutout image */}
          <img 
            src="/img.png" 
            alt="Zain Murtaza" 
            className="absolute bottom-0 w-full max-w-[500px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Column: Stat Cards */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-6 mt-10 lg:mt-0 relative">
          
          {/* Stat Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-56 relative -left-6 z-20">
            <h3 className="text-3xl font-black mb-1">3+</h3>
            <p className="text-xs text-gray-500 font-medium">Years in Frontend &<br/> Web Development</p>
          </div>

          {/* Stat Card 2 (Inverted) */}
          <div className="bg-black text-white p-6 rounded-xl shadow-xl w-56 relative z-30">
            <h3 className="text-3xl font-black mb-1">15+</h3>
            <p className="text-xs text-gray-300 font-medium">Projects Launched</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 w-56 relative -left-8 z-10">
            <h3 className="text-3xl font-black mb-1">100%</h3>
            <p className="text-xs text-gray-500 font-medium">Client Satisfaction</p>
          </div>

        </div>
      </div>

      {/* Bottom Section: Quote & Action */}
      <div className="relative z-30 w-full pb-12 flex flex-col items-center mt-auto">
        <h3 className="text-center text-lg md:text-xl font-bold tracking-[0.2em] text-gray-400 uppercase text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500 style-outline">
          Code with purpose, build with precision.
        </h3>
        <button className="mt-6 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all hover:shadow-xl hover:-translate-y-1 rounded-sm">
          View Projects
        </button>
      </div>

    </section>
  );
};

export { Header, HeroModern as HeroSplitLayout };
