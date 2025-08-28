import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../Services/HeadingSection/Heading";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    name: "Saurabh Verma",
    role: "Customer",
    feedback:
      "Outstanding service! The team delivered beyond expectations with professional installation and excellent support.",
    image: "/persan1.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Singh",
    role: "Business Owner",
    feedback:
      "Exceptional quality and reliability. Our commercial AC systems have been running flawlessly since installation.",
    image: "/person2 (1).jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Homeowner",
    feedback:
      "Professional service from start to finish. The installation was clean, efficient, and the follow-up support was excellent.",
    image: "/person2 (2).jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Hotel Manager",
    feedback:
      "Reliable and efficient solutions for our hospitality business. The team understands commercial needs perfectly.",
    image: "/person2 (3).jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Amit Kumar",
    role: "Developer",
    feedback:
      "Impressive technical knowledge and professional approach. They handled our complex requirements with ease.",
    image: "/person2 (3).jpg",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    pauseOnHover: true,
    dotsClass: "slick-dots custom-dots",
    arrows: false, // Hide arrows on mobile for cleaner look
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "40px", // Add some padding for preview
        },
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading */} 
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2" data-aos="fade-down">
          <SectionHeading
            title="What Our Clients Say"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-4"
          />
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Real experiences from our valued customers
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-1 sm:px-2">
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 xl:p-7 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 mx-2">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                      <FaQuoteLeft className="text-white text-sm sm:text-lg" />
                    </div>
                  </div>
                  
                  {/* Feedback Text */}
                  <div className="mb-5 sm:mb-6">
                    <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base lg:text-base italic px-1 sm:px-0">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-5 sm:mb-6">
                    <div className="flex space-x-0.5 sm:space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-base sm:text-lg ${
                            i < item.rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Profile Section */}
                  <div className="text-center pt-3 border-t border-gray-100">
                    {/* Profile Image */}
                    <div className="mb-3 sm:mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full mx-auto border-4 border-white shadow-md object-cover"
                      />
                    </div>
                    
                    {/* Name and Role */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-600 font-medium mt-1">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

     
    </div>
  );
};

export default TestimonialSlider;