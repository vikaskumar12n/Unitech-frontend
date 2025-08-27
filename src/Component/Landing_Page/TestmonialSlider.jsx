import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../Services/HeadingSection/Heading";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Sample data with improved content
const testimonials = [
  {
    id: 1,
    name: "Saurabh Verma",
    role: "Customer",
    feedback:
      "Outstanding service! The team delivered beyond expectations with professional installation and excellent ",
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
      "Professional service from start to finish. The installation was clean, efficient, and the follow-up support  ",
    image: "/person2 (2).jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Hotel Manager",
    feedback:
      "Reliable and efficient solutions for our hospitality business. The team understands commercial needs  .",
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
    centerPadding: "40px",
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
          centerPadding: "20px"
        },
      },
      {
        breakpoint: 640,
        settings: { 
          slidesToShow: 1, 
          centerMode: false,
          centerPadding: "20px"
        },
      },
    ],
  };

  return (
    <div className="relative w-full py-12 px-4">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="relative max-w-6xl mx-auto z-10">
        
        {/* Section Heading */} 
            <div className="text-center mb-16" data-aos="fade-down">
          <SectionHeading
            title="What Our Clients Say"
            className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-color text-2xl md:text-2xl lg:text-3xl mb-4"
          />
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
              Real experiences from our valued customers
            </p>
        </div>

        {/* Simple Slider */}
        <div className="testimonial-slider" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-3">
                <div className="bg-white rounded-lg shadow-md p-6 mx-2 h-auto">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-10 h-10 bg-color rounded-full flex items-center justify-center">
                      <FaQuoteLeft className="text-white text-sm" />
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div className="mb-4">
                    <p className="text-black text-justify leading-relaxed text-sm ">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`text-sm ${
                            i < item.rating 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="text-center">
                    {/* Profile Image */}
                    <div className="mb-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-full mx-auto border-2 border-gray-200 object-cover"
                      />
                    </div>
                    
                    {/* Name and Role */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-color font-medium">
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