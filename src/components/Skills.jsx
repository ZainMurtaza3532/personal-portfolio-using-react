import React, { useEffect, useState, useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaPostman } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiVisualstudio } from 'react-icons/si';

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const categories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React / Next.js', level: 90, icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="w-4 h-4 text-white" /> },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="w-5 h-5 text-white" /> },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs className="w-5 h-5 text-white" /> },
        { name: 'Express.Js', level: 80, icon: <FaExpress className="w-5 h-5 text-white" /> },
        { name: 'SQL & NoSQL', level: 80, icon: <FaDatabase className="w-4 h-4 text-white" /> },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: <FaGithub className="w-5 h-5 text-white" /> },
        { name: 'Visual Studio', level: 90, icon: <SiVisualstudio className="w-5 h-5 text-white" /> }, // Replaced FaGithub
        { name: 'Postman', level: 90, icon: <FaPostman className="w-5 h-5 text-white" /> },
      ],
    },
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-[#121C22] rounded-[2rem] p-8 border border-white/5" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-white/5">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/5 rounded-lg border border-white/5">{skill.icon}</div>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-[#00D49F] font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#0B1115] rounded-full h-2 overflow-hidden border border-white/5">
                      <div className="bg-[#00D49F] h-full rounded-full" style={{ width: animated ? `${skill.level}%` : '0%', transition: 'width 1s ease-out' }}></div>
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
