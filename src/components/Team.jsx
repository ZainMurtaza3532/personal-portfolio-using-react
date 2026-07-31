import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Waqas Asghar",
      role: "Project Manager",
      bio: "Experienced in leading teams and delivering projects successfully.",
      image: "/images/waqas.webp",
    },
    {
      id: 2,
      name: "Muhammad Usman",
      role: "Assistant SEO Manager",
      bio: "Skilled in optimizing search visibility and driving organic growth.",
      image: "/images/usman.webp",
    },
    {
      id: 3,
      name: "Zohaib Sarwar",
      role: "Web Developer & SEO Assistant",
      bio: "Passionate about building websites and improving online visibility.",
      image: "/images/Zohaib-Sarwar.webp",
    },
    {
      id: 4,
      name: "Muhammad Arslan",
      role: "Web Developer & Designer",
      bio: "Crafting responsive websites with creative design.",
      image: "/images/arslan-transparent-power.webp",
    },
    {
      id: 5,
      name: "Majid Ali",
      role: "Full Stack Developer",
      bio: "Building end-to-end web solutions with modern technologies.",
      image: "/images/majid-003.webp",
    },
    {
      id: 6,
      name: "Muhammad Rizwan",
      role: "SEO Specialist",
      bio: "Helping businesses grow through search optimization and digital visibility.",
      image: "/images/rizwam-4.webp",
    },
    {
      id: 7,
      name: "Muhammad Umar",
      role: "Web Developer & SEO Support",
      bio: "Creating functional websites and boosting online presence.",
      image: "/images/Muhammad-Umar.webp",
    }
  ];

  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id, e) => {
    e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-gray-900">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Creative Team</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600">
            Meet the passionate individuals who bring innovation, expertise, and creativity to every project.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id}
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-purple-200 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={member.id * 100}
              data-aos-duration="1000"
            >
              {/* Card top with image */}
              <div className="relative h-64 overflow-hidden bg-gray-50" data-aos="zoom-in" data-aos-delay={member.id * 100 + 100}>
                
                {/* Loading Spinner */}
                {!loadedImages[member.id] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Member Image */}
                <img 
                  src={member.image} 
                  alt={`Profile of ${member.name}`}
                  className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[member.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(member.id)}
                  onError={(e) => handleImageError(member.id, e)}
                  loading="lazy"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Card content */}
              <div className="p-6 flex flex-col flex-grow" data-aos="fade-up" data-aos-delay={member.id * 100 + 200}>
                
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {member.name}
                  </h3>
                  {/* Availability Dot */}
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)] flex-shrink-0" title="Available"></div>
                </div>
                
                <p className="text-purple-600 font-semibold text-sm mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5" /> 
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                  {member.bio}
                </p>
                
                {/* Footer Action */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Available</span>
                  <button className="text-sm font-semibold text-purple-600 group-hover:text-purple-800 transition-colors flex items-center focus:outline-none">
                    View Profile
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="800">
          <button className="group px-8 py-4 bg-gray-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
            <span>Join Our Team</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* 
        Standard CSS block for blob animations. 
        Removed `jsx global` to ensure compatibility across all React setups.
      */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Team;
