import React from 'react';
import { FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostman,
  SiVercel,
} from 'react-icons/si';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 90, icon: SiNextdotjs },
      { name: 'TypeScript', level: 85, icon: SiTypescript },
      { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, icon: FaNodeJs },
      { name: 'Express.js', level: 80, icon: SiExpress },
      { name: 'SQL & NoSQL', level: 80, icon: FaDatabase },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: FaGithub },
      { name: 'Postman', level: 85, icon: SiPostman },
      { name: 'Vercel', level: 88, icon: SiVercel },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive breakdown of the technologies, frameworks, and tools I use on a daily basis to build and deploy applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#121C22] rounded-[2rem] p-8 border border-white/5 hover:border-white/10 transition-colors shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl font-bold text-white mb-8 pb-4 border-b border-white/5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00D49F]"></span>
                {category.title}
              </h3>
              
              <div className="space-y-7">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div key={i} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-[#0B1115] rounded-xl border border-white/5 group-hover:border-[#00D49F]/30 group-hover:bg-[#00D49F]/5 transition-all">
                            <Icon className="w-5 h-5 text-gray-300 group-hover:text-[#00D49F] transition-colors" />
                          </div>
                          <span className="text-gray-200 font-medium text-sm group-hover:text-white transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-[#00D49F] font-bold text-sm tracking-wider">{skill.level}%</span>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="w-full bg-[#0B1115] rounded-full h-2.5 overflow-hidden border border-white/5 shadow-inner">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00b386] to-[#00D49F] relative"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Shimmer effect inside the bar */}
                          <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 rounded-full blur-[2px]"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
