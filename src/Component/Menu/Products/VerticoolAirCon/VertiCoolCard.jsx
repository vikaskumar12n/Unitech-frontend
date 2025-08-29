  // VertiCoolCard.js
  // eslint-disable-next-line react/prop-types, no-undef
  const VertiCoolCard = ({   badgeText, badgeColor = "bg-blue-100 text-blue-800", title, subtitle,   gradientFrom = "from-[#282086]", gradientTo = "to-[#282086]", imgSrc, imgAlt,  price,   priceNote,   button1 = "Buy Now"  }) => {
  return (
    <div className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 w-full  flex flex-col border border-gray-200/50 hover:border-white overflow-hidden relative">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100/40 to-violet-100/40 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-500"></div>
      
      {/* Top Accent Line */}
      <div className={`h-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} group-hover:h-2 transition-all duration-300`}></div>
      
      {/* Header Section */}
      <div className="relative z-10 p-6 text-center">
        {badgeText && (
          <div className={`inline-flex items-center ${badgeColor} px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm border border-white/50`}>
            <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></div>
            {badgeText}
          </div>
        )}
        <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 transition-all duration-500">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{subtitle}</p>
      </div>
      
      {/* Image Section with Modern Frame */}
      <div className="relative z-10 px-6 pb-6">
        <div className="relative group/image">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-400/20 to-purple-400/20 rounded-2xl blur-sm group-hover/image:blur-md group-hover/image:scale-110 transition-all duration-500"></div>
          <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200/50 shadow-inner">
            <img 
              src={imgSrc} 
              alt={imgAlt} 
              className="w-full h-48 object-contain group-hover/image:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="relative z-10 px-6 pb-6 flex-grow">
        
       
    
        {/* Price Box */}
        <div className={`bg-gradient-to-r  text-black rounded-2xl p-5 text-center  mb-6 relative overflow-hidden shadow-lg`}>
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
          <div className="relative">
            <div className="text-sm font-medium opacity-90 mb-1">{priceNote}</div>
            <div className="text-3xl font-black">{price}</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:shadow-lg text-white font-semibold py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5`}>
            {button1}
          </button>
          
        </div>
      </div>
    </div>
  );
  };

  export default VertiCoolCard;