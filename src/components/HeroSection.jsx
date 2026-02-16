import React from 'react';
import { ArrowUpRight, Play,  MapPin } from 'lucide-react';
import heroImage from '../assets/herotooth.png';
import video from '../assets/video-thumbnail.png';
const HeroSection = () => {
    return (
        <div className="min-h-screen font-sans selection:text-white overflow-hidden relative">

            {/* --- Main Hero Content --- */}
            <main className="relative w-full max-w-[1700px] mx-auto md:px-12 lg:px-10 pt-10 md:pt-15 pb-32">

                {/* Background Image - CENTERED */}
                <div className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-60 pointer-events-none z-0 transform scale-125 md:scale-150">
                    <img
                        src={heroImage}
                        alt="Background Tooth"
                        className="w-full h- object-contain"
                    />
                </div>

                {/* Left Section: Main Heading & CTA */}
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-[#01CE91] font-medium">
                        Modern dentistry
                    </h1>

                    {/* Book Consultation Button */}
                    <button className="group mt-10 flex items-center gap-3 bg-[#1A1A1A] text-white pl-6 pr-2 py-3 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        <span className="font-medium text-xl">Book a Consultation</span>
                        <span className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#01CE91] group-hover:text-white transition-colors">
                            <ArrowUpRight size={20} />
                        </span>
                    </button>
                </div>

                {/* Right Section: Catchphrase */}
                <div className="mt-18 md:mt-18 flex flex-col items-end text-right relative z-10">
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-[#1A1A1A]">
                        <span className="font-sans italic font-light">for a confident,</span>
                        <br />
                        <span className="font-sans font-bold text-[#01CE91] not-italic mr-4">healthy</span>
                        <span className="font-sans italic font-light">smile</span>
                    </h2>

                    <p className="mt-8 max-w-sm text-gray-500 leading-relaxed text-base md:text-2xl font-lightbold">
                        Innovative technologies, pain-free <br />treatments, and personalized care<br /> for adults and children
                    </p>
                </div>
               {/* Prefix with a minus sign to go below the container boundary */}
                <div className="absolute -bottom-24 right-5 md:right-15 lg:right-5 z-20">
                    <div className="relative w-64 h-40 md:w-80 md:h-48 bg-gray-900 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 cursor-pointer group">
                        <img 
                            src={video} 
                            alt="Dentist" 
                            className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={20} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Floating Elements --- */}

                {/* Los Angeles (Top Right) */}
                <div className="absolute top-40 right-10 md:right-24 lg:right-48 animate-fade-in-up">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-md border border-gray-100">
                        <MapPin size={24} className="text-black" />
                        <span className="text-xl font-semibold text-gray-600">Los Angeles, CA</span>
                    </div>
                </div>

                {/* New York (Bottom Left) */}
                <div className="absolute bottom-20 left-10 md:left-24 lg:left-40 animate-fade-in-up delay-100">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-md border border-gray-100">
                        <MapPin size={24} className="text-black" />
                        <span className="text-xl font-semibold text-gray-600">New York, NY</span>
                    </div>
                </div>

                {/* Miami (Bottom Right area) */}
                <div className="absolute bottom-28 right-[35%] animate-fade-in-up delay-200">
                    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-md border border-gray-100">
                        <MapPin size={24} className="text-black" />
                        <span className="text-xl font-semibold text-gray-600">Miami, FL</span>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default HeroSection;