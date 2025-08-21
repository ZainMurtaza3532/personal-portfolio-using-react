import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import logo from '/public/images/abc.png'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      link: "https://github.com/ZainMurtaza3532"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      link: "#"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      link: "#"
    }
  ];
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];
  
  // Split footer links into two columns (4 in first, 3 in second)
  const firstColumnLinks = footerLinks.slice(0, 4);
  const secondColumnLinks = footerLinks.slice(4);

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="md:col-span-2" data-aos="fade-right" data-aos-duration="1000">
            <div className="flex items-center mb-6" data-aos="fade-down" data-aos-delay="100">
              <img
                src={logo}
                alt="Zain Logo"
                className="w-16 h-17 object-contain"
              />
              <span className="text-3xl font-bold text-gradient ml-3">ZAIN</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg" data-aos="fade-up" data-aos-delay="200">
              Passionate web developer creating beautiful, responsive web experiences with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-5" data-aos="fade-up" data-aos-delay="300">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 100}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links - Two Columns */}
          <div className="md:col-span-1" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-6">
              {/* First Column */}
              <div>
                <ul className="space-y-4">
                  {firstColumnLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center text-lg"
                        data-aos="fade-right"
                        data-aos-delay={300 + index * 50}
                      >
                        <span className="mr-2 text-purple-400">›</span> {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Second Column */}
              <div>
                <ul className="space-y-4">
                  {secondColumnLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center text-lg"
                        data-aos="fade-right"
                        data-aos-delay={500 + index * 50}
                      >
                        <span className="mr-2 text-purple-400">›</span> {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1" data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="500">
                <Mail className="w-6 h-6 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-lg">zain@example.com</span>
              </li>
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="600">
                <svg className="w-6 h-6 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300 text-lg">+92 123 4567890</span>
              </li>
              <li className="flex items-start" data-aos="fade-up" data-aos-delay="700">
                <svg className="w-6 h-6 text-purple-400 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-lg">Lahore, PK</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Back to Top */}
        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg mb-6 md:mb-0" data-aos="fade-up">
            &copy; {new Date().getFullYear()} Zain. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="mr-2">Back to Top</span>
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;