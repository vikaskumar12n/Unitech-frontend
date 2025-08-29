import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./SolutionSlideChild";
import SectionHeading from "../../../Helpers/Heading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";


const services = [
  {
    id: 1,
    title: "Air Quality Check",
    description:
      "Professional air quality assessment to ensure healthy indoor environment for your home or office.",
    image: "/Air-Quality-Check.jpg",
  },
  {
    id: 2,
    title: "PIR Ducting",
    description:
      "High-performance PIR ducting solutions for superior thermal insulation and energy efficiency.",
    image: "/PIR-Ducting.jpg",
  },
  {
    id: 3,
    title: "Basement Ventilation",
    description:
      "Specialized basement ventilation systems to prevent moisture buildup and improve air quality.",
    image: "/Basement-Ventilation.jpg",
  },
  {
    id: 4,
    title: "STP Ventilation",
    description:
      "Efficient ventilation solutions for Sewage Treatment Plants to ensure optimal operation.",
    image: "/STP-Ventilation.jpg",
  },
  {
    id: 5,
    title: "Air Balancing",
    description:
      "Precision air balancing services for optimal HVAC performance and energy efficiency.",
    image: "/Air-Balancing.jpg",
  },
];




const ServiceSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);


  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else if (width < 1280) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };


    handleResize();


    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow, // Dynamic value
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,


    customPaging: function () {
      return (
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300 mx-1 transition-all duration-300 hover:bg-cyan-900"></div>
      );
    },
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxZTI5N2IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="mb-8 sm:mb-12 text-center">

          <div
            className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            View  <span className="text-color">More </span>Services
            <SectionHeading />
          </div>

          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto px-4">
            Explore our comprehensive range of HVAC solutions designed to meet your specific needs
          </p>
        </div>

        <div className="relative">
          <Slider ref={setSliderRef} {...settings} key={slidesToShow}>
            {services.map((service) => (
              <div key={service.id} className="px-2 sm:px-3 lg:px-4 w-full box-border">
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </Slider>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-cyan-50 transition-colors duration-300"
              onClick={() => sliderRef?.slickPrev()}
            >
              <FaChevronLeft className="text-sm sm:text-base text-cyan-600" />
            </button>
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-color hover:bg-cyan-50 transition-colors duration-300"
              onClick={() => sliderRef?.slickNext()}
            >
              <FaChevronRight className="text-sm sm:text-base text-cyan-600" />
            </button>
          </div>
        </div>


      </div>


      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default ServiceSlider;