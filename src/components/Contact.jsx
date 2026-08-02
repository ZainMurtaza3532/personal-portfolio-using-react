import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[#00D49F] text-sm font-medium mb-4">
            Contact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's build <span className="text-[#00D49F]">something great</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Have a project in mind? I'd love to hear about it. Let's connect.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Form */}
          <div className="lg:col-span-3" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#121C22] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F] transition-all placeholder-gray-500 text-sm"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-[#121C22] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F] transition-all placeholder-gray-500 text-sm"
                  placeholder="Your Email"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-4 bg-[#121C22] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F] transition-all placeholder-gray-500 resize-none text-sm"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-[#00D49F] text-[#0B1115] font-bold rounded-full hover:bg-[#00F0B5] transition-all flex items-center justify-center gap-2 text-sm"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          {/* Info Sidebar */}
          <div className="lg:col-span-2 lg:pl-10 flex flex-col justify-center" data-aos="fade-left">
            <h3 className="text-xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121C22] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Email</p>
                  <a href="mailto:zain@example.com" className="text-white hover:text-[#00D49F] transition-colors text-sm">
                    zain@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121C22] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Phone</p>
                  <a href="tel:+921234567890" className="text-white hover:text-[#00D49F] transition-colors text-sm">
                    +92 123 4567890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121C22] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">Location</p>
                  <p className="text-white text-sm">Sheikhupura, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
