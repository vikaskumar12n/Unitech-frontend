// eslint-disable-next-line react/prop-types
const SectionHeading = ({ title }) => {
  return (
    <div className="text-center py-5 px-4 md:px-100">
      <h2 className="  text-4xl  md:text-4xl font-semibold mb-4">
        {title}
      </h2>
      <div className="flex  justify-center items-center">
        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        <div className="w-4 h-4 bg-blue-500 transform rotate-45 mx-3 rounded-sm"></div>
        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
