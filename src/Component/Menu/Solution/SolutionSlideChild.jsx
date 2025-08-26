import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
       
    <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-36 md:h-40 object-cover transform transition duration-500 hover:scale-150"
        />
      </div>

      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm flex-1">
          {description}
        </p>
       <div className="mt-2">
  <Link
    to="/contactus"
    className="bg-cyan-500 text-white font-semibold py-1 px-3 sm:px-4 rounded-md hover:bg-cyan-600 transition duration-300 inline-block text-center w-full"
  >
    Enquiry
  </Link>
</div>

      </div>
    </div>
  );
};

export default ServiceCard;
