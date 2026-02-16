import React, { useState } from 'react';
import { ArrowDown, LucideStethoscope, Sparkles, ShieldPlus, Zap, Activity, ArrowRight, Star, Clock, Users } from 'lucide-react';
import service1 from '../assets/1.png';
import service2 from '../assets/2.png';
import service3 from '../assets/3.png';
import service4 from '../assets/4.png';
import service5 from '../assets/5.png';

const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const services = [
        {
            id: 1,
            title: "General Dentistry",
            desc: "Routine checkups, cleanings, and preventive care",
            img: service1,
            icon: <Activity size={28} className="text-white" />,
            gradient: "from-[#01CE91] via-[#00D4AA] to-[#00E0B5]",
            stats: { patients: "2.5K+", rating: "4.9", time: "30min" },
            rotation: "group-hover:rotate-1"
        },
        {
            id: 2,
            title: "Orthodontics",
            desc: "Braces and clear aligners for all ages",
            img: service2,
            icon: <ShieldPlus size={28} className="text-white" />,
            gradient: "from-[#00B87D] via-[#01CE91] to-[#00D4AA]",
            stats: { patients: "1.8K+", rating: "5.0", time: "45min" },
            rotation: "group-hover:-rotate-1"
        },
        {
            id: 3,
            title: "Dental Implants",
            desc: "Teeth whitening, veneers, and smile makeovers",
            img: service3,
            icon: <Sparkles size={28} className="text-white" />,
            gradient: "from-[#00E0B5] via-[#01CE91] to-[#00B87D]",
            stats: { patients: "3.2K+", rating: "4.8", time: "60min" },
            rotation: "group-hover:rotate-2"
        },
        {
            id: 4,
            title: "Restorative",
            desc: "Crowns, bridges, and fillings designed to restore function",
            img: service4,
            icon: <LucideStethoscope size={28} className="text-white" />,
            gradient: "from-[#00D4AA] via-[#00E0B5] to-[#01CE91]",
            stats: { patients: "2.1K+", rating: "4.9", time: "50min" },
            rotation: "group-hover:-rotate-2"
        },
        {
            id: 5,
            title: "Endodontics",
            desc: "Pain-free root canal treatments",
            img: service5,
            icon: <Zap size={28} className="text-white" />,
            gradient: "from-[#01CE91] via-[#00B87D] to-[#00D4AA]",
            stats: { patients: "1.5K+", rating: "4.7", time: "40min" },
            rotation: "group-hover:rotate-1"
        }
    ];

    return (
        <section className="relative w-full py-32 bg-[#F8F9FA] overflow-hidden font-sans">
            
            {/* Animated Background Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #01CE91 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-br from-[#01CE91]/20 to-[#00E0B5]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-40 right-[15%] w-96 h-96 bg-gradient-to-br from-[#00B87D]/20 to-[#01CE91]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* --- Wavy Top Section --- */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                <svg className="relative block w-full h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#FFFFFF"></path>
                </svg>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 pt-20">
                
                {/* --- Header --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20 mb-32">
                    
                    {/* Left: Title */}
                    <div className="max-w-2xl">
                        <span className="bg-[#E6FCF5] text-[#01CE91] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 inline-block shadow-sm">
                            Services
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.15] tracking-tight">
                            <span className="font-medium">Comprehensive Dental Services Designed for </span>
                            <span className="italic font-light">Every</span>
                            <span className="font-medium"> Smile and Lifestyle</span>
                        </h2>
                    </div>
                    
                    {/* Right: Description */}
                    <div className="max-w-md lg:max-w-lg">
                        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                            From general dentistry and cosmetic treatments to orthodontics, implants, and whitening - we provide modern solutions for healthy, confident smiles at every stage.
                        </p>
                    </div>
                </div>

                {/* --- Wild Creative Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`group relative ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                            onMouseEnter={() => setHoveredCard(item.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card Wrapper with 3D Perspective */}
                            <div className={`relative h-full transition-all duration-700 ${item.rotation} group-hover:scale-105`}
                                 style={{ 
                                     transformStyle: 'preserve-3d',
                                     perspective: '1000px'
                                 }}>
                                
                                {/* Main Card Body */}
                                <div className="relative bg-white rounded-[45px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.1)] group-hover:shadow-[0_35px_90px_rgba(1,206,145,0.25)] transition-all duration-700 h-full">
                                    
                                    {/* Animated Mesh Gradient Background */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}></div>
                                        <div className={`absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl ${item.gradient} opacity-10 blur-3xl`}></div>
                                        <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr ${item.gradient} opacity-10 blur-3xl`}></div>
                                    </div>

                                    {/* Diagonal Stripe Pattern */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700"
                                         style={{
                                             backgroundImage: 'repeating-linear-gradient(45deg, #01CE91 0px, #01CE91 2px, transparent 2px, transparent 10px)',
                                         }}></div>

                                    {/* Image Section with Complex Masking */}
                                    <div className="relative p-5">
                                        <div className="relative h-[340px] rounded-[35px] overflow-hidden">
                                            
                                            {/* Image Container */}
                                            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000">
                                                <img 
                                                    src={item.img} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>

                                            {/* Holographic Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                 style={{ 
                                                     backgroundSize: '200% 200%',
                                                     animation: hoveredCard === item.id ? 'shimmer 2s infinite' : 'none'
                                                 }}></div>

                                            {/* Dark Vignette */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            {/* Glowing Border Frame */}
                                            <div className={`absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                                 style={{
                                                     boxShadow: `inset 0 0 30px rgba(1, 206, 145, 0.3)`
                                                 }}></div>

                                            {/* Floating Stats Badges */}
                                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                                                {/* Category Badge */}
                                                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                                                    <span className="text-xs font-bold text-gray-700">Premium</span>
                                                </div>

                                                {/* Rating Badge */}
                                                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-1 transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                    <Star size={14} className="text-white fill-white" />
                                                    <span className="text-sm font-black text-white">{item.stats.rating}</span>
                                                </div>
                                            </div>

                                            {/* Bottom Stats Bar */}
                                            <div className="absolute bottom-4 left-4 right-4 flex gap-2 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                                <div className="flex-1 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                                                    <Users size={14} className="text-[#01CE91]" />
                                                    <span className="text-xs font-bold text-gray-700">{item.stats.patients}</span>
                                                </div>
                                                <div className="flex-1 bg-white/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg flex items-center gap-2">
                                                    <Clock size={14} className="text-[#01CE91]" />
                                                    <span className="text-xs font-bold text-gray-700">{item.stats.time}</span>
                                                </div>
                                            </div>

                                            {/* Decorative V-Notch */}
                                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-40 h-24 bg-white"
                                                 style={{ clipPath: 'polygon(0% 100%, 25% 0%, 75% 0%, 100% 100%)' }}>
                                                {/* Inner gradient glow */}
                                                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="relative px-8 pb-10 pt-4">
                                        
                                        {/* Mega Icon with Multiple Layers */}
                                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-30">
                                            {/* Outer pulsing ring */}
                                            <div className={`absolute inset-0 w-24 h-24 rounded-[28px] bg-gradient-to-br ${item.gradient} opacity-20 blur-xl ${hoveredCard === item.id ? 'animate-ping' : ''}`}></div>
                                            
                                            {/* Middle glow */}
                                            <div className={`absolute inset-2 rounded-[24px] bg-gradient-to-br ${item.gradient} opacity-40 blur-md scale-90 group-hover:scale-110 transition-transform duration-700`}></div>
                                            
                                            {/* Main icon container */}
                                            <div className={`relative w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-[28px] flex items-center justify-center shadow-2xl border-[6px] border-white transform group-hover:scale-110 transition-all duration-700 group-hover:rotate-12`}>
                                                <div className="relative z-10">
                                                    {item.icon}
                                                </div>
                                                
                                                {/* Shine effect */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                                
                                                {/* Glowing particles */}
                                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                            </div>
                                        </div>

                                        {/* Title Section */}
                                        <div className="mb-4 mt-8">
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-2 group-hover:text-[#01CE91] transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            
                                            {/* Animated underline */}
                                            <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700`}></div>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-6">
                                            {item.desc}
                                        </p>
                                        
                                        {/* Expandable CTA Area */}
                                        <div className="space-y-3">
                                            {/* Main CTA Button */}
                                            <button className="w-full flex items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#E6FCF5] hover:to-[#F0FFF9] px-6 py-4 rounded-2xl transition-all duration-300 group/btn opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 delay-100">
                                                <span className="font-bold text-gray-700 group-hover/btn:text-[#01CE91] transition-colors">Book Appointment</span>
                                                <div className={`w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover/btn:rotate-45 transition-transform duration-300`}>
                                                    <ArrowRight size={18} className="text-white" />
                                                </div>
                                            </button>

                                            {/* Quick Info Pills */}
                                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                                                <div className="flex-1 text-center bg-gray-50 px-3 py-2 rounded-xl">
                                                    <div className="text-xs text-gray-400 font-medium">Starting at</div>
                                                    <div className="text-sm font-bold text-[#01CE91]">$99</div>
                                                </div>
                                                <div className="flex-1 text-center bg-gray-50 px-3 py-2 rounded-xl">
                                                    <div className="text-xs text-gray-400 font-medium">Insurance</div>
                                                    <div className="text-sm font-bold text-[#01CE91]">Accepted</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Animated Bottom Border */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-[45px]`}></div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-5 right-5 w-12 h-12 border-t-4 border-r-4 border-[#01CE91]/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-5 left-5 w-12 h-12 border-b-4 border-l-4 border-[#01CE91]/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Floating Shadow */}
                                <div className={`absolute inset-0 rounded-[45px] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-2xl transform translate-y-8 transition-all duration-700 -z-10`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Epic Bottom Button --- */}
                <div className="flex justify-center mt-24">
                    <button className="group/btn relative flex items-center gap-4 bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white pl-12 pr-4 py-4 rounded-full transition-all shadow-2xl hover:shadow-[0_20px_60px_rgba(1,206,145,0.3)] active:scale-95 overflow-hidden">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#01CE91] to-[#00B87D] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Moving shine */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                        
                        <span className="font-bold text-lg relative z-10 uppercase tracking-wider">Explore All Services</span>
                        <div className="relative w-14 h-14 bg-gradient-to-br from-[#01CE91] to-[#00B87D] rounded-full flex items-center justify-center group-hover/btn:rotate-180 transition-transform duration-700 shadow-xl z-10">
                            <ArrowDown size={24} className="group-hover/btn:scale-125 transition-transform duration-500" />
                        </div>
                    </button>
                </div>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </section>
    );
};

export default Services;