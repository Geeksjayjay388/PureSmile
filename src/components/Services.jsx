import React from 'react';
import { Activity, ShieldPlus, Sparkles, Stethoscope, Zap } from 'lucide-react';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';
import service4 from '../assets/4.png';
import service5 from '../assets/5.png';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "General Dentistry",
            desc: "Routine checkups, cleanings, and preventive care",
            img: service1,
            icon: Activity,
            rotation: "-rotate-2",        // ← Permanent slight left tilt
            marginTop: "mt-0"
        },
        {
            id: 2,
            title: "Orthodontics",
            desc: "Braces and clear aligners for all ages",
            img: service2,
            icon: ShieldPlus,
            rotation: "rotate-2",         // ← Permanent slight right tilt
            marginTop: "mt-16"
        },
        {
            id: 3,
            title: "Dental Implants",
            desc: "Teeth whitening, veneers, and smile makeovers",
            img: service3,
            icon: Sparkles,
            rotation: "-rotate-1",        // ← Permanent slight left tilt
            marginTop: "mt-8"
        },
        {
            id: 4,
            title: "Restorative Dentistry",
            desc: "Crowns, bridges, and fillings designed to restore function",
            img: service4,
            icon: Stethoscope,
            rotation: "rotate-1",         // ← Permanent slight right tilt
            marginTop: "mt-0"
        },
        {
            id: 5,
            title: "Endodontics",
            desc: "Pain-free root canal treatments",
            img: service5,
            icon: Zap,
            rotation: "-rotate-2",        // ← Permanent slight left tilt
            marginTop: "mt-12"
        }
    ];

    return (
        <section className="relative w-full py-24 lg:py-32 bg-[#F5F5F5] overflow-hidden font-sans">

            <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

                {/* --- Header --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-20 lg:mb-32">

                    {/* Left: Title */}
                    <div className="max-w-4xl">
                        <span className="text-[#01CE91] text-sm font-semibold tracking-widest uppercase mb-8 inline-block">
                            Services
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] text-[#1A1A1A] leading-[1.1] tracking-tight font-medium">
                            Comprehensive Dental Services Designed for Every Smile and Lifestyle
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <div className="max-w-md lg:pt-14">
                        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl leading-relaxed">
                            From general dentistry and cosmetic treatments to orthodontics, implants, and whitening – we provide modern solutions for healthy, confident smiles at every stage.
                        </p>
                    </div>
                </div>

                {/* --- Scattered 2-Column Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-24 lg:gap-y-8 max-w-[1400px] mx-auto">
                    {services.map((item, index) => {
                        const IconComponent = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`md:${item.marginTop} ${isLeft ? 'md:justify-self-end' : 'md:justify-self-start'} ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}
                            >
                                {/* Card with permanent rotation */}
                                <div className={`group w-full max-w-[400px] ${item.rotation} hover:scale-[1.02] transition-transform duration-300`}>
                                    <div className="bg-white rounded-[32px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300">

                                        {/* Image Container with Floating Icon */}
                                        <div className="relative mb-8">
                                            <div className="rounded-[24px] overflow-hidden">
                                                <div className="aspect-[4/3] relative">
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Floating Icon Badge */}
                                            <div className="absolute -bottom-7 left-1/2 -translate-x-1/2">
                                                <div className="w-14 h-14 bg-[#01CE91] rounded-2xl flex items-center justify-center shadow-lg">
                                                    <IconComponent size={28} className="text-white" strokeWidth={2} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="text-center pt-5 pb-6 px-4">
                                            <h3 className="text-[28px] font-medium text-[#1A1A1A] mb-3 italic">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- Bottom CTA --- */}
                <div className="flex justify-center mt-32 lg:mt-40">
                    <button className="group flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white pl-8 pr-2 py-2 rounded-full transition-all duration-300 shadow-xl active:scale-95">
                        <span className="font-semibold text-lg pl-2">Explore more</span>
                        <div className="w-12 h-12 bg-[#01CE91] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-sm font-bold">M</span>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;