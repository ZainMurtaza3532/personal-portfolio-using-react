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
      color: "from-purple-500 to-pink-500",
      icon: <GraduationCap className="w-6 h-6 text-white" />
    },
    {
      id: 4,
      degree: "Full Stack Web Developer",
      institution: "Power Devs",
      location: "SKP, Pakistan",
      period: "2025 - Present",
      description: "Gaining practical industry experience in modern web development frameworks, API design, and best coding practices.",
      color: "from-blue-500 to-cyan-500",
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      id: 2,
      degree: "Intermediate of Computer Sciences",
      institution: "Govt. College SKP",
      location: "SKP, Pakistan",
      period: "2021 - 2023",
      description: "Built a strong foundation in programming concepts, object-oriented design, and core computer science principles.",
      color: "from-indigo-500 to-purple-500",
      icon: <GraduationCap className="w-6 h-6 text-white" />
    },
    {
      id: 3,
      degree: "Matric in Biology",
      institution: "Govt. High School SKP",
      location: "SKP, Pakistan",
      period: "2019 - 2021",
      description: "Completed secondary education with excellent academic performance and analytical skills.",
      color: "from-slate-600 to-slate-800",
      icon: <GraduationCap className="w-6 h-6 text-white" />
    }
  ];

  const knowledgeSkills = [
    "C++", "Data Structures & Algorithms", "Computer Networks", "Operating Systems", 
    "Database Management", "Software Engineering", "Frontend Development", 
    "OOP Concepts", "Programming Fundamentals", "Computer Architecture",
    "C", "HTML & CSS", "JavaScript", "React.js", "Node.js", "Git & GitHub"
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic journey and professional development path.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative mb-24">
          {/* Center Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-pink-200 to-blue-200 rounded-full transform md:-translate-x-1/2"></div>
          
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
                    className={`absolute left-0 md:left-1/2 mt-5 md:mt-0 w-12 h-12 rounded-full border-4 border-white shadow-xl flex items-center justify-center transform md:-translate-x-1/2 z-10 bg-gradient-to-r ${edu.color}`} 
                    data-aos="zoom-in" 
                    data-aos-delay={index * 150 + 100}
                  >
                    {edu.icon}
                  </div>
                  
                  {/* Content Wrapper */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}>
                    <div 
                      className="group bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:-translate-y-1"
                      data-aos={isEven ? "fade-right" : "fade-left"} 
                      data-aos-delay={index * 150 + 200}
                    >
                      {/* Date */}
                      <div className={`flex items-center mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <Calendar className={`w-4 h-4 ${isEven ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {edu.degree}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-gray-700 mb-3">
                        {edu.institution}
                      </h4>
                      
                      <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                        {edu.description}
                      </p>

                      {/* Location */}
                      <div className={`flex items-center text-sm text-gray-500 font-medium ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className={`flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <MapPin className={`w-4 h-4 ${isEven ? 'md:ml-1 mr-1 md:mr-0' : 'mr-1'}`} />
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
        <div className="mt-24">
          <div className="text-center mb-10" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Academic & Technical Arsenal</h3>
            <p className="text-gray-600">Core concepts and technologies mastered along the way</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {knowledgeSkills.map((skill, index) => (
              <span 
                key={index}
                className="px-5 py-2.5 bg-white text-gray-700 font-medium rounded-full shadow-sm border border-gray-100 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default text-sm md:text-base"
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
