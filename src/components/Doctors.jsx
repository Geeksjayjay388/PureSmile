import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Calendar, Star, Users2, CheckCircle2, Sparkles } from 'lucide-react';

const Doctors = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Jenkins",
            role: "Orthodontist",
            specialty: "Braces & Aligners",
            img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=500",
            experience: "12+ Years",
            patients: "3,200+",
            rating: "4.9",
            achievements: ["Board Certified", "Invisalign Expert", "Published Researcher"],
            gradient: "from-[#01CE91] to-[#00D4AA]"
        },
        {
            id: 2,
            name: "Dr. Alex Morgan",
            role: "Implantologist / Oral Surgeon",
            specialty: "Dental Implants",
            img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=500",
            isCEO: true,
            experience: "15+ Years",
            patients: "5,000+",
            rating: "5.0",
            achievements: ["CEO & Founder", "Harvard Graduate", "Award Winner 2023"],
            gradient: "from-[#00E0B5] to-[#01CE91]"
        },
        {
            id: 3,
            name: "Dr. Michael Chen",
            role: "General Dentist",
            specialty: "Preventive Care",
            img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500",
            experience: "10+ Years",
            patients: "4,100+",
            rating: "4.8",
            achievements: ["Patient's Choice", "Technology Pioneer", "Community Leader"],
            gradient: "from-[#00B87D] to-[#01CE91]"
        },
        {
            id: 4,
            name: "Dr. Emily White",
            role: "Pediatric Dentist",
            specialty: "Children's Dentistry",
            img: "https://imgs.search.brave.com/zob5uJneiZ_kvCzB65Vx6ToPGquokK1NfbUPIx6bkB0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvdmlkZW5jZWNo/Yy5vcmcvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDEvd2hp/dGUtZW1pbHkuanBn",
            experience: "8+ Years",
            patients: "2,800+",
            rating: "4.9",
            achievements: ["Pediatric Specialist", "Gentle Care Award", "Parent Recommended"],
            gradient: "from-[#00D4AA] to-[#00E0B5]"
        }
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative w-full py-24 bg-white overflow-hidden font-sans">

            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[5%] w-72 h-72 bg-gradient-to-br from-[#01CE91]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-gradient-to-br from-[#00E0B5]/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

                {/* --- Header --- */}
                <div className="text-center flex flex-col items-center mb-24">
                    <span className="bg-[#E6FCF5] text-[#01CE91] px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                        Our Doctors
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-[5rem] text-[#1A1A1A] font-medium leading-[1.1] max-w-6xl tracking-tight">
                        A Trusted Team of <span className="italic font-light">Modern</span> Dental Experts Focused on Your Smile
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl lg:text-2xl mt-8 max-w-4xl leading-relaxed">
                        Meet our highly skilled dentists - modern, empathetic professionals delivering personalized care, advanced techniques, and expert solutions tailored to every dental need.
                    </p>
                </div>

                {/* --- Doctors Carousel --- */}
                <div className="flex items-center justify-center gap-8 lg:gap-14 overflow-visible py-16">

                    {/* Navigation Left */}
                    <button
                        onClick={handlePrev}
                        className="hidden lg:flex w-20 h-20 flex-shrink-0 aspect-square rounded-full bg-gradient-to-br from-[#01CE91] to-[#00B87D] text-white items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all active:scale-95 z-20 group"
                    >
                        <ArrowLeft
                            size={32}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                    </button>

                    {/* Cards Container */}
                    <div className="relative flex gap-8 md:gap-12 items-center justify-center min-h-[850px]">
                        {doctors.map((doc, index) => {
                            const isActive = index === activeIndex;
                            const isPrev = index === activeIndex - 1 || (activeIndex === 0 && index === doctors.length - 1);
                            const isNext = index === activeIndex + 1 || (activeIndex === doctors.length - 1 && index === 0);

                            return (
                                <div
                                    key={doc.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`relative transition-all duration-700 cursor-pointer ${isActive
                                        ? 'w-[350px] md:w-[480px] lg:w-[540px] z-30 scale-100 opacity-100'
                                        : isPrev || isNext
                                            ? 'w-[260px] md:w-[350px] lg:w-[380px] z-20 scale-90 opacity-40 blur-[1px]'
                                            : 'hidden'
                                        }`}
                                >
                                    {/* Card Body */}
                                    <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-[56px] overflow-hidden transition-all duration-700 ${isActive
                                        ? 'shadow-[0_40px_100px_rgba(1,206,145,0.25)] ring-2 ring-[#01CE91]/20'
                                        : 'shadow-xl hover:shadow-2xl'
                                        }`}>

                                        {/* Animated Background Pattern */}
                                        {isActive && (
                                            <div className="absolute inset-0 opacity-5">
                                                <div className="absolute inset-0" style={{
                                                    backgroundImage: `radial-gradient(circle at 2px 2px, #01CE91 1px, transparent 0)`,
                                                    backgroundSize: '40px 40px'
                                                }}></div>
                                            </div>
                                        )}

                                        {/* Top Badges */}
                                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                                            {/* Experience Badge */}
                                            {isActive && (
                                                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform -translate-x-4 opacity-0 animate-slideInLeft">
                                                    <Award size={20} className="text-[#01CE91]" />
                                                    <span className="text-sm font-bold text-gray-700">{doc.experience}</span>
                                                </div>
                                            )}

                                            {/* CEO Badge */}
                                            {doc.isCEO && (
                                                <div className={`bg-gradient-to-r ${doc.gradient} text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-bold uppercase tracking-widest ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                                                    } transition-all duration-500`}>
                                                    CEO & Founder
                                                </div>
                                            )}
                                        </div>

                                        {/* Doctor Image */}
                                        <div className={`relative overflow-hidden transition-all duration-700 ${isActive ? 'h-[500px] md:h-[600px]' : 'h-[420px] md:h-[500px]'
                                            }`}>
                                            <img
                                                src={doc.img}
                                                alt={doc.name}
                                                className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-100' : 'grayscale scale-105'
                                                    }`}
                                            />

                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'
                                                }`}></div>

                                            {/* Bottom Stats Bar (Active Only) */}
                                            {isActive && (
                                                <div className="absolute bottom-8 left-8 right-8 flex gap-3 z-20 translate-y-6 opacity-0 animate-slideInUp">
                                                    <div className="flex-1 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg text-center">
                                                        <Users2 size={24} className="text-[#01CE91] mx-auto mb-2" />
                                                        <div className="text-sm font-bold text-gray-700">{doc.patients}</div>
                                                        <div className="text-[12px] text-gray-400 font-medium">Patients</div>
                                                    </div>
                                                    <div className="flex-1 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg text-center">
                                                        <Star size={24} className="text-yellow-500 mx-auto mb-2 fill-yellow-500" />
                                                        <div className="text-sm font-bold text-gray-700">{doc.rating}</div>
                                                        <div className="text-[12px] text-gray-400 font-medium">Rating</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Active: Wavy Name Section with Details */}
                                        {isActive && (
                                            <div className="relative bg-white pt-16 pb-12 px-10">
                                                {/* Wavy SVG Divider */}
                                                <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full">
                                                    <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                                        <path d="M0,0 C150,120 350,120 500,60 C650,0 850,0 1200,120 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
                                                        <path d="M0,20 C150,140 350,140 500,80 C650,20 850,20 1200,140" fill="none" stroke="#01CE91" strokeWidth="6" strokeLinecap="round"></path>
                                                    </svg>
                                                </div>

                                                {/* Name & Role */}
                                                <div className="text-center mb-8">
                                                    <h4 className={`text-transparent bg-clip-text bg-gradient-to-r ${doc.gradient} text-4xl font-bold tracking-tight mb-2 uppercase`}>
                                                        {doc.name}
                                                    </h4>
                                                    <p className="text-gray-600 text-lg font-bold">
                                                        {doc.role}
                                                    </p>
                                                    <p className="text-gray-400 text-base mt-2 font-medium">
                                                        {doc.specialty}
                                                    </p>
                                                </div>

                                                {/* Achievements */}
                                                <div className="space-y-3 mb-10">
                                                    {doc.achievements.map((achievement, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-center gap-3 text-base text-gray-600 font-medium"
                                                            style={{
                                                                animation: `slideInRight 0.5s ease-out ${idx * 0.1}s both`
                                                            }}
                                                        >
                                                            <CheckCircle2 size={20} className="text-[#01CE91] flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA Button */}
                                                <button className={`w-full bg-gradient-to-r ${doc.gradient} text-white py-5 rounded-[24px] font-bold text-base uppercase tracking-wider shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3 group active:scale-95`}>
                                                    <Calendar size={22} />
                                                    <span>Book Appointment</span>
                                                    <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
                                                </button>
                                            </div>
                                        )}

                                        {/* Inactive: Simple Name */}
                                        {!isActive && (
                                            <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md py-8 px-8 text-center">
                                                <h4 className="text-gray-700 text-2xl font-bold tracking-tight">
                                                    {doc.name}
                                                </h4>
                                                <p className="text-gray-400 text-base font-semibold mt-1">
                                                    {doc.role}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Right */}
                    <button
                        onClick={handleNext}
                        className="hidden lg:flex w-20 h-20 flex-shrink-0 aspect-square rounded-full bg-white text-gray-400 border-2 border-gray-100 items-center justify-center shadow-md hover:shadow-xl hover:border-[#01CE91] hover:text-[#01CE91] hover:scale-110 transition-all active:scale-95 z-20 group"
                    >
                        <ArrowRight
                            size={32}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {doctors.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === activeIndex
                                ? 'w-12 h-3 bg-gradient-to-r from-[#01CE91] to-[#00B87D]'
                                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Doctors;