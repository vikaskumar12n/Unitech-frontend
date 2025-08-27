import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slider.css";

const slides = [
  {
    image: "/slide4.jpg",
    heading: "Welcome FABAIR",
    subheading: "We Build Your Dream",
    description:
      "Fabair Cooling Solutions is a Bangalore based specialist organisation and service provider of HVACR solutions started in 2018.",
    subheadingColor: "text-white",
    headingColor: "text-white font-extrabold text-shadow-lg",
    descriptionColor: "text-white",
  },
  {
    image: "/slide12.jpg",
    heading: "Innovative Solutions",
    subheading: "We Create Comfort",
    description:
      "Delivering innovative HVAC solutions with advanced technology.",
    subheadingColor: "text-white text-shadow-lg",
    headingColor: "text-white font-extrabold text-shadow-lg",
    descriptionColor: "text-white",
  },
  {
    image: "/fabairbanner.jpg",
    heading: "Professional Service",
    subheading: "Trusted Since 2018",
    description:
      "Providing professional and trusted services to clients across Bangalore.",
    subheadingColor: "text-white font-bold text-shadow-lg",
    headingColor: "text-white font-extrabold text-shadow-lg",
    descriptionColor: "text-white",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aosKey, setAosKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-out" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAosKey((prev) => prev + 1);
    AOS.refresh();
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className="slider-container relative bg-center bg-no-repeat bg-cover text-white overflow-hidden h-screen"
      data-aos="fade"
      data-aos-delay="300"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundPosition: `center ${scrollY * 0.4}px`,
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
      
      {/* Slide content */}
      <div 
        key={aosKey} 
        className={`relative max-w-4xl text-left z-20 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        <p
          data-aos="fade-right"
          data-aos-delay="100"
          className={`text-lg sm:text-2xl md:text-3xl mb-2 ${slides[currentSlide].subheadingColor} font-light tracking-wide`}
        >
          {slides[currentSlide].subheading}
        </p>
        <h1
          data-aos="fade-right"
          data-aos-delay="300"
          className={`text-4xl sm:text-5xl md:text-7xl mt-2 font-bold mb-4 ${slides[currentSlide].headingColor} leading-tight`}
        >
          {slides[currentSlide].heading}
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="500"
          className={`text-base sm:text-lg md:text-xl mt-4 mb-8 max-w-2xl ${slides[currentSlide].descriptionColor} leading-relaxed`}
        >
          {slides[currentSlide].description}
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col sm:flex-row gap-4 mt-2"
        >
          <button className="relative overflow-hidden bg-color text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 group">
            <span className="relative z-10">READ MORE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-bg-color to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button className="relative overflow-hidden bg-transparent text-white font-bold px-8 py-3 rounded-lg border-2 border-white transition-all duration-300 transform hover:scale-105 hover:bg-blue-900 group">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-bg-color to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-blue-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 text-white p-3 rounded-full hover:bg-black/50 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;