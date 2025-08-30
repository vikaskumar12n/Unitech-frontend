import SectionHeading from "../../Helpers/Heading";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);

  return (
    <section className="relative w-full min-h-screen py-16 px-4 sm:px-8 overflow-hidden">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        style={{ 
          backgroundImage: `url('/Realistic white monochrome background _ Free Vector_files/multicolor-abstract-background_149326-7184.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Background Decorations */}
     

      <div className="relative max-w-7xl mx-auto text-black z-10">
        
        {/* Section Heading */}
        
          <div className="text-center mb-16" data-aos="fade-down">
           <div
              className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Our <span className="text-color">Brand</span>
            <SectionHeading/>
          </div>
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
               Building excellence through innovation, quality, and sustainable practices since 2015
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Mission & Vision */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="400">
            
            {/* Mission Card */}
            <div className="group relative overflow-hidden bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br bg-color rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r bg-black bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Our Mission
                  </h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  To deliver high-quality products that simplify and enhance the lives of our customers while maintaining eco-friendly practices and setting new standards in innovation.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative overflow-hidden bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br bg-color rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r text-black bg-clip-text  group-hover:scale-105 transition-transform duration-300">
                    Our Vision
                  </h3>
                </div>
                <p className="text-black leading-relaxed text-lg">
                  To become a global leader in innovative solutions and build a brand trusted for excellence, sustainability, and reliability across all markets.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="800">
                <div className="text-2xl font-bold  mb-1">2015</div>
                <div className="text-sm text-gray-600">Founded</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="900">
                <div className="text-2xl font-bold   mb-1">1000+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="1000">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Info & Certifications */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="600">
            
            {/* Company Description */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-900 rounded-full"></div>
                <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-900 to-blue-900 bg-clip-text text-transparent">
                  Excellence in Innovation
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  At <span className="font-semibold text-color">YourCompany</span>, we believe in combining innovation, quality, and sustainability to provide the best products for our customers. Since our founding in 2015, we have strived to bring excellence in every product we deliver.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-black">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-color rounded-full mr-3"></div>
                    <span>Quality Assurance</span>
                  </div>
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-color rounded-full mr-3"></div>
                    <span>Eco-Friendly Practices</span>
                  </div>
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-color rounded-full mr-3"></div>
                    <span>Innovation Focus</span>
                  </div>
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-color rounded-full mr-3"></div>
                    <span>Customer Satisfaction</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications / Awards */}
            <div className="space-y-6">  
              <div className="grid grid-cols-1 gap-4">
                <div className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-gray-800">ISO 9001 Certified</h5>
                      <p className="text-sm text-gray-600">Quality Management System</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white/90 mt-4 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-color" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg text-gray-800">Best Innovation Award 2023</h5>
                      <p className="text-sm text-gray-600">Technology Excellence</p>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;