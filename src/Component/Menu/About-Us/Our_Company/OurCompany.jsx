import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import CompanyDetails from "./CompanyDetails";
import FounderSection from "./FounderDetails";
import { Link } from "react-router-dom";

const OurCompany = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Company Profile"); // default

  const menuItems = [
    { name: "Company Profile", component: <CompanyDetails /> },
    { name: "Founder", component: <FounderSection /> },
    // { name: "The Blue Star Way", component: <div>The Blue Star Way Content...</div> },
    // { name: "History", component: <div>History Content...</div> },
    // { name: "Our Expertise", component: <div>Expertise Content...</div> },
    // { name: "Vision", component: <div>Vision Content...</div> },
    // { name: "Milestones", component: <div>Milestones Content...</div> },
  ];

  return (
    <>
      {/* Banner */}
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

        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
            <h2 className="text-base md:text-lg font-semibold">OUR COMPANY</h2>
            <button
              className="text-lg md:text-xl px-2 py-1 rounded"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`overflow-hidden bg-[#2d3e50] text-gray-200 transition-all duration-500 ease-in-out ${expanded ? "max-h-[500px] py-6" : "max-h-0 py-0"
          }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-10 px-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedItem(item.name);

              }}
              className={`text-sm block text-left hover:text-white cursor-pointer ${selectedItem === item.name ? "font-bold text-white" : ""
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      <nav className="flex items-center p-4 bg-gray-100 text-gray-500">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900">About US</span>
    </nav>
      {/* Dynamic Content */}
      <div className="px-8 py-10">
        {menuItems.find((item) => item.name === selectedItem)?.component}
      </div>
    </>
  );
};

export default OurCompany;
