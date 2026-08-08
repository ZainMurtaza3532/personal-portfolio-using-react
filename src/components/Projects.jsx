import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Fullstack SaaS Dashboard',
      description: 'A modern analytics dashboard built with Next.js, Prisma, and PostgreSQL featuring authentication, charts, and real-time updates.',
      image: '/images/preview.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZainMurtaza3532'
    },
    {
      title: 'AI Content Generator',
      description: 'Generate blog posts and marketing copy using OpenAI API, Next.js, and a clean UI system.',
      image: '/images/abc.png',
      technologies: ['Next.js', 'OpenAI', 'Tailwind'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZainMurtaza3532'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio showcasing projects, skills, and contact features with smooth animations and modern design.',
      image: '/images/majid-003.webp',
      technologies: ['React', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZainMurtaza3532'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A fullstack real-time chat app with authentication, direct messaging, and live updates using WebSockets and a robust backend architecture.',
      image: '/images/Netflix.webp',
      technologies: ['React', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ZainMurtaza3532'
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[#00D49F] text-sm font-medium mb-4">
            Projects
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Some of my recent <span className="text-[#00D49F]">work</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A selection of projects showcasing my ability to design, build, and scale modern fullstack applications.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-[#121C22] rounded-3xl overflow-hidden border border-white/5 hover:border-[#00D49F]/30 transition-all duration-300 flex flex-col p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-64 rounded-2xl overflow-hidden bg-[#1A262E] mb-6 border border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#00D49F]/10 text-[#00D49F] text-xs font-semibold rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-1.5 text-sm font-medium text-white hover:text-[#00D49F] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Github</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
