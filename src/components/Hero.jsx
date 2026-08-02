import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSplitLayout = () => {
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;
    const updateHeight = () => setHeaderHeight(header.offsetHeight + 40); 
    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(header);
    return () => resizeObserver.disconnect();
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen w-full bg-[#0B1115] flex flex-col justify-center overflow-hidden relative"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto py-12 relative z-10">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col justify-center space-y-8" data-aos="fade-right" data-aos-duration="1000">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#00D49F]/30 bg-[#00D49F]/10 text-[#00D49F] text-sm font-medium w-fit">
            Fullstack Developer • Next.js Specialist
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Building modern <br/> web experiences <br/> with <span className="text-[#00D49F]">clean code</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light">
              I design and build scalable fullstack applications using modern technologies like Next.js, TypeScript, and Supabase. Focused on performance, clean UI, and real-world products.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="px-8 py-3.5 bg-[#00D49F] text-[#0B1115] font-bold rounded-full hover:bg-[#00F0B5] transition-all duration-300 flex items-center gap-2"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="px-8 py-3.5 bg-transparent text-white border border-white/20 hover:bg-white/5 font-semibold rounded-full transition-all duration-300"
            >
              View projects
            </button>
          </div>
        </div>

        {/* Right Side: Circular Profile Image */}
        <div className="flex items-center justify-center lg:justify-end mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div className="relative w-full max-w-[450px] aspect-square rounded-full overflow-hidden border-4 border-white/5 bg-[#121C22]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00D49F]/10 blur-3xl rounded-full"></div>
            <img
              src="/img.png" // Replace with your image
              alt="Zain Murtaza"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSplitLayout;
