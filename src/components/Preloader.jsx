
import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Start fading out after 2 seconds
    const timer = setTimeout(() => {
      setIsFading(true);
    }, 2000);

    // Completely remove preloader after transition (2.5s total)
    const removeTimer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onComplete();
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1115] transition-all duration-500 ease-in-out ${
        isFading ? 'opacity-0 translate-y-[-100%]' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glowing backdrop */}
        <div className="absolute inset-0 bg-[#00D49F]/20 blur-3xl rounded-full animate-pulse"></div>
        
        {/* Animated Logo */}
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-full flex items-center justify-center text-[#00D49F] border border-[#00D49F]/30 animate-spin-slow relative z-10 shadow-[0_0_15px_rgba(0,212,159,0.3)]">
          <span className="font-mono font-bold text-2xl md:text-3xl animate-pulse-fast">&lt;/&gt;</span>
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 flex items-center gap-1 overflow-hidden">
          <span className="text-white text-sm font-medium tracking-[0.3em] uppercase">Loading</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#00D49F] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#00D49F] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-[#00D49F] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
