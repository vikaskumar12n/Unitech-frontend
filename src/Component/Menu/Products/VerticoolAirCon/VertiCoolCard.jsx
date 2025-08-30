/* eslint-disable react/prop-types */
// VertiCoolCard.js
import {FaHeart} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const VertiCoolCard = ({badgeText,badgeColor = "bg-gray-200 text-gray-700", title,subtitle,imgSrc,imgAlt,   button1 = "Add to cart", navigateTo = "/", // Changed default navigation
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-100 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-sans">
      {/* Product Image Section - Purple Background */}
      <div className="relative bg-gray-800 h-64 flex items-center justify-center p-4">
        {/* Heart icon for wishlist */}
        <button className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors duration-200 focus:outline-none">
                 <FaHeart className="h-5 w-5" />
               </button>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="max-h-full object-contain transform -rotate-5" /* Added rotation for the shoe effect */
        />
      </div>

      {/* Product Details Section */}
      <div className="p-5 bg-white space-y-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        
        {/* Badges/Variants - Using badgeText prop */}
        {badgeText && (
          <div className="flex flex-wrap gap-2">
            {/* Assuming badgeText can be a single string or comma-separated for multiple badges */}
            {badgeText.split(',').map((badge, index) => (
              <span key={index} className={`text-xs font-semibold px-2 py-1 rounded border border-gray-300 ${badgeColor}`}>
                {badge.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Description - Using subtitle prop */}
        <p className="text-sm text-justify text-black">{subtitle}</p>
        
        {/* Price and Button */}
        <div className="flex items-end justify-between pt-4">
          
          
          <button
            className="flex items-center space-x-2 px-6 py-3 bg-[#383587] text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            onClick={() => navigate(navigateTo)}
          >
            {/* Cart icon - assuming "Add to cart" is common */}
             
            <span className="text-sm">{button1}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VertiCoolCard;