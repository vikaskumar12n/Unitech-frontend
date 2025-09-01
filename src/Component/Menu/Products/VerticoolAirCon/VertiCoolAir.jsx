import { useEffect, useState } from "react";
import VertiCoolCard from "./VertiCoolCard";
import { Link } from "react-router-dom";

const VertiCoolProduct = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

const vertiCoolData = [
  {
    badgeText: "BESTSELLER",
    badgeColor: "bg-red-200 text-orange-700",
    title: "G Series",
    subtitle: "Anti-Corrosive Gold Fins in Indoor & Blue Fins",
    gradientFrom: "from-blue-900",
    gradientTo: "to-indigo-700",
    imgSrc: "/Product/v2.jpeg",
    imgAlt: "Cassette AC", 
    button1: "Enquiry",
  },
  {
    badgeText: "PREMIUM",
    badgeColor: "bg-green-100 text-green-800",
    title: "Verticool Air Conditioners",
    subtitle: "Buy Unitech Verticool AC | 4 Ton | Floor Standing ",
    gradientFrom: "from-indigo-700",
    gradientTo: "to-blue-900",
    imgSrc: "/Product/verti2.jpeg",
    imgAlt: "Ducted AC",
    details: [
      { label: "Type", value: "Inverter" },
      { label: "Mount", value: "Concealed" },
    ],
    features: [
      { label: "Energy Rating", value: "5 Star", color: "text-blue-600" },
      { label: "Air Distribution", value: "Zone Control", color: "" },
      { label: "Operation", value: "Ultra Silent", color: "text-blue-600" },
    ],
 
   
    button1: "Enquiry",
  },
   {
   badgeText: "PREMIUM",
    badgeColor: "bg-green-100 text-green-800",
    title: "Verticool Air Conditioners",
    subtitle: "Buy Unitech Verticool AC | 4 Ton | Floor Standing ",
    gradientFrom: "from-indigo-700",
    gradientTo: "to-blue-900",
    imgSrc: "/Product/v1.jpeg",
    imgAlt: "Ducted AC",
    details: [
      { label: "Type", value: "Inverter" },
      { label: "Mount", value: "Concealed" },
    ],
    features: [
      { label: "Energy Rating", value: "5 Star", color: "text-blue-600" },
      { label: "Air Distribution", value: "Zone Control", color: "" },
      { label: "Operation", value: "Ultra Silent", color: "text-blue-600" },
    ],
    
   
    button1: "Enquiry",
  }
];

  return (
    <>
      {/* Hero Section */}

  

    <div className="relative w-full h-[500px] overflow-hidden">
  {/* Responsive Image */}
  <img 
    src="/ai.avif" 
    alt="Water Cooler" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  
  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
      Verticool<span className="text-blue-500"> Air</span> Conditioner
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8">
      High-capacity, energy-efficient Verticool AC for large spaces and comfort
    </p>
  </div>
  
  {/* Bottom Label */}
  <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
      <h2 className="text-base md:text-lg font-semibold">Verticool Air Conditioner</h2>
    </div>
  </div>
</div>
    
   <nav className="text-gray-600 text-sm my-4">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline font-bold ms-10">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-500 font-bold">Product</li>
                    <li>/</li>
                    <li className="text-gray-500 font-bold">Verticool Air Conditioners</li>
                </ol>
            </nav>
      {/* Main Section */}
      <div className="min-h-screen pb-15 bg-gradient-to-br from-slate-10 via-blue-10 to-indigo-50 relative overflow-hidden">
               

        <div className={`text-center pt-5 pb-10 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-color">Premium</span> Cooling Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Energy-efficient air conditioners designed for optimal performance and comfort
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4   relative z-10 max-w-7xl mx-auto">
         {vertiCoolData.map((item, index) => (
  <VertiCoolCard
    key={index}
    badgeText={item.badgeText}
    badgeColor={item.badgeColor}
    title={item.title}
    subtitle={item.subtitle}
    gradientFrom={item.gradientFrom}
    gradientTo={item.gradientTo}
    imgSrc={item.imgSrc}
    imgAlt={item.imgAlt}
    details={item.details}
    features={item.features}
    price={item.price}
    priceNote={item.priceNote}
    button1={item.button1}
    
  />
))}

          
        </div>
          <div className="max-w-4xl mx-auto mt-10 text-center ">
                        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-3xl p-12 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold mb-4">Need Help Choosing?</h3>
                                <p className="text-xl text-blue-100 mb-8">
                                    Our cooling experts are here to help you find the perfect AC for your space
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                                        Get Expert Advice
                                    </button>
                                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                        Schedule Site Visit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
      </div>
       
    </>
  );
};

export default VertiCoolProduct;
