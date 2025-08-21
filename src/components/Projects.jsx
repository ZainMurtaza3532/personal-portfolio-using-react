import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'cakery website',
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
      title: 'Mediplus website',
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

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              data-aos="zoom-in"
              data-aos-delay={filters.indexOf(filter) * 100}
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
              className="card-beautiful group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="relative overflow-hidden rounded-t-2xl" data-aos="zoom-in" data-aos-delay={index * 150 + 100}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                    aria-label="View live project"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150 + 200}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
                    aria-label="View source code"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150 + 300}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6" data-aos="fade-up" data-aos-delay={index * 150 + 400}>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 text-xs rounded-full"
                      data-aos="zoom-in"
                      data-aos-delay={index * 150 + 500 + techIndex * 50}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors text-sm"
                    data-aos="fade-right"
                    data-aos-delay={index * 150 + 600}
                  >
                    <Eye className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors text-sm"
                    data-aos="fade-left"
                    data-aos-delay={index * 150 + 700}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="800">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modern inline-flex items-center space-x-2"
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