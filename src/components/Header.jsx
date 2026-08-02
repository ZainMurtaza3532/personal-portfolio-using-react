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
