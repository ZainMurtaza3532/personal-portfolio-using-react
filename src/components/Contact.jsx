import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'zain@example.com',
      link: 'mailto:zain@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+92 123 4567890',
      link: 'tel:+921234567890'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Lahore, PK',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: 'GitHub',
      url: 'https://github.com',
      hoverClass: 'hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      hoverClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: 'Twitter',
      url: 'https://twitter.com',
      hoverClass: 'hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] hover:shadow-[0_0_15px_rgba(29,161,242,0.4)]'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] overflow-hidden relative selection:bg-[#9300ff]/30">
      
      {/* Subtle Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9300ff] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9300ff] to-pink-500">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#9300ff] to-pink-500 mx-auto rounded-full mb-6 shadow-[0_0_15px_rgba(147,0,255,0.5)]"></div>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div 
            className="bg-[#131313] backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/10" 
            data-aos="fade-right" 
            data-aos-duration="1200"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              Send me a message
              <Sparkles className="w-5 h-5 text-[#9300ff] ml-3" />
            </h3>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl flex items-start backdrop-blur-sm" data-aos="fade-down">
                <div className="bg-green-500/20 rounded-full p-1.5 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-sm mt-0.5">Thank you for your message! I'll get back to you as soon as possible.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name <span className="text-[#9300ff]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9300ff]/50 focus:border-[#9300ff] transition-all duration-300 placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email <span className="text-[#9300ff]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9300ff]/50 focus:border-[#9300ff] transition-all duration-300 placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject <span className="text-[#9300ff]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9300ff]/50 focus:border-[#9300ff] transition-all duration-300 placeholder-gray-600"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message <span className="text-[#9300ff]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 bg-[#1a1a1a] border border-white/10 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9300ff]/50 focus:border-[#9300ff] transition-all duration-300 placeholder-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center space-x-2 px-8 py-4 bg-[#9300ff] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(147,0,255,0.3)] hover:shadow-[0_0_30px_rgba(147,0,255,0.5)] hover:bg-[#a624ff] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none border border-[#9300ff]/50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-10 flex flex-col justify-center mt-10 lg:mt-0" data-aos="fade-left" data-aos-duration="1200">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Let's connect
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center p-5 bg-white/5 rounded-2xl shadow-sm border border-white/10 hover:border-[#9300ff]/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="w-14 h-14 bg-[#9300ff]/10 group-hover:bg-[#9300ff] rounded-xl flex items-center justify-center text-[#9300ff] group-hover:text-white transition-all duration-300 shadow-sm mr-5 border border-[#9300ff]/20 group-hover:shadow-[0_0_20px_rgba(147,0,255,0.5)]">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-500 text-xs tracking-wider uppercase mb-1">{info.title}</h4>
                    <p className="text-white font-bold text-lg group-hover:text-[#9300ff] transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Social Links & Availability */}
            <div className="pt-8 border-t border-white/10">
              <h4 className="text-lg font-semibold text-white mb-5">
                Follow me on social media
              </h4>
              <div className="flex flex-wrap gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 ${social.hoverClass} transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm`}
                    title={social.name}
                    aria-label={`Visit my ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              {/* Availability Badge */}
              <div className="inline-flex items-center p-1.5 pr-5 bg-green-500/10 border border-green-500/20 rounded-full backdrop-blur-sm">
                <span className="flex items-center justify-center w-8 h-8 bg-green-500/20 rounded-full mr-3">
                  <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                </span>
                <span className="text-green-400 font-medium text-sm">
                  Available for new projects
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
