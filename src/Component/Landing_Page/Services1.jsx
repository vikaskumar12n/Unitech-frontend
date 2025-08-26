import SectionHeading from "../../Services/HeadingSection/Heading";

const ServicesSection = () => {
  return (
   <section
  className="relative w-full  pb-20 px-4 sm:px-8 text-gray-800 bg-cover bg-center"
  style={{ backgroundImage: `url('/Realistic white monochrome background _ Free Vector_files/multicolor-abstract-background_149326-7184.jpg')` }}  
>
     
      <div className="absolute inset-0 bg-black/10 bg-opacity-40 "></div>

       
      <div className="relative max-w-6xl mx-auto text-black  ">
       
        <div className="px-10 mt-0 w-full text-center mb-10 ">
          <SectionHeading title="Our Brand"
           className="font-extrabold text-center text-black text-1xl md:text-2xl mt-10" 
            />
        </div>

        <div
          className="flex flex-col md:flex-row items-start gap-8"
          data-aos="fade-right"
          data-aos-delay="600 "
        >
          
          <div className="flex-1 space-y-6">
            {/* Mission Card */}
            <div 
 
className="bg-white/80 p-6 border border-transparent hover:border-gray-500 rounded-2xl text-justify text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
 
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Mission
              </h3>
              <p>
                To deliver high-quality products that simplify and enhance the
                lives of our customers while maintaining eco-friendly practices.
              </p>
            </div>

            {/* Vision Card */}
            <div 
 
className="bg-white/80 p-6 border border-transparent hover:border-gray-500 rounded-2xl text-justify text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300">
 
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Vision
              </h3>
              <p>
                To become a global leader in innovative solutions and build a
                brand trusted for excellence, sustainability, and reliability.
              </p>
            </div>
          </div>

          {/* Right Column: Text + Certifications */}
          <div className="flex-1">
            <p
              className="sm:text-xl mb-8 leading-relaxed text-base text-justify text-black"
              data-aos="fade-left "
              data-aos-delay="600 "
            >
              At <span className="font-semibold">YourCompany</span>, we believe
              in combining innovation, quality, and sustainability to provide
              the best products for our customers. Since our founding in 2015,
              we have strived to bring excellence in every product we deliver.
            </p>

            {/* Certifications / Awards */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-left"
              data-aos-delay="600 "
            >
              <div className="bg-white/80 text-blue-600 font-semibold px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                ISO 9001 Certified
              </div>
              <div className="bg-white/80 text-blue-600 font-semibold px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                Best Innovation Award 2023
              </div>
              <div className="bg-white/80 text-blue-600 font-semibold px-6 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
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
