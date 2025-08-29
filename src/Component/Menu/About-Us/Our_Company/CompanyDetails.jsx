import { useEffect, useState } from "react";
import { FaBuilding, FaLightbulb, FaUsers, FaIndustry, FaGlobe, FaAward, FaCog, FaChevronRight } from "react-icons/fa";
import FounderSection from "./FounderDetails";
import SectionHeading from "../../../../Helpers/Heading";
import CountUp from "react-countup";

const CompanyDetails = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Key statistics for the company
    const stats = [
        { icon: <FaBuilding className="text-3xl" />, value: "80", suffix: "+", label: "Years of Experience", color: "bg-color" },
        { icon: <FaUsers className="text-3xl" />, value: "3000", suffix: "+", label: "Employees", color: "bg-color" },
        { icon: <FaIndustry className="text-3xl" />, value: "7", label: "Manufacturing Facilities", color: "bg-color" },
        { icon: <FaGlobe className="text-3xl" />, value: "900", suffix: "+", label: "Towns in India", color: "bg-color" },
    ];

    // Core values of the company
    const coreValues = [
        {
            title: "Trust",
            description: "Building lasting relationships through transparency and reliability",
            icon: "🤝",
            gradient: "from-blue-900 to-blue-900"
        },
        {
            title: "Excellence",
            description: "Delivering superior quality in every product and service",
            icon: "⭐",
            gradient: "from-blue-900 to-blue-900"
        },
        {
            title: "Innovation",
            description: "Pioneering solutions that meet evolving market needs",
            icon: "💡",
            gradient: "from-blue-900 to-blue-900"
        },
    ];

    // Service areas
    const serviceAreas = [
        { name: "Air Conditioning", },
        { name: "Commercial Refrigeration", },
        { name: "MEP Contracting", },
        { name: "Air Purification", },
        { name: "Engineering Facilities Management", },
        { name: "Commercial Kitchen Solutions", },
        { name: "Medical Refrigeration", },
        { name: "Coooling Refrigeration", },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

                </div>

                <div className="container mx-auto max-w-7xl  relative z-10">
                    {/* Hero Header Section */}
                    <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative inline-block">
                            <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r text-color bg-clip-text text-transparent mb-6 tracking-tight">
                                UNITECH
                            </h1>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 to-purple-200/50 blur-2xl rounded-full -z-10"></div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
                            India&apos;s Leading Cooling Solutions Pioneer
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl text-justify mx-auto leading-relaxed">
                            Over 8 decades of excellence in delivering innovative, sustainable cooling solutions
                            that transform lives and businesses across India
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r bg-color rounded-full"></div>
                        </div>
                    </div>

                    {/* Enhanced Stats Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/40 p-8 text-center relative overflow-hidden">
                                    {/* Gradient Background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Icon */}
                                    <div className={`text-white mb-4 flex justify-center relative z-10`}>
                                        <div className={`p-4 rounded-full bg-gradient-to-br ${stat.color} shadow-lg`}>
                                            {stat.icon}
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="text-4xl font-black text-justify text-gray-800 mb-2 relative z-10"> <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={3}
                                        suffix={stat.suffix}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                    /></div>
                                    <div className="text-gray-600 font-medium relative z-10">{stat.label}</div>

                                    {/* Hover Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Profile Section */}
                    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                        <div className="flex flex-col lg:flex-row">
                            {/* Enhanced Image Section */}
                            <div className="lg:w-2/5 relative overflow-hidden group">
                                <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-blue-600 to-gray-600 flex items-center justify-center">
                                    <div className="text-white text-center p-8">
                                        <div className="text-8xl mb-4">🏢</div>
                                        <h3 className="text-3xl font-bold mb-2">Unitech Limited</h3>
                                        <p className="text-blue-100 text-lg">Excellence Since 1943</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Enhanced Content Section */}
                            <div className="lg:w-3/5 p-8 lg:p-12">
                                {/* Philosophy Section */}
                                <div className="mb-10">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-900 rounded-full mr-4">
                                            <FaLightbulb className="text-white text-xl" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-800">Our Philosophy</h3>
                                    </div>
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            Unitech &apos;s philosophy is rooted in the principles of
                                            <span className="font-bold text-color px-2 py-1 rounded mx-1">&apos;Trust&apos;</span>
                                            and
                                            <span className="font-bold text-color px-2 py-1 rounded mx-1">&apos;Excellence&apos;</span>,
                                            which have served as the guiding force behind our remarkable journey of growth.
                                        </p>
                                    </div>
                                </div>

                                {/* Solutions Grid */}
                                <div className="mb-10">
                                    <div className="flex items-center mb-6">
                                        <div className="p-3 bg-gradient-to-br from-blue-900 to-blue-900 rounded-full mr-4">
                                            <FaAward className="text-white text-xl" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-800">Our Solutions</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {serviceAreas.map((service, index) => (
                                            <div key={index} className="group flex items-center bg-gradient-to-r from-white to-blue-50 rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md">
                                                <div className="text-2xl mr-4">{service.icon}</div>
                                                <span className="text-gray-700 font-medium flex-1">{service.name}</span>
                                                <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Core Values */}
                    <div className={`mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>

                        <div className="text-center mb-16" data-aos="fade-down">

                            <div
                                className="font-extrabold text-black   bg-clip-text bg-gradient-to-r text-2xl md:text-3xl lg:text-4xl mb-4"
                            >
                                Core  <span className="text-color">Values </span>That Drive Us
                                <SectionHeading />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {coreValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-8 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Icon */}
                                    <div className="text-4xl mb-4 relative z-10">{value.icon}</div>

                                    {/* Content */}
                                    <h4 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent relative z-10`}>
                                        {value.title}
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>

                                    {/* Decorative Element */}
                                    <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced R&D Section */}
                    <div className={`relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl shadow-2xl p-12 text-white overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center relative z-10">
                            <div className="lg:w-2/3 mb-8 lg:mb-0 w-full px-4">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                                    <div className="p-3 sm:p-4 bg-white/20 rounded-full mb-4 sm:mb-0 sm:mr-4">
                                        <FaCog className="text-white text-xl sm:text-2xl animate-spin" style={{ animationDuration: '8s' }} />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">Manufacturing & Research Excellence</h3>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                                        Our manufacturing footprint spans over <span className="font-bold text-white">1 lakh sq. m.</span> with
                                        cutting-edge facilities focused on energy-efficiency and sustainable innovation.
                                    </p>
                                    <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                                        Unitech&apos;s robust R&D ecosystem drives continuous innovation, ensuring we stay ahead
                                        in India&apos;s competitive cooling solutions market.
                                    </p>
                                </div>
                                <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
                                    <div className="bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                        <span className="font-semibold text-sm sm:text-base">7 Manufacturing Facilities</span>
                                    </div>
                                    <div className="bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                        <span className="font-semibold text-sm sm:text-base">30+ Offices</span>
                                    </div>
                                    <div className="bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                                        <span className="font-semibold text-sm sm:text-base">2,100+ Service Centers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full flex justify-center px-4">
                                <div className="relative">
                                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-4xl sm:text-5xl font-black">R&D</div>
                                            <div className="text-xs sm:text-sm font-medium">Innovation Hub</div>
                                        </div>
                                    </div>
                                    <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center animate-bounce">
                                        <FaLightbulb className="text-white text-lg sm:text-xl" />
                                    </div>
                                    <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FounderSection />
        </>
    );
};

export default CompanyDetails;