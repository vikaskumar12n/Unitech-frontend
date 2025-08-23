 import SectionHeading from "../../Services/HeadingSection/Heading";
 
const ServicesSection = () => {
   return (
   <section className="relative w-full py-20 px-4 sm:px-8 bg-gray-100 text-gray-800">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <div className="px-10 mt-0 w-full text-center mb-12">
      <SectionHeading title="Our Brand" />
    </div>  

    <div className="flex flex-col md:flex-row items-start gap-8"  data-aos="fade-right" data-aos-delay="600 ">
      {/* Left Column: Mission & Vision */}
     <div className="flex-1 space-y-6">
  {/* Mission Card */}
  <div className="bg-white p-6 rounded-2xl  text-justify shadow-[4px_4px_10px_rgba(128,128,128,0),-4px_-4px_10px_rgba(129,123,255,0.2)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(0,0,0,0)] transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
    <p>
      To deliver high-quality products that simplify and enhance the lives of our customers while maintaining eco-friendly practices.
    </p>
  </div>

  {/* Vision Card */}
  <div className="bg-white p-6 rounded-2xl text-justify  shadow-[4px_4px_10px_rgba(128,128,128,0),-4px_-4px_10px_rgba(129,123,255,0.2)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(0,0,0,0)] transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
    <p>
      To become a global leader in innovative solutions and build a brand trusted for excellence, sustainability, and reliability.
    </p>
  </div>
</div>


      {/* Right Column: Text + Certifications */}
      <div className="flex-1">
        <p className="sm:text-xl mb-8 text-gray-700 leading-relaxed text-base text-justify" data-aos="fade-left " data-aos-delay="600 ">
          At <span className="">YourCompany</span>, we believe in combining innovation, 
          quality, and sustainability to provide the best products for our customers. 
          Since our founding in 2015, we have strived to bring excellence in every product we deliver.
        </p>

      {/* Certifications / Awards */}
<div className="flex flex-wrap gap-4 justify-left" data-aos="fade-left" data-aos-delay="600 ">
  <div className="  text-blue-500 px-6 py-4 rounded-lg transition-all duration-300   shadow-[4px_4px_10px_rgba(128,128,128,0),-4px_-4px_10px_rgba(129,123,255,0.2)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(0,0,0,0)]  ">
    ISO 9001 Certified
  </div>
  <div className=" text-blue-500 px-6 py-4 rounded-lg transition-all duration-300   shadow-[4px_4px_10px_rgba(128,128,128,0),-4px_-4px_10px_rgba(129,123,255,0.2)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(0,0,0,0)] ">
    Best Innovation Award 2023
  </div>
  <div className="  text-blue-500 px-6 py-4 rounded-lg transition-all duration-300  shadow-[4px_4px_10px_rgba(128,128,128,0),-4px_-4px_10px_rgba(129,123,255,0.2)] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.1),-6px_-6px_15px_rgba(0,0,0,0)]">
    Top Rated Brand 2022
  </div>
</div>

      </div>
    </div>
  </div>
</section>

  );
};

export default ServicesSection;