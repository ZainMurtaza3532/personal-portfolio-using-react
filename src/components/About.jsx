import React from 'react';
import { User, Briefcase, Award, Globe, ArrowRight } from 'lucide-react';

const About = () => {
  const personalInfo = [
    { 
      icon: <User className="w-6 h-6 text-purple-600" />, 
      label: "Name", 
      value: "Zain Murtaza" 
    },
    { 
      icon: <Briefcase className="w-6 h-6 text-purple-600" />, 
      label: "Experience", 
      value: "2+ Years" 
    },
    { 
      icon: <Award className="w-6 h-6 text-purple-600" />, 
      label: "Degree", 
      value: "Computer Science" 
    },
    { 
      icon: <Globe className="w-6 h-6 text-purple-600" />, 
      label: "Location", 
      value: "Lahore, Pakistan" 
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <div className="flex justify-center relative" data-aos="fade-right" data-aos-duration="1200">
            <div className="relative w-72 sm:w-80 lg:w-96 aspect-square">
              
              {/* Decorative Background Offset */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform rotate-6 scale-105 -z-10 transition-transform duration-700 hover:rotate-12"></div>
              
              {/* Main Image Container */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white relative z-10" data-aos="zoom-in" data-aos-delay="100">
                <img 
                  src="/img.png" 
                  alt="Zain Murtaza - Web Developer" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Floating Experience Badge */}
              <div 
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-4 sm:p-5 shadow-xl z-20 animate-float" 
                data-aos="fade-up" 
                data-aos-delay="400"
              >
                <div className="flex flex-col items-center justify-center text-white">
                  <span className="text-2xl sm:text-3xl font-bold leading-none mb-1">2+</span>
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-purple-100 text-center">
                    Years<br/>Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-duration="1200">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
              My Journey as a Web Developer
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
              I'm a passionate web developer on an exciting journey of continuous learning and growth. 
              Starting with frontend technologies like HTML, CSS, and JavaScript, I've developed a strong foundation 
              in creating beautiful, user-friendly interfaces. Now, I'm expanding my skills to include backend 
              technologies like Node.js and databases, with the goal of becoming a versatile full-stack developer.
            </p>
            
            {/* Personal Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {personalInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-purple-200 hover:-translate-y-1 transition-all duration-300" 
                  data-aos="fade-up" 
                  data-aos-delay={300 + index * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mr-4 group-hover:bg-purple-100 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium mb-0.5">{item.label}</span>
                    <span className="text-base font-semibold text-gray-900">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div data-aos="fade-up" data-aos-delay="700">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
