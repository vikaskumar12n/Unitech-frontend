import { Link } from "react-router-dom";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-500 hover:scale-102 hover:shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden h-40 sm:h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        {/* Icon on Hover */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            <FaArrowRight className="text-color text-xl" />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-color transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {description}
        </p>
        
        {/* Button with Animation */}
        <div className="mt-auto">
          <Link
            to="/contactus"
            className="relative overflow-hidden bg-gradient-to-r bg-color text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center group/btn"
          >
            <span className="relative z-10 flex items-center">
              Enquiry
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
            {/* Button Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r bg-color opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
      
      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default ServiceCard;