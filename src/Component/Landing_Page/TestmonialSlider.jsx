import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../Helpers/Heading";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../App.css'

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
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });


    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };


    handleResize();


    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    pauseOnHover: true,
    arrows: false,
    dotsClass: "slick-dots custom-dots",

  };

  return (


      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">                 
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-100 h-100  bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-full h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>
    <div className="relative w-full py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">


      <div className="absolute bottom-0 right-0 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto z-10">

        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2" data-aos="fade-down">

          <div
            className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            What <span className="text-color">Our</span> Clients Say
            <SectionHeading />
          </div>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            Real experiences from our valued customers
          </p>
        </div>


        <div className="testimonial-slider px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
          <Slider {...settings} key={slidesToShow}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2">
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 xl:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 min-h-[400px] flex flex-col">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-4 sm:mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r bg-color rounded-full flex items-center justify-center shadow-md">
                      <FaQuoteLeft className="text-white text-sm sm:text-lg" />
                    </div>
                  </div>

                  {/* Feedback Text */}
                  <div className="mb-5 sm:mb-6 flex-1">
                    <p className="text-gray-700 text-justify leading-relaxed text-sm sm:text-base italic">
                      &quot;{item.feedback}&quot;
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-5 sm:mb-6">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-base sm:text-lg ${i < item.rating
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
                      <p className="text-xs sm:text-sm text-color font-medium mt-1">
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
    </div>
  );
};

export default TestimonialSlider;