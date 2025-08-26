
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeading from "../../Services/HeadingSection/Heading";
import { FaStar } from "react-icons/fa";

// Sample data (you can keep your existing data)
const testimonials = [
  {
    id: 1,
    name: "Saurabh Verma",
    role: "Customer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "/persan1.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Singh",
    role: "Business Owner",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "/person2 (1).jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Homeowner",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "/person2 (2).jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "Hotel Manager",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "/person2 (3).jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Amit Kumar",
    role: "Developer",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "/person2 (3).jpg",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  return (
    <div
      className="relative max-w-full py-16 px-4 mb-10 overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/15691.jpg n')" }}
    >
      <div className="absolute inset-0   bg-opacity-50"></div>
      <div className="relative max-w-6xl mx-auto">
        <div className="mt-0 mb-10">
          <SectionHeading
            title="What Our Clients Say"
            className="font-extrabold text-center text-black text-1xl md:text-2xl"
          />
        </div>

        {/* This is where the Slider component wraps the cards */}
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-2 sm:px-3">
              <div
                className="relative bg-[#001D34] rounded-[30px] shadow-lg
                          p-6 sm:p-8 text-white text-center transform transition duration-500 hover:scale-105"
              >
                {/* Quotation Mark Icon */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/20">
                  <svg
                    className="w-12 h-12 sm:w-16 sm:h-16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 20H4V13H9.2C10.2 13 11 12.2 11 11.2V4H4V11H2V4C2 2.9 2.9 2 4 2H11V11.2C11 12.2 11.8 13 12.8 13H20V20H13V13H11V20Z" />
                  </svg>
                </div>
                {/* Feedback */}
                <p className="text-xs sm:text-sm md:text-base italic leading-relaxed pt-8 sm:pt-10 mb-4">
                  {item.feedback}
                </p>

                {/* Profile Image & Details */}
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto 
                                    border-4 border-white object-cover shadow-lg"
                  />
                  <h3 className="text-base sm:text-lg font-semibold text-white mt-3">
                    {item.name}
                  </h3>
                  <span className="text-xs sm:text-sm text-gray-300">{item.role}</span>
                </div>
                {/* Star Rating - Optional (uncomment if needed) */}
                <div className="flex justify-center mt-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm sm:text-base mx-0.5" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;