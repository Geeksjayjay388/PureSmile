import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, User, Mail, Phone, ClipboardList, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Form, 2: Success
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        service: ''
    });

    // Reset success state when reopening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    // Validation check: ensure all main fields are filled
    const isFormValid = formData.fullName.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.service !== '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) return;

        setIsSubmitting(true);
        // Simulate API call delay for "premium" feel
        await new Promise(resolve => setTimeout(resolve, 800));
        setStep(2);
        setIsSubmitting(false);
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
                        className={`relative w-full max-w-[95%] md:max-w-2xl bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden transition-all duration-500 ${step === 2 ? 'max-w-md' : 'max-w-2xl'}`}
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
                            {/* Left Side: Branding/Info - Hidden in Success Step */}
                            {step === 1 && (
                                <div className="hidden md:flex md:w-[40%] bg-[#01CE91] p-10 flex-col justify-between text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-black leading-tight mb-4">Start Your <br />Journey Today</h3>
                                        <p className="text-white/80 font-medium leading-relaxed">
                                            Join over 2,500+ happy patients who trust PureSmile for their dental care.
                                        </p>
                                    </div>

                                    <div className="space-y-4 relative z-10">
                                        {[
                                            "Expert Professional Doctors",
                                            "Flexible Booking Slots",
                                            "Certified Dental Clinic"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3 group/item">
                                                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/5">
                                                    <CheckCircle2 size={16} className="text-[#01CE91]" />
                                                </div>
                                                <p className="font-bold text-xs tracking-tight">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Abstract shapes */}
                                    <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                                    <div className="absolute bottom-[-20%] right-[-20%] w-80 h-80 bg-black/10 rounded-full blur-3xl" />
                                </div>
                            )}

                            {/* Main Content Area */}
                            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                                {step === 1 ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-black text-gray-900 mb-2 font-sans tracking-tight">Book Now</h2>
                                            <div className="w-12 h-1.5 bg-[#01CE91] rounded-full" />
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 gap-6">
                                                <div>
                                                    <label className={labelClasses}>Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#01CE91]" size={18} />
                                                        <input
                                                            type="text"
                                                            name="fullName"
                                                            required
                                                            placeholder="Enter your full name"
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
                                                            placeholder="name@example.com"
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
                                                disabled={!isFormValid || isSubmitting}
                                                className={`w-full py-5 rounded-2xl font-black text-base transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group relative overflow-hidden ${isFormValid
                                                    ? 'bg-[#1A1A1A] text-white hover:bg-black active:scale-95 shadow-black/10'
                                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                                    }`}
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        Confirm Booking
                                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                                        className="h-full py-16 flex flex-col items-center justify-center text-center"
                                    >
                                        {/* Success Icon with Pulse Effect */}
                                        <div className="relative mb-10">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                                className="absolute inset-0 bg-[#01CE91]/20 rounded-full scale-[1.5]"
                                            />
                                            <motion.div
                                                initial={{ scale: 0, rotate: -45 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", damping: 12, stiffness: 200 }}
                                                className="relative w-28 h-28 bg-[#01CE91] rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(1,206,145,0.3)]"
                                            >
                                                <CheckCircle2 size={56} className="text-white fill-white" />
                                            </motion.div>
                                        </div>

                                        <h3 className="text-3xl md:text-[3rem] font-bold text-gray-950 mb-4 leading-none tracking-tight">
                                            Thank You!
                                        </h3>
                                        <p className="text-gray-500 font-medium text-lg mb-12">
                                            Your Request Has Been Sent
                                        </p>

                                        {/* Auto-closing text or small hint */}
                                        <p className="text-sm text-gray-300 mb-8 uppercase tracking-[0.2em] font-black">
                                            Redirecting shortly...
                                        </p>

                                        <button
                                            onClick={onClose}
                                            className="px-12 py-4 bg-gray-50 text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all border border-gray-100"
                                        >
                                            Done
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
