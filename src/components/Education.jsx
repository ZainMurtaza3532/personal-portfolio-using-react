import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Sciences",
      institution: "Government College University Faisalabad",
      location: "SKP, Pakistan",
      period: "2023 - Present",
      description: "Pursuing a comprehensive degree in Computer Science with a focus on software development, algorithms, and modern technologies.",
      color: "from-[#9300ff] to-[#b545ff]",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      degree: "Full Stack Web Developer",
      institution: "Power Devs",
      location: "SKP, Pakistan",
      period: "2025 - Present",
      description: "Gaining practical industry experience in modern web development frameworks, API design, and best coding practices.",
      color: "from-blue-500 to-cyan-400",
      icon: <Award className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      degree: "Intermediate of Computer Sciences",
      institution: "Govt. College SKP",
      location: "SKP, Pakistan",
      period: "2021 - 2023",
      description: "Built a strong foundation in programming concepts, object-oriented design, and core computer science principles.",
      color: "from-[#9300ff] to-pink-500",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      degree: "Matric in Biology",
      institution: "Govt. High School SKP",
      location: "SKP, Pakistan",
      period: "2019 - 2021",
      description: "Completed secondary education with excellent academic performance and analytical skills.",
      color: "from-gray-600 to-gray-400",
      icon: <GraduationCap className="w-5 h-5 text-white" />
    }
  ];

  const knowledgeSkills = [
    "C++", "Data Structures & Algorithms", "Computer Networks", "Operating Systems", 
    "Database Management", "Software Engineering", "Frontend Development", 
    "OOP Concepts", "Programming Fundamentals", "Computer Architecture",
    "C", "HTML & CSS", "JavaScript", "React.js", "Node.js", "Git & GitHub"
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden selection:bg-[#9300ff]/30">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#9300ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9300ff] to-pink-500">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9300ff] to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(147,0,255,0.5)]"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            My academic journey and professional development path.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative mb-24">
          {/* Center Timeline Line */}
          <div className="absolute left-[1.35rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#9300ff] via-pink-500/50 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-16">
            {educationData.map((edu, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={edu.id} 
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  data-aos-duration="1000"
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-0 md:left-1/2 mt-6 md:mt-0 w-12 h-12 rounded-full border-4 border-[#0a0a0a] shadow-[0_0_20px_rgba(147,0,255,0.4)] flex items-center justify-center transform md:-translate-x-1/2 z-10 bg-gradient-to-r ${edu.color}`} 
                    data-aos="zoom-in" 
                    data-aos-delay={index * 150 + 100}
                  >
                    {edu.icon}
                  </div>
                  
                  {/* Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}>
                    <div 
                      className="group bg-[#131313] backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 hover:border-[#9300ff]/50 hover:shadow-[0_10px_40px_rgba(147,0,255,0.15)] transition-all duration-500 hover:-translate-y-1"
                      data-aos={isEven ? "fade-right" : "fade-left"} 
                      data-aos-delay={index * 150 + 200}
                    >
                      {/* Date */}
                      <div className={`flex items-center mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center px-4 py-1.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-semibold tracking-wide ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <Calendar className={`w-3.5 h-3.5 text-[#9300ff] ${isEven ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#9300ff] transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 mb-4">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base font-light">
                        {edu.description}
                      </p>

                      {/* Location */}
                      <div className={`flex items-center text-sm text-gray-500 font-medium ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <MapPin className={`w-4 h-4 text-pink-500 ${isEven ? 'md:ml-1.5 mr-1.5 md:mr-0' : 'mr-1.5'}`} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Skills & Knowledge Tags */}
        <div className="mt-28">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Academic & Technical Arsenal</h3>
            <p className="text-gray-400 font-light">Core concepts and technologies mastered along the way</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {knowledgeSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-5 py-2.5 bg-white/5 text-gray-300 font-medium rounded-xl border border-white/10 hover:border-[#9300ff]/50 hover:bg-[#9300ff]/10 hover:text-white hover:shadow-[0_0_20px_rgba(147,0,255,0.2)] transition-all duration-300 hover:-translate-y-1 cursor-default text-sm md:text-base backdrop-blur-sm"
                data-aos="zoom-in"
                data-aos-delay={(index % 10) * 50}
                data-aos-duration="600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Education;
