/* eslint-disable react/prop-types */
import { FaChevronRight, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="relative w-100 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-sans py-6 px-4">
      {/* Product Image Section - Dark Background */}
      <div className="relative bg-gray-700 h-64 flex items-center justify-center   rounded-lg">
        {/* Heart icon for wishlist */}
        <button className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors duration-200 focus:outline-none">
          <FaHeart className="h-5 w-5" />
        </button>
        <img
          src={image}
          alt={title}
           className="max-h-full object-contain transform -rotate-5 transition-transform duration-300 hover:rotate-10"
        />
      </div>
      
      {/* Product Details Section */}
      <div className="p-5 bg-white space-y-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        
        {/* Description */}
        <p className="text-xs text-justify text-black">{description}</p>
        
        {/* Button */}
        <div className="flex items-end justify-between pt-3">
          <Link
            to="/contactus"
            className="flex items-center space-x-2 px-6 py-3 bg-[#383587] text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            <FaChevronRight className="h-3 w-3" />
            <span className="text-xs">Enquiry</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;