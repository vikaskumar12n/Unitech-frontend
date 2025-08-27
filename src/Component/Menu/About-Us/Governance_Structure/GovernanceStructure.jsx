import { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import ChairmanEmeritus from "./CorporateManagement";
import { Link } from "react-router-dom";

const GovernanceStructure = () => {
  const [expanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("CORPORATE MANAGEMENT");
  const menuItems = [
    { name: "CORPORATE MANAGEMENT", type: "component", component: <ChairmanEmeritus /> },
    { name: "COMMITTEES", type: "pdf", url: "/E Call Letter.pdf" },
  ];

  const handleClick = (item) => {
    if (item.type === "pdf") {

      window.open(item.url, "_blank");
    } else {
      setSelectedItem(item.name);
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Governance Structure</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow-md">Discover our journey, values, and commitment to excellence</p>
        </div>
        
        {/* Menu Toggle */}
          <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">Governance Structure</h2>
           
          </div>
        </div>
      </div>
      


      <div
        className={`overflow-hidden bg-[#2d3e50] text-gray-200 transition-all duration-500 ease-in-out ${expanded ? "max-h-[500px] py-6" : "max-h-0 py-0"
          }`}
      >

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10 px-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className={`text-sm block text-left hover:text-white cursor-pointer ${selectedItem === item.name ? "font-bold text-white" : ""
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <nav className="flex items-center p-4 bg-gray-100 text-gray-500">
        <Link to="/" className="text-color hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">About US</span>
      </nav>

      <div className="px-8 py-10">
        {menuItems.find((item) => item.name === selectedItem && item.type === "component")
          ?.component}
      </div>
    </>
  );
};

export default GovernanceStructure;
