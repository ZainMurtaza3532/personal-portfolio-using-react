import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "Power Devs",
      location: "SKP, Pakistan",
      period: "2025 - Present",
      description: "Gaining practical industry experience in modern web development frameworks, API design, and best coding practices. Building scalable fullstack applications.",
    },
    {
      id: 2,
      role: "Bachelor of Computer Sciences",
      company: "Government College University",
      location: "Faisalabad, Pakistan",
      period: "2023 - Present",
      description: "Pursuing a comprehensive degree in Computer Science with a focus on software development, algorithms, and modern technologies.",
    },
    {
      id: 3,
      role: "Intermediate of Computer Sciences",
      company: "Govt. College SKP",
      location: "SKP, Pakistan",
      period: "2021 - 2023",
      description: "Built a strong foundation in programming concepts, object-oriented design, and core computer science principles.",
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[#00D49F] text-sm font-medium mb-4">
            Experience
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Experience that <span className="text-[#00D49F]">speaks volume</span>
          </h2>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            A timeline of my growth as a developer, from learning the fundamentals to building fullstack applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-l-0">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[1.35rem] md:left-1/2 mt-6 md:mt-0 w-10 h-10 rounded-full border-4 border-[#0B1115] bg-[#121C22] flex items-center justify-center transform md:-translate-x-1/2 z-10">
                    <div className="w-3 h-3 bg-[#00D49F] rounded-full shadow-[0_0_10px_#00D49F]"></div>
                  </div>
                  
                  {/* Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}>
                    <div className="bg-[#121C22] rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-[#00D49F]/30 transition-all duration-300">
                      
                      <div className={`flex items-center mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center text-[#00D49F] text-xs font-bold uppercase tracking-wider ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <Calendar className={`w-3.5 h-3.5 ${isEven ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} />
                          <span>{item.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {role}
                      </h3>
                      
                      <h4 className="text-lg font-medium text-gray-400 mb-4 flex items-center gap-2 justify-start md:justify-start">
                        <Briefcase className="w-4 h-4" />
                        {item.company}
                      </h4>
                      
                      <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>

                      <div className={`flex items-center text-sm text-gray-500 font-medium ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <MapPin className="w-4 h-4 mr-1.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
