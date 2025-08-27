import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCalendarAlt, FaBuilding, FaHeart, FaLightbulb, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const FounderSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  // Timeline milestones
  const milestones = [
    { year: "1943", title: "Company Founded", description: "Founded Unitech Engineering Company with two employees and modest capital" },
    { year: "1946", title: "US Visit", description: "Visited USA to negotiate partnerships and collaborations" },
    { year: "1970s", title: "Continued Leadership", description: "Remained involved despite declining health as Blue Star expanded" },
    { year: "2012", title: "Birth Centenary", description: "Published pictorial tribute 'Remembering Mohan T. Advani: The Man and His Legacy'" },
  ];

  // Core values
  const coreValues = [
    { icon: <FaLightbulb className="text-xl" />, title: "Visionary", description: "Saw opportunity where others saw difficulty" },
    { icon: <FaHeart className="text-xl" />, title: "Leader", description: "Inspired devotion and instilled progressive work culture" },
    { icon: <FaBuilding className="text-xl" />, title: "Professional", description: "Committed to quality and customer satisfaction" },
  ];

   const images = [
{
  id:1,
  img:'/Air-Cooler.jpg'
} ,
{
  id:2,
  img:'/11781.jpg'
} ,
{
  id:3,
  img:'/Water-Purifier.jpg'
} ,
{
  is:4,
  img:'/public/Air-Cooler.jpg'
}  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
           <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-6 tracking-tight">
                           OUR FOUNDER
                        </h1>
                        <div className="mt-8 flex justify-center">
                        <div className="w-24 h-1 bg-gradient-to-r bg-color rounded-full"></div>
                    </div>
          <p className="text-gray-600 max-w-2xl mx-auto">The visionary leader who built a legacy of excellence</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Founder Image and Intro */}
              <div className="relative">
                <div className="h-64 bg-gradient-to-r from-blue-900 to-cyan-900 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">Founder Name</h3>
                    <p className="text-blue-100 text-lg">Founder of Unitech Engineering Company</p>
                  </div>
                </div>
                <div className="absolute -bottom-12 left-8">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img 
                      src="/water-coolers.png" 
                      alt="Founder Name" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Founder Story */}
              <div className="p-8 pt-16">
                <div className="mb-8" data-aos="fade-up">
                  <div className="flex items-start mb-4">
                    <FaQuoteLeft className="text-color text-xl mr-3 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-800">The Journey</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In September 1943, at the age of 30, Mr Founder Name founded Blue Star Engineering Company with just two employees and a modest capital of two thousand rupees. Amid the turmoil of World War II, it was his unwavering confidence and ambition that propelled him through adversity. Seeing opportunity where others saw difficulty, he built a company that was progressive and adaptable.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Under his visionary leadership, Blue Star Engineering Company pioneered the manufacture of water coolers in India. With a sharp instinct for marketing and a deep understanding of the Indian market, he transformed the Company into a successful manufacturing powerhouse.
                  </p>
                </div>

                {/* Timeline Section */}
                <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FaCalendarAlt className="text-color mr-3" />
                    Key Milestones
                  </h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-700"></div>
                    
                    <div className="space-y-8">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className="absolute left-0 w-8 h-8 rounded-full bg-color flex items-center justify-center text-white text-xs font-bold z-10">
                            {milestone.year}
                          </div>
                          <div className="ml-12 bg-blue-50 rounded-lg p-4 flex-1">
                            <h4 className="font-bold text-black">{milestone.title}</h4>
                            <p className="text-black text-sm mt-1">{milestone.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Legacy Section */}
                <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex items-start mb-4">
                    <FaQuoteRight className="text-color text-xl mr-3 mt-1" />
                    <h3 className="text-2xl font-bold text-gray-800">Enduring Legacy</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A large-hearted man who loved life with passion, Mr Founder Name was a natural leader, inspiring great devotion in his staff and instilling a progressive work culture. His personal business ethic was imbued with professionalism, a commitment to quality and customer satisfaction, a sense of corporate social responsibility, and consideration for employees—long before these became fashionable buzzwords.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Decades after his demise, his legacy continues to grow from strength to strength. To commemorate his birth centenary on November 11, 2012, a pictorial tribute titled <em>Remembering Mohan T. Advani: The Man and His Legacy</em> was published.
                  </p>
                </div>

                {/* Memoir Link */}
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-900" data-aos="fade-up" data-aos-delay="300">
                  <p className="text-blue-700 font-medium">
                    To view e-version of this Memoir, 
                    <a href="#" className="underline hover:text-blue-900 transition-colors duration-200 ml-1">
                      please click here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Core Values */}
            <div className="bg-white rounded-2xl shadow-xl p-6" data-aos="fade-left">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaHeart className="text-color mr-2" />
                Core Values
              </h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-color mr-3 flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{value.title}</h4>
                      <p className="text-gray-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad Banner */}
            <div className="bg-gradient-to-br from-blue-900 to-cyan-900 rounded-2xl shadow-xl overflow-hidden text-white" data-aos="fade-left" data-aos-delay="100">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Visionary Quote</h3>
                <div className="bg-white/20 p-4 rounded-lg mb-4">
                  <p className="italic">
                    &quot;Where others saw just a few bamboo sticks, he envisioned a world-class engineering business.&quot;
                  </p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <span>View Full Story</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" data-aos="fade-left" data-aos-delay="200">
              <div className="p-4 bg-color text-white">
                <h3 className="text-lg font-bold">Historical Gallery</h3>
              </div>
              <div className="p-4">
                <img 
                  src="/water-coolers.png" 
                  alt="Historical Image" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-2 gap-2">
                  {images.map((item) => (
                    <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-blue-900 to-cyan-900 flex items-center justify-center text-gray-500">
                       <img src={item.img}/>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;