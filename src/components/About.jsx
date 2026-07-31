import React from 'react';
import { 
  Briefcase, 
  Award, 
  Terminal, 
  Download, 
  ArrowRight, 
  Sparkles, 
  Code 
} from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      label: 'Experience',
      value: '3+ Years'
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: 'Projects',
      value: '50+ Done'
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      label: 'Technologies',
      value: '15+ Tools'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden relative selection:bg-[#9300ff]/30">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#9300ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9300ff] to-pink-500">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9300ff] to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(147,0,255,0.5)]"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Passionate developer crafting elegant digital experiences with clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Visual Profile Side */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none" data-aos="fade-right" data-aos-duration="1200">
            
            {/* Animated Ambient Glow Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#9300ff] to-pink-600 rounded-[3rem] blur-2xl opacity-20 animate-pulse"></div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#131313] aspect-[4/5] flex items-center justify-center backdrop-blur-sm group">
              {/* Replace the div below with an actual <img> tag for your profile picture */}
              <div className="text-center p-8 transition-transform duration-500 group-hover:scale-105">
                <Code className="w-24 h-24 mx-auto text-[#9300ff]/50 mb-4" />
                <p className="text-gray-400 font-medium">Place your profile image here</p>
                <p className="text-xs text-gray-600 mt-2">(w-full h-full object-cover)</p>
              </div>
            </div>

            {/* Floating Satisfaction Badge */}
            <div 
              className="absolute -bottom-6 -left-6 sm:-left-10 bg-[#1a1a1a]/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-4 z-20 group hover:-translate-y-1 transition-transform duration-300" 
              data-aos="zoom-in" 
              data-aos-delay="300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#9300ff] to-[#b545ff] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(147,0,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <p className="font-black text-white text-2xl">100%</p>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Client Success</p>
              </div>
            </div>
          </div>

          {/* Text Content & Stats Side */}
          <div className="space-y-10 mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
            
            {/* Biography */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
                Hello! I'm Zain 
                <span className="origin-bottom-right hover:animate-ping inline-block cursor-pointer text-4xl">👋</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                I am a dedicated software developer based in Pakistan, specializing in building robust, scalable web applications. I thrive at the intersection of beautiful design and complex backend logic.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                Whether I am developing a highly interactive frontend or architecting a secure database, I bring passion, clean coding practices, and an eye for detail to every single project. Let's turn your great ideas into exceptional products.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-[#9300ff]/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[#9300ff] group-hover:bg-[#9300ff] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(147,0,255,0.4)] transition-all duration-300 mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="#portfolio" 
                className="group flex items-center space-x-2 px-8 py-4 bg-[#9300ff] text-white font-semibold rounded-2xl shadow-[0_0_30px_rgba(147,0,255,0.3)] hover:shadow-[0_0_40px_rgba(147,0,255,0.5)] hover:bg-[#a624ff] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#9300ff]/30 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
                <span>Download CV</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
