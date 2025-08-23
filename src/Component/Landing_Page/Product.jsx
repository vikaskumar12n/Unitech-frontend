import SectionHeading from "../../Services/HeadingSection/Heading";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";


const Product = () => {
//   useEffect(() => {
//   AOS.init({ duration: 800, once: false });
//   AOS.refresh();  
// }, []);
  return (
    <>
      <div className="container mx-auto px-4 pb-10 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-6 p-4 flex-wrap">
        <div className=" mt-0 px-20">
            <SectionHeading title="Our Products"  />
        </div>
          {/* ROW 1 */}
          <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col" 
          
          >
            <img src="/Room-AC.jpg" data-aos="zoom-in"  
  alt="Room Air Conditioner" className="w-full h-60 object-cover" />
  
            <div className="p-4 flex flex-col flex-1" >
              <h3 className="text-xl font-semibold mb-2 text-cyan-700" data-aos="fade-up">ROOM AIR CONDITIONERS</h3>
              <p className="text-gray-600 mb-2" data-aos="fade-down">
                The most technologically advanced and energy-efficient air conditioning solutions for small spaces.
              </p>
              <a href="/room-ac" data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className= "bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/Water-Purifier.jpg"  data-aos="zoom-in" alt="Water Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700" data-aos="fade-up">WATER PURIFIERS</h3>
              <p className="text-gray-600 mb-2" data-aos="fade-down">
                Presenting a range of water purifiers, obsessed with purity.
              </p>
              <a href="/water-purifier" data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/Air-Purifier.jpg"  data-aos="zoom-in" alt="Air Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700" data-aos="fade-up">AIR PURIFIERS</h3>
              <p className="text-gray-600 mb-2" data-aos="fade-down">
                An array of purifiers built with superior technology for clean and healthy air in your home.
              </p>
              <a href="/air-purifier" data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/Air-Cooler.jpg"  data-aos="zoom-in" alt="Air Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700" data-aos="fade-up">AIR COOLERS</h3>
              <p className="text-gray-600 mb-2" data-aos="fade-down">
                Sleek and elegant air coolers packed with smart features to provide efficient cooling.
              </p>
              <a href="/air-cooler" data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/cold storage.jpg"  data-aos="zoom-in" alt="Cold Storage" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700" data-aos="fade-up">COLD STORAGE</h3>
              <p className="text-gray-600 mb-2"   data-aos="fade-down">
                Reliable solutions to store perishables safely and maintain optimal temperature.
              </p>
              <a href="/cold-storage"   data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/water-coolers.png"  data-aos="zoom-in" alt="Water Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700"  data-aos="fade-up">WATER COOLER</h3>
              <p className="text-gray-600 mb-2"  data-aos="fade-down">
                Efficient and sleek water coolers for homes and offices.
              </p>
              <a href="/water-cooler"  data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/11781.jpg"  data-aos="zoom-in" alt="Verticool AC" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700"  data-aos="fade-up">VERTICOOL AIR CONDITIONER</h3>
              <p className="text-gray-600 mb-2"  data-aos="fade-down">
                Smart air conditioners designed for maximum cooling and energy efficiency.
              </p>
              <a href="/products/verticool-ac"  data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           >
            <img src="/product-thumb-4.jpg"  data-aos="zoom-in" alt="Refrigerator" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 text-cyan-700"  data-aos="fade-up">REFRIGERATOR</h3>
              <p className="text-gray-600 mb-2"  data-aos="fade-down">
                Leaders in commercial refrigeration with freezers, coolers, and dispensers.
              </p>
              <a href="/refrigerator"  data-aos="fade-right" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

           <SectionHeading title="Products We Deals In" />
           {/* ROW-3 */}
          <div className="flex flex-col md:flex-row gap-6  mt-10  flex-wrap w-full">
            <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             >
              <img src="/Domestic-ac.jpg"  data-aos="zoom-in" alt="Careers" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800"  data-aos="fade-up">Domestic
Air-Conditioners</h3>
                <p className="text-gray-700 mb-4"  data-aos="fade-down">
                 We are an authorized dealer of Samsung and voltas commercial Air-conditioners and their products..
                </p>
                <a href="#"  data-aos="fade-right" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Join Now <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             >
              <img src="/commercial-ac.jpg"  data-aos="zoom-in" alt="Press" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800"  data-aos="fade-up">Commercial
Air-Conditioners</h3>
                <div className="list-disc list-inside text-gray-700 mb-4"  data-aos="fade-down">
                 We have authorized dealerships of brands like Samsung and Voltas. For selling and maintaining of..
                </div>
                <a href="#"  data-aos="fade-right" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]   overflow-hidden flex-1 min-w-[250px] flex flex-col"
             >
              <img src="/Ventilation-systems.jpg"  data-aos="zoom-in" alt="Investors" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800"  data-aos="fade-up">Ventilation Systems</h3>
                <div className="list-disc list-inside text-gray-700 mb-4"  data-aos="fade-down">
                  ventilation systems can be forced systems by using devices such as window fan to allow air movement..
                </div>
                <a href="#"  data-aos="fade-right" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[4px_4px_6px_rgba(0,0,0,0.2),-4px_-4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             >
              <img src="/Cold-Rooms.jpg"  data-aos="zoom-in" alt="Social Initiatives" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-gray-800"  data-aos="fade-up">Cold-Rooms</h3>
                <p className="text-gray-700 mb-4"  data-aos="fade-down">
                 Contributing to society’s welfare beyond profits, through impactful initiatives.
                </p>
                <a href="#"  data-aos="fade-right" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Product;
