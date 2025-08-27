// eslint-disable-next-line react/prop-types
const SectionHeading = ({ title, className = "" }) => {
  return (
    <div className="text-center py-5 px-4 md:px-100">
      <h2 className={`text-3xl md:text-3xl font-bold mb-4 ${className}`}>
        {title}
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-16 h-1 bg-color rounded-full"></div>
        <div className="w-4 h-4 bg-color transform rotate-45 mx-3 rounded-sm"></div>
        <div className="w-16 h-1 bg-color rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
