import HVACDesignCard from './Solution';
import ServiceSlider from './SolutionSlideParent';
import SectionHeading from '../../../Helpers/Heading';
import { Link } from 'react-router-dom';
const HVACShowcase = () => {
  const sampleCards = [
    {
     image: "/HVAC_Designing.jpg", 
      title: "HVAC Designing",
      description: "We have certified and skilled professional engineers, who can be working on HVAC design based on ESHRAE & ASHRAE standards to meet customers' requirements on a very competitive budget.",
     features: [
        "Energy Efficient Design",
        "Smart Controls Integration", 
        "Preventive Maintenance",
        "Emergency Service"
      ],
      stats: [
        { label: "Projects", value: "1000+" },
        { label: "Experience", value: "20+ Years" }
      ]
    },
    {
      image: "/Product/room_air_condi/ser2.jpeg", 
      title: "Residential Cooling Solutions",
      description: "Complete home comfort solutions including central air conditioning, ductwork design, and smart thermostat installation for optimal indoor climate control.",
      reverse: true,
      features: [
        "Custom Ductwork Design",
        "Smart Thermostats",
        "Air Quality Systems",
        "Routine Maintenance"
      ],
      stats: [
        { label: "Homes Served", value: "2500+" },
        { label: "Satisfaction", value: "99%" }
      ]
    },
     {
      image: "Product/room_air_condi/ser1.jpeg",
      title: "Commercial HVAC Systems",
      description: "Professional installation and maintenance of commercial heating, ventilation, and air conditioning systems for offices, retail spaces, and industrial facilities.",
      features: [
        "Energy Efficient Design",
        "Smart Controls Integration", 
        "Preventive Maintenance",
        "Emergency Service"
      ],
      stats: [
        { label: "Projects", value: "1000+" },
        { label: "Experience", value: "20+ Years" }
      ]
    },
    {
      image: "/Sales.jpg", 
      title: "Sales",
      description: "In the Industry of HVAC, we deal in all types of heating and cooling solutions. We have a techno-commercial team who are working on getting the best rates in this industry",
      reverse: true,
      features: [
        "Custom Ductwork Design",
        "Smart Thermostats",
        "Air Quality Systems",
        "Routine Maintenance"
      ],
      stats: [
        { label: "Homes Served", value: "2500+" },
        { label: "Satisfaction", value: "99%" }
      ]
    },
     {
      image: "/Retrofit.jpg", 
      title: "Retrofit",
      description: "We offer retrofit works, value engineering, energy-saving ideas, and updating HVAC systems to meet the updated requirements with modern technologies.",
       
      features: [
        "Custom Ductwork Design",
        "Smart Thermostats",
        "Air Quality Systems",
        "Routine Maintenance"
      ],
      stats: [
        { label: "Homes Served", value: "2500+" },
        { label: "Satisfaction", value: "99%" }
      ]
    },
        {
      image: "/Maintenance_Contract.jpg", 
      title: "Maintenance Contract",
      description: "We also perefare agreement between a contractor and customer covering the maintenance of buildings or equipment over a specified period for better understanding and relation",
       
      features: [
        "Custom Ductwork Design",
        "Smart Thermostats",
        "Air Quality Systems",
        "Routine Maintenance"
      ],
      stats: [
        { label: "Homes Served", value: "2500+" },
        { label: "Satisfaction", value: "99%" }
      ]
    }
  ];

  return (
    <>
       <div className="relative w-full h-[500px] overflow-hidden">
  {/* Responsive Image */}
  <img 
    src="servi.avif" 
    alt="Water Cooler" 
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
  
  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
      Our<span className="text-blue-500"> Service</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8">
      Advanced cooling technology for commercial and residential spaces
    </p>
  </div>
  
  {/* Bottom Label */}
  <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
      <h2 className="text-base md:text-lg font-semibold">Service</h2>
    </div>
  </div>
</div>
<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">                 
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-100 h-100  bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-indigo-300/10 to-blue-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>
     <nav className="text-gray-600 text-sm my-4">
                <ol className="flex items-center space-x-2">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline font-bold ms-10">
                            Home
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-gray-500 font-bold">Services</li>
                </ol>
            </nav>
    <div className="min-h-screen  bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 ">
      <div className="container mx-auto">
        <div className="text-center mb-10">
         <div
            className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Our  <span className="text-color">Services </span>
            <SectionHeading />
          </div>

          <p className="text-black max-w-2xl mx-auto">
            Professional heating, ventilation, and air conditioning solutions tailored to your needs
          </p>
        </div>
        
        {sampleCards.map((card, index) => (
          <HVACDesignCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            reverse={card.reverse}
            features={card.features}
            stats={card.stats}
          />
        ))}
      </div>
    </div>
    </div>
    <ServiceSlider/>
      </>
  );
};

export default HVACShowcase;