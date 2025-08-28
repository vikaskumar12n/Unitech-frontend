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
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2, 
          centerMode: false,
          centerPadding: "0px"
        },
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1, 
          centerMode: false,
          centerPadding: "0px"
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading */} 
        <div className="text-center mb-16" data-aos="fade-down">
          <SectionHeading
            title="What Our Clients Say"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-3xl md:text-4xl mb-4"
          />
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Real experiences from our valued customers
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2 md:px-3">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-7 mx-1 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                      <FaQuoteLeft className="text-white text-lg" />
                    </div>
                  </div>
                  
                  {/* Feedback Text */}
                  <div className="mb-6">
                    <p className="text-gray-700 text-center leading-relaxed text-base md:text-base italic">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-lg ${
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
                    <div className="mb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-full mx-auto border-4 border-white shadow-md object-cover"
                      />
                    </div>
                    
                    {/* Name and Role */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-blue-600 font-medium mt-1">
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