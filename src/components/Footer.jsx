import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ArrowUp, 
  Phone, 
  MapPin, 
  ChevronRight 
} from 'lucide-react';
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
      link: "https://github.com/ZainMurtaza3532",
      hoverClass: "hover:bg-gray-700 hover:border-gray-600"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      link: "https://www.linkedin.com/in/zain-murtaza-ghulam-murtaza-185a67304/",
      hoverClass: "hover:bg-[#0A66C2] hover:border-[#0A66C2]"
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      link: "#",
      hoverClass: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      link: "mailto:zain@example.com",
      hoverClass: "hover:bg-[#EA4335] hover:border-[#EA4335]"
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
  
  // Split footer links into two columns
  const firstColumnLinks = footerLinks.slice(0, 4);
  const secondColumnLinks = footerLinks.slice(4);

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          
          {/* Brand & Description */}
          <div className="md:col-span-2" data-aos="fade-right" data-aos-duration="1000">
            <a href="#home" className="inline-flex items-center mb-6 group focus:outline-none" data-aos="fade-down" data-aos-delay="100">
              <img
                src={logo}
                alt="Zain Logo"
                className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 ml-3 tracking-wide">
                ZAIN
              </span>
            </a>
            
            <p className="text-gray-400 mb-8 max-w-md text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Passionate web developer creating beautiful, responsive web experiences with modern technologies. Building the digital future, one line of code at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="300">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-300 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${social.hoverClass}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-sm font-bold mb-6 text-gray-200 uppercase tracking-widest">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
              <ul className="space-y-3">
                {firstColumnLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:text-purple-400"
                    >
                      <ChevronRight className="w-4 h-4 mr-1.5 text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {secondColumnLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 focus:outline-none focus:text-purple-400"
                    >
                      <ChevronRight className="w-4 h-4 mr-1.5 text-gray-600 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-1" data-aos="fade-left" data-aos-delay="500">
            <h3 className="text-sm font-bold mb-6 text-gray-200 uppercase tracking-widest">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <a href="mailto:zain@example.com" className="group flex items-start focus:outline-none">
                  <div className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-purple-900/40 group-hover:border-purple-500/50 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-gray-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      zain@example.com
                    </span>
                  </div>
                </a>
              </li>
              
              <li>
                <a href="tel:+921234567890" className="group flex items-start focus:outline-none">
                  <div className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-purple-900/40 group-hover:border-purple-500/50 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <div className="flex flex-col pt-2">
                    <span className="text-gray-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      +92 123 4567890
                    </span>
                  </div>
                </a>
              </li>
              
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gray-800/80 border border-gray-700 flex items-center justify-center flex-shrink-0 mr-4">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div className="flex flex-col pt-2">
                  <span className="text-gray-400 text-sm font-medium">
                    Lahore, PK
                  </span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Footer Bottom / Copyright */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left" data-aos="fade-right">
            &copy; {new Date().getFullYear()} Zain Murtaza. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center space-x-2 bg-gray-800/40 hover:bg-gray-800 px-5 py-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            data-aos="fade-left"
          >
            <span className="text-sm font-semibold tracking-wide">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
