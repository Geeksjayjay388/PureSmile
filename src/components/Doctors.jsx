import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Doctors = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const doctors = [
        {
            id: 1,
            name: "Dr. Sarah Jenkins",
            role: "Orthodontist",
            specialty: "Braces & Aligners",
            img: "https://images.pexels.com/photos/5452195/pexels-photo-5452195.jpeg",
            experience: "12+ Years",
            achievements: ["Board Certified", "Invisalign Expert", "Published Researcher"],
            gradient: "from-[#01CE91] to-[#00D4AA]"
        },
        {
            id: 2,
            name: "Dr. Alex Morgan",
            role: "Implantologist / Oral Surgeon",
            specialty: "Dental Implants",
            img: "https://images.pexels.com/photos/8460090/pexels-photo-8460090.jpeg",
            isCEO: true,
            experience: "15+ Years",
            achievements: ["CEO & Founder", "Harvard Graduate", "Award Winner 2023"],
            gradient: "from-[#00E0B5] to-[#01CE91]"
        },
        {
            id: 3,
            name: "Dr. Michael Chen",
            role: "General Dentist",
            specialty: "Preventive Care",
            img: "https://images.pexels.com/photos/15962799/pexels-photo-15962799.jpeg",
            experience: "10+ Years",
            achievements: ["Patient's Choice", "Technology Pioneer", "Community Leader"],
            gradient: "from-[#00B87D] to-[#01CE91]"
        },
        {
            id: 4,
            name: "Dr. Emily White",
            role: "Pediatric Dentist",
            specialty: "Children's Dentistry",
            img: "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg",
            experience: "8+ Years",
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
        <section id="doctors" className="relative w-full py-24 bg-white overflow-hidden font-sans">

            {/* Floating Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-[5%] w-72 h-72 bg-gradient-to-br from-[#01CE91]/10 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-[5%] w-96 h-96 bg-gradient-to-br from-[#00E0B5]/10 to-transparent rounded-full blur-3xl"
                />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">

                {/* --- Header --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col items-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#E6FCF5] text-[#01CE91] px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 shadow-sm"
                    >
                        Our Doctors
                    </motion.span>
                    <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#1A1A1A] font-medium leading-[1.1] max-w-6xl tracking-tight">
                        A Trusted Team of <span className="italic font-light">Modern</span> Dental Experts Focused on Your Smile
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg lg:text-xl mt-8 max-w-4xl leading-relaxed">
                        Meet our highly skilled dentists - modern, empathetic professionals delivering personalized care, advanced techniques, and expert solutions tailored to every dental need.
                    </p>
                </motion.div>

                {/* --- Doctors Carousel --- */}
                <div className="flex items-center justify-center gap-6 lg:gap-10 py-16">

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
                    <div className="relative flex items-center justify-center min-h-[800px] w-full max-w-5xl">
                        {doctors.map((doc, index) => {
                            const isActive = index === activeIndex;
                            const isPrev = index === (activeIndex - 1 + doctors.length) % doctors.length;
                            const isNext = index === (activeIndex + 1) % doctors.length;

                            if (!isActive && !isPrev && !isNext) return null;

                            return (
                                <motion.div
                                    key={doc.id}
                                    layout
                                    onClick={() => setActiveIndex(index)}
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1 : 0.8,
                                        opacity: isActive ? 1 : 0.4,
                                        x: isActive ? 0 : isPrev ? -280 : 280,
                                        zIndex: isActive ? 30 : 20,
                                        filter: isActive ? 'blur(0px)' : 'blur(2px)'
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="absolute cursor-pointer w-full max-w-[320px] md:max-w-[480px]"
                                >
                                    {/* Card Body */}
                                    <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-[56px] overflow-hidden transition-shadow duration-500 ${isActive
                                        ? 'shadow-[0_40px_100px_rgba(1,206,145,0.2)] ring-1 ring-[#01CE91]/10'
                                        : 'shadow-lg hover:shadow-xl'
                                        }`}>

                                        {/* Top Badges */}
                                        <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
                                                >
                                                    <Award size={20} className="text-[#01CE91]" />
                                                    <span className="text-sm font-bold text-gray-700">{doc.experience}</span>
                                                </motion.div>
                                            )}

                                            {doc.isCEO && (
                                                <div className={`bg-gradient-to-r ${doc.gradient} text-white px-5 py-3 rounded-2xl shadow-xl text-sm font-bold uppercase tracking-widest transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                                    CEO
                                                </div>
                                            )}
                                        </div>

                                        {/* Doctor Image Container (Fixed Ratios) */}
                                        <div className={`relative overflow-hidden ${isActive ? 'h-[480px] md:h-[580px]' : 'h-[400px] md:h-[500px]'} transition-all duration-500`}>
                                            <img
                                                src={doc.img}
                                                alt={doc.name}
                                                className={`w-full h-full object-cover transition-all duration-700 ${isActive ? 'grayscale-0 scale-100' : 'grayscale scale-105'}`}
                                            />

                                            {/* Gradient Overlay */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                                        </div>

                                        {/* Info Section */}
                                        <AnimatePresence mode="wait">
                                            {isActive ? (
                                                <motion.div
                                                    key="active-info"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="relative bg-white pt-16 pb-12 px-10 overflow-hidden"
                                                >
                                                    {/* Wavy SVG Divider */}
                                                    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full">
                                                        <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                                            <path d="M0,0 C150,120 350,120 500,60 C650,0 850,0 1200,120 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
                                                            <path d="M0,20 C150,140 350,140 500,80 C650,20 850,20 1200,140" fill="none" stroke="#01CE91" strokeWidth="6" strokeLinecap="round"></path>
                                                        </svg>
                                                    </div>

                                                    <div className="text-center mb-8">
                                                        <h4 className={`text-transparent bg-clip-text bg-gradient-to-r ${doc.gradient} text-2xl md:text-3xl font-bold tracking-tight mb-2 uppercase`}>
                                                            {doc.name}
                                                        </h4>
                                                        <p className="text-gray-600 text-base font-bold">{doc.role}</p>
                                                        <p className="text-gray-400 text-sm mt-1 font-medium italic">{doc.specialty}</p>
                                                    </div>

                                                    <div className="space-y-3 mb-10">
                                                        {doc.achievements.map((achievement, idx) => (
                                                            <motion.div
                                                                key={idx}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 0.1 * idx }}
                                                                className="flex items-center gap-3 text-sm text-gray-600 font-light"
                                                            >
                                                                <CheckCircle2 size={18} className="text-[#01CE91] flex-shrink-0" />
                                                                <span>{achievement}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>

                                                    <button className={`w-full bg-gradient-to-r ${doc.gradient} text-white py-4 rounded-[20px] font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group active:scale-95`}>
                                                        <Calendar size={20} />
                                                        <span>Book Appointment</span>
                                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="inactive-info"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md py-6 px-8 text-center"
                                                >
                                                    <h4 className="text-gray-800 text-xl font-bold tracking-tight">{doc.name}</h4>
                                                    <p className="text-gray-400 text-sm font-semibold mt-1">{doc.role}</p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
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
                                ? 'w-12 h-2.5 bg-gradient-to-r from-[#01CE91] to-[#00D4AA]'
                                : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;