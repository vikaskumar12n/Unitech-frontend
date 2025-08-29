/* eslint-disable react/prop-types */
import { FaChevronRight,FaStar, FaPlay } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image, features, rating, price, badge }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
          {badge}
        </div>
      )}
      
      {/* Image Container - Height reduced */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Action Button - Size reduced */}
        <div className={`absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <FaPlay className="text-color ml-0.5 text-xs" />
        </div>
      </div>

      {/* Content - Padding reduced */}
      <div className="p-4">
        {/* Rating - Smaller */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`text-xs ${i < rating ? 'opacity-100' : 'opacity-300'}`} />
            ))}
          </div>
          <span className="text-xs text-gray-600">({rating}.0)</span>
        </div>

        {/* Title - Smaller */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-color transition-colors duration-300">
          {title}
        </h3>

        {/* Description - Shorter */}
        <p className="text-gray-600 text-justify mb-3 line-clamp-2 text-sm">
          {description}
        </p>

        {/* Features - Compact */}
        {features && (
          <div className="flex flex-wrap gap-1 mb-3">
            {features?.slice(0, 2).map((feature, index) => (
              <span key={index} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full text-xs">
                {feature.icon}
                {feature.text}
              </span>
            ))}
          </div>
        )}

        {/* Price and CTA - Compact */}
        <div className="flex items-center justify-between">
          {price && (
            <div>
              <span className="text-lg font-bold text-gray-800">₹{price}</span>
              <span className="text-xs text-gray-500 ml-1">onwards</span>
            </div>
          )}
          <Link to="/contactus"> 
          <button className="flex items-center gap-1.5 bg-gradient-to-r bg-color text-white px-4 py-1.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
            Enquiry
            <FaChevronRight className="text-xs" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
