import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Navbar scroll hide/show
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
  const [openDropdown, setOpenDropdown] = useState(false);
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
      name: "ABOUT US",
      dropdown: [
        { name: "Our Company", link: "/about-us" },
        { name: "Governance Structure", link: "/governance-structure" },
        { name: "Guiding Policies", link: "/guiding-policies" },
      ],
    },
    {
      name: "PRODUCTS",
      dropdown: [
        { name: "Overview", link: "/overview" },
        { name: "Room Air Conditioners", link: "/" },
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
    {
      name: "PROJECTS",
      dropdown: [
        { name: "MEP and More", link: "/" },
        { name: "Building", link: "/" },
        { name: "Data Centre", link: "/" },
        { name: "Industrial", link: "/" },
        { name: "Infrastructure", link: "/" },
        { name: "Projects Gallery", link: "/" },
        { name: "Vendor Register", link: "/" },
      ],
    },
    {
      name: "CUSTOMER SERVICE",
      dropdown: [
        { name: "Service Solution", link: "/" },
        { name: "Certifications", link: "/" },
        { name: "Warranty Registration", link: "/" },
        { name: "Installation and Service Costs", link: "/" },
        { name: "Buy Extended warranty & AMC", link: "/" },
        { name: "Service Escalation", link: "/" },
      ],
    },
    {
      name: "INTERNATIONAL",
      dropdown: [{ name: "Overview", link: "/" }],
    },
    {
      name: "GROUP COMPANIES",
      dropdown: [
        { name: "Blue Star Climatech Limited", link: "/" },
        { name: "Blue Star Europ B.V", link: "/" },
        { name: "Blue Star Engineering & Electronics Limited", link: "/" },
        { name: "Blue Star International FZCO", link: "/" },
        { name: "Blue Star M & E Engineering (Sdn) Bhd", link: "/" },
        { name: "Blue Star North America Inc.", link: "/" },
        { name: "Blue Star Qatar WLL", link: "/" },
        { name: "Blue Star MEA Airconditioning LLC", link: "/" },
      ],
    },
    {
      name: "PRESS AND INVESTORS",
      dropdown: [
        { name: "Press Releases", link: "/" },
        { name: "Press Clippings", link: "/" },
        { name: "Investors", link: "/" },
      ],
    },
  ];

  return (
    <nav
      className={`bg-white shadow-sm fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top Navbar */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center p-4">
          <img src="/logo.png" alt="Blue Star Logo" className="h-12 w-auto" />
        </div>

        <ul className="hidden md:flex justify-center flex-1 items-center text-sm space-x-2 text-blue-600">
          <li>
            <a href="#" className="hover:underline">
              Locations
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Dealers
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Dealership
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Careers
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              TVCs
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Consumers
            </a>
          </li>
          <span className="text-black">/</span>
          <li>
            <a href="#" className="hover:underline">
              Resources
            </a>
          </li>
        </ul>
      </div>

      {/* MenuBar */}
      <div
        className={`fixed w-full px-6 py-4  z-50 transition-colors duration-300 ${
          mobileMenuOpen ? "bg-blue-900" : "bg-transparent"
        } ${isDesktop ? "menu" : ""}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-7 justify-center text-white text-xs">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  className="hover:text-gray-300 text-xs"
                  onMouseEnter={() => setOpenDropdown(index)}
                >
                  {item.name}
                </button>

                {item.dropdown && openDropdown === index && (
                  <ul
                    className="absolute top-full left-0 mt-2 w-48 menu text-white shadow-lg z-50"
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={
                            subItem.link && subItem.link !== "#"
                              ? subItem.link
                              : "/"
                          }
                          className="block py-2 px-4 text-sm cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
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
              className={`text-2xl ${
                mobileMenuOpen ? "text-white" : "text-black"
              } absolute  top-[-3.5rem] right-4`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-3 space-y-2 text-left text-white">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  className="block w-full text-left py-2 text-xs font-semibold hover:text-gray-300"
                  onClick={() =>
                    item.dropdown
                      ? setOpenDropdown(openDropdown === index ? null : index)
                      : setMobileMenuOpen(false)
                  }
                >
                  {item.name}
                </button>

                {item.dropdown && openDropdown === index && (
                  <ul className="mt-1 bg-blue-800 text-white rounded-md">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem.link || "/"}
                          className="block px-4 py-2 hover:bg-blue-700 cursor-pointer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
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
