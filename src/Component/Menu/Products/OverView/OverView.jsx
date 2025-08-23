 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const GuidingPolicies = () => {
  useEffect(()=>{
    AOS.init({duration:800,once:false});
    AOS.refresh()
  },[])
  return (
   
       <>
        <div className="relative w-full h-[500px] overflow-hidden">
 
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
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[20%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/80 text-white">
            <h2 className="text-base md:text-lg font-semibold">
             OVERVIEW
            </h2>
          </div>
        </div>
      </div>

  
      <div className="px-8 py-10 flex flex-col items-center mb-30" data-aos="fade-right">
        <div className="w-full md:w-3/4 lg:w-2/3 text-justify">
          <h3 className="text-lg font-semibold mb-4 text-blue-700">Overview</h3>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Our guiding policies serve as the foundation of our corporate governance 
            and ethical framework. These policies ensure transparency, accountability, 
            and a sustainable approach in all business operations. They cover important 
            aspects such as environmental sustainability, data security, equal 
            opportunity, workplace ethics, employee welfare, and customer trust.  
            <br /><br />
            Through these principles, we aim to build a responsible, inclusive, and 
            future-ready organization that upholds the highest standards of integrity 
            and excellence.
          </p>
        </div>
      </div>
    </>
  );
};

export default GuidingPolicies;
