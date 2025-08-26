 
import { 
  FaPhone, FaEnvelope, FaFacebookF, FaTwitter, 
  FaInstagram, FaLinkedinIn, FaWhatsapp 
} from "react-icons/fa";
import { Link } from "react-router-dom";
 

const ContactUsPage = () => {
 

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
 
        <div className="absolute inset-0 bg-black/30"></div>

       
        <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white rounded-t-md">
            <h2 className="text-base md:text-lg font-semibold">CONTACT US</h2>
            
          </div>
        </div>
      </div>
 <nav className="flex items-center p-4 bg-gray-100 text-gray-500">
      <Link to="/" className="text-blue-500 hover:underline">Home</Link>
      <span className="mx-2">/</span>
      <span className="text-gray-900">Contact Us</span>
    </nav>
      
      <div className="bg-gray-100 min-h-screen  pb-26   px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden lg:flex lg:h-[700px]">
          
           
          <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif text-gray-800 mb-2">
                Let&apos;s Talk !
              </h2>
              <p className="text-gray-600 mb-8 max-w-sm">
                Tell us about your dream project, we will make it come true.
              </p>

              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-xl text-gray-600" />
                  <p className="text-gray-800 font-medium">
                    +91-8707438955, +91-7275712348
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-xl text-gray-600" />
                  <div>
                    <p className="text-gray-800 font-medium">
                      contact@codeCrafter.com
                    </p>
                    <p className="text-gray-800 font-medium">
                      info@codeCrafter.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <Link to="#" className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <FaFacebookF />
                </Link>
                <Link to="#" className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <FaTwitter />
                </Link>
                <Link to="#" className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <FaInstagram />
                </Link>
                <Link to="#" className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <FaLinkedinIn />
                </Link>
                <Link to="#" className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>

            
            <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Google Map"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0653415796814!2d81.00946497478363!3d26.83787396330395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd35011967e7%3A0xc4a2515047590d2a!2sCode%20Crafter%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1756195429983!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-200 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="text" placeholder="Your Phone No" className="w-full p-4 bg-gray-200 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-200 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <input type="text" placeholder="Your Subject" className="w-full p-4 bg-gray-200 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-gray-200 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"></textarea>
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-md hover:bg-blue-800 transition-colors duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
