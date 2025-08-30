import { useState, useEffect } from "react";
 
import CompanyDetails from "./CompanyDetails";
import FounderSection from "./FounderDetails";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
 
const OurCompany = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Company Profile");
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentContent, setCurrentContent] = useState(<CompanyDetails />);

  const menuItems = [
    { name: "Company Profile", component: <CompanyDetails /> },
    { name: "Founder", component: <FounderSection /> },
  ];

  useEffect(() => {
    if (selectedItem) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        const selectedComponent = menuItems.find(item => item.name === selectedItem)?.component || <CompanyDetails />;
        setCurrentContent(selectedComponent);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const handleMenuItemClick = (itemName) => {
    setSelectedItem(itemName);
    setExpanded(false);
  };

  return (
    <>
    <div className="overflow-hidden">
      {/* Banner */}
     <div className="relative w-full h-[500px] overflow-hidden">
  {/* Responsive Image */}
  <img 
    src="/about.jpg" 
    alt="Water Cooler" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  
  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
      About<span className="text-blue-500">Us</span>
          </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8">
      Delivering quality with trust and innovation
    </p>
  </div>
  
  {/* Bottom Label */}
  <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
      <h2 className="text-base md:text-lg font-semibold">About Us</h2>
    </div>
  </div>
</div>
      {/* Enhanced Dropdown Menu */}
      <div
        className={`overflow-hidden w-full bg-gradient-to-r from-blue-700 to-cyan-700 text-gray-200 transition-all duration-500 ease-in-out ${expanded ? "max-h-[500px] py-6 shadow-lg" : "max-h-0 py-0"}`}
      >
        <div className="container mx-auto w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleMenuItemClick(item.name)}
                className={`flex items-center p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:bg-white/10 ${selectedItem === item.name ? "bg-white/20 font-bold text-white shadow-md" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${selectedItem === item.name ? "bg-white text-blue-700" : "bg-white/20"}`}>
                  <span className="font-bold">{idx + 1}</span>
                </div>
                <span className="text-left">{item.name}</span>
                {selectedItem === item.name && <FaChevronRight className="ml-auto" />}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Breadcrumb */}
      <nav className="flex  items-center p-4 bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2 text-gray-400">
              <FaChevronRight className="text-xs" />
            </span>
            <span className="text-gray-700 font-medium">About Us</span>
            <span className="mx-2 text-gray-400">
              <FaChevronRight className="text-xs" />
            </span>
            <span className="text-gray-900 font-semibold">{selectedItem}</span>
          </div>
        </div>
      </nav>
      
      {/* Dynamic Content with Animation */}
     <div className="w-screen   ">
  <div className="max-w-8xl mx-auto">
    <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {currentContent}
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default OurCompany;