import React, { useState, useEffect } from 'react';
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
        <nav className={`fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center font-sans z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl border-b border-gray-100/50 py-4' : 'bg-transparent py-6'
            }`}>
            {/* Logo Section */}
            <section>
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className="w-50 h-20 object-contain rounded-full border border-gray-200/50 bg-white" />
                </div>
            </section>

            {/* Navigation Links */}
            <section>
                <ul className={`flex items-center p-1.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-gray-50/50 border border-gray-100 shadow-sm' : 'bg-white/10 backdrop-blur-md border border-white/20'
                    }`}>
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <li
                                key={link.id}
                                className={`px-7 py-3 rounded-full cursor-pointer font-light transition-all duration-300 relative group ${isActive ? 'bg-black text-white shadow-lg' : 'text-gray-600 hover:text-[#01CE91]'
                                    }`}
                            >
                                <a href={link.href} className="relative z-10 text-xl">{link.name}</a>
                                {!isActive && (
                                    <span className="absolute inset-0 bg-gray-100/50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                                )}
                            </li>
                        );
                    })}
                </ul>
            </section>

            {/* Action Buttons */}
            <section className="flex gap-4 text-xl">
                <button className={`px-10 py-3.5 rounded-full font-light shadow-sm transition-all duration-300 border ${isScrolled ? 'bg-white text-black border-gray-100 hover:bg-gray-50' : 'bg-white/10 text-black border-white/20 backdrop-blur-md hover:bg-white/20'
                    }`}>
                    Log in
                </button>
                <button
                    onClick={onBookClick}
                    className="bg-[#1A1A1A] text-white px-10 py-3.5 rounded-full font-light shadow-xl hover:bg-black transition-all hover:-translate-y-0.5"
                >
                    Sign up
                </button>
            </section>
        </nav>
    );
}

export default Navbar;