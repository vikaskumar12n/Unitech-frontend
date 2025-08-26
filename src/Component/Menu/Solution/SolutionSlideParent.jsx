// src/components/ServiceSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "./SolutionSlideChild"; 
import SectionHeading from "../../../Services/HeadingSection/Heading";

// Service Data
const services = [
  {
    id: 1,
    title: "Air Quality Check",
    description:
      "Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat..",
    image: "/Air-Quality-Check.jpg",
  },
  {
    id: 2,
    title: "PIR Ducting",
    description:
      "Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat..",
    image: "/PIR-Ducting.jpg",
  },
  {
    id: 3,
    title: "Basement Ventilation",
    description:
      "Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat..",
    image: "/Basement-Ventilation.jpg",
  },
  {
    id: 4,
    title: "STP Ventilation",
    description:
      "Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat..",
    image: "/STP-Ventilation.jpg",
  },
  {
    id: 5,
    title: "Air Balancing",
    description:
      "Lorem ipsum dolor consectetur adipiscing Fusce varius euismod lacus eget feugiat..",
    image: "/Air-Balancing.jpg", },
   
];

const ServiceSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <section className="py-12  bg-gray-100 sm:py-16 overflow-x-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <div className="mb-10">
      <SectionHeading
        title="VIEW MORE SERVICES"
        className="font-extrabold text-center text-black text-lg sm:text-2xl"
      />
    </div>

    <Slider {...settings}>
      {services.map((service) => (
        <div key={service.id} className="px-1 sm:px-2 w-full box-border">
          <ServiceCard
            image={service.image}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </Slider>
  </div>
</section>

  );
};

export default ServiceSlider;
