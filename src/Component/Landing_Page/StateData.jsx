 
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
    },
    {
        icon: FaHammer,
        value: 500,
        label: "Success Projects",
        suffix: "+",
    },
    {
        icon: FaUserFriends,
        value: 25,
        label: "Team Members",
        suffix: "+",
    },
    {
        icon: FaCheck,
        value: 100,
        label: "Clients Satisfactions",
        suffix: "%",
    },
];

const StatsSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: false });
        AOS.refresh();
    }, []);
    return (
 <div
  className="relative w-full pt-25 px-4 sm:px-8 text-center bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: "url('/state banner.jpg')",
  }}
>
            <div className="absolute inset-0 bg-black/70" ></div>

            <div className="relative z-10 text-white container mx-auto   top-[-3.2rem]"> 
                

                <div className=" px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 " data-aos="zoom-in"
            data-aos-delay="200">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="   p-6 rounded-xl shadow-lg border-4 border-white  transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full">
                                    <stat.icon className="text-white text-4xl" />
                                </div>
                            </div>
                            <h3 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-2">
                                <h2 className="text-3xl font-bold text-white">
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={20}
                                        suffix={stat.suffix} />
                                </h2>
                            </h3>
                            <p className="text-white text-lg font-semibold ">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;