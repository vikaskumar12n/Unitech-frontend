 


import { useState } from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
     <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">Have questions or need assistance? Reach out to us anytime</p>
        </div>
        
        {/* Menu Toggle */}
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">Contact Us</h2>
           
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">                 
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-100 h-100  bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

         <nav className="text-gray-600 text-sm my-4">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline font-bold ms-10">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-500 font-bold">Contact Us</li>   
                </ol>
            </nav>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxZTI5N2IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get <span className="text-color">In</span> Touch</h2>
          <p className="text-black max-w-2xl mx-auto">Have questions or want to work together? We&apos;d love to hear from you!</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:flex lg:h-[800px]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br bg-color p-8 sm:p-12 flex flex-col justify-between text-white">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
                Let&apos;s Talk!
              </h2>
              <p className="text-blue-100 mb-12 max-w-md">
                Tell us about your dream project, we will make it come true.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-blue-100">+91-8707438955, +91-7275712348</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-blue-100">contact@codeCrafter.com</p>
                    <p className="text-blue-100">info@codeCrafter.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-blue-100">123 Business Avenue, Suite 100, Tech City</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaFacebookF />, color: "hover:bg-blue-800" },
                    { icon: <FaTwitter />, color: "hover:bg-blue-400" },
                    { icon: <FaInstagram />, color: "hover:bg-pink-500" },
                    { icon: <FaLinkedinIn />, color: "hover:bg-blue-700" },
                    { icon: <FaWhatsapp />, color: "hover:bg-green-500" }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className={`w-12 h-12 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg border-4 border-white/20">
              <iframe
                title="Google Map"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0653415796814!2d81.00946497478363!3d26.83787396330395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd35011967e7%3A0xc4a2515047590d2a!2sCode%20Crafter%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1756195429983!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
          
          {/* Right Section: Form */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">Fill out the form and we&apos;ll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890"
                      className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your project..."
                    rows="5"
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-none transition-all duration-300"
                    required
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r bg-color text-white font-bold py-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group"
              >
                <span>Send Message</span>
                <FaPaperPlane className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactSection;
