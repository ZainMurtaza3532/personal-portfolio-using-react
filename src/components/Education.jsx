import React from 'react';
import { GraduationCap, Calendar, MapPin} from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Sciences",
      institution: "Government College University Faisalabad",
      location: "SKP, Pakistan",
      period: "2023 - 2025  Continues",
      description: "Pursuing a comprehensive degree in Computer Science with focus on software development and modern technologies.",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      degree: "Intermediate of Computer Sciences",
      institution: "Govt. College SKP",
      location: "SKP, Pakistan",
      period: "2021 - 2023",
      description: "Built strong foundation in programming concepts and computer science principles.",
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 3,
      degree: "Matric in Biology",
      institution: "Govt. High School SKP",
      location: "SKP, Pakistan",
      period: "2019 - 2021",
      description: "Completed secondary education with excellent academic performance.",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      degree: "Full Stack Web Developer",
      institution: "Power Devs",
      location: "SKP, Pakistan",
      period: "2025 - present",
      description: "Gaining practical experience in modern web development technologies and best practices.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and professional development path
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-600 to-blue-600 rounded-full"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`relative flex flex-col md:flex-row items-start md:items-center`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-duration="1000"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r ${edu.color} rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center`} data-aos="zoom-in" data-aos-delay={index * 200 + 100}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={index * 200 + 200}>
                  <div className="card-beautiful">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-purple-600 font-semibold">{edu.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mb-2">{edu.institution}</h4>
                    
                    <div className="flex items-center mb-4">
                      <MapPin className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-gray-500">{edu.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills gained from education */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">Skills & Knowledge Gained</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "C++", "Data Structures & Algorithms" , "Computer Networks", "Operating Systems", 
              "Database Management", "Software Engineering", "Frontend Development", 
              "OOP Concepts", "Programming Fundamentals", "Computer Architecture",
              "C", "HTML & CSS", "JavaScript", "React.js", "Node.js", "Git & GitHub", 
            ].map((skill, index) => (
              <div 
                key={index}
                className="card-beautiful text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                data-aos-duration="800"
              >
                <div className="text-purple-600 font-medium">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;