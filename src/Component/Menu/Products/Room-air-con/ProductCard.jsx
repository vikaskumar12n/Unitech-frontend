/* eslint-disable react/prop-types */
import { FaChevronRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="px-4 sm:px-4 md:px-6 py-4">
   <div className="relative w-[320px] md:w-[390px] bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden font-sans py-4 px-4 h-full">
      {/* Product Image Section */}
      <div className="relative bg-gray-700 h-40 sm:h-52 md:h-64 flex items-center justify-center rounded-lg">
        {/* Heart icon */}
        <button className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white hover:text-red-500 transition-colors duration-200 focus:outline-none">
          <FaHeart className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <img
          src={image}
          alt={title}
          className="max-h-full object-contain transform -rotate-3 sm:-rotate-5 transition-transform duration-300 hover:rotate-6 sm:hover:rotate-8"
        />
      </div>

      {/* Product Details Section */}
      <div className="p-2 sm:p-2 bg-white space-y-1 sm:space-y-1 ">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h2>

        {/* Description */}
        <p className="text-xs sm:text-sm text-justify text-black">{description}</p>

        {/* Button */}
        <div className="flex items-end justify-between pt-2 sm:pt-4">
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
    </div>
  );
};

export default ProductCard;
