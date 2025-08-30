import { useState, useEffect } from 'react';
import { FaSnowflake, FaBolt, FaLeaf, FaShieldAlt } from 'react-icons/fa';
import ProductCard from '../Room-air-con/ProductCard';
import { Link } from 'react-router-dom';
// Enhanced ProductCard component
// eslint-disable-next-line react/prop-types


const Refrigeration = () => {
    const [activeSection, setActiveSection] = useState('DeepFreezer');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const products = [
        {
            id: 1,
            title: "NEYW Series | Hard Top | Deep Freezer 71 Litres | 2 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d1.webp",
            rating: 4,
            price: "15,000",
            badge: "BESTSELLER",
            features: [
                { icon: <FaSnowflake />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
        {
            id: 2,
            title: "NEYW Series | Hard Top | Deep Freezer 108 Litres | 3 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d2.webp",
            rating: 5,
            price: "16,490",
            badge: "SMART",
            features: [
                { icon: <FaSnowflake />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
        {
            id: 3,
            title: "NEYW Series | Hard Top | Deep Freezer 161 Litres | 4 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d3.webp",
            rating: 4,
            price: "11,990",
            features: [
                { icon: <FaSnowflake />, text: "Capacity:161" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
        {
            id: 4,
            title: "NEYW Series | Hard Top | Deep Freezer 215 litres | 4 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d4.webp",
            rating: 4,
            price: "20,999",
            features: [
                { icon: <FaSnowflake />, text: "Capacity:161" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
        {
            id: 5,
            title: "MEW Series | Hard Top | Deep Freezer 301 Litres | 3 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d5.webp",
            rating: 4,
            price: "25,490",
            features: [
                { icon: <FaSnowflake />, text: "Capacity:161" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
        {
            id: 6,
            title: "NEYW Series | Hard Top | Deep Freezer 310 Litres | 5 Star",
            description: "Offers a versatile temperature range for both cooling and freezing, making it ideal for storing a wide variety of products",
            image: "/Product/Refrigrator/d5.webp",
            rating: 4,
            price: "26,490",
            features: [
                { icon: <FaSnowflake />, text: "Capacity:161" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaLeaf />, text: "4 Year Comprehensive Warranty (T&Cs)" }
            ]
        },
    ];

    const VisiCooler = [
        {
            id: 1,
            title: "SC Series | Floor Standing | Visi Cooler 358 Litres",
            description: "Tropicalised to operate efficiently under tough ambient conditions for long hours of cooling.",
            image: "/Product/Refrigrator/v1.webp",
            rating: 5,
            price: "36,999",
            badge: "BestSeller",
            features: [
                { icon: <FaBolt />, text: "Capacity:358 L" },
                { icon: <FaShieldAlt />, text: "Compare" },
                { icon: <FaLeaf />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },
        {
            id: 2,
            title: "SC Series | Floor Standing | Visi Cooler 285 Litres",
            description: "Tropicalised to operate efficiently under tough ambient conditions for long hours of cooling.",
            image: "/Product/Refrigrator/v2.webp",
            rating: 5,
            price: "33,999",
            badge: "BestSeller",
            features: [
                { icon: <FaBolt />, text: "Capacity:285 L" },
                { icon: <FaShieldAlt />, text: "Compare" },
                { icon: <FaLeaf />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },

        {
            id: 3,
            title: "SC Series | Floor Standing | Visi Cooler 448 Litres",
            description: "Tropicalised to operate efficiently under tough ambient conditions for long hours of cooling.",
            image: "/Product/Refrigrator/v3.webp",
            rating: 5,
            price: "48,999",
            // badge: "BestSeller",
            features: [
                { icon: <FaBolt />, text: "Capacity:448 L" },
                { icon: <FaShieldAlt />, text: "Compare" },
                { icon: <FaLeaf />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },

        {
            id: 4,
            title: "SC Series | Floor Standing | Visi Cooler 595 Litres",
            description: "Tropicalised to operate efficiently under tough ambient conditions for long hours of cooling.",
            image: "/Product/Refrigrator/v4.webp",
            rating: 5,
            price: "59,999",
            // badge: "BestSeller",
            features: [
                { icon: <FaBolt />, text: "Capacity:595 L" },
                { icon: <FaShieldAlt />, text: "Compare" },
                { icon: <FaLeaf />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },

    ];

    const BottledCooling = [
        {
            id: 1,
            title: "GA Series Floor Standing | Bottled Water Dispenser",
            description: "Sturdy compressor along with eco-friendly operation results in low power consumption and thus savings in power bills.",
            image: "/Product/Refrigrator/b1.webp",
            rating: 5,
            price: "8,890",
            badge: "ECO CHAMPION",
            features: [
                { icon: <FaLeaf />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },
        {
            id: 2,
            title: "GA Series With Refrigerator-White Floor Standing | Bottled Water ",
            description: "Sturdy compressor along with eco-friendly operation results in low power consumption and thus savings in power bills.",
            image: "/Product/Refrigrator/b2.webp",
            rating: 5,
            price: "9,190",
            badge: "2025 Model",
            features: [
                { icon: <FaLeaf />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },
        {
            id: 3,
            title: "GA Series With Refrigerator-Grey Floor Standing | Bottled Water  ",
            description: "Sturdy compressor along with eco-friendly operation results in low power consumption and thus savings in power bills.",
            image: "/Product/Refrigrator/b3.webp",
            rating: 5,
            price: "9,999",
            features: [
                { icon: <FaLeaf />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },
        {
            id: 4,
            title: "GA Series With Refrigerator-Maroon Floor Standing | Bottled Water  ",
            description: "Sturdy compressor along with eco-friendly operation results in low power consumption and thus savings in power bills.",
            image: "/Product/Refrigrator/b4.webp",
            rating: 5,
            price: "9,990",
            features: [
                { icon: <FaLeaf />, text: "Compare" },
                { icon: <FaBolt />, text: "Technical Specifications" },
                { icon: <FaSnowflake />, text: " 1 Year Standard Warranty (T&Cs)" }
            ]
        },

    ];

    const categories = [
        { id: 'DeepFreezer', name: 'Deep Freezers', },
        { id: 'Visi', name: 'Visi Coolers', },
        { id: 'Bottled', name: 'Bottled Water Dispensers', }
    ];

    const getCurrentProducts = () => {
        switch (activeSection) {
            case 'DeepFreezer': return products;
            case 'Visi': return VisiCooler;
            case 'Bottled': return BottledCooling;
            default: return products;
        }
    };

    const getHeroImage = () => {
        switch (activeSection) {
            case 'DeepFreezer': return "/Product/Refrigrator/DF-Desktop_1800x473_01.webp";
            case 'Visi': return "/Product/Refrigrator/VC-Desktop_1800x473_01.webp";
            case 'Bottled': return "/Product/Refrigrator/BWD-Desktop_1800x473_01_47b5cd41-b2bc-49e1-b70a-05d625a6c1bd.webp";
            default: return "/Product/AirCooler/Desert-ACR-LP-1800x473.webp";
        }
    };

    const getSectionTitle = () => {
        switch (activeSection) {
            case 'DeepFreezer': return "Deep Freezers";
            case 'Visi': return "Visi Coolers";
            case 'Bottled': return "Bottled Water Dispensers";
            default: return "Deep Freezers";
        }
    };

    return (
        <>
 <div className="relative w-full h-[500px] overflow-hidden">
  {/* Responsive Image */}
  <img 
    src="/ref.jpg" 
    alt="Water Cooler" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  
  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
      Ref<span className="text-blue-500">rige</span>ration
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8">
      Reliable refrigeration for fresh and long-lasting storage.
    </p>
  </div>
  
  {/* Bottom Label */}
  <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
      <h2 className="text-base md:text-lg font-semibold">Refrigeration</h2>
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
                    <li className="text-gray-500 font-bold">Refrigeration</li>
                  </ol>
                </nav>
            <div className="min-h-screen pb-20  bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Header Section */}
                <div className={`text-center pt-20 pb-10 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r bg-color bg-clip-text text-transparent mb-6">
                        Refrigeration Solutions
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
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeSection === category.id
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
                <div className="relative z-10 px-6 md:px-8 lg:px-12 py-8 ">
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
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

export default Refrigeration;