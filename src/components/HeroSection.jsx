import React, { useState } from 'react';
import { ArrowUpRight, Play, MapPin } from 'lucide-react';
import heroImage from '../assets/herotooth.png';
import video from '../assets/video-thumbnail.png';
import BookingModal from './BookingModal';

const LocationPointer = ({ city, address, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`absolute z-30 transition-all duration-500 ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-4 rounded-full shadow-xl border border-white/50 cursor-help transition-all duration-500 ${isHovered ? 'scale-110 shadow-[0_20px_50px_rgba(1,206,145,0.2)]' : 'hover:scale-105'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-[#01CE91] text-white' : 'bg-[#1A1A1A] text-white'}`}>
                    <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-black text-[#1A1A1A] leading-none uppercase tracking-wider">{city}</span>
                    <div className={`grid transition-all duration-500 ease-in-out ${isHovered ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                            <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HeroSection = ({ onBookClick }) => {
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
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] leading-[1.05] tracking-tighter text-[#01CE91] font-black uppercase">
                        Modern <br />dentistry
                    </h1>

                    {/* Book Consultation Button */}
                    <button
                        onClick={onBookClick}
                        className="group mt-12 flex items-center gap-4 bg-[#1A1A1A] text-white pl-8 pr-3 py-3.5 rounded-full hover:bg-black transition-all shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95"
                    >
                        <span className="font-black text-xl lg:text-2xl uppercase tracking-tighter">Book a Consultation</span>
                        <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-[#01CE91] group-hover:text-white transition-all duration-500 group-hover:rotate-45">
                            <ArrowUpRight size={26} />
                        </div>
                    </button>
                </div>

                {/* Right Section: Catchphrase */}
                <div className="mt-20 md:mt-10 flex flex-col items-end text-right relative z-10">
                    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[1.05] text-[#1A1A1A] font-black uppercase tracking-tighter">
                        <span className="italic font-light">for a</span> <span className="text-[#01CE91]">confident,</span>
                        <br />
                        <span className="font-bold text-[#01CE91] not-italic mr-4 leading-none">healthy</span>
                        <span className="italic font-light">smile</span>
                    </h2>

                    <p className="mt-4 max-w-md text-gray-500 leading-relaxed text-lg md:text-2xl font-bold italic">
                        Innovative technologies, pain-free <br />treatments, and personalized care<br /> for adults and children
                    </p>
                </div>

                {/* Prefix with a minus sign to go below the container boundary */}
                <div className="absolute -bottom-20 right-5 md:right-15 lg:right-5 z-20">
                    <div className="relative w-72 h-44 md:w-96 md:h-56 bg-gray-900 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl transition-all duration-700 cursor-pointer group hover:scale-105 hover:rotate-2">
                        <img
                            src={video}
                            alt="Dentist"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-[#01CE91] transition-all duration-700">
                                <Play size={28} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Floating Elements --- */}

                {/* Los Angeles (Top Right) */}
                <LocationPointer
                    city="Los Angeles"
                    address="8522 Beverly Blvd, CA 90048"
                    className="top-40 right-10 md:right-24 lg:right-48 animate-fade-in-up"
                />

                {/* New York (Bottom Left) */}
                <LocationPointer
                    city="New York"
                    address="450 7th Ave, Manhattan, NY 10123"
                    className="bottom-20 left-10 md:left-24 lg:left-40 animate-fade-in-up delay-100"
                />

                {/* Miami (Bottom Right area) */}
                <LocationPointer
                    city="Miami"
                    address="300 Biscayne Blvd Way, FL 33131"
                    className="bottom-32 right-[35%] animate-fade-in-up delay-200"
                />
            </main>
        </div>
    );
};


