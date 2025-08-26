import { Link } from "react-router-dom";
import HVACDesignCard from "./Solution"; 
import "aos/dist/aos.css";
import AOS from "aos";
import TestimonialSlider from "./SolutionSlideParent";
import { useEffect } from "react";

function HVACDesign() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();  
  }, []);

  const hvacDescription = `We have certified and skilled professional engineers, who can be working on HVAC design based on ESHRAE & ASHRAE standards to meet customers' requirements on a very competitive budget.
We have installed HVAC systems for reputed companies in various industries like Software Companies and Pharmaceutical Companies.`;

  const salesDescription = `In the Industry of HVAC, we deal in all types of heating and cooling solutions. We have a techno-commercial team who are working on getting the best rates in this industry. We are authorized dealers of brands like Samsung and Voltas. We sell Domestic AC, Commercial AC, Fabric Ducts, Ventilation systems, Ventilation Fans, Indoor AC, Airflow systems, etc.`;

  const cards = [
    { image: "/HVAC_Designing.jpg", title: "HVAC Designing", description: hvacDescription },
    { image: "/Sales.jpg", title: "Sales", description: salesDescription },
    { image: "/HVAC_Projects.jpg", title: "Retrofit", description: hvacDescription },
    { image: "/Servicing.jpg", title: "Servicing", description: salesDescription },
    { image: "/Maintenance_Contract.jpg", title: "Maintenance Contract", description: hvacDescription },
    { image: "/commercial-kitchen-ventilation.png", title: "Kitchen Exhaust", description: salesDescription },
  ];

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute bottom-0 left-0 w-[70%] md:w-[40%] lg:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/80 text-white rounded-t-md">
            <h2 className="text-sm sm:text-base md:text-lg font-semibold">
              Services
            </h2>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="flex items-center p-4 bg-gray-100 text-gray-500">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Services</span>
      </nav>

      {/* Cards Section */}
      <div className="bg-gray-200 w-full py-12 px-4 flex flex-col items-center">
        <div className="w-full text-justify max-w-6xl space-y-12">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <HVACDesignCard
                image={card.image}
                title={card.title}
                description={card.description}
                reverse={index % 2 !== 0}  
              />
            </div>
          ))}
        </div>
      </div>
        <TestimonialSlider/>
    </>
  );
}

export default HVACDesign;
