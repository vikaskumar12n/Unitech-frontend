
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#0b1030] text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-start">
          <div className="mb-4">
            <img src="/logo.png" alt="Fabair Cooling Solutions Logo" className="h-16" />
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Fabair Cooling Solutions is a Bangalore based specialist organisation and Service provider of
            Heating, Ventilation, Air conditioning and refrigeration (HVACR) solutions Started in the year 2018.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white  text-2xl">
            <FaFacebook/>
            </a>
            <a href="#" className="hover:text-white text-2xl">
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-white text-2xl">
              <FaLinkedin />

            </a>
            <a href="#" className="hover:text-white text-2xl">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-1 w-fit">
            OUR SERVICES
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Service Solution</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Certifications</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Warranty Registeration</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Installation and Service Costs</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> servicing</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Buy Extended warranty & AMC</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Service Escalation</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-1 w-fit">
            PRODUCTS
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Room Air Conditioners</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Cassette Air Conditioner</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Verticool Air Conditioner</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Heat Pumps</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Commercial Refrigrater</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Cold Storage</a></li>
            <li><a href="#" className="hover:text-white flex items-center"><i className="fas fa-chevron-right text-xs mr-2"></i> Water Coolers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b-2 border-blue-500 pb-1 w-fit">
            CONTACT US
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <i className="fas fa-mobile-alt text-white mt-1 mr-3"></i>
              <div>
                <strong className="block">MOBILE :</strong>
                <span>+91 9535409630</span>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fab fa-whatsapp text-white mt-1 mr-3"></i>
              <div>
                <strong className="block">WHATSAPP :</strong>
                <span>+91 8951929938</span>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-envelope text-white mt-1 mr-3"></i>
              <div>
                <strong className="block">EMAIL :</strong>
                <span>projects@fabair.in</span>
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-map-marker-alt text-white mt-1 mr-3"></i>
              <div>
                <strong className="block">ADDRESS :</strong>
                <p>No. 23, 1st Cross, 1st Main, Lal Bagh Main Rd, next to Phoenix Hospital, Bengaluru, Karnataka 560027</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Copyright 2025</p>
        <div className="space-x-6 me-5 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Help Desk</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;