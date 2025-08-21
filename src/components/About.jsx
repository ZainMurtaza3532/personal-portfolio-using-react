import React from 'react';
import { User, Briefcase, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center" data-aos="fade-right" data-aos-duration="1200">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
                <img 
                  src="/img.png" 
                  alt="Zain - Web Developer" 
                  className="w-80 h-80 md:w-118 md:h-118 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 shadow-xl" data-aos="fade-up" data-aos-delay="300">
                <p className="text-white font-semibold text-lg">2+ Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div data-aos="fade-left" data-aos-duration="1200">
            <h3 className="text-3xl font-bold text-gray-800 mb-8" data-aos="fade-up" data-aos-delay="100">
              My Journey as a Web Developer
            </h3>
            <p className="text-gray-600 mb-7 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="200">
              I'm a passionate web developer on an exciting journey of continuous learning and growth. 
              Starting with frontend technologies like HTML, CSS, and JavaScript, I've developed a strong foundation 
              in creating beautiful, user-friendly interfaces. Now, I'm expanding my skills to include backend 
              technologies like Node.js and databases, with the goal of becoming a versatile full-stack developer.
            </p>
            
            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                { icon: <User className="w-6 h-6 text-purple-600 mr-3" />, label: "Name: Zain Murtaza" },
                { icon: <Briefcase className="w-6 h-6 text-purple-600 mr-3" />, label: "Experience: 2+ Years" },
                { icon: <Award className="w-6 h-6 text-purple-600 mr-3" />, label: "Degree: Computer Science" },
                { icon: <Globe className="w-6 h-6 text-purple-600 mr-3" />, label: "Location: Pakistan" }
              ].map((item, index) => (
                <div className="bg-white bg-opacity-70 p-4 rounded-2xl shadow-sm" key={index} data-aos="fade-up" data-aos-delay={300 + index * 100}>
                  <div className="flex items-center">
                    {item.icon}
                    <span className="text-gray-700"><span className="text-gray-500">{item.label.split(":")[0]}:</span> {item.label.split(":")[1]}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className="btn-modern inline-flex items-center text-lg"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;