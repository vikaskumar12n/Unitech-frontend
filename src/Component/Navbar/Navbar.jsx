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
      link: "/about-us" 
    },
    {
      name: "PRODUCTS",
      li: <FaSortDown />,
      // icon: <FaBoxOpen className="inline-block mb-1 text-sm text-blue-600" />,
      dropdown: [
        {
          name: "Room Air Conditioners",
          link: "/product"
        },
        {
          name: "Air Coolers",
          link: "/aircooler"
        },
        {
          name: "Refrigeration",
          link: "/refrigeration"
        }, {
          name: "Cassette Air Conditioners",
          link: "/cassetteairconditioners"
        }, {
          name: "Verticool Air Conditioners",
          link: "/verticoolair"
        }
        , {
          name: "Central Air Conditioning",
          link: "/centralairconditioner"
        }
        , {
          name: "Heat Pumps",
          link: "/heatpump"
        }
        , {
          name: "Cold Storages",
          link: "/coldstorage"
        }
        , {
          name: "Water Coolers",
          link: "/watercooler"
        }, 
      ],
    },
    

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
      <div className="top_section h-9 text-xs py-2 px-4 flex justify-between items-center relative overflow-hidden sticky top-0 z-50"
      >
        {/* Background Layers */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-color"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-color rounded-full"></div>

        {/* Left Section - Contact Info */}
       <div className="flex items-center space-x-4 relative z-10">
  {/* Phone Call */}
  <a href="tel:+919890989098" className="flex items-center">
    <FaPhoneAlt className="text-color mr-1 text-2xl" />
    <span>+919890989098</span>
  </a>

  <span className="h-4 border-l border-gray-600"></span>

  {/* Email */}
  <a
    href="mailto:hr.codecrafter@gmail.com"
    className="flex items-center"
  >
    <FaEnvelope className="text-color mr-2 text-2xl" />
    <span>info@myholidays.com</span>
  </a>
</div>


        {/* Right Section - Social Links */}
        <div className="hidden sm:flex items-center space-x-4 relative z-10">
          <Link to="https://www.linkedin.in/" target="_blank"
    rel="noopener noreferrer" className="flex items-center text-white hover:text-white">
            <span className="h-4 border-l border-white mr-4"></span>
            <FaLinkedin className="text-white mr-1" />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
          <Link to="https://www.facebook.com/" target="_blank"
    rel="noopener noreferrer" className="flex items-center text-white hover:text-white">
            <span className="h-4 border-l border-white mr-4"></span>
            <FaFacebook className="text-white mr-1" />
            <span className="hidden sm:inline">Facebook</span>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank"
    rel="noopener noreferrer" className="flex items-center text-white hover:text-white">
            <span className="h-4 border-l border-white mr-4"></span>
            <FaInstagram className="text-white mr-1" />
            <span className="hidden sm:inline">Instagram</span>
          </Link>
        </div>
      </div>



      {/* MenuBar */}
      <div
        className={`fixed w-full py-4 z-50 transition-all duration-500 ease-in-out backdrop-blur-lg ${mobileMenuOpen
            ? "bg-gradient-to-r from-blue-900/95 to-indigo-900/95 shadow-2xl"
            : "bg-transparent"
          } ${isDesktop ? "menu" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-0 group">
            <div className="relative"> 
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
             <img src="/unitect_logo.PNG" alt="Unitech Aircon" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="relative flex items-center space-x-1 py-2 text-gray-700 font-bold group-hover:text-blue-600 transition-colors duration-300"
                  >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <button className="flex items-center space-x-1 py-2 text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <span>{item.li}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                )}

          {/* Dropdown Menu */}
{item.dropdown && (
  <div
    className={`absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-xl transition-all duration-300 transform ${
      openDropdown === index
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 -translate-y-0 invisible"
    }`}
    style={{ maxHeight: "300px" }}
  >
    <div className="py-2 max-h-72 overflow-y-auto">  
      {item.dropdown.map((subItem, subIndex) => (
        <Link
          key={subIndex}
          to={subItem.link || "/"}
          className="block px-4 py-3 text-sm text-black hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-colors duration-200"
        >
          {subItem.name}
        </Link>
      ))}
    </div>
  </div>
)}

              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${mobileMenuOpen
                  ? "bg-white/20 text-white"
                  : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-y-auto transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                {item.link ? (
                  <Link
                    to={item.link}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ) : (
                  <>
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <span>{item.li}</span>
                    </button>
                    {item.dropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${openDropdown === index ? "max-h-96" : "max-h-0"
                          }`}
                      >
                        <div className="pl-8 py-2 space-y-1">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.link || "/"}
                              className="block px-4 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                              onClick={() => {
                                setOpenDropdown(null);
                                setMobileMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
