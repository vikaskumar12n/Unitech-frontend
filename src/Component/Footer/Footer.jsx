import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {



const  Product=[
    {
     name:"Room Air Conditioners" ,
     link:"/product"
    },
     {
     name:"Air Coolers" ,
     link:"/aircooler"
    },
     {
     name:"Refrigeration" ,
     link:"/refrigeration"
    }, {
     name:"Cassette Air Conditioners" ,
     link:"/cassetteairconditioners"
    } ,{
     name:"Verticool Air Conditioners" ,
     link:"/verticoolair"
    }
     ,{
     name:"Central Air Conditioning" ,
     link:"/centralairconditioner"
    }
     ,{
     name:"Heat Pumps" ,
     link:"/heatpump"
    }
,{
     name:"Cold Storages" ,
     link:"/coldstorage"
    } 
    ,{
     name:"Water Coolers" ,
     link:"/watercooler"
    } 
  ] 
  const Footer=[
    {
      name:"About",
      link:"/about-us"
    },
      {
      name:"Help Desk",
      link:"/contactus"
    },
      {
      name:"Privacy Policy",
      link:"/"
    }
  ]

  const  Services=[
  {
     name:"HVAC Designing" , 
    } ,
     {
     name:"Residential Cooling Solutions" , 
    } ,
     {
     name:"Commercial HVAC Systems" , 
    } ,
     {
     name:"Sales" , 
    } ,
     {
     name:"Retrofit" , 
    } ,
     {
     name:"Maintenance Contract" , 
    }  

  ]
  return (
    <footer className="bg-gradient-to-br from-[#1f1f1f] to-[#1f1f1f] text-gray-200 py-5  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxZTI5N2IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {/* Company Info */}
        <div className="flex flex-col items-start">
         <div className="flex items-center pb-5 space-x-0 group">
            <div className="relative"> 
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
             <img src="/unitect_logo.PNG" alt="Unitech Aircon" className="h-12" />
          </div>

          <p className="text-sm leading-relaxed text-justify mb-6 text-gray-300">
            Unitec limited is a lucknow based specialist organisation and Service provider of
            Heating, Ventilation, Air conditioning and refrigeration (HVACR) solutions Started in the year 2018.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 text-2xl">
              <FaInstagramSquare />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-110 text-2xl">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
        {/* Services */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-4">
            OUR SERVICES
          </h3>
          <ul className="space-y-3">
              {Services?.map((service, index) => (
              <li key={index}>
                <Link to="/solution" className="hover:text-blue-300 flex items-center group transition-all duration-300">
                  <FaChevronRight className="text-blue-500 text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="group-hover:underline">{service.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Products */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-4">
            PRODUCTS
          </h3>
          <ul className="space-y-3">
            {
              Product?.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="hover:text-blue-300 flex items-center group transition-all duration-300">
                  <FaChevronRight className="text-blue-500 text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="group-hover:underline">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-4">
            CONTACT US
          </h3>
          <ul className="space-y-5">
            <li className="flex items-start group">
              <div className="w-10 h-10 rounded-full text-white bg-opacity-20 flex items-center justify-center mr-3 group-hover:bg-blue-500 transition-all duration-300">
                <FaPhone className="text-white group-hover:text-white" />
              </div>
              <div>
                <strong className="block text-white">MOBILE</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 9535409630</span>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="w-10 h-10 rounded-full  bg-opacity-20 flex items-center justify-center mr-3 group-hover:bg-blue-500 transition-all duration-300">
                <FaWhatsappSquare className="text-white group-hover:text-white" />
              </div>
              <div>
                <strong className="block text-white">WHATSAPP</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+91 8951929938</span>
              </div>
            </li>
            <li className="flex items-start group">
              <div className="w-10 h-10 rounded-full bg-opacity-20 flex items-center justify-center mr-3 group-hover:bg-blue-500 transition-all duration-300">
                <FaEnvelope className="text-white group-hover:text-white" />
              </div>
              <div>
                <strong className="block text-white">EMAIL</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">CodeCrafter@gmail.com</span>
              </div>
            </li>
            <li className="flex items-start ms-4 group">
              <div className="w-10 h-10 rounded-full bg-opacity-20 flex items-center justify-center mr-5 group-hover:bg-blue-500 transition-all duration-300">
                <FaMapMarkerAlt className="text-white group-hover:text-white  " />
              </div>
              <div>
                <strong className="block  text-white">ADDRESS</strong>
                <p className="text-gray-300 group-hover:text-white transition-colors text-justify duration-300 text-sm">
                  2nd floor, 1F/957, Vardan Khand, Sector 1, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-10 relative z-10">
         <div className="mt-6 flex justify-center">
    <div className="w-full h-1 mb-2 bg-gradient-to-r from-[#383086] to-[#383086] rounded-full"></div>
  </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p className="mb-2 md:mb-0">© Copyright 2025 || Developed By Vikas Bind</p>
          <div className="flex space-x-6">
            {Footer?.map((item, index) => (
              <Link
                key={index} 
                to={item.link} 
                className="hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;