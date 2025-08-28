import { useEffect, useState } from "react";

const CassetteAirConditioners = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    console.log(isHovered);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCardClick = () => {
        alert('Redirecting to product details...');
    };

    return (
        <>
            <div className="relative w-full h-[500px] overflow-hidden">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/hero-video.webm" type="video/webm" />
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Enhanced Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                {/* Banner Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Cassette <span className="text-blue-500"> Air</span> Conditioners</h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                        Advanced cooling technology for commercial and residential spaces
                    </p>                </div>

                {/* Menu Toggle */}
                <div className="absolute bottom-0 left-0 w-[50%] md:w-[30%] px-4">
                    <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-[#2d3e50]/70 text-white">
                        <h2 className="text-base md:text-lg font-semibold">Cassette Air Conditioners</h2>

                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Header Section */}
                <div className={`text-center pt-10 pb-16 relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our <span className="text-color">Premium</span> Cooling Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Energy-efficient air conditioners designed for optimal performance and comfort
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-4 pb-20 relative z-10 max-w-6xl mx-auto">
                    {/* Cassette AC Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-md overflow-hidden transform hover:-translate-y-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleCardClick}>

                        {/* Card Header */}
                        <div className="relative">
                            <div className="h-2 bg-gradient-to-r from-blue-900 to-indigo-700"></div>
                            <div className="text-center p-6 pt-8">
                                <div className="inline-block bg-red-200   text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                    BESTSELLER
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Cassette ACs
                                </h3>
                                <p className="text-gray-600">Ceiling-mounted cooling solutions</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="px-6 pb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent rounded-xl opacity-70"></div>
                                <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-200">
                                    <img
                                        src="/Product/client_cassette-front-copy.png"
                                        alt="Cassette AC"
                                        className="w-full h-auto block rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="px-6 pb-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-gray-500 text-sm mb-1">Type</div>
                                    <div className="font-bold text-gray-800">Inverter</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-gray-500 text-sm mb-1">Mount</div>
                                    <div className="font-bold text-gray-800">Ceiling</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Energy Rating: <span className="font-semibold text-blue-600">5 Star</span></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Air Distribution: <span className="font-semibold">360° Uniform</span></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Operation: <span className="font-semibold text-blue-600">Silent</span></span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 mb-6 border border-blue-100">
                                <div className="text-center">
                                    <div className="text-gray-600 mb-1">Starting Price</div>
                                    <div className="text-3xl font-bold text-gray-800 mb-1">₹45,000</div>
                                    <div className="text-xs text-gray-500">*Price varies by capacity & features</div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-gradient-to-r from-blue-900 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                                    View Details
                                </button>
                                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                                    Get Quote
                                </button>
                            </div>
                        </div>

                        {/* Card Footer */}

                    </div>

                    {/* Ducted AC Card */}
                    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full max-w-md overflow-hidden transform hover:-translate-y-2"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleCardClick}>

                        {/* Card Header */}
                        <div className="relative">
                            <div className="h-2 bg-gradient-to-r from-indigo-700 to-blue-900 "></div>
                            <div className="text-center p-6 pt-8">
                                <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                    PREMIUM
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    Ducted ACs
                                </h3>
                                <p className="text-gray-600">Concealed cooling with zone control</p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="px-6 pb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-green-100 to-transparent rounded-xl opacity-70"></div>
                                <div className="relative bg-gray-50 rounded-xl p-4 border border-gray-200 flex justify-center">
                                    <img
                                        src="/Product/images (1).jpeg"
                                        alt="Ducted AC"
                                        className="w-48 h-48 object-contain md:w-64 md:h-64 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="px-6 pb-6">
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-gray-500 text-sm mb-1">Type</div>
                                    <div className="font-bold text-gray-800">Inverter</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-gray-500 text-sm mb-1">Mount</div>
                                    <div className="font-bold text-gray-800">Concealed</div>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Energy Rating: <span className="font-semibold text-blue-600">5 Star</span></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Air Distribution: <span className="font-semibold">Zone Control</span></span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700">Operation: <span className="font-semibold text-blue-600">Ultra Silent</span></span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-5 mb-6 border border-green-100">
                                <div className="text-center">
                                    <div className="text-gray-600 mb-1">Starting Price</div>
                                    <div className="text-3xl font-bold text-gray-800 mb-1">₹65,000</div>
                                    <div className="text-xs text-gray-500">*Price varies by capacity & features</div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-2 gap-3">
                                <button className="bg-gradient-to-r from-blue-900 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                                    View Details
                                </button>
                                <button className="border-2 border-blue-600 text-blue-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-all duration-300 text-sm">
                                    Get Quote
                                </button>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="max-w-4xl mx-auto mt-16 px-4 relative z-10">
                    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
                        <div className="text-center">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing?</h3>
                            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                                Our cooling experts are here to help you find the perfect AC for your space
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                                    Get Expert Advice
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                    Schedule Site Visit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CassetteAirConditioners;