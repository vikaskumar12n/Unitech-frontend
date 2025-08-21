import './Service.css';

const Service = () => {
return(
    <>
        <div className="bg-gray-100 py-16 mt-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-start">

    
      <div className="text-left">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          We&apos;re Glad You&apos;re Here –<br />
          Let’s Keep You Comfortable<br />
          Year-Round!
        </h1>

        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l-2 7 9 3-9 3 2 7z" />
            <circle cx="12" cy="15" r="3" />
          </svg>
          <h3 className="font-semibold text-lg text-gray-700">Skilled HVAC Engineers</h3>
        </div>

        <div className="flex items-center mb-6">
          <svg className="w-8 h-8 text-blue-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h3 className="font-semibold text-lg text-gray-700">Reliable Service Assurance</h3>
        </div>

        <p className="text-gray-600 leading-relaxed mb-6">
          South India’s most trusted team of HVAC engineers, known for delivering safe, energy-efficient, and smart air conditioning solutions. We ensure consistent service quality, timely support, and long-lasting system performance for every home and business. Reach us at:
        </p>

        <div className="flex items-center gap-8">
          {/* Phone */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.81 15.3A12 12 0 0 0 16.6 16.6l1.2-1.25a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-gray-700">
              <a href="tel:7619607157">7619607157</a> / <a href="tel:7619607156">7619607156</a>
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22 6 12 13 2 6" />
              </svg>
            </div>
            <p className="text-gray-700">
              <a href="mailto:care@blowair.in">care@blowair.in</a>
            </p>
          </div>
        </div>
      </div>

     
<div className="grid grid-cols-12 gap-4">
   
  <img
    src="/service1.jpg"
    className="col-span-7 h-auto rounded-md shadow-md"
  />
  <img
    src="/service2.jpg"
    className="col-span-5 h-auto rounded-md shadow-md  mt-25"
  />

  
  <img
    src="/services3.jpg"
    className="col-span-5 h-auto rounded-md shadow-md"
  />
  <img
    src="/services4.jpg"
    className="col-span-7 h-auto rounded-md shadow-md"
  />
</div>



    </div>
  </div>
</div>

    </>
)
};

export default Service;
