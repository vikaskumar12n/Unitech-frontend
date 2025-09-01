import SectionHeading from "../../Helpers/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    AOS.refresh();
  }, []);
  
  const products = [
    {
      img: "/Room-AC.jpg",
      alt: "Room Air Conditioner",
      title: "ROOM AIR CONDITIONERS",
      link: "/product",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/AirCooler/Epicool-54-1.webp",
      alt: "Air Coolers",
      title: "AIR COOLERS",
      link: "/aircooler",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/Refrigrator/re.webp",
      alt: "Refrigeration",
      title: "REFRIGERATION",
      link: "/refrigeration",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/fcq71_img.png",
      alt: "Cassette Air Conditioner",
      title: "CASSETTE AIR CONDITIONER",
      link: "/Cassetteairconditioners",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/pexels-siddanthsawant-33590889.jpg",
      alt: "verticool air conditioner",
      title: "VERTICOOL AIR CONDITIONER",
      link: "/verticoolair",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/11781.jpg",
      alt: "CENTRAL AIR CONDITIONER",
      title: "CENTRAL AIR CONDITIONER",
      link: "/centralairconditioner",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/istockphoto-2209841249-612x612.jpg",
      alt: "COLD STORAGES",
      title: "COLD STORAGES",
      link: "/coldstorage",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Product/water1144648102-612x612.jpg",
      alt: "WATER COOLERS",
      title: "WATER COOLERS",
      link: "/watercooler",
      linkText: "View Product",
      gradient: "from-blue-900 to-blue-900"
    },
     {
      img: "/Cold-Rooms.jpg",
      alt: "WATER COOLERS",
      title: "COLD ROOM",
      link: "coldstorage",
      linkText: "Read More",
      gradient: "from-blue-900 to-blue-900"
    },
  ];
  
  const dealInProducts = [
    {
      img: "/Domestic-ac.jpg",
      title: "Domestic Air-Conditioners",
      link: "#",
      linkText: "Join Now",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/commercial-ac.jpg",
      title: "Commercial Air-Conditioners",
      link: "#",
      linkText: "Read More",
      gradient: "from-blue-900 to-blue-900"
    },
    {
      img: "/Ventilation-systems.jpg",
      title: "Ventilation Systems",
      link: "#",
      linkText: "Read More",
      gradient: "from-blue-900 to-blue-900"
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-10 via-blue-10 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="font-extrabold text-black bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4">
            Our <span className="text-[#4b4291]">Product</span>
            <SectionHeading/>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium products designed for modern living
          </p>
        </div>
        
        {/* Products Grid - Changed to show 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-md font-medium text-gray-800 mb-3 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <Link
                  to={product.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white rounded-md hover:shadow-md transition-all duration-300 group-hover:shadow-lg`}
                >
                  {product.linkText}
                  <svg className="w-2 h-3 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Heading: Products We Deal In */}
        <div className="text-center mb-15" data-aos="fade-down">
          <div className="font-extrabold text-black bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4">
            Products <span className="text-[#4b4291]">We Deal In</span>
            <SectionHeading/>
          </div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our specialized dealership products and services
          </p>
        </div>
        
        {/* Deal In Products Grid - Changed to show 3 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {dealInProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3 transition-colors duration-300">
                  {product.title}
                </h3>
                
                <a
                  href={product.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white font-medium rounded-lg hover:shadow-md transition-all duration-300 group-hover:shadow-lg`}
                >
                  {product.linkText}
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;