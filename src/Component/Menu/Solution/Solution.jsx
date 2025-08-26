import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HVACDesignCard = ({ image, title, description, reverse }) => {
  return (
    <>
      <div
      
        className={`bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } mb-6 max-w-5xl mx-auto`}
      >
       
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-40 md:h-56 object-cover rounded-md"
          />
        </div>

     
        <div className="md:flex-grow p-3 md:p-5">
         
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

     
          <div className="w-12 h-1 bg-cyan-500 rounded mb-3"></div>
 
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
            {description}
          </p>

        
          <div className="mt-4">
            <Link to="/contactus" className="bg-cyan-500 text-white text-sm font-medium py-1.5 px-4 rounded-md hover:bg-cyan-600 transition duration-300">
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HVACDesignCard;
