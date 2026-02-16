import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import Logo from '../assets/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        company: [
            { name: "About Us", href: "#about" },
            { name: "Our Doctors", href: "#doctors" },
            { name: "Services", href: "#services" },
            { name: "Reviews", href: "#reviews" }
        ],
        support: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" },
            { name: "Contact Us", href: "#" }
        ],
        social: [
            { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
            { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
            { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
            { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" }
        ]
    };

    return (
        <footer className="relative bg-[#1A1A1A] text-white pt-24 pb-12 overflow-hidden font-sans">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#01CE91] to-transparent opacity-50"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#01CE91]/10 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00E0B5]/10 rounded-full blur-[120px]"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-2xl">
                                <img src={Logo} alt="PureSmile Logo" className="h-10 object-contain" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">Pure<span className="text-[#01CE91]">Smile</span></span>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                            Modern dentistry backed by years of experience, clinical precision, and deep patient trust.
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#01CE91] hover:text-white transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <span className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#01CE91]"></div>
                            Company
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-[#01CE91] transition-colors flex items-center group">
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal/Support */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#01CE91]"></div>
                            Support
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-400 hover:text-[#01CE91] transition-colors flex items-center group">
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#01CE91]"></div>
                            Contact Info
                        </h4>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#01CE91]/20 transition-colors">
                                    <MapPin size={22} className="text-[#01CE91]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Our Location</p>
                                    <p className="font-medium text-white">123 Dental Plaza, Health City, ST 56789</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#01CE91]/20 transition-colors">
                                    <Phone size={22} className="text-[#01CE91]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                                    <p className="font-medium text-white">+1 (234) 567-890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#01CE91]/20 transition-colors">
                                    <Mail size={22} className="text-[#01CE91]" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email Address</p>
                                    <p className="font-medium text-white">hello@puresmile.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} PureSmile. All rights reserved. Built with precision.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <ShieldCheck size={16} className="text-[#01CE91]" />
                            <span>HIPAA Compliant</span>
                        </div>
                        <div className="w-px h-4 bg-white/10 hidden md:block"></div>
                        <p className="text-gray-500 text-sm">
                            Powered by <span className="text-white font-bold">Axiom Studios</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
