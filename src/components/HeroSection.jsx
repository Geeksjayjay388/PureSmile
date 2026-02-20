import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, MapPin } from 'lucide-react';
import heroImage from '../assets/herotooth.webp';
import video from '../assets/video-thumbnail.png';

const LocationPointer = ({ city, address, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`absolute z-30 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-xl border border-white/50 cursor-help transition-all duration-300 ${isHovered ? 'scale-110 shadow-[0_20px_50px_rgba(1,206,145,0.2)]' : 'hover:scale-105'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-[#01CE91] text-white' : 'bg-[#1A1A1A] text-white'}`}>
                    <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black text-[#1A1A1A] leading-none uppercase tracking-wider">{city}</span>
                    <div className={`grid transition-all duration-300 ease-in-out ${isHovered ? 'grid-rows-[1fr] mt-2 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const HeroSection = ({ onBookClick }) => {
    return (
        <div id="home" className="min-h-screen font-sans selection:text-white overflow-hidden relative">
            {/* --- Main Hero Content --- */}
            <main className="relative w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-10 pt-32 md:pt-40 pb-40 md:pb-32">

                {/* Background Image - CENTERED */}
                <div className="absolute top-[60%] md:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl opacity-60 pointer-events-none z-0 transform scale-[2] md:scale-150">
                    <img
                        src={heroImage}
                        alt="Background Tooth"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Left Section: Main Heading & CTA */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative z-10 max-w-3xl text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <h1 className="text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-[#01CE91] font-medium">
                        Modern dentistry
                    </h1>

                    {/* Book Consultation Button */}
                    <button
                        onClick={onBookClick}
                        className="group mt-8 md:mt-10 flex items-center gap-3 bg-[#1A1A1A] text-white pl-6 pr-2 py-3 rounded-full hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        <span className="font-medium text-base md:text-lg">Book a Consultation</span>
                        <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-[#01CE91] group-hover:text-white transition-colors">
                            <ArrowUpRight size={20} />
                        </div>
                    </button>
                </motion.div>

                {/* Right Section: Catchphrase */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className="mt-24 md:mt-10 flex flex-col items-center md:items-end text-center md:text-right relative z-10"
                >
                    <h2 className="text-3xl md:text-6xl lg:text-[4.8rem] leading-[1.1] text-[#1A1A1A]">
                        <span className="font-sans italic">for a confident,</span>
                        <br />
                        <span className="font-sans font-bold text-[#01CE91] not-italic mr-4">healthy</span>
                        <span className="font-sans italic ">smile</span>
                    </h2>

                    <p className="mt-4 md:mt-1 max-w-sm text-gray-500 leading-relaxed text-base md:text-xl font-lightbold">
                        Innovative technologies, pain-free <br />treatments, and personalized care<br /> for adults and children
                    </p>
                </motion.div>

                {/* Video Thumbnail Section */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:-bottom-18 md:right-15 lg:right-5 z-20">
                    <div className="relative w-72 h-44 md:w-80 md:h-48 bg-gray-900 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-500 cursor-pointer group">
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
                <LocationPointer
                    city="Los Angeles"
                    address="8522 Beverly Blvd, CA 90048"
                    className="top-32 right-5 md:top-40 md:right-24 lg:right-48 animate-fade-in-up md:block hidden"
                />

                {/* New York (Bottom Left) */}
                <LocationPointer
                    city="New York"
                    address="450 7th Ave, Manhattan, NY 10123"
                    className="bottom-40 left-5 md:bottom-20 md:left-24 lg:left-40 animate-fade-in-up delay-100 md:block hidden"
                />

                {/* Miami (Bottom Right area) */}
                <LocationPointer
                    city="Miami"
                    address="300 Biscayne Blvd Way, FL 33131"
                    className="bottom-52 right-5 md:bottom-32 md:right-[35%] animate-fade-in-up delay-200 md:block hidden"
                />
            </main>
        </div>
    );
};

export default HeroSection;
