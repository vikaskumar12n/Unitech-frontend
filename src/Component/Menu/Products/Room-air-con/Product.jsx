import { useState, useEffect } from 'react';
import {   FaWifi, FaSnowflake, FaBolt, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';
// Enhanced ProductCard component
// eslint-disable-next-line react/prop-types


const Product = () => {
  const [activeSection, setActiveSection] = useState('residential');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      title: "INDUS Fxi 3 Star Split Inverter AC",
      description: "High performance AC with energy-efficient technology for superior cooling comfort and reduced power consumption.",
      image: "/Product/room_air_condi/1_14_3.jpg",
      rating: 4,
      price: "32,990",
      badge: "BESTSELLER",
      features: [
        { icon: <FaSnowflake />, text: "3 Star" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaLeaf />, text: "Eco-friendly" }
      ]
    },
    {
      id: 2,
      title: "ESTER EDGE FXi Wi-Fi 3 Star Split Inverter",
      description: "Smart AC with Wi-Fi connectivity, advanced cooling features, and intelligent climate control.",
      image: "/Product/room_air_condi/1_copy__1.png",
      rating: 5,
      price: "38,990",
      badge: "SMART",
      features: [
        { icon: <FaWifi />, text: "Wi-Fi" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaShieldAlt />, text: "5 Year Warranty" }
      ]
    },
    {
      id: 3,
      title: "XPERT LUMO FXi 3 Star Split Inverter AC",
      description: "Stylish design with powerful cooling technology and long-lasting durability for modern homes.",
      image: "/Product/room_air_condi/1_copy__2_2.png",
      rating: 4,
      price: "35,990",
      features: [
        { icon: <FaSnowflake />, text: "Fast Cool" },
        { icon: <FaBolt />, text: "Inverter" },
        { icon: <FaLeaf />, text: "Energy Saver" }
      ]
    },
    {
      id: 4,
      title: "ESTRELLA Fx 3 Star Window Fixed Speed",
      description: "Compact window AC with steady cooling performance, perfect for smaller spaces and budget-conscious users.",
      image: "/Product/room_air_condi/1_copy__25.png",
      rating: 4,
      price: "24,990",
      features: [
        { icon: <FaSnowflake />, text: "Window AC" },
        { icon: <FaShieldAlt />, text: "Reliable" },
        { icon: <FaLeaf />, text: "3 Star" }
      ]
    }
  ];

  const heavyDutyProducts = [
    {
      id: 1,
      title: "HEAVY DUTY INVERTER AC | D SERIES",
      description: "Industrial-grade performance with energy-efficient inverter technology for commercial applications.",
      image: "/Product/room_air_condi/IC324DCUHD.webp",
      rating: 5,
      price: "65,990",
      badge: "COMMERCIAL",
      features: [
        { icon: <FaBolt />, text: "Heavy Duty" },
        { icon: <FaShieldAlt />, text: "Industrial Grade" },
        { icon: <FaLeaf />, text: "Energy Efficient" }
      ]
    },
    {
      id: 2,
      title: "HEAVY DUTY INVERTER AC | V SERIES | 1.7 TON",
      description: "Powerful 1.7 Ton inverter AC with advanced cooling for demanding commercial environments.",
      image: "/Product/room_air_condi/ic319vcuhd_gallery-images-01_3.webp",
      rating: 5,
      price: "58,990",
      badge: "POWERFUL",
      features: [
        { icon: <FaBolt />, text: "1.7 Ton" },
        { icon: <FaSnowflake />, text: "3 Star" },
        { icon: <FaShieldAlt />, text: "Commercial Use" }
      ]
    },
    {
      id: 3,
      title: "HEAVY DUTY FIXED SPEED AC | A SERIES | 2.2 TON",
      description: "High-capacity 2.2 Ton fixed speed AC designed for large commercial spaces and heavy-duty applications.",
      image: "/Product/room_air_condi/fa226acuhd_gallery-images-01_2_2.webp",
      rating: 4,
      price: "52,990",
      features: [
        { icon: <FaBolt />, text: "2.2 Ton" },
        { icon: <FaSnowflake />, text: "Fixed Speed" },
        { icon: <FaShieldAlt />, text: "Heavy Duty" }
      ]
    },
    {
      id: 4,
      title: "HEAVY DUTY FIXED SPEED AC | D SERIES | 1.6 TON",
      description: "Reliable 1.6 Ton fixed speed AC with consistent cooling performance for commercial applications.",
      image: "/Product/room_air_condi/1_copy__1.png",
      rating: 4,
      price: "48,990",
      features: [
        { icon: <FaBolt />, text: "1.6 Ton" },
        { icon: <FaSnowflake />, text: "3 Star" },
        { icon: <FaShieldAlt />, text: "Durable" }
      ]
    }
  ];

  const superEnergyEfficient = [
    {
      id: 1,
      title: "SUPER ENERGY EFFICIENT INVERTER AC | Q SERIES",
      description: "Premium 1 Ton, 5 Star Q Series inverter AC with superior energy efficiency and powerful cooling performance.",
      image: "/Product/room_air_condi/1_copy__1.png",
      rating: 5,
      price: "42,990",
      badge: "ECO CHAMPION",
      features: [
        { icon: <FaLeaf />, text: "5 Star" },
        { icon: <FaBolt />, text: "Super Efficient" },
        { icon: <FaSnowflake />, text: "Q Series" }
      ]
    },
    {
      id: 2,
      title: "LG 5 Star Wi-Fi Inverter Window AC 2025",
      description: "Latest 2025 model with Wi-Fi control, 5 Star energy rating, and advanced inverter technology.",
      image: "/Product/room_air_condi/1.webp",
      rating: 5,
      price: "39,990",
      badge: "2025 MODEL",
      features: [
        { icon: <FaWifi />, text: "Wi-Fi" },
        { icon: <FaLeaf />, text: "5 Star" },
        { icon: <FaBolt />, text: "Latest Tech" }
      ]
    },
    {
      id: 3,
      title: "Inverter Split AC | Q Series - Black | 1 Ton",
      description: "Premium black Q Series inverter split AC with elegant design and maximum energy efficiency.",
      image: "/Product/room_air_condi/0.avif",
      rating: 5,
      price: "45,990",
      badge: "PREMIUM",
      features: [
        { icon: <FaLeaf />, text: "5 Star" },
        { icon: <FaBolt />, text: "Premium Design" },
        { icon: <FaSnowflake />, text: "Q Series" }
      ]
    },
    {
      id: 4,
      title: "LG UW-Q18WUXA 1.5 Ton 3 Star DUAL Inverter",
      description: "Robust 1.5 Ton LG Dual Inverter window AC offering steady, reliable cooling with energy efficiency.",
      image: "/Product/room_air_condi/2.jpg",
      rating: 4,
      price: "36,990",
      features: [
        { icon: <FaBolt />, text: "Dual Inverter" },
        { icon: <FaSnowflake />, text: "1.5 Ton" },
        { icon: <FaShieldAlt />, text: "LG Brand" }
      ]
    }
  ];

  const categories = [
    { id: 'residential', name: 'Residential AC',   },
    { id: 'commercial', name: 'Heavy Duty',  },
    { id: 'premium', name: 'Super Efficient',  }
  ];

  const getCurrentProducts = () => {
    switch(activeSection) {
      case 'residential': return products;
      case 'commercial': return heavyDutyProducts;
      case 'premium': return superEnergyEfficient;
      default: return products;
    }
  };

  const getHeroImage = () => {
    switch(activeSection) {
      case 'residential': return "/Product/specificedetor ac.webp";
      case 'commercial': return "/Product/Heavy-Duty-Flagship-LP-1800x473.webp";
      case 'premium': return "/Product/SEE-Flagship-LP-1800x473_bd7e883f-ded9-4e46-87ec-75c9990e959c.webp";
      default: return "/Product/specificedetor ac.webp";
    }
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'residential': return "Room Air Conditioners";
      case 'commercial': return "Heavy Duty Commercial ACs";
      case 'premium': return "Super Energy Efficient ACs";
      default: return "Room Air Conditioners";
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Room <span className="text-blue-500"> Air</span> Conditioner</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">The indoor and outdoor units work together to ensure efficient cooling.</p>
        </div>
        
        {/* Menu Toggle */}
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">Room Air Conditioner</h2>
           
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
        <li className="text-gray-500 font-bold">Room Air Conditioners</li>
      </ol>
    </nav>
  <div className="min-h-screen item-center pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      {/* Header Section */}
      <div className={`text-center pt-20 pb-10 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-black via-black to-black bg-clip-text text-transparent mb-6">
          Premium <span className="text-blue-900"> Cooling</span> Solutions
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
        <div className="max-w-4xl mx-auto mt-20 text-center ">
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

export default Product;