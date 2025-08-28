// VertiCoolCard.js
// eslint-disable-next-line react/prop-types
const VertiCoolCard = ({badgeText,badgeColor,title,subtitle,gradientFrom,gradientTo,imgSrc,imgAlt,details,features,price,priceNote,button1,button2
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-md overflow-hidden transform hover:-translate-y-2">
      
      {/* Card Header */}
      <div className="relative">
        <div className={`h-2 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}></div>
        <div className="text-center p-6 pt-8">
          <div className={`inline-block ${badgeColor} px-4 py-1 rounded-full text-sm font-semibold mb-4`}>
            {badgeText}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-6 pb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent rounded-xl opacity-70"></div>
          <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-200 flex justify-center">
            <img src={imgSrc} alt={imgAlt} className="w-48 h-48 object-contain md:w-64 md:h-64 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {(details || []).map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-gray-500 text-sm mb-1">{item.label}</div>
              <div className="font-bold text-gray-800">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {(features || []).map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-gray-700">
                {feature.label}: <span className={`font-semibold ${feature.color}`}>{feature.value}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className={`bg-gradient-to-r  rounded-xl p-5 mb-6  `}>
          <div className="text-center">
            <div className="text-gray-600 mb-1">Starting Price</div>
            <div className="text-3xl font-bold text-gray-800 mb-1">{price}</div>
            <div className="text-xs text-gray-500">{priceNote}</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-gradient-to-r from-blue-900 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
            {button1}
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
            {button2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VertiCoolCard;
