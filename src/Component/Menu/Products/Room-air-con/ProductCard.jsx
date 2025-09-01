/* eslint-disable react/prop-types */
import { FaChevronRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="relative w-full max-w-xs md:max-w-sm bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-sans py-4 sm:py-6 px-3 sm:px-4">
      {/* Product Image Section */}
      <div className="relative bg-gray-700 h-40 sm:h-52 md:h-64 flex items-center justify-center rounded-lg">
        {/* Heart icon */}
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-red-500 transition-colors duration-200 focus:outline-none">
          <FaHeart className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain transform -rotate-3 sm:-rotate-5 transition-transform duration-300 hover:rotate-6 sm:hover:rotate-10"
        />
      </div>
      
      {/* Product Details Section */}
      <div className="p-3 sm:p-5 bg-white space-y-3 sm:space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>
        
        {/* Description */}
        <p className="text-xs sm:text-sm text-justify text-black">{description}</p>
        
        {/* Button */}
        <div className="flex items-end justify-between pt-2 sm:pt-3">
          <Link
            to="/contactus"
            className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#383587] text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <FaChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Enquiry</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
