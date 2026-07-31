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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer crafting elegant digital experiences with clean, efficient code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Profile Side */}
          <div className="relative" data-aos="fade-right" data-aos-duration="1200">
            {/* Decorative Background Blobs */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700"></div>

            {/* Main Image Container */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl bg-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center">
              {/* Replace the div below with an actual <img> tag for your profile picture */}
              <div className="text-center p-8">
                <Code className="w-24 h-24 mx-auto text-purple-200 mb-4" />
                <p className="text-gray-400 font-medium">Place your profile image here</p>
                <p className="text-xs text-gray-300">(w-full h-full object-cover)</p>
              </div>
            </div>

            {/* Floating Satisfaction Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 z-20" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-2xl">100%</p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Client Success</p>
              </div>
            </div>
          </div>

          {/* Text Content & Stats Side */}
          <div className="space-y-8" data-aos="fade-left" data-aos-duration="1200">
            
            {/* Biography */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                Hello! I'm Zain 
                <span className="origin-bottom-right hover:animate-ping inline-block cursor-pointer text-4xl">👋</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                I am a dedicated software developer based in Lahore, PK, specializing in building robust, scalable web applications. I thrive at the intersection of beautiful design and complex backend logic.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether I am developing a highly interactive frontend or architecting a secure database, I bring passion, clean coding practices, and an eye for detail to every single project. Let's turn your great ideas into exceptional products.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 mb-3">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
              <a 
                href="#portfolio" 
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-sm border border-gray-200 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
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
