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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest work, technical experiments, and creative solutions.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
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
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="flex items-center gap-1 bg-white/95 text-pink-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                    aria-label={`View source code of ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                {/* line-clamp-3 ensures uniform card heights even with long descriptions */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3" title={project.description}>
                  {project.description}
                </p>
                
                {/* Pushes the footer to the bottom */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-50 text-purple-700 border border-purple-100 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
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
          <div className="text-center py-20 text-gray-500">
            <p>No projects found in this category.</p>
          </div>
        )}
        
        {/* View More Button */}
        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
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
