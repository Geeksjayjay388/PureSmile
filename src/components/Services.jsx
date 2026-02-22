import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';
import service4 from '../assets/4.png';
import service5 from '../assets/5.png';
import service6 from '../assets/6.webp';
import service7 from '../assets/7.webp';
import service8 from '../assets/8.webp';

const Services = () => {
    const [showMore, setShowMore] = useState(false);

    const initialServices = [
        { id: 1, img: service1, rotation: "rotate-2", marginTop: "mt-0" },
        { id: 2, img: service2, rotation: "-rotate-1", marginTop: "mt-16" },
        { id: 3, img: service3, rotation: "rotate-1", marginTop: "mt-8" },
        { id: 4, img: service4, rotation: "rotate-2", marginTop: "mt-0" },
        { id: 5, img: service5, rotation: "-rotate-1", marginTop: "mt-16" },
    ];

    const additionalServices = [
        { id: 6, img: service6, rotation: "rotate-2", marginTop: "mt-0" },      // Bottom left area
        { id: 7, img: service7, rotation: "-rotate-1", marginTop: "mt-16" },    // Offset right
        { id: 8, img: service8, rotation: "rotate-1", marginTop: "mt-8" },      // Bottom right
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: 20,
            scale: 0.95,
            transition: { duration: 0.3 }
        }
    };

    const renderCard = (item, index, isAdditional = false) => {
        // For additional cards, calculate position in new row
        const totalIndex = isAdditional ? index + 5 : index;
        const isLeft = totalIndex % 2 === 0;

        return (
            <motion.div
                key={item.id}
                variants={cardVariants}
                layout
                className={`${item.marginTop} ${isLeft ? 'md:justify-self-end' : 'md:justify-self-start'} ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
            >
                <motion.div
                    whileHover={{ scale: 1.03, rotate: isLeft ? -1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`group w-full max-w-[400px] ${item.rotation}`}
                >
                    <div className="bg-white rounded-[32px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(1,206,145,0.15)] transition-all duration-300">
                        <div className="rounded-[24px] overflow-hidden">
                            <img
                                src={item.img}
                                alt={`Service ${item.id}`}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#F5F5F5] overflow-hidden font-sans">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

                {/* --- Header --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <span className="text-[#01CE91] text-sm font-semibold tracking-widest uppercase mb-8 inline-block">
                            Services
                        </span>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[4rem] text-[#1A1A1A] leading-[1.1] tracking-tight font-medium">
                            Comprehensive Dental Services Designed for Every Smile and Lifestyle
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md lg:pt-14"
                    >
                        <p className="text-gray-500 text-base md:text-lg lg:text-xl leading-relaxed">
                            From general dentistry and cosmetic treatments to orthodontics, implants, and whitening – we provide modern solutions for healthy, confident smiles at every stage.
                        </p>
                    </motion.div>
                </div>

                {/* --- Services Grid --- */}
                <div className="space-y-12">
                    {/* First Row - Always visible */}
                    <motion.div
                        variants={containerVariants}
                        initial="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-24 lg:gap-y-8 max-w-[1400px] mx-auto"
                    >
                        {initialServices.map((item, index) => renderCard(item, index))}
                    </motion.div>

                    {/* Second Row - Appears on "Explore more" */}
                    <AnimatePresence mode="wait">
                        {showMore && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-24 lg:gap-y-8 max-w-[1400px] mx-auto pt-8"
                            >
                                {additionalServices.map((item, index) => renderCard(item, index, true))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* --- Bottom CTA --- */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mt-24 lg:mt-32"
                >
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="group flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl active:scale-95"
                    >
                        <span className="font-semibold text-base pl-2">
                            {showMore ? 'Show less' : 'Explore more'}
                        </span>
                        <motion.div
                            animate={{ rotate: showMore ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-12 h-12 bg-[#01CE91] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        >
                            <ArrowRight size={20} className="text-white" />
                        </motion.div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;