import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus, ShieldCheck, Heart, Sparkles, GraduationCap, Clock } from 'lucide-react';
import teethBg from '../assets/teeths.webp';

const About = () => {
    // Unique content and icons for each interactive card
    const toothInteractions = [
        {
            id: 1, x: 'left-[10%]', y: 'top-[50%]',
            title: "Clinical Precision",
            desc: "Digital scanning and AI-assisted planning for 100% accuracy in every procedure.",
            icon: <ShieldCheck className="text-[#01CE91]" size={28} />
        },
        {
            id: 2, x: 'left-[27.5%]', y: 'top-[50%]',
            title: "Patient Trust",
            desc: "Join over 5,000+ happy families who trust us for their lifelong dental health.",
            icon: <Heart className="text-[#01CE91]" size={28} />
        },
        {
            id: 3, x: 'left-[50%]', y: 'top-[50%]',
            title: "7+ Years",
            desc: "A legacy of excellence, serving the community with advanced dental care since 2019.",
            icon: <Clock className="text-[#01CE91]" size={28} />
        },
        {
            id: 4, x: 'left-[72.5%]', y: 'top-[50%]',
            title: "Expert Care",
            desc: "Our surgeons are certified by global dental boards and leading medical institutions.",
            icon: <GraduationCap className="text-[#01CE91]" size={28} />
        },
        {
            id: 5, x: 'left-[90%]', y: 'top-[50%]',
            title: "Durability",
            desc: "We use high-grade biocompatible ceramics that mimic natural enamel strength.",
            icon: <Sparkles className="text-[#01CE91]" size={28} />
        }
    ];

    const [activeId, setActiveId] = React.useState(null);

    return (
        <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden font-sans selection:bg-[#01CE91] selection:text-white">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12 lg:px-10 relative z-10">

                {/* --- Top Content Section --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20">

                    {/* Left: Headline with inline badge */}
                    <div className="max-w-5xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-2xl md:text-4xl lg:text-5xl xl:text-[4rem] leading-[1.15] text-[#1A1A1A] tracking-tight"
                        >
                            <span className="font-medium">Modern dentistry</span>{' '}
                            <span className="font-light italic">backed by years of experience, clinical precision, and deep patient trust</span>
                        </motion.h2>

                        {/* About us badge positioned after the heading */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            className="mt-8"
                        >
                            <span className="inline-block bg-[#E6FCF5] text-[#01CE91] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                                About us
                            </span>
                        </motion.div>
                    </div>

                    {/* Right: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-md lg:max-w-lg"
                    >
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                            Explore the experience, certifications, and proven outcomes behind our modern approach to dentistry, trusted by thousands of patients over the years.
                        </p>
                    </motion.div>
                </div>

                {/* --- Middle: Interactive Teeth Row --- */}
                <div className="relative w-full h-[350px] md:h-[600px] flex items-center justify-center my-6 md:my-10">

                    {/* Background Teeth */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.9, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
                    >
                        <img
                            src={teethBg}
                            alt="Background Teeth"
                            className="w-full h-full object-contain transform scale-100 md:scale-110 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Overlay: Interactive Plus Points */}
                    <div className="absolute inset-0 w-full h-full max-w-6xl mx-auto">
                        {toothInteractions.map((point) => (
                            <div
                                key={point.id}
                                className={`absolute ${point.x} ${point.y} -translate-x-1/2 -translate-y-28 z-20 group`}
                                onMouseEnter={() => setActiveId(point.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                {/* Trigger Circle */}
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    className="w-14 h-14 md:w-28 md:h-28 rounded-full border-2 border-white/80 bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#01CE91] shadow-lg"
                                >
                                    <Plus className={`text-[#01CE91] transition-all duration-500 w-8 h-8 md:w-10 md:h-10 ${activeId === point.id ? 'text-white rotate-90' : ''}`} />
                                </motion.div>

                                {/* Enhanced Detail Card */}
                                <AnimatePresence>
                                    {activeId === point.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, x: '-50%', scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                                            exit={{ opacity: 0, y: 10, x: '-50%', scale: 0.95 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="absolute bottom-full left-1/2 mb-6 md:mb-8 w-72 md:w-[22rem] p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-30 border border-gray-50"
                                        >
                                            {/* Top Icon Block */}
                                            <div className="w-14 h-14 bg-[#F0FFF9] rounded-2xl flex items-center justify-center mb-5">
                                                {point.icon}
                                            </div>

                                            <h4 className="font-bold text-[#1A1A1A] text-xl mb-2 tracking-tight">
                                                {point.title}
                                            </h4>

                                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                                {point.desc}
                                            </p>

                                            <div className="mt-5 pt-5 border-t border-gray-50 flex items-center text-[#01CE91] font-bold text-xs uppercase tracking-widest">
                                                View Case Study <ArrowUpRight size={14} className="ml-2" />
                                            </div>

                                            {/* Card Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 -mt-2 shadow-sm"></div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Bottom Footer Section --- */}
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-10 mt-12 md:mt-0">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col md:flex-row items-start md:items-center gap-6"
                    >
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, zIndex: 10, scale: 1.1 }}
                                    className="w-14 h-14 rounded-full border-4 border-white overflow-hidden shadow-sm bg-gray-100 cursor-pointer"
                                >
                                    <img
                                        src={`https://i.pravatar.cc/150?u=dentist${i}`}
                                        alt="Team member"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                                    />
                                </motion.div>
                            ))}
                        </div>
                        <div className="pl-6 border-l-2 border-[#01CE91] max-w-sm">
                            <p className="text-gray-400 italic text-base leading-snug">
                                "Our team helps you and your teeth shine with health, confidence, and modern aesthetics."
                            </p>
                        </div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-4 bg-[#1A1A1A] text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all shadow-xl active:scale-95"
                    >
                        <span className="font-semibold text-base">Explore more</span>
                        <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-[#01CE91] group-hover:text-white transition-all">
                            <ArrowUpRight size={24} />
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default About;