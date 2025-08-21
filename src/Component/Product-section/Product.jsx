import SectionHeading from "../../Services/HeadingSection/Heading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Product = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: false });
  AOS.refresh();  
}, []);
  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-6 p-4 flex-wrap">
          
          {/* ROW 1 */}
          <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col" 
          data-aos="fade-up"
          >
            <img src="/Room-AC.jpg" alt="Room Air Conditioner" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">ROOM AIR CONDITIONERS</h3>
              <p className="text-gray-600 mb-2">
                The most technologically advanced and energy-efficient air conditioning solutions for small spaces.
              </p>
              <a href="/room-ac" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className= "bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/Water-Purifier.jpg" alt="Water Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">WATER PURIFIERS</h3>
              <p className="text-gray-600 mb-2">
                Presenting a range of water purifiers, obsessed with purity.
              </p>
              <a href="/water-purifier" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/Air-Purifier.jpg" alt="Air Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">AIR PURIFIERS</h3>
              <p className="text-gray-600 mb-2">
                An array of purifiers built with superior technology for clean and healthy air in your home.
              </p>
              <a href="/air-purifier" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/Air-Cooler.jpg" alt="Air Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">AIR COOLERS</h3>
              <p className="text-gray-600 mb-2">
                Sleek and elegant air coolers packed with smart features to provide efficient cooling.
              </p>
              <a href="/air-cooler" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/cold storage.jpg" alt="Cold Storage" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">COLD STORAGE</h3>
              <p className="text-gray-600 mb-2">
                Reliable solutions to store perishables safely and maintain optimal temperature.
              </p>
              <a href="/cold-storage" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/water-coolers.png" alt="Water Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">WATER COOLER</h3>
              <p className="text-gray-600 mb-2">
                Efficient and sleek water coolers for homes and offices.
              </p>
              <a href="/water-cooler" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/11781.jpg" alt="Verticool AC" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">VERTICOOL AIR CONDITIONER</h3>
              <p className="text-gray-600 mb-2">
                Smart air conditioners designed for maximum cooling and energy efficiency.
              </p>
              <a href="/products/verticool-ac" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
           data-aos="fade-up">
            <img src="/product-thumb-4.jpg" alt="Refrigerator" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">REFRIGERATOR</h3>
              <p className="text-gray-600 mb-2">
                Leaders in commercial refrigeration with freezers, coolers, and dispensers.
              </p>
              <a href="/refrigerator" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

           <SectionHeading title="Products We Deals In" />
           {/* ROW-3 */}
          <div className="flex flex-col md:flex-row gap-6  mt-10  flex-wrap w-full">
            <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             data-aos="fade-up">
              <img src="/Domestic-ac.jpg" alt="Careers" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Domestic
Air-Conditioners</h3>
                <p className="text-gray-700 mb-4">
                 We are an authorized dealer of Samsung and voltas commercial Air-conditioners and their products..
                </p>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Join Now <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             data-aos="fade-up">
              <img src="/commercial-ac.jpg" alt="Press" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Commercial
Air-Conditioners</h3>
                <div className="list-disc list-inside text-gray-700 mb-4">
                 We have authorized dealerships of brands like Samsung and Voltas. For selling and maintaining of..
                </div>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]   overflow-hidden flex-1 min-w-[250px] flex flex-col"
             data-aos="fade-up">
              <img src="/Ventilation-systems.jpg" alt="Investors" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Ventilation Systems</h3>
                <div className="list-disc list-inside text-gray-700 mb-4">
                  ventilation systems can be forced systems by using devices such as window fan to allow air movement..
                </div>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white shadow-[4px_4px_6px_rgba(0,0,0,0.2)]  overflow-hidden flex-1 min-w-[250px] flex flex-col"
             data-aos="fade-up">
              <img src="/Cold-Rooms.jpg" alt="Social Initiatives" className="w-full h-60 object-cover"/>
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Cold-Rooms</h3>
                <p className="text-gray-700 mb-4">
                 Contributing to society’s welfare beyond profits, through impactful initiatives.
                </p>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
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
