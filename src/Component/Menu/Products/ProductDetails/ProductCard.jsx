// src/components/ProductCard.jsx
// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg min-h-[250px] hover:shadow-lg transition-shadow duration-300">
      
      {/* Image Section - Bada kiya */}
      <div className="w-full md:w-2/5 flex-shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 md:h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content Section - Thoda chhota */}
      <div className="w-full md:w-3/5 p-4 md:p-6 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base text-justify leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
