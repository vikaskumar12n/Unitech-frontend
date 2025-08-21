 
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
      
        <div className="text-sm">
          Copyright © Blue Star Limited 2025. All Rights Reserved.
        </div>

        
        <div className="flex flex-wrap items-center gap-3">
          <a href="#" className="hover:text-blue-300">E-Waste Guidelines</a>
          <a href="#" className="hover:text-blue-300">Sitemap</a>
          <a href="#" className="hover:text-blue-300">Terms of use of website</a>
          <a href="#" className="hover:text-blue-300">Privacy Policy</a>
        </div>

        
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-blue-300"><FaFacebook size={20} /></a>
          <a href="#" className="hover:text-blue-300"><FaTwitter size={20} /></a>
          <a href="#" className="hover:text-blue-300"><FaInstagram size={20} /></a>
          <a href="#" className="hover:text-blue-300"><FaLinkedin size={20} /></a>
          <a href="#" className="hover:text-blue-300"><FaYoutube size={20} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
