import { useState } from "react";
import { FaArrowRight, FaPlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Mock Link component since we don't have react-router-dom
// eslint-disable-next-line react/prop-types
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

// eslint-disable-next-line react/prop-types
const HVACDesignCard = ({ image, title, description, reverse, stats }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Default features if not provided
  // const defaultFeatures = [
  //   "Professional Installation",
  //   "24/7 Support",
  //   "Energy Efficient",
  //   "5 Year Warranty"
  // ];
  
  // Default stats if not provided
  const defaultStats = [
    { label: "Projects", value: "500+" },
    { label: "Experience", value: "15+ Years" },
    { label: "Rating", value: "4.9/5" }
  ];
  
  // const cardFeatures = features || defaultFeatures;
  const cardStats = stats || defaultStats;
  
  return (
    <div className="mb-8 px-4">
      <div
        className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden transform transition-all duration-700 hover:scale-[1.01] hover:shadow-2xl max-w-6xl mx-auto ${
          reverse ? "md:flex-row-reverse" : ""
        } flex flex-col md:flex-row`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Overlay Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-900 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{padding: '2px'}}>
          <div className="w-full h-full bg-white rounded-3xl"></div>
        </div>
        
        {/* Image Section */}
        <div className="relative w-full md:w-2/5 overflow-hidden">
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-200 to-gray-300">
            <img
              src={image || "/placeholder-hvac.jpg"}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Play Button Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <FaPlay className="text-cyan-600 ml-1 text-xl" />
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex justify-between gap-2">
                {cardStats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-center flex-1">
                    <div className="text-cyan-600 font-bold text-sm">{stat.value}</div>
                    <div className="text-gray-600 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 p-8 md:p-10 relative z-10">
          {/* Title Section */}
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-black mb-3 group-hover:text-color transition-colors duration-300">
              {title}
            </h3>
            
            {/* Animated Underline */}
            <div className="relative">
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-900 to-blue-900 rounded-full transition-all duration-500 group-hover:w-24"></div>
              <div className="absolute top-0 left-0 w-4 h-1 bg-gradient-to-r bg-color rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-black leading-relaxed mb-6 text-lg">
            {description}
          </p>
          
          {/* Features List */}
          {/* <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {cardFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 text-gray-700 transition-all duration-300 hover:text-cyan-600"
                >
                  <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div> */}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <Link 
              to="/contactus" 
              className="group/btn relative bg-gradient-to-r bg-color text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Get Quote</span>
              <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              
              {/* Button Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r bg-color opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            {/* Secondary Actions */}
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-200 rounded-2xl text-gray-600 hover:border-blue-900 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 hover:scale-105 group/icon">
                <FaPhone className="text-lg group-hover/icon:animate-pulse" />
              </button>
              <button className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-200 rounded-2xl text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 group/icon">
                <FaEnvelope className="text-lg group-hover/icon:animate-pulse" />
              </button>
              <button className="flex items-center justify-center w-14 h-14 bg-white border-2 border-gray-200 rounded-2xl text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 group/icon">
                <FaMapMarkerAlt className="text-lg group-hover/icon:animate-pulse" />
              </button>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className={` pt-6 border-t border-gray-200 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-2'
          }`}>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⭐ 4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🛡️ Insured & Licensed</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            ✓ Verified
          </div>
        </div>
        
        {/* Corner Decoration */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
      </div>
    </div>
  );
};

export default HVACDesignCard;