import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Phone, Mail, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [servicesOpen, setServicesOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    const currentYear = new Date().getFullYear();

    const columnVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <footer className="bg-[#F5F5F5] pt-16 md:pt-32 pb-12 md:pb-20 overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 md:px-8">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-40 mb-16 md:mb-32">

                    {/* Left: Logo and Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center lg:items-start gap-10"
                    >
                        <div className="flex items-center gap-6">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                src={logo}
                                alt="PureSmile"
                                className="w-40 h-40 md:w-64 md:h-64 object-contain cursor-pointer"
                            />
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-6">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" },
                                {
                                    custom: (
                                        <svg className="w-6 h-6 text-[#01CE91]" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                        </svg>
                                    ),
                                    href: "#"
                                },
                                { icon: Linkedin, href: "#" }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    whileHover={{ scale: 1.2, backgroundColor: '#01CE91', color: '#FFFFFF' }}
                                    className="w-14 h-14 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-md group border border-gray-100"
                                >
                                    {item.icon ? (
                                        <item.icon size={26} className="text-[#01CE91] group-hover:text-white transition-colors" />
                                    ) : (
                                        <div className="group-hover:invert transition-all">
                                            {item.custom}
                                        </div>
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:max-w-2xl w-full text-center lg:text-left"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 md:mb-8">Stay Updated</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row bg-white rounded-3xl sm:rounded-full p-2 sm:p-3 shadow-lg border border-gray-100">
                            <input
                                type="email"
                                placeholder="Enter Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-transparent px-6 sm:px-8 py-4 text-sm md:text-base text-gray-700 placeholder-gray-400 outline-none font-medium"
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="bg-[#1A1A1A] text-white text-sm md:text-base font-black px-8 sm:px-12 py-4 rounded-2xl sm:rounded-full hover:bg-black transition-all duration-300 shadow-xl mt-2 sm:mt-0"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-24 mb-16 md:mb-32">

                    {/* Navigation */}
                    <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
                        <h4 className="text-xl font-black text-[#1A1A1A]">Navigation</h4>
                        <div className="flex flex-col gap-5 font-light">
                            {['Home', 'About', 'Services', 'Our Doctors', 'Reviews'].map((item) => (
                                <a key={item} href="#" className="text-gray-500 text-lg md:text-xl hover:text-[#01CE91] transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
                        <h4 className="text-xl font-black text-[#1A1A1A]">Quick Links</h4>
                        <div className="flex flex-col gap-5 font-light">
                            {['Book a Consultation', 'Insurance Information', 'Emergency Dental Care', 'Pricing'].map((item) => (
                                <a key={item} href="#" className="text-gray-500 text-lg md:text-xl hover:text-[#01CE91] transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center gap-4 text-xl font-black text-[#1A1A1A] hover:text-[#01CE91] transition-colors text-left"
                        >
                            Services
                            <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }}>
                                <ChevronDown size={24} />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {(servicesOpen || typeof window !== 'undefined' && window.innerWidth >= 768) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className={`flex flex-col gap-5 font-light overflow-hidden md:!h-auto md:!opacity-100`}
                                >
                                    {['General Dentistry', 'Cosmetic Dentistry', 'Dental Implants', 'Orthodontics', 'Teeth Whitening'].map((item) => (
                                        <a key={item} href="#" className="text-gray-500 text-base md:text-lg hover:text-[#01CE91] transition-colors duration-300">
                                            {item}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Legal */}
                    <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
                        <h4 className="text-xl font-black text-[#1A1A1A]">Legal</h4>
                        <div className="flex flex-col gap-5 font-light">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility', 'Disclaimer'].map((item) => (
                                <a key={item} href="#" className="text-gray-500 text-lg md:text-xl hover:text-[#01CE91] transition-colors duration-300">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Get in Touch */}
                    <motion.div variants={columnVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-8">
                        <h4 className="text-xl font-black text-[#1A1A1A] italic">Get in touch</h4>

                        <div className="flex flex-col gap-5 font-light">
                            <div className="flex items-center gap-5">
                                <motion.div whileHover={{ scale: 1.1, backgroundColor: '#01CE91' }} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md group transition-colors">
                                    <Phone size={20} className="text-[#01CE91] group-hover:text-white transition-colors" />
                                </motion.div>
                                <span className="text-gray-500 text-base font-medium">+111 22 234 5566</span>
                            </div>

                            <div className="flex items-center gap-5">
                                <motion.div whileHover={{ scale: 1.1, backgroundColor: '#01CE91' }} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md group transition-colors">
                                    <Mail size={20} className="text-[#01CE91] group-hover:text-white transition-colors" />
                                </motion.div>
                                <span className="text-gray-500 text-base font-medium">Example@gmail.com</span>
                            </div>

                            <div className="text-gray-500 text-base leading-relaxed mt-2 italic font-medium">
                                1 Kensington Lane, London,<br />
                                W8 5EP (concept)
                            </div>

                            <div className="text-gray-700 text-base font-black mt-2">
                                Open Daily: 11:00 – 23:30
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Big Text */}
                <div className="overflow-hidden mb-12 flex justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-black text-[#01CE91] leading-none tracking-tighter text-center select-none w-full"
                    >
                        PURESMILE
                    </motion.h2>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 md:pt-16 border-t border-gray-200">
                    <p className="text-gray-500 text-sm md:text-base font-bold px-4">
                        © {currentYear} PureSmile Dental Clinic. All rights reserved.
                    </p>
                </div>
            </div>
        </footer >
    );
}