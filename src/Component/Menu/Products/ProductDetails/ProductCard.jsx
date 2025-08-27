/* eslint-disable react/prop-types */
import { FaChevronRight,FaStar, FaPlay } from 'react-icons/fa';
import { useState } from 'react';
// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, description, image, features, rating, price, badge }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {badge}
        </div>
      )}
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating Action Button */}
        <div className={`absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <FaPlay className="text-color ml-1" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? 'opacity-100' : 'opacity-300'} />
            ))}
          </div>
          <span className="text-sm text-gray-600">({rating}.0)</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-color transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Features */}
        {features && (
          <div className="flex flex-wrap gap-2 mb-4">
        
            {features?.map((feature, index) => (
              <span key={index} className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                {feature.icon}
                {feature.text}
              </span>
            ))}
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          {price && (
            <div>
              <span className="text-2xl font-bold text-gray-800">₹{price}</span>
              <span className="text-sm text-gray-500 ml-2">onwards</span>
            </div>
          )}
          <button className="flex items-center gap-2 bg-gradient-to-r bg-color text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
            View Details
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
