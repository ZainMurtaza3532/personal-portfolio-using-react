import React from 'react';
import { Code2, Layout, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Visual Profile Side */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-aos="fade-right" data-aos-duration="1200">
          <div className="relative z-10 rounded-[2rem] overflow-hidden bg-[#121C22] aspect-[4/5] p-4 flex items-center justify-center group">
            <img 
               src="/images/about-profile.jpg" // Replace with your image
               alt="Zain Murtaza"
               className="w-full h-full object-cover rounded-2xl grayscale-0 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-8 mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
          
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[#00D49F] text-sm font-medium mb-6">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              I build scalable and user-focused web applications
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg font-light mb-4">
              I'm a fullstack developer specializing in Next.js and modern web technologies. I enjoy building fast, scalable, and visually clean applications that solve real-world problems. My focus is on writing maintainable code and delivering smooth user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Over time, I've worked with tools like TypeScript, Supabase, and modern UI systems to create projects that are both functional and production-ready.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="bg-[#121C22] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00D49F]/30 transition-colors">
              <Code2 className="w-8 h-8 text-[#00D49F] mx-auto mb-3" />
              <h4 className="text-white font-medium">Clean code</h4>
            </div>
            <div className="bg-[#121C22] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00D49F]/30 transition-colors">
              <Layout className="w-8 h-8 text-[#00D49F] mx-auto mb-3" />
              <h4 className="text-white font-medium">Fullstack Apps</h4>
            </div>
            <div className="bg-[#121C22] border border-white/5 rounded-2xl p-6 text-center hover:border-[#00D49F]/30 transition-colors">
              <Zap className="w-8 h-8 text-[#00D49F] mx-auto mb-3" />
              <h4 className="text-white font-medium">Performance</h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
