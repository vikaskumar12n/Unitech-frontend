import { useState, useEffect } from "react";
import { FaBars, FaSortDown, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY + 10) setShow(false);
    else if (window.scrollY < lastScrollY - 10) setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // MenuBar states
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const menuItems = [
    {
      name: "HOME",
      li: <FaSortDown />,
      link: "/",
      // icon: <FaHome className="inline-block mb-1 text-sm text-blue-600" />,
    },
    {
      name: "ABOUT US",
      li: <FaSortDown />,
      // icon: <FaInfoCircle className="inline-block mb-1 text-sm text-blue-600" />,
      dropdown: [
        { name: "Our Company", link: "/about-us" },
        { name: "Governance Structure", link: "/governance-structure" },
        { name: "Guiding Policies", link: "/guiding-policies" },
      ],
    },
    {
      name: "PRODUCTS",
      li: <FaSortDown />,
      // icon: <FaBoxOpen className="inline-block mb-1 text-sm text-blue-600" />,
      dropdown: [
        { name: "Overview", link: "/overview" },
        { name: "Room Air Conditioners", link: "/product" },
        { name: "Cassette Air Conditioner", link: "/" },
        { name: "Verticool Air Conditioner", link: "/" },
        { name: "Central Air Conditioner", link: "/" },
        { name: "Heat Pumps", link: "/" },
        { name: "Commercial Refrigrater", link: "/" },
        { name: "Cold Storage", link: "/" },
        { name: "Water Coolers", link: "/" },
        { name: "Speciality Product", link: "/" },
      ],
    },
    // {
    //   name: "CUSTOMER SERVICE",
    //   li: <FaSortDown />,
    //   // icon: <FaHeadset className="inline-block mb-1 text-sm text-blue-600" />,
    //   dropdown: [
    //     { name: "Service Solution", link: "/" },
    //     { name: "Certifications", link: "/" },
    //     { name: "Warranty Registration", link: "/" },
    //     { name: "Installation and Service Costs", link: "/" },
    //     { name: "Buy Extended warranty & AMC", link: "/" },
    //     { name: "Service Escalation", link: "/" },
    //   ],
    // },

    {
      name: "SOLUTIONS",
      li: <FaSortDown />,
      // icon: <FaNewspaper className="inline-block mb-1 text-sm text-blue-600" />,
      link: "/solution"
      
    },
    {
      name: "CONTACT US",
      li: <FaSortDown />,
      link: "/contactus",
      // icon: <FaNewspaper className="inline-block mb-1 text-sm text-blue-600" />,
    },
  ];

  return (
    <nav
      className={`bg-white shadow-sm fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      {/* Top Navbar */}
<div
  className="top_section text-white h-9 text-xs py-2 px-4 flex justify-between items-center relative overflow-hidden"
>
  {/* Background Layers */}
  <div className="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
  <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-300"></div>
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-300 rounded-full"></div>

  {/* Left Section - Contact Info */}
  <div className="flex items-center space-x-4 relative z-10">
    
    <Link href="tel:+919890989098" className="flex items-center">
      <FaPhoneAlt className="text-blue-300 mr-2 text-2xl" />
      <span>+919890989098</span>
    </Link>
    <span className="h-4 border-l border-gray-600"></span>
    
    <Link href="mailto:info@myholidays.com" className="flex  items-center">
      <FaEnvelope className="text-blue-300 mr-2 text-2xl" />
      <span>info@myholidays.com</span>
    </Link>
  </div>

  {/* Right Section - Social Links */}
  <div className="hidden sm:flex items-center space-x-4 relative z-10">
    <a href="#" className="flex items-center hover:text-white">
      <span className="h-4 border-l border-gray-600 mr-4"></span>
      <FaLinkedin className="text-black mr-1" />
      <span className="hidden sm:inline">LinkedIn</span>
    </a>
    <a href="#" className="flex items-center hover:text-white">
      <span className="h-4 border-l border-gray-600 mr-4"></span>
      <FaFacebook className="text-black mr-1" />
      <span className="hidden sm:inline">Facebook</span>
    </a>
    <a href="#" className="flex items-center hover:text-white">
      <span className="h-4 border-l border-gray-600 mr-4"></span>
      <FaInstagram className="text-black mr-1" />
      <span className="hidden sm:inline">Instagram</span>
    </a>
  </div>
</div>



      {/* MenuBar */}
      <div
        className={`fixed w-full  py-4  z-50 transition-colors duration-300 ${mobileMenuOpen ? "bg-blue-900" : "bg-transparent"
          } ${isDesktop ? "menu" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Menu */}
          <div className="items-center hidden md:flex">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
          <ul className="hidden md:flex space-x-7 justify-center text-xs">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group text-black text-2xl font-bold hover:text-blue-400 transition duration-300"
                onMouseEnter={() => setOpenDropdown(index)}
                onClick={() => setOpenDropdown(null)}
                onMouseLeave={() => setOpenDropdown(false)}
              >

                {item.link ? (
                  <Link
                    to={item.link}
                    className="relative group text-black text-sm font-semibold transition duration-300 "
                  >
                    {item.icon} {item.name}
                    <span className="absolute w-full left-1/2 -translate-x-1/2 -bottom-1 h-1  bg-blue-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
                  </Link>
                ) : (
                  <button className="relative group text-black text-sm font-semibold transition duration-300 cursor-default inline-block">
                    <span className="flex items-center gap-1">
                      {item.icon} {item.name} {item.li}
                    </span>
                    <span className="absolute  w-full left-1/2 -translate-x-1/2 -bottom-1 h-1  bg-blue-400 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-center"></span>
                  </button>
                )}


                {item.dropdown && (
                  <ul
                    className={`absolute top-full mt-2 w-56 text-gray-800 bg-white rounded-lg shadow-lg z-50
                transition duration-300 ease-in-out transform
                ${openDropdown === index ? "visible opacity-100" : "invisible opacity-0"}`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="last:rounded-b-lg first:rounded-t-lg">
                        <Link
                          to={subItem.link || "/"}
                          className="block py-3 px-4 text-sm cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out text-black"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>


          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`text-2xl ${mobileMenuOpen ? "text-white" : "text-white"
                } absolute  top-[-2.2rem] right-4`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-3 space-y-2 text-left text-white">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group text-white hover:text-gray-300 transition duration-300"
              >
                <button
                  className="text-xs"
                  onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                >
                  {item.name}
                </button>

                {item.dropdown && (
                  <ul
                    className={`absolute top-full mt-2 w-56 text-gray-800 bg-white rounded-lg shadow-lg z-50
                 transition duration-300 ease-in-out transform
                 ${openDropdown === index ? "visible opacity-100" : "invisible opacity-0"}`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="last:rounded-b-lg first:rounded-t-lg">
                        <Link
                          to={subItem.link || "/"}
                          className="block py-3 px-4 text-sm cursor-pointer hover:bg-blue-100 transition duration-300 ease-in-out text-blue-700"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

            ))}
          </ul>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
