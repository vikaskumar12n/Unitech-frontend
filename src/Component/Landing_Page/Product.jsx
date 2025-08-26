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
      <div className="container mx-auto pb-10 bg-gray-100 px-4 md:px-8">
 
     
      <div className="absolute  bg-black/10 bg-opacity-40"></div>

        <div className="flex flex-wrap -mx-2 gap-6 w-full">
       <div className="px-10 mt-0">
            <SectionHeading title="Our Product" 
                       className="font-extrabold text-center text-black text-1xl md:text-2xl  mt-10" 

             />
        </div>
          {/* ROW 1 */}
          <div
            className="w-full sm:w-1/2 lg:w-1/3 px-2 bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex flex-col"
          >
            <img
              src="/Room-AC.jpg"
              alt="Room Air Conditioner"
              className="w-full h-60 object-cover"
              data-aos="fade-up"
              data-aos-duration="1200"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200" >
                ROOM AIR CONDITIONERS
              </h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"
                data-aos-duration="1200">
                The most technologically advanced and energy-efficient air conditioning
              
              </p>
              <a
                href="/room-ac"
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto"
              >
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>


          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <img
              src="/Water-Purifier.jpg"
              alt="Water Purifier"
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3
                className="text-lg font-semibold mb-2 text-cyan-700"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                WATER PURIFIERS
              </h3>
              <p
                className="text- mb-2 leading-relaxed text-base text-justify"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Presenting a range of water purifiers, obsessed with purity.
              </p>
              <a
                href="/water-purifier"
                className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>


          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            data-aos="fade-up"
            data-aos-duration="800"          >
            <img src="/Air-Purifier.jpg" 
              data-aos-anchor-placement="top-center " alt="Air Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up">AIR PURIFIERS</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"
                data-aos-duration="1200">
                An array of purifiers built with superior technology for clean  
              </p>
              <a href="/air-purifier"  data-aos="fade-up"
      data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
          >
            <img src="/Air-Cooler.jpg" data-aos="fade-up"
              data-aos-duration="1200" alt="Air Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200">AIR COOLERS</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify  " data-aos="fade-up"
                data-aos-duration="1200">
                Sleek and elegant air coolers packed with smart features  
              </p>
              <a href="/air-cooler" data-aos="fade-up"
                data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ROW 2 */}
          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
          >
            <img src="/cold storage.jpg" data-aos="fade-up"
              data-aos-duration="1200" alt="Cold Storage" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200">COLD STORAGE</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify    " data-aos="fade-up">
                Reliable solutions to store perishables safely and maintain 
              </p>
              <a href="/cold-storage" data-aos="fade-up"
                data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
          >
            <img src="/water-coolers.png" data-aos="fade-up"
              data-aos-duration="1200" alt="Water Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200">WATER COOLER</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up">
                Efficient and sleek water coolers for homes and offices.
              </p>
              <a href="/water-cooler" data-aos="fade-up"
                data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
          >
            <img src="/11781.jpg" data-aos="fade-up"
              data-aos-duration="1200" alt="Verticool AC" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200">AIR CONDITIONER</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up">
                Smart air conditioners designed for maximum cooling and energy 
              </p>
              <a href="/products/verticool-ac" data-aos="fade-up"
                data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div
            className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
          >
            <img src="/product-thumb-4.jpg" data-aos="fade-up"
              data-aos-duration="1200" alt="Refrigerator" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                data-aos-duration="1200">REFRIGERATOR</h3>
              <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up">
                Leaders in commercial refrigeration with freezers
              </p>
              <a href="/refrigerator" data-aos="fade-up"
                data-aos-duration="1200" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>
 <div className=" mt-0 px-10">
            <SectionHeading title="Products We Deals In" 
                       className="font-extrabold text-center text-black text-1xl md:text-2xl  mt-10" 

              />
          </div>
           
          {/* ROW-3 */}
          <div className="flex flex-col md:flex-row gap-6  mt-10  flex-wrap w-full">
            <div
              className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400  shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            >
              <img src="/Domestic-ac.jpg" data-aos="fade-up"
                data-aos-duration="1200" alt="Careers" className="w-full h-60 object-cover" />
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                  data-aos-duration="1200">Domestic
                  Air-Conditioners</h3>
                <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"
                  data-aos-duration="1200">
                  We are an authorized dealer of Samsung and voltas commercial.
                </p>
                <a href="#" data-aos="fade-up"
                  data-aos-duration="1200" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Join Now <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            >
              <img src="/commercial-ac.jpg" data-aos="fade-up"
                data-aos-duration="1200" alt="Press" className="w-full h-60 object-cover" />
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                  data-aos-duration="1200">Commercial
                  Air-Conditioners</h3>
                <div className="list-disc list-inside text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"  data-aos-duration="1200">
                  We have authorized dealerships of brands like Samsung and Voltas. 
                </div>
                <a href="#" data-aos="fade-up"
                  data-aos-duration="1200" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            >
              <img src="/Ventilation-systems.jpg" data-aos="fade-up"
                data-aos-duration="1200" alt="Investors" className="w-full h-60 object-cover" />
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                  data-aos-duration="1200">Ventilation Systems</h3>
                <div className="list-disc list-inside text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"
                  data-aos-duration="1200">
                  ventilation systems can be forced systems by using devices .
                </div>
                <a href="#" data-aos="fade-up"
                  data-aos-duration="1200" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl border border-gray-200 hover:border-gray-400 shadow-md hover:shadow-xs transition-transform duration-300 hover:scale-102 overflow-hidden flex-1 min-w-[250px] flex flex-col"
            >
              <img src="/Cold-Rooms.jpg" data-aos="fade-up"
                data-aos-duration="1200" alt="Social Initiatives" className="w-full h-60 object-cover" />
              <div className=" p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 text-cyan-700" data-aos="fade-up"
                  data-aos-duration="1200">Cold-Rooms</h3>
                <p className="text- mb-2 leading-relaxed text-base text-justify" data-aos="fade-up"
                  data-aos-duration="1200">
                  Contributing to society’s welfare beyond profits .
                </p>
                <a href="#" data-aos="fade-up"
                  data-aos-duration="1200" className="text-blue-600 hover:underline flex items-center mt-auto">
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
