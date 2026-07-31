import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'Cakery Website',
      description: 'We bake happiness, one slice at a time. From rich chocolate delights to creamy cheesecakes and custom celebration cakes, every creation is made with love, fresh ingredients, and a touch of artistry. Whether it’s a birthday, wedding, or just a sweet craving, our cakes are designed to make your moments unforgettable.',
      image: '/images/cake.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'javascript',
      featured: true
    },
    {
      title: 'Netflix Clone',
      description: 'Netflix clone with responsive design and movie browsing interface.',
      image: '/images/Netflix.webp',
      technologies: ['HTML', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'html-css',
      featured: true
    },
    {
      title: 'Google Finance Clone',
      description: 'Financial dashboard displaying stock market data, news, and interactive charts.',
      image: '/images/images (1).jpg',
      technologies: ['HTML', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'html-css',
      featured: false
    },
    {
      title: 'Mediplus Website',
      description: 'At Mediplus, we believe health comes first. Our mission is to provide trusted medical care, innovative solutions, and compassionate support for every patient. With advanced technology and a team of dedicated professionals, we are committed to making healthcare accessible, reliable, and caring.',
      image: '/images/preview.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'javascript',
      featured: false
    },
    {
      title: 'TIC TAC TOE',
      description: 'Interactive two-player game with win detection and restart functionality.',
      image: '/images/TIC TAC TOE.jpg',
      technologies: ['React', 'CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'react',
      featured: false
    },
    {
      title: 'Country Explorer',
      description: 'Web application displaying country information including flags, capitals, and populations.',
      image: '/images/images.jpg',
      technologies: ['React', 'Tailwind CSS', 'React-router'],
      liveUrl: 'https://react-country-project-nine.vercel.app/',
      githubUrl: 'https://github.com/ZainMurtaza3532/React-Country-Project',
      category: 'react',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'html-css', label: 'HTML & CSS' },
    { id: 'javascript', label: 'JavaScript' },
    { id: 'react', label: 'React' },
  ];

  // Derived state: calculate this on the fly instead of using useEffect
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden selection:bg-[#9300ff]/30">
      
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#9300ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9300ff] to-pink-500">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9300ff] to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(147,0,255,0.5)]"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Showcasing my latest work, technical experiments, and creative solutions.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none backdrop-blur-md ${
                activeFilter === filter.id
                  ? 'bg-[#9300ff] text-white shadow-[0_0_20px_rgba(147,0,255,0.4)] border border-[#9300ff]'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-[#9300ff]/50 hover:text-white'
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col bg-[#131313] backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/10 hover:border-[#9300ff]/50 hover:shadow-[0_10px_40px_rgba(147,0,255,0.15)] transition-all duration-500 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-1.5 bg-[#9300ff]/20 border border-[#9300ff]/50 text-[#d48aff] text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(147,0,255,0.3)] backdrop-blur-md tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#9300ff] hover:border-transparent transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,0,255,0.5)]"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#9300ff] hover:border-transparent transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,0,255,0.5)]"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#9300ff] transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* line-clamp-3 ensures uniform card heights */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 font-light" title={project.description}>
                  {project.description}
                </p>
                
                {/* Pushes the footer to the bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-lg backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-5 border-t border-white/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-semibold text-[#9300ff] hover:text-[#b545ff] transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#131313] border border-white/10 rounded-3xl backdrop-blur-md">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
        
        {/* View More Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold hover:bg-[#9300ff] hover:border-[#9300ff] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(147,0,255,0.4)] backdrop-blur-sm hover:-translate-y-1"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
