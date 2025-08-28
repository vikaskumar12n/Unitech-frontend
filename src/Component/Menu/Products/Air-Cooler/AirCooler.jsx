import { useState, useEffect } from 'react';
import {   FaWifi, FaSnowflake, FaBolt, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import ProductCard from '../Room-air-con/ProductCard';
// Enhanced ProductCard component
// eslint-disable-next-line react/prop-types


const AirCooler = () => {
  const [activeSection, setActiveSection] = useState('Desert');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      title: "AURA DUO DESERT COOLER|60 LITRES",
      description: "High performance AC with energy-efficient technology for superior cooling comfort and reduced power consumption.",
      image: "/Product/AirCooler/1.webp",
      rating: 4,
      price: "12,490",
      badge: "BESTSELLER",
      features: [
        { icon: <FaSnowflake />, text: "Capacity:60L" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaLeaf />, text: "Eco-friendly" }
      ]
    },
    {
      id: 2,
      title: "AURA NEO| DESERT COOLER|45 LITRES",
      description: "Smart AC with Wi-Fi connectivity, advanced cooling features, and intelligent climate control.",
      image: "/Product/AirCooler/2.webp",
       rating: 5,
      price: "8,990",
      badge: "SMART",
      features: [
        { icon: <FaWifi />, text: "Capacity:45" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaShieldAlt />, text: "5 Year Warranty" }
      ]
    },
    {
      id: 3,
      title: "AURA DUO|DESERT COOLER|60 LITRES",
      description: "Stylish design with powerful cooling technology and long-lasting durability for modern homes.",
      image: "/Product/AirCooler/3.webp",
      rating: 4,
      price: "11,990",
      features: [
        { icon: <FaSnowflake />, text: "Fast Cool" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaLeaf />, text: "Energy Saver" }
      ]
    },
    {
      id: 4,
      title: "MAXIMA|DESERT COOLER|75 LITRES",
      description: "Compact window AC with steady cooling performance, perfect for smaller spaces and budget-conscious users.",
      image: "/Product/AirCooler/4.webp",
      rating: 4,
      price: "12,190",
      features: [
        { icon: <FaSnowflake />, text: "Capacity:75 L" },
        { icon: <FaShieldAlt />, text: "Reliable" },
        { icon: <FaLeaf />, text: "3 Star" }
      ]
    },
    {
      id: 5,
      title: "ULTIMA|DESERT COOLER|20 LITRES",
      description: "Compact window AC with steady cooling performance, perfect for smaller spaces and budget-conscious users.",
      image: "/Product/AirCooler/5.webp",
      rating: 4,
      price: "6,890",
      features: [
        { icon: <FaSnowflake />, text: "Capacity:20 L" },
        { icon: <FaShieldAlt />, text: "Reliable" },
        { icon: <FaLeaf />, text: "3 Star" }
      ]
    },
 {
      id: 6,
      title: "MEGA|HIGH CAPACITY DESERT COOLER|120LITRES",
      description: "Compact window AC with steady cooling performance, perfect for smaller spaces and budget-conscious users.",
      image: "/Product/AirCooler/6.webp",
      rating: 4,
      price: "16,490",
      features: [
        { icon: <FaSnowflake />, text: "Capacity:120 L" },
        { icon: <FaShieldAlt />, text: "Reliable" },
        { icon: <FaLeaf />, text: "3 Star" }
      ]
    },
  ];

  const TowerAirCooler = [
    {
      id: 1,
      title: "PREMIA|TOWER COOLER|27 LITRES",
      description: "Industrial-grade performance with energy-efficient inverter technology for TowerAir applications.",
      image: "/Product/AirCooler/t1.webp",
      rating: 5,
      price: "7,990",
      badge: "BestSeller",
      features: [
        { icon: <FaBolt />, text: "Capacity:27 L" },
        { icon: <FaShieldAlt />, text: "Compare" },
        { icon: <FaLeaf />, text: " 1 Year Standard Warranty (T&Cs)" }
      ]
    },
    {
      id: 2,
      title: "MAXIMA | DESERT COOLER 75 LITRES",
      description: "Powerful 1.7 Ton inverter AC with advanced cooling for demanding TowerAir environments.",
      image: "/Product/AirCooler/PREMIA _ TOWER COOLER _ 27 LITRES – Blue Star_files/ta27pmc_3_ta27pmc_right_view(1).jpg",
      rating: 5,
      price: "58,990",
      badge: "POWERFUL",
      features: [
        { icon: <FaBolt />, text: "1.7 Ton" },
        { icon: <FaSnowflake />, text: "3 Star" },
        { icon: <FaShieldAlt />, text: "TowerAir Use" }
      ]
    },
    
  ];

  const PernalAirColler = [
    {
      id: 1,
      title: "ASTRA|PERSONAL COOLER|10LITRES",
      description: "Persnal 1 Ton, 5 Star Q Series inverter AC with superior energy efficiency and powerful cooling performance.",
      image: "/Product/AirCooler/p1.webp",
      rating: 5,
      price: "5,299",
      badge: "ECO CHAMPION",
      features: [
        { icon: <FaLeaf />, text: "Capacity:10 L" },
        { icon: <FaBolt />, text: "Technical Specifications" },
        { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
      ]
    },
    {
      id: 2,
      title: "ASTRA|PERSONAL COOLER|20LITRES",
      description: "Latest 2025 model with Wi-Fi control, 5 Star energy rating, and advanced inverter technology.",
      image: "/Product/AirCooler/p2.webp",
      rating: 5,
      price: "5,990",
      badge: "2025 MODEL",
      features: [
        { icon: <FaWifi />, text: "Capacity:20 L" },
        { icon: <FaBolt />, text: "Technical Specifications" },
        { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
      ]
    },
    
  ];

  const categories = [
    { id: 'Desert', name: 'Desert Air Coolers',   },
    { id: 'TowerAir', name: 'Tower Air Coolers',  },
    { id: 'Persnal', name: 'Persnal Air Coolers',  }
  ];

  const getCurrentProducts = () => {
    switch(activeSection) {
      case 'Desert': return products;
      case 'TowerAir': return TowerAirCooler;
      case 'Persnal': return PernalAirColler;
      default: return products;
    }
  };

  const getHeroImage = () => {
    switch(activeSection) {
      case 'Desert': return "/Product/AirCooler/Desert-ACR-LP-1800x473.webp";
      case 'TowerAir': return "/Product/AirCooler/Tower-ACR-LP-1800x473.webp";
      case 'Persnal': return "/Product/AirCooler/Personal-ACR-LP-1800x473.webp";
      default: return "/Product/AirCooler/Desert-ACR-LP-1800x473.webp";
    }
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'Desert': return "Desert Air Coolers";
      case 'TowerAir': return "Tower Air Coolers";
      case 'Persnal': return "Persnal Air Coolers";
      default: return "esert Air Coolers";
    }
  };

  return (
    <>
     <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Enhanced Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"><span className="text-blue-500"> Air</span> Cooler</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">The indoor and outdoor units work together to ensure efficient cooling.</p>
        </div>
        
        {/* Menu Toggle */}
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">Air Cooler</h2>
           
          </div>
        </div>
      </div>
    <div className="min-h-screen pb-20  bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header Section */}
      <div className={`text-center pt-20 pb-10 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-black   via-black to-black bg-clip-text text-transparent mb-6">
          Air <span className="text-blue-900"> Cooling</span> Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl text-justify mx-auto mb-8">
          Discover our range of energy-efficient air conditioners designed for every space and need
        </p>
        
        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveSection(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeSection === category.id
                  ? 'bg-gradient-to-r bg-color text-white shadow-lg scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Image Section */}
      <div className={`relative mx-4 md:mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <img
          src={getHeroImage()}
          alt="Product Hero"
          className="w-full h-auto object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {getSectionTitle()}
            </h2>
            <p className="text-gray-600">
              Experience the perfect blend of comfort, efficiency, and innovation
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="relative z-10 px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
                            {getCurrentProducts().map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`transform transition-all duration-700 w-full max-w-md ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <ProductCard
                                        title={product.title}
                                        description={product.description}
                                        image={product.image}
                                        rating={product.rating}
                                        price={product.price}
                                        badge={product.badge}
                                        features={product.features}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* CTA Section */}
                    <div className="max-w-4xl mx-auto mt-20  text-center ">
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
    </div>
    </>
  );
};

export default AirCooler;