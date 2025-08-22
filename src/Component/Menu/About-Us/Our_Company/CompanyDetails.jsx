 import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CompanyDetails = () => {
    useEffect(() => {
  AOS.init({ duration: 800, once: false });
  AOS.refresh();  
}, []);
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-blue-800 mb-6" data-aos="fade-right">COMPANY PROFILE</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <img
          data-aos="fade-right"
            src="/our-company-profile.jpg"  
            alt="Company Building Profile"
            className="w-full md:w-1/2 h-100 rounded-lg shadow-md" 
          />
          <div className="text-gray-700 leading-relaxed text-base" data-aos="fade-up">
            <p className="mb-4">
              Blue Star is India&apos;s leading Air Conditioning, Commercial Refrigeration and MEP (Mechanical, Electrical, Plumbing and Fire-fighting) contracting company with over 80 years of experience. The Company&apos;s philosophy is rooted in the principles of &apos;Trust&apos; and &apos;Excellence&apos;, which have served as the guiding force behind its remarkable journey of growth. Renowned for its customer-centric ethos, Blue Star is recognised for delivering innovative, value-driven products and solutions that strongly resonate in the market.
            </p>
            <p className="mb-4">
              The Company offers a plethora of cooling solutions including chillers, ducted systems, VRFs, room ACs, deep freezers, water coolers, and cold rooms, amongst others. It has also made inroads into air purification, engineering facilities management, commercial kitchen and medical refrigeration. The Company’s integrated business model of a manufacturer; engineering, procurement and construction (EPC) services provider; and an after-sales service provider enables it to provide comprehensive solutions for the Residential, Commercial and Infrastructure segments, making it a key differentiator in the marketplace. Additionally, the Company also offers expertise in allied contracting activities such as electrical, plumbing, fire-fighting and industrial projects, further enhancing its ability to deliver turnkey solutions.
            </p>
            <p className="mb-4">
              With a robust network of over 30 offices, 7 modern manufacturing facilities across the country, and more than 3,000 employees; Blue Star operates over 10,000 retail outlets and maintains 2,100 service centres across more than 900 towns in India. Its expansive global footprint is complemented by ventures in marketing and maintenance of imported professional electronic equipment and services, as well as industrial products and systems.
            </p>
            <p>
              The Company’s manufacturing footprint spans more than 1 lakh sq. m. with a focus on product development and R&D centered on energy-efficiency, coupled with eco-friendly and sustainable products. Blue Star places a strong emphasis on strengthening its R&D ecosystem to maintain its growth momentum in a highly competitive market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;