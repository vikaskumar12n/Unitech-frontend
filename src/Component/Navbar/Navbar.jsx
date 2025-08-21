import { useState, useEffect } from "react";
import MenuBar from '../Menu/Menubar';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY + 10) {
     
      setShow(false);
    } else if (window.scrollY < lastScrollY - 10) {
      
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-sm fixed top-0 left-0 w-full z-50 transform transition-transform duration-500 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="flex items-center p-4">
          <img
            src="/logo.png"
            alt="Blue Star Logo"
            className="h-12 w-auto"   
          />
        </div>

       
        <ul className="hidden md:flex justify-center flex-1 items-center text-sm space-x-2 text-blue-600">
          <li><a href="#" className="hover:underline">Locations</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Dealers</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Dealership</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Careers</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">TVCs</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Consumers</a></li>
          <span className="text-black">/</span>
          <li><a href="#" className="hover:underline">Resources</a></li>
        </ul>
      </div>
 
      <MenuBar />
    </nav>
  );
};

export default Navbar;
