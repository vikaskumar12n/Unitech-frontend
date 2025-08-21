 

const FounderSection = () => {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">

      
        <div className="flex-1 text-gray-700">
          <h2 className="text-3xl font-light text-blue-800 mb-6">FOUNDER - Founder Name</h2>
          <p className="mb-4">
            In September 1943, at the age of 30, Mr FOunder Name founded Blue Star Engineering Company with just two employees and a modest capital of two thousand rupees. Amid the turmoil of World War II, it was his unwavering confidence and ambition that propelled him through adversity. Seeing opportunity where others saw difficulty, he built a company that was progressive and adaptable.
          </p>
          <p className="mb-4">
            Under his visionary leadership, Blue Star Engineering Company pioneered the manufacture of water coolers in India. With a sharp instinct for marketing and a deep understanding of the Indian market, he transformed the Company into a successful manufacturing powerhouse. But his vision didn&apos;t end there. In 1946, he emptied the Company&apos;s bank account to visit the USA in order to negotiate partnerships and collaborations. These alliances brought invaluable knowledge and expertise, contributing significantly to Blue Star&apos;s growth.
          </p>
          <p className="mb-4">
            Even as his health declined in the early 1970s, Mr Advani remained closely involved in the Company, especially as Blue Star was commissioned to be installed in the new skyscrapers that began to dot Bombay&apos;s skyline during that era.
          </p>
          <p className="mb-4">
            A large-hearted man who loved life with passion, Mr Advani was a natural leader, inspiring great devotion in his staff and instilling a progressive work culture. His personal business ethic was imbued with professionalism, a commitment to quality and customer satisfaction, a sense of corporate social responsibility, and consideration for employees—long before these became fashionable buzzwords. Decades after his demise, his legacy continues to grow from strength to strength.
          </p>
          <p className="mb-4">
            To commemorate his birth centenary on November 11, 2012, a pictorial tribute titled <i>Remembering Mohan T. Advani: The Man and His Legacy</i> was published. This memoir encapsulates his life, showcasing the stories and experiences of those who were touched by his leadership and character. His impact endures, and his remarkable journey continues to inspire.
          </p>
          <p className="mt-6 text-blue-700">
            To view e-version of this Memoir, <a href="#" className="underline hover:text-blue-900 transition-colors duration-200">please click here.</a>
          </p>
        </div>
 
        <div className="flex-none w-full lg:w-1/4 flex flex-col items-center space-y-4">
          <img
            src="/water-coolers.png" 
            alt="Mohan T Advani"
            className="w-full rounded-lg"
          />
          <div className="bg-blue-100 text-center p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-blue-800">
              [Ad Banner Text Here]
            </h3>
            <p className="text-sm text-gray-600 my-2">
              where others saw just a few bamboo sticks, he envisioned a world-class engineering business.
            </p>
            <a href="#" className="text-blue-600 underline">
              Click here to see the ad
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FounderSection;