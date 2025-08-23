 
const ChairmanEmeritus = () => {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto">
      
        <h2 className="text-2xl font-bold text-blue-500 mb-6 border-b-2 border-blue-500 inline-block pb-1">
          CHAIRMEN 
        </h2>
 
        <div className="flex flex-col md:flex-row gap-8 items-start">

    
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4">
            <img
              src="water-coolers.png"  
              alt="ChairMan Name"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

      
          <div className="flex-1 text-gray-700 leading-relaxed text-justify">
            <h3 className="text-xl font-bold text-gray-900 mb-2">ChairMan Name – CHAIRMAN</h3>
            <p className="mb-4">
             ChairMan Name holds an MBA from the Harvard Graduate School of Business Administration, an Electrical Engineering degree from MIT, USA, and a BSc (Honours) from Mumbai University. With a distinguished career spanning over 47 years at Blue Star, Mr Advani served as its Chairman for 33 years. Under his leadership, the Company’s revenue grew more than 400-fold and became a recognised leader in the Air Conditioning and Commercial Refrigeration industry in India.
            </p>
            <p>
              Mr ChairMan retired from the Board in November 2016, but in recognition of his exceptional leadership and legacy, he was appointed Chairman Emeritus. He continues to be an invitee to the Board Meetings and remains deeply engaged with the Company as an advisor to both the Board and Executive Management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanEmeritus;