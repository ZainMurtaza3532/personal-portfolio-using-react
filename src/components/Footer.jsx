import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1115] border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-[#00D49F]">
            <span className="font-mono font-bold text-sm">&lt;/&gt;</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">NextDev</span>
        </div>
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm font-medium text-center">
          &copy; {new Date().getFullYear()} Zain Murtaza. All rights reserved.
        </p>
        
        {/* Socials */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-[#00D49F] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#00D49F] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-[#00D49F] transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
