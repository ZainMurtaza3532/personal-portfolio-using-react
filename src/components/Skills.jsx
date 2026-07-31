import React, { useEffect, useState, useRef } from 'react';
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
  const sectionRef = useRef(null);
  
  useEffect(() => {
    // Using IntersectionObserver for significantly better performance than onScroll
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setAnimated(true);
          // Optional: unobserve once animated if you only want it to happen once
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', level: 98, icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
        { name: 'JavaScript', level: 80, icon: <FaJs className="text-yellow-500 w-6 h-6" /> },
        { name: 'Tailwind CSS', level: 95, icon: <FaCss3Alt className="text-blue-400 w-6 h-6" /> },
        { name: 'React', level: 85, icon: <FaReact className="text-blue-500 w-6 h-6" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
        { name: 'Express.js', level: 80, icon: <FaNodeJs className="text-gray-400 w-6 h-6" /> },
        { name: 'MongoDB', level: 85, icon: <FaDatabase className="text-green-600 w-6 h-6" /> },
        { name: 'MySQL', level: 50, icon: <GrMysql className="text-blue-400 w-6 h-6" /> },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 75, icon: <FaGitAlt className="text-orange-500 w-6 h-6" /> },
        { name: 'GitHub', level: 95, icon: <FaGithub className="text-white w-6 h-6" /> },
        { name: 'Vercel', level: 85, icon: <SiVercel className="text-white w-5 h-5" /> },
        { name: 'VS Code', level: 97, icon: <BiLogoVisualStudio className="text-blue-500 w-6 h-6" /> },
      ],
    },
  ];
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden selection:bg-[#9300ff]/30"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#9300ff] rounded-full mix-blend-screen filter blur-[128px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[128px] opacity-[0.15] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9300ff] to-pink-500">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9300ff] to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(147,0,255,0.5)]"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Technologies I specialize in and continuously work with to build modern applications.
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-[#131313] backdrop-blur-md rounded-[2rem] p-8 shadow-2xl border border-white/10 hover:border-[#9300ff]/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(147,0,255,0.15)] transition-all duration-500 group/card"
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 150}
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center">
                {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group"
                    data-aos="fade-right" 
                    data-aos-delay={categoryIndex * 150 + skillIndex * 100 + 200}
                  >
                    {/* Skill Info */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-white/5 rounded-xl group-hover:scale-110 group-hover:bg-[#9300ff]/20 transition-all duration-300 shadow-sm border border-white/10 group-hover:border-[#9300ff]/50">
                          {skill.icon}
                        </div>
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9300ff] to-pink-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="w-full bg-black/50 rounded-full h-3 shadow-inner overflow-hidden relative border border-white/5">
                      {/* Animated Progress Bar Fill */}
                      <div
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        className="bg-gradient-to-r from-[#9300ff] to-pink-500 h-full rounded-full relative"
                        style={{ 
                          width: animated ? `${skill.level}%` : '0%',
                          transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${skillIndex * 0.15 + categoryIndex * 0.2}s`,
                          boxShadow: animated ? '0 0 10px rgba(147,0,255,0.4)' : 'none'
                        }}
                      >
                        {/* Shimmer/Glow effect at the tip of the progress bar */}
                        <div className="absolute top-0 right-0 bottom-0 w-6 bg-white/40 blur-[3px] rounded-full"></div>
                      </div>
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
