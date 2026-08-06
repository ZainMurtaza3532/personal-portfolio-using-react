import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B1115] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-[#00D49F] text-xs font-bold tracking-widest uppercase mb-6 bg-white/5">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's build something great
          </h2>
          <p className="text-gray-400 font-normal text-base md:text-lg max-w-2xl">
            Have a project in mind or just want to say hello? I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-3 bg-[#11181C] border border-white/5 rounded-[24px] p-6 sm:p-8" data-aos="fade-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#0B1115] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F]/50 transition-all placeholder-gray-600 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#0B1115] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F]/50 transition-all placeholder-gray-600 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-[#0B1115] border border-white/5 text-white rounded-xl focus:outline-none focus:border-[#00D49F]/50 transition-all placeholder-gray-600 resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 mt-2 bg-[#00D49F] text-[#0B1115] font-bold rounded-xl hover:bg-[#00F0B5] transition-colors flex items-center justify-center gap-2 text-base"
              >
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info Cards & Socials */}
          <div className="lg:col-span-2 flex flex-col gap-4" data-aos="fade-left">
            
            {/* Email Card */}
            <div className="bg-[#11181C] border border-white/5 rounded-2xl p-5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#0B1115] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:zain@example.com" className="text-white font-medium hover:text-[#00D49F] transition-colors text-base">
                  zain@example.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#11181C] border border-white/5 rounded-2xl p-5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#0B1115] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:+921234567890" className="text-white font-medium hover:text-[#00D49F] transition-colors text-base">
                  +92 123 4567890
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#11181C] border border-white/5 rounded-2xl p-5 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#0B1115] border border-white/5 flex items-center justify-center text-[#00D49F] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-medium text-base mb-0.5">Sheikhupura, Pakistan</p>
                <p className="text-gray-500 text-sm">Available for remote work</p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="grid grid-cols-3 gap-4 mt-auto pt-2">
              <a href="#" className="bg-[#11181C] border border-white/5 rounded-2xl p-4 flex items-center justify-center text-gray-400 hover:text-[#00D49F] hover:border-[#00D49F]/30 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="bg-[#11181C] border border-white/5 rounded-2xl p-4 flex items-center justify-center text-gray-400 hover:text-[#00D49F] hover:border-[#00D49F]/30 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="bg-[#11181C] border border-white/5 rounded-2xl p-4 flex items-center justify-center text-gray-400 hover:text-[#00D49F] hover:border-[#00D49F]/30 transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
