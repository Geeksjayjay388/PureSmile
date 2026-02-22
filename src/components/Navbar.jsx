import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

const NAV_LINKS = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Doctors', href: '#doctors', id: 'doctors' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' }
];

function Navbar({ onBookClick }) {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        NAV_LINKS.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) observer.observe(element);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full px-6 md:px-8 py-4 flex justify-between items-center font-sans z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-100/50 py-4' : 'bg-transparent py-6'
            }`}>
            {/* Logo Section */}
            <section className="relative z-[110]">
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-40 h-16 md:w-50 md:h-20 object-contain rounded-full border border-gray-200/50 bg-white" />
                </div>
            </section>

            {/* Navigation Links - Desktop */}
            <section className="hidden lg:block">
                <ul className={`flex items-center p-1.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-gray-50/50 border border-gray-100 shadow-sm' : 'bg-white/10 backdrop-blur-md border border-white/20'
                    }`}>
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <motion.li
                                key={link.id}
                                whileHover={{ scale: 1.05 }}
                                className={`px-7 py-3 rounded-full cursor-pointer font-light transition-all duration-300 relative group ${isActive ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:text-[#01CE91]'
                                    }`}
                            >
                                <a href={link.href} className="relative z-10 text-lg">{link.name}</a>
                                {!isActive && (
                                    <span className="absolute inset-0 bg-gray-100/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                                )}
                            </motion.li>
                        );
                    })}
                </ul>
            </section>

            {/* Action Buttons - Desktop */}
            <section className="hidden lg:flex gap-4 text-lg">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-10 py-3.5 rounded-full font-light shadow-sm transition-all duration-300 border ${isScrolled ? 'bg-white text-black border-gray-100 hover:bg-gray-50' : 'bg-white/10 text-black border-white/20 backdrop-blur-md hover:bg-white/20'
                        }`}
                >
                    Log in
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBookClick}
                    className="bg-[#1A1A1A] text-white px-10 py-3.5 rounded-full font-light shadow-xl hover:bg-black transition-all"
                >
                    Sign up
                </motion.button>
            </section>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-md text-gray-800"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[105] flex flex-col p-8 pt-32"
                    >
                        <ul className="space-y-6">
                            {NAV_LINKS.map((link) => (
                                <li key={link.id} onClick={() => setIsMenuOpen(false)}>
                                    <a
                                        href={link.href}
                                        className={`text-3xl font-black uppercase tracking-tight ${activeSection === link.id ? 'text-[#01CE91]' : 'text-gray-900'
                                            }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto space-y-4">
                            <button className="w-full py-5 rounded-2xl bg-gray-100 text-gray-900 text-lg font-bold">
                                Log in
                            </button>
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onBookClick();
                                }}
                                className="w-full py-5 rounded-2xl bg-[#01CE91] text-white text-lg font-bold shadow-xl shadow-[#01CE91]/20"
                            >
                                Book Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;