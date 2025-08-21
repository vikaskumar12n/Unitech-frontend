import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ChairmanEmeritus from "./CorporateManagement";

const GovernanceStructure = () => {
  const [expanded, setExpanded] = useState(false);
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
      
      <div className="relative w-full h-[350px] mt-15 overflow-hidden">
        <img
          src="about-banner.jpg"
          alt="Company Buildings"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">GOVERNANCE STRUCTURE</h2>
            <button
              className="text-lg md:text-xl px-2 py-1 rounded"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

     
      <div
        className={`overflow-hidden bg-[#2d3e50] text-gray-200 transition-all duration-500 ease-in-out ${
          expanded ? "max-h-[500px] py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10 px-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className={`text-sm block text-left hover:text-white cursor-pointer ${
                selectedItem === item.name ? "font-bold text-white" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

     
      <div className="px-8 py-10">
        {menuItems.find((item) => item.name === selectedItem && item.type === "component")
          ?.component}
      </div>
    </>
  );
};

export default GovernanceStructure;
