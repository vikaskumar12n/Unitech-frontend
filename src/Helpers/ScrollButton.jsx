import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';  

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  const handleScroll = () => {
  
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  
    });
  };
 
  useEffect(() => {
  
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r bg-color text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;