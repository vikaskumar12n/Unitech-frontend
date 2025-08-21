const Product = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-gray-100">
        <div className="flex flex-col md:flex-row gap-6 flex-wrap">
          
          {/* ROW 1 */}
          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/Room-AC.jpg" alt="Room Air Conditioner" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">ROOM AIR CONDITIONERS</h3>
              <p className="text-gray-600 mb-2">
                The most technologically advanced and energy-efficient air conditioning solutions for small spaces.
              </p>
              <a href="/products/room-ac" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/Water-Purifier.jpg" alt="Water Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">WATER PURIFIERS</h3>
              <p className="text-gray-600 mb-2">
                Presenting a range of water purifiers, obsessed with purity.
              </p>
              <a href="/products/water-purifier" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/Air-Purifier.jpg" alt="Air Purifier" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">AIR PURIFIERS</h3>
              <p className="text-gray-600 mb-2">
                An array of purifiers built with superior technology for clean and healthy air in your home.
              </p>
              <a href="/products/air-purifier" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/Air-Cooler.jpg" alt="Air Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">AIR COOLERS</h3>
              <p className="text-gray-600 mb-2">
                Sleek and elegant air coolers packed with smart features to provide efficient cooling.
              </p>
              <a href="/products/air-cooler" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/cold storage.jpg" alt="Cold Storage" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">COLD STORAGE</h3>
              <p className="text-gray-600 mb-2">
                Reliable solutions to store perishables safely and maintain optimal temperature.
              </p>
              <a href="/products/cold-storage" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/water-coolers.png" alt="Water Cooler" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">WATER COOLER</h3>
              <p className="text-gray-600 mb-2">
                Efficient and sleek water coolers for homes and offices.
              </p>
              <a href="/products/water-cooler" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/11781.jpg" alt="Verticool AC" className="w-full h-60 object-cover" />
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

          <div className="bg-white mt-10 overflow-hidden flex-1 min-w-[250px] flex flex-col">
            <img src="/public/product-thumb-4.jpg" alt="Refrigerator" className="w-full h-60 object-cover" />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 text-cyan-700">REFRIGERATOR</h3>
              <p className="text-gray-600 mb-2">
                Leaders in commercial refrigeration with freezers, coolers, and dispensers.
              </p>
              <a href="/products/refrigerator" className="text-blue-600 font-semibold hover:underline inline-flex items-center mt-auto">
                View Product <span className="ml-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ROW 3 - Careers / Press / Investors / Social Initiatives */}
          <div className="flex flex-col md:flex-row gap-6 p-4 mt-10  flex-wrap w-full">

            <div className="bg-white  overflow-hidden flex-1 min-w-[250px] flex flex-col">
              <img src="/public/career.jpg" alt="Careers" className="w-full h-60 object-cover"/>
              <div className="bg-yellow-200 p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">CAREERS</h3>
                <p className="text-gray-700 mb-4">
                  Partner with a high-growth industry leader and explore opportunities to grow your career.
                </p>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Join Now <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white  overflow-hidden flex-1 min-w-[250px] flex flex-col">
              <img src="/public/press.jpg" alt="Press" className="w-full h-60 object-cover"/>
              <div className="bg-yellow-200 p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">PRESS</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Blue Star&apos;s Q1FY26 Consolidated Revenue grows 4.1% to Rs 2,982 crores.</li>
                </ul>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white  overflow-hidden flex-1 min-w-[250px] flex flex-col">
              <img src="/public/project-thumb-10.jpg" alt="Investors" className="w-full h-60 object-cover"/>
              <div className="bg-yellow-200 p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">INVESTORS</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Blue Star&apos;s Q2FY24 Net Profit increases by 66% to Rs 70.77 crores.</li>
                </ul>
                <a href="#" className="text-blue-600 hover:underline flex items-center mt-auto">
                  Read More <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="bg-white  overflow-hidden flex-1 min-w-[250px] flex flex-col">
              <img src="/public/social in.jpg" alt="Social Initiatives" className="w-full h-60 object-cover"/>
              <div className="bg-yellow-200 p-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-800">SOCIAL INITIATIVES</h3>
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
