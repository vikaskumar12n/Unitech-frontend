import { useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ChairmanEmeritus = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-color mb-4 relative inline-block">
            <span className="relative z-10">CHAIRMEN</span>
            <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 -z-10 transform -skew-x-12"></span>
          </h2>
          <div className="w-24 h-1 bg-color mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 z-10"></div>
              <img
                src="water-coolers.png"
                alt="ChairMan Name"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 z-20">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-color mr-2 animate-pulse"></div>
                  <span className="text-white font-semibold">Chairman Emeritus</span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="md:w-3/5 p-8 md:p-10">
              <div className="flex items-start mb-6">
                <FaQuoteLeft className="text-color text-2xl mr-3 mt-1" />
                <h3 className="text-2xl md:text-3xl font-bold text-color">ChairMan Name</h3>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  ChairMan Name holds an MBA from the Harvard Graduate School of Business Administration, an Electrical Engineering degree from MIT, USA, and a BSc (Honours) from Mumbai University. With a distinguished career spanning over 47 years at Blue Star, Mr Advani served as its Chairman for 33 years.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-900 p-4 my-6 rounded-r-lg">
                  <p className="font-medium text-color">
                    Under his leadership, the Company&apos;s revenue grew more than 400-fold and became a recognised leader in the Air Conditioning and Commercial Refrigeration industry in India.
                  </p>
                </div>
                
                <p className="leading-relaxed">
                  Mr ChairMan retired from the Board in November 2016, but in recognition of his exceptional leadership and legacy, he was appointed Chairman Emeritus. He continues to be an invitee to the Board Meetings and remains deeply engaged with the Company as an advisor to both the Board and Executive Management.
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="text-color font-bold text-xl">C</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Chairman Emeritus</p>
                    <p className="text-sm text-gray-500">Since 2016</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
       
      </div>
      
    
    </div>
  );
};

export default ChairmanEmeritus;