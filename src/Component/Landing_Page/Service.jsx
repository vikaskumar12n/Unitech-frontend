import './Service.css';
import SectionHeading from '../../Helpers/Heading';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh()
  })

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          
          {/* Section Heading */}
          
            <div className="text-center mb-16" data-aos="fade-down">
           <div
              className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Our <span className="text-color">Services</span>
            <SectionHeading/>
          </div>
         
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
              Professional HVAC solutions designed for your comfort and satisfaction
            </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Left Content */}
            <div className="space-y-6" data-aos="fade-right" data-aos-delay="400">
              
              {/* Main Heading */}
              <div className="relative">
                <h1 className="text-3xl  md:text-4xl lg:text-5xl font-bold bg-gradient-to-r bg-black bg-clip-text text-transparent leading-tight mb-6">
                  We&apos;re Glad You&apos;re Here – 
                  <span className="block bg-gradient-to-r from-bg-color to-cyan-600 bg-clip-text text-transparent">
                    Let&apos;s Keep You Comfortable Year-Round!
                  </span>
                </h1>
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-bg-color to-cyan-900 rounded-full"></div>
              </div>

              {/* Feature Cards */}
              <div className="space-y-4">
                <div className="group flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br bg-color rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l-2 7 9 3-9 3 2 7z" />
                      <circle cx="12" cy="15" r="3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Skilled HVAC Engineers</h3>
                    <p className="text-gray-600 text-sm mt-1">Expert technicians with years of experience</p>
                  </div>
                </div>

                <div className="group flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br bg-color rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-xl text-gray-800 group-hover:text-blue-900 transition-colors duration-300">Reliable Service Assurance</h3>
                    <p className="text-gray-600 text-sm mt-1">24/7 support and guaranteed satisfaction</p>
                  </div>
                </div>
              </div>
 

              {/* Contact Info */}
             <div className="bg-white rounded-3xl p-4 text-black shadow-2xl">
  <h4 className="font-bold text-xl mb-3 text-center">Get in Touch</h4>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    {/* Phone */}
    <div className="group flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 text-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.81 15.3A12 12 0 0 0 16.6 16.6l1.2-1.25a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold">Call Us</p>
        <p className="text-sm opacity-90">
          <a href="tel:7619607157" className="hover:underline">7619607157</a> / <a href="tel:7619607156" className="hover:underline">7619607156</a>
        </p>
      </div>
    </div>
    {/* Email */}
    <div className="group flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6 text-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22 6 12 13 2 6" />
        </svg>
      </div>
      <div>
        <p className="font-semibold">Email Us</p>
        <p className="text-sm opacity-90">
          <a href="mailto:care@blowair.in" className="hover:underline">codecrafter@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
</div>
            </div>

            {/* Right Images Grid */}
            <div className="space-y-4" data-aos="fade-left" data-aos-delay="600">
              <div className="grid grid-cols-12 gap-4 h-full">
                
                {/* First Row */}
                <div className="col-span-7 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="800"
                    src="/service1.jpg"
                    alt="Service 1"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="font-bold text-lg">Professional Installation</h4>
                    <p className="text-sm">Expert setup for optimal performance</p>
                  </div>
                </div>
                
                <div className="col-span-5 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="900"
                    src="/service2.jpg"
                    alt="Service 2"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 mt-6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="font-bold text-lg">Quality Service</h4>
                    <p className="text-sm">Premium maintenance</p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="col-span-5 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    src="/services3.jpg"
                    alt="Service 3"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="font-bold text-lg">Modern Solutions</h4>
                    <p className="text-sm">Latest technology</p>
                  </div>
                </div>
                
                <div className="col-span-7 relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img
                    data-aos="zoom-in"
                    data-aos-delay="1100"
                    src="/services4.jpg"
                    alt="Service 4"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h4 className="font-bold text-lg">Complete Support</h4>
                    <p className="text-sm">End-to-end service solutions</p>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="1200">
                  <div className="text-2xl font-bold text-color mb-1">500+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="1300">
                  <div className="text-2xl font-bold text-color mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="fade-up" data-aos-delay="1400">
                  <div className="text-2xl font-bold text-color mb-1">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};

export default Service;