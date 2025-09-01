import   { useState, useEffect } from 'react';
import { Snowflake, Shield, Award, Globe, ArrowRight, CheckCircle, Zap, Settings, Phone } from 'lucide-react';
import SectionHeading from '../../Helpers/Heading';

const AboutUsPage=() =>{
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
       
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 

  const features = [
    {
      icon: Snowflake,
      title: 'Energy Efficient Cooling',
      description: 'Advanced inverter technology for maximum energy savings and optimal performance'
    },
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Durable products with extended warranty coverage and reliable performance'
    },
    {
      icon: Settings,
      title: 'Smart Controls',
      description: 'IoT-enabled air conditioners with mobile app connectivity and smart features'
    }
  ];

  const achievements = [
    'ISO 9001:2015 Certified Manufacturing',
    'Energy Star 5-Star Rating Products',
    'Pan-India Service Network',
    'Award-Winning Customer Support',
    'Eco-Friendly Refrigerant Technology',
    'Advanced Inverter Technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
      

         
      </div>

    
      {/* Main About Content */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Cooling Solutions 
                  <span className="bg-gradient-to-r from-[#393185] to-[#393185] bg-clip-text text-transparent"> Redefined</span>
                </h2>
                <p className="text-lg text-gray-600  text-justify leading-relaxed">
                  Since 1998, Unitech Aircon has been at the forefront of air conditioning innovation, 
                  delivering cutting-edge cooling solutions that combine efficiency, reliability, and sustainability.
                </p>
              </div>

              <div className="space-y-6  ">
                <p className="text-lg text-gray-700  text-justify leading-relaxed">
                  We specialize in manufacturing premium air conditioning systems for residential, commercial, 
                  and industrial applications. Our state-of-the-art manufacturing facility ensures every product 
                  meets international quality standards.
                </p>
                
                <p className="text-lg text-gray-700 text-justify leading-relaxed">
                  With our advanced <span className="text-[#393185] font-semibold">inverter technology</span> and 
                  <span className="text-[#393185]  font-semibold"> eco-friendly refrigerants</span>, we&apos;re committed 
                  to providing energy-efficient solutions that reduce environmental impact while maximizing comfort.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>

              
            </div>

            {/* Interactive Features */}
            <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Why Choose Unitech?</h3>
                
                <div className="space-y-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                   
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                          'bg-gray-50 hover:bg-gray-100 text-gray-800'
                        }`}
                        
                      >
                        <div className="flex items-start gap-4">
                          <div className={`rounded-full p-3  `}>
                            <IconComponent className={`w-6 h-6  text-blue-900`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                            <p className={`text-gray-600`}>
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values Section */}
      <div className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div
                          className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
                      >
                        Our <span className="text-color">Value</span>
                        <SectionHeading/>
                      </div>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The principles that drive our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#383185] to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 text-justify leading-relaxed">
                Constantly pushing boundaries with cutting-edge technology and smart cooling solutions 
                that set new industry standards.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-r from-[#383185] to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600 text-justify leading-relaxed">
                Uncompromising commitment to quality manufacturing processes and rigorous testing 
                to ensure long-lasting performance.
              </p>
            </div>

            {/* Sustainability */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-r from-[#383185] to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600 text-justify leading-relaxed">
                Environmental responsibility through energy-efficient products and eco-friendly 
                manufacturing practices for a greener future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Manufacturing Excellence */}
      {/* Call to Action */}
      <div className="py-10 bg-gradient-to-r ">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className={`transition-all duration-1000 delay-1900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Experience <span className="text-color">Perfect Cooling?</span>
            </h2>
            <p className="text-xl text-justify text-black mb-8 max-w-2xl mx-auto">
              Discover our range of premium air conditioning solutions designed for modern living and working spaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-color text-white px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105">
                View Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <Phone className="w-5 h-5" />
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
       
    
    </div>
  );
}

export default AboutUsPage