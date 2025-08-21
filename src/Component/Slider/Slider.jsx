import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Slider.css";

const slides = [
  {
    image: "/public/slide4.jpg",
    heading: "Welcome FABAIR",
    subheading: "We Build Your Dream",
    description:
      "Fabair Cooling Solutions is a Bangalore based specialist organisation and service provider of HVACR solutions started in 2018.",
    subheadingColor: "text-white",
    headingColor: "text-white text-shadow-lg ",
    descriptionColor: "bg-black/10 text-white   ",
  },
  {
    image: "/slide12.jpg",
    heading: "Innovative Solutions",
    subheading: "We Create Comfort",
    description:
      "Delivering innovative HVAC solutions with advanced technology.",
    subheadingColor: "text-white text-shadow-lg",
    headingColor: "text-white text-bold text-shadow-lg",
    descriptionColor: " bg-black/10 text-white text-bold text-shadow-lg",
  },
  {
    image: "/fabairbanner.jpg",
    heading: "Professional Service",
    subheading: "Trusted Since 2018",
    description:
      "Providing professional and trusted services to clients across Bangalore.",
    subheadingColor: "text-whiet text-bold text-shadow-lg",
    headingColor: "text-white text-shadow-lg",
    descriptionColor: " bg-black/10 text-white text-shadow-lg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aosKey, setAosKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
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

  return (
    <div
      className="slider-container relative bg-center bg-no-repeat bg-cover text-white"
      data-aos="fade-down"
          data-aos-delay="300"
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
        backgroundPosition: `center ${scrollY * 0.4}px`,
      }}
    >
      

      <div key={aosKey} className="relative max-w-4xl text-left">
        <p
        
          data-aos="fade-down"
          data-aos-delay="0"
          className={`text-lg sm:text-4xl mb-2 mt-20 ms-20 ${slides[currentSlide].subheadingColor}`}
        >
          {slides[currentSlide].subheading}
        </p>

        <h1
        
          data-aos="fade-down"
          data-aos-delay="200"
          className={`text-3xl sm:text-5xl md:text-7xl mt-5 font-bold mb-4 ms-20 ${slides[currentSlide].headingColor}`}
        >
          {slides[currentSlide].heading}
        </h1>

        <p
          data-aos="fade-down"
          data-aos-delay="400"
          className={`text-sm sm:text-base md:text-lg mt-5 mb-6 ms-20 ${slides[currentSlide].descriptionColor}`}
        >
          {slides[currentSlide].description}
        </p>

        <div
          data-aos="fade-down"
          data-aos-delay="600"
          className="flex flex-col sm:flex-row gap-4 mt-5 ms-20"
        >
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
            READ MORE
          </button>
          <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
