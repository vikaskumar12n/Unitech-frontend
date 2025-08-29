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

  // Array of products
  const products = [
    {
      img: "/Room-AC.jpg",
      alt: "Room Air Conditioner",
      title: "ROOM AIR CONDITIONERS",
      // desc: "The most technologically advanced and energy-efficient air conditioning.",
      link: "/product",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/AirCooler/Epicool-54-1.webp",
      alt: "Air Coolers",
      title: "AIR COOLERS",
      // desc: "Presenting a range of water coolers, obsessed with purity.",
      link: "/aircooler",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/Refrigrator/re.webp",
      alt: "Refrigeration",
      title: "REFRIGERATION",
      // desc: "An array of purifiers built with superior technology for cooling.",
      link: "/refrigeration",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/fcq71_img.png",
      alt: "Cassette Air Conditioner",
      title:"CASSETTE AIR ",
      // desc: "Sleek and elegant air coolers packed with smart features.",
      link: "/Cassetteairconditioners",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/pexels-siddanthsawant-33590889.jpg",
      alt: "verticool air condiioner",
      title: "VERTICOOL AIR ",
      // desc: "Reliable solutions to store perishables safely and maintain freshness.",
      link: "/verticoolair",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/11781.jpg",
      alt: "CENTRAL AIR  CONDITIONER",
      title: "CENTRAL AIR CONDITIONER",
      // desc: "Efficient and sleek water coolers for homes and offices.",
      link: "/centralairconditioner",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/istockphoto-2209841249-612x612.jpg",
      alt: "COLD STORAGES",
      title: "COLD STORAGES",
      // desc: "Designed for maximum cooling and energy efficiency.",
      link: "/coldstorage",
      linkText: "View Product",
      gradient: "bg-color"
    },
    {
      img: "/Product/water1144648102-612x612.jpg",
      alt: "WATER COOLERS",
      title: "WATER COOLERS",
      // desc: "Leaders in commercial refrigeration with freezers.",
      link: "/watercooler",
      linkText: "View Product",
      gradient: "bg-color"
    },
  ];

  const dealInProducts = [
    {
      img: "/Domestic-ac.jpg",
      title: "Domestic Air-Conditioners",
      // desc: "We are an authorized dealer of Samsung and Voltas commercial.",
      link: "#",
      linkText: "Join Now",
      gradient: "bg-color"
    },
    {
      img: "/commercial-ac.jpg",
      title: "CommercialAir-Conditioners",
      // desc: "We have authorized dealerships of brands like Samsung and Voltas.",
      link: "#",
      linkText: "Read More",
      gradient: "bg-color"
    },
    {
      img: "/Ventilation-systems.jpg",
      title: "Ventilation Systems",
      // desc: "Ventilation systems can be forced systems by using devices.",
      link: "#",
      linkText: "Read More",
      gradient: "bg-color"
    },
    {
      img: "/Cold-Rooms.jpg",
      title: "Cold-Rooms",
      // desc: "Contributing to society's welfare beyond profits.",
      link: "#",
      linkText: "Read More",
      gradient: "bg-color"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-down">
          <div
              className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Our <span className="text-color">Product</span>
            <SectionHeading/>
          </div>
          
         
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium products designed for modern living
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.alt}
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r bg-black bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {product.title}
                </h3>
                <p className="text-black text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.desc}
                </p>
                <Link
                  to={product.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}
                >
                  {product.linkText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Heading: Products We Deal In */}
        <div className="text-center mb-16" data-aos="fade-down">
           <div
              className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Product <span className="text-color">We </span>Deal In
            <SectionHeading/>
          </div>
          <p className="text-black text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our specialized dealership products and services          </p>
        </div>

        {/* Deal In Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dealInProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden relative"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 relative z-10">
                <h3 className={`text-lg font-bold mb-3 bg-gradient-to-r text-black bg-clip-text group-hover:scale-105 transition-transform duration-300`}>
                  {product.title}
                </h3>
                <p className="text-black text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.desc}
                </p>
                <a
                  href={product.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${product.gradient} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:shadow-xl`}
                >
                  {product.linkText}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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