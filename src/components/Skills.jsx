import React, { useEffect, useState } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaGithub,
} from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";
import { BiLogoVisualStudio } from "react-icons/bi";

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const position = skillsSection.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimated(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'JavaScript', level: 80, icon: <FaJs className="text-yellow-500" /> },
        { name: 'Tailwind CSS', level: 95, icon: <FaCss3Alt className="text-blue-400" /> },
        { name: 'React', level: 85, icon: <FaReact className="text-blue-500" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Express.js', level: 80, icon: <FaNodeJs className="text-gray-600" /> },
        { name: 'MongoDB', level: 85, icon: <FaDatabase className="text-green-500" /> },
        { name:  'MySQL', level: 50, icon: <GrMysql className="text-gray-600" /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 75, icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', level: 95, icon: <FaGithub className="text-gray-800" /> },
        { name: 'Vercel', level: 85, icon: <SiVercel className="text-gray-900" /> },
        { name: 'VisualStudio Code', level: 97, icon: <BiLogoVisualStudio className="text-blue-500" /> },
      ],
    },
  ];
  
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-28 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies I specialize in and continuously work with
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card-beautiful"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 200}
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-down" data-aos-delay={categoryIndex * 200 + 100}>
                {category.title}
              </h3>
              <div className="space-y-7">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} data-aos="fade-right" data-aos-delay={categoryIndex * 200 + skillIndex * 100 + 200}>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        {skill.icon}
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3.5">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3.5 rounded-full"
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          transition: `width 1.2s ease ${skillIndex * 0.1 + categoryIndex * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
