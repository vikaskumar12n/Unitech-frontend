import SectionHeading from "../../Services/HeadingSection/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      desc: "The most technologically advanced and energy-efficient air conditioning.",
      link: "/room-ac",
      linkText: "View Product",
    },
    {
      img: "/Water-Purifier.jpg",
      alt: "Water Purifier",
      title: "WATER PURIFIERS",
      desc: "Presenting a range of water purifiers, obsessed with purity.",
      link: "/water-purifier",
      linkText: "View Product",
    },
    {
      img: "/Air-Purifier.jpg",
      alt: "Air Purifier",
      title: "AIR PURIFIERS",
      desc: "An array of purifiers built with superior technology for clean air.",
      link: "/air-purifier",
      linkText: "View Product",
    },
    {
      img: "/Air-Cooler.jpg",
      alt: "Air Cooler",
      title: "AIR COOLERS",
      desc: "Sleek and elegant air coolers packed with smart features.",
      link: "/air-cooler",
      linkText: "View Product",
    },
    {
      img: "/cold storage.jpg",
      alt: "Cold Storage",
      title: "COLD STORAGE",
      desc: "Reliable solutions to store perishables safely and maintain freshness.",
      link: "/cold-storage",
      linkText: "View Product",
    },
    {
      img: "/water-coolers.png",
      alt: "Water Cooler",
      title: "WATER COOLER",
      desc: "Efficient and sleek water coolers for homes and offices.",
      link: "/water-cooler",
      linkText: "View Product",
    },
    {
      img: "/11781.jpg",
      alt: "Verticool AC",
      title: "AIR CONDITIONER",
      desc: "Smart air conditioners designed for maximum cooling and energy efficiency.",
      link: "/products/verticool-ac",
      linkText: "View Product",
    },
    {
      img: "/product-thumb-4.jpg",
      alt: "Refrigerator",
      title: "REFRIGERATOR",
      desc: "Leaders in commercial refrigeration with freezers.",
      link: "/refrigerator",
      linkText: "View Product",
    },
  ];

  const dealInProducts = [
    {
      img: "/Domestic-ac.jpg",
      title: "Domestic Air-Conditioners",
      desc: "We are an authorized dealer of Samsung and Voltas commercial.",
      link: "#",
      linkText: "Join Now",
    },
    {
      img: "/commercial-ac.jpg",
      title: "Commercial Air-Conditioners",
      desc: "We have authorized dealerships of brands like Samsung and Voltas.",
      link: "#",
      linkText: "Read More",
    },
    {
      img: "/Ventilation-systems.jpg",
      title: "Ventilation Systems",
      desc: "Ventilation systems can be forced systems by using devices.",
      link: "#",
      linkText: "Read More",
    },
    {
      img: "/Cold-Rooms.jpg",
      title: "Cold-Rooms",
      desc: "Contributing to society’s welfare beyond profits.",
      link: "#",
      linkText: "Read More",
    },
  ];

  return (
  <div className="container mx-auto pb-10 bg-gray-100 px-4 md:px-8">
  {/* Section Heading */}
  <div className="px-4 sm:px-6 md:px-0">
    <SectionHeading
      title="Our Product"
      className="font-extrabold text-center text-black text-xl sm:text-2xl md:text-3xl mt-10"
    />
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    {products.map((product, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-lg flex flex-col overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <img src={product.img} alt={product.alt} className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 " />
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2 text-cyan-700">{product.title}</h3>
          <p className="text-base text-justify mb-2 leading-relaxed">{product.desc}</p>
          <a
            href={product.link}
            className="mt-auto text-blue-600 font-semibold hover:underline inline-flex items-center"
          >
            {product.linkText} <span className="ml-1">&rarr;</span>
          </a>
        </div>
      </div>
    ))}
  </div>

  {/* Section Heading: Products We Deal In */}
  <div className="px-4 sm:px-6 md:px-0 mt-12">
    <SectionHeading
      title="Products We Deal In"
      className="font-extrabold text-center text-black text-xl sm:text-2xl md:text-3xl mt-10"
    />
  </div>

  {/* Deal In Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
    {dealInProducts.map((product, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-lg flex flex-col overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <img src={product.img} alt={product.title} className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 " />
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-semibold mb-2 text-cyan-700">{product.title}</h3>
          <p className="text-base text-justify mb-2 leading-relaxed">{product.desc}</p>
          <a
            href={product.link}
            className="mt-auto text-blue-600 font-semibold hover:underline inline-flex items-center"
          >
            {product.linkText} <span className="ml-1">&rarr;</span>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Product;
