import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, Mail, Phone, MessageSquare, ClipboardList, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Form, 2: Success
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    // Reset success state when reopening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setStep(2);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const inputClasses = "w-full bg-[#F9F9F9] border-2 border-transparent focus:border-[#01CE91]/20 focus:bg-white px-6 py-4 rounded-2xl outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 font-medium";
    const labelClasses = "block text-sm font-black text-gray-400 uppercase tracking-widest mb-2 ml-1";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md px-6 py-10"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#01CE91] hover:text-white transition-all duration-300 z-10 shadow-sm"
                        >
                            <X size={24} />
                        </button>

                        <div className="flex flex-col md:flex-row min-h-[600px]">
                            {/* Left Side: Branding/Info */}
                            <div className="hidden md:flex md:w-[40%] bg-[#01CE91] p-10 flex-col justify-between text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black leading-tight mb-4">Start Your <br />Journey Today</h3>
                                    <p className="text-white/80 font-medium leading-relaxed">
                                        Join over 2,500+ happy patients who trust PureSmile for their dental care.
                                    </p>
                                </div>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                            <Calendar size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Flexible Slots</p>
                                            <p className="text-xs text-white/60">Mon-Sun: 11:00 - 23:30</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                            <ClipboardList size={20} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Expert Doctors</p>
                                            <p className="text-xs text-white/60">Certified Professionals</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Abstract shapes */}
                                <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                                <div className="absolute bottom-[-20%] right-[-20%] w-80 h-80 bg-black/10 rounded-full blur-3xl" />
                            </div>

                            {/* Right Side: Form Content */}
                            <div className="flex-1 p-8 md:p-12">
                                {step === 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-3xl font-black text-gray-900 mb-2">Book Now</h2>
                                            <div className="w-12 h-1.5 bg-[#01CE91] rounded-full" />
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className={labelClasses}>Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#01CE91]" size={18} />
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            required
                                                            placeholder="John Doe"
                                                            className={`${inputClasses} pl-12`}
                                                            value={formData.fullName}
                                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className={labelClasses}>Email</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#01CE91]" size={18} />
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            required
                                                            placeholder="john@example.com"
                                                            className={`${inputClasses} pl-12`}
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className={labelClasses}>Personal Code / Phone</label>
                                                <div className="relative">
                                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-[#01CE91]" size={18} />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        placeholder="+1 (555) 000-0000"
                                                        className={`${inputClasses} pl-12`}
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className={labelClasses}>Treatment Service</label>
                                                <select
                                                    className={inputClasses}
                                                    required
                                                    value={formData.service}
                                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                >
                                                    <option value="" disabled>Select a service</option>
                                                    <option value="general">General Checkup</option>
                                                    <option value="cosmetic">Cosmetic Dentistry</option>
                                                    <option value="ortho">Orthodontics</option>
                                                    <option value="whitening">Teeth Whitening</option>
                                                    <option value="implant">Dental Implants</option>
                                                </select>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all duration-300 shadow-xl shadow-black/10 flex items-center justify-center gap-3 group"
                                            >
                                                Confirm Booking
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-24 h-24 bg-[#01CE91]/10 rounded-full flex items-center justify-center mb-8">
                                            <CheckCircle2 size={64} className="text-[#01CE91]" />
                                        </div>
                                        <h3 className="text-3xl font-black text-gray-900 mb-4">Request Sent!</h3>
                                        <p className="text-gray-500 font-medium max-w-sm mb-10 text-lg leading-relaxed">
                                            Thank you, <span className="text-gray-900 font-bold">{formData.fullName}</span>. Our team will contact you within 2 hours to confirm your appointment.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="bg-[#1A1A1A] text-white px-10 py-4 rounded-2xl font-bold hover:bg-black transition-all"
                                        >
                                            Close Window
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
