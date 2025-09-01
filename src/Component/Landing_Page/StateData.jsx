import { useEffect } from 'react';
import { FaUserFriends, FaCheck, FaTachometerAlt, FaHammer } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
 
const statsData = [
    {
        icon: FaTachometerAlt,
        value: 20,
        label: "Years Of Experience",
        suffix: "+",
        gradient: "bg-color",
        bgGradient: "from-blue-500/20 to-blue-600/20",
    },
    {
        icon: FaHammer,
        value: 500,
        label: "Success Projects",
        suffix: "+",
        gradient: "bg-color",
        bgGradient: "from-emerald-500/20 to-emerald-600/20",
    },
    {
        icon: FaUserFriends,
        value: 25,
        label: "Team Members",
        suffix: "+",
        gradient: "bg-color",
        bgGradient: "from-purple-500/20 to-purple-600/20",
    },
    {
        icon: FaCheck,
        value: 100,
        label: "Clients Satisfactions",
        suffix: "%",
        gradient: "bg-color",
        bgGradient: "from-orange-500/20 to-orange-600/20",
    },
];

const StatsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
        AOS.refresh();
    }, []);

    return (
        <div className="relative w-full py-5 px-4 sm:px-8 overflow-hidden">
            {/* Enhanced Background */}
            <div 
                className="absolute inset-0 bg-fixed bg-center bg-cover"
                style={{
                    backgroundImage: "url('/banner.jpg')",
                }}
            ></div>
            
            {/* Enhanced Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-down">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-4">
                        Our Achievements
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-700 to-gray-400 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Numbers that speak for our commitment to excellence and customer satisfaction
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative"
                            data-aos="zoom-in"
                            data-aos-delay={200 + index * 100}
                        >
                            {/* Card Background with Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-r rounded-3xl blur-sm opacity-0 group-hover:opacity-75 transition-opacity duration-500`}></div>
                            
                            {/* Main Card */}
                            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl transform hover:scale-102 hover:-translate-y-2 transition-all duration-500 group-hover:shadow-3xl">
                                
                                {/* Gradient Background Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br   rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className="flex items-center justify-center mb-6">
                                        <div className={`w-20 h-20 flex items-center justify-center bg-gradient-to-br ${stat.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <stat.icon className="text-white text-3xl group-hover:text-4xl transition-all duration-300" />
                                        </div>
                                    </div>

                                    {/* Counter */}
                                    <div className="mb-2">
                                        <h3 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                                            <CountUp
                                                start={0}
                                                end={stat.value}
                                                duration={3}
                                                suffix={stat.suffix}
                                                enableScrollSpy={true}
                                                scrollSpyOnce={true}
                                            />
                                        </h3>
                                    </div>

                                    {/* Label */}
                                    <p className="text-white text-lg font-semibold group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className={`w-16 h-1 bg-gradient-to-r ${stat.gradient} mx-auto mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                </div>

                                {/* Floating Particles */}
                                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
                                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-ping delay-200"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="800">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to Be Part of Our Success Story?
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                            Join hundreds of satisfied clients who trust us for exceptional service and innovative solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r bg-color text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Get Started Today
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;