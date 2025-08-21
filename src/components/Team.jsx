import React, { useState } from 'react';

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
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id, e) => {
    e.target.src = "https://via.placeholder.com/150?text=Image+Not+Available";
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Our Creative Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700">
            Meet the passionate individuals who bring innovation and creativity to every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
              data-aos="fade-up"
              data-aos-delay={member.id * 100}
              data-aos-duration="1000"
            >
              {/* Card top with image */}
              <div className="relative h-64 overflow-hidden" data-aos="zoom-in" data-aos-delay={member.id * 100 + 100}>
                {!loadedImages[member.id] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                    <div className="w-18 h-18 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`w-108 h-108  object-cover transition-transform duration-700 ${loadedImages[member.id] ? 'opacity-100' : 'opacity-0'} ${hoveredMember === member.id ? 'scale-110' : 'scale-100'}`}
                  onLoad={() => handleImageLoad(member.id)}
                  onError={(e) => handleImageError(member.id, e)}
                  loading="lazy"
                />
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0  transition-opacity duration-300`}></div>
              </div>
              
              {/* Card content */}
              <div className="p-6" data-aos="fade-up" data-aos-delay={member.id * 100 + 200}>
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="ml-auto w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                
                <p className="text-purple-600 font-medium mb-3 flex items-center">
                  <span className="mr-2">✦</span> {member.role}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {member.bio}
                </p>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">Available for projects</span>
                  <button className="text-xs font-medium text-purple-600 hover:text-purple-800 transition-colors flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="800">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center mx-auto">
            Join Our Team
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Team;