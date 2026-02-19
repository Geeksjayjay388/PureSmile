import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
            className="fixed inset-0 z-[10000] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Minimalist Tooth SVG Animation */}
            <div className="relative mb-8">
                <motion.svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative z-10"
                >
                    <motion.path
                        d="M4.5 7C4.5 4.5 6.5 3 9 3C10.5 3 11.5 3.5 12 4C12.5 3.5 13.5 3 15 3C17.5 3 19.5 4.5 19.5 7C19.5 10.5 18.5 13 17.5 15C16.5 17.5 15 21 12 21C9 21 7.5 17.5 6.5 15C5.5 13 4.5 10.5 4.5 7Z"
                        stroke="#01CE91"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 1],
                            opacity: [0, 1, 1],
                            fill: ["rgba(1, 206, 145, 0)", "rgba(1, 206, 145, 0)", "rgba(1, 206, 145, 0.05)"]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 0.3
                        }}
                    />
                    {/* Dental Shine Effect */}
                    <motion.path
                        d="M8 7L10 5M14 5L16 7"
                        stroke="#01CE91"
                        strokeWidth="2"
                        strokeLinecap="round"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.svg>

                {/* Background Pulse */}
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-[#01CE91] rounded-full blur-3xl -z-0"
                />
            </div>

            {/* Brand Text Animation */}
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                    className="text-3xl font-black text-[#1A1A1A] tracking-tighter uppercase"
                >
                    Pure<span className="text-[#01CE91]">Smile</span>
                </motion.h1>
            </div>

            {/* Subtle Progress Bar */}
            <div className="mt-12 w-48 h-1 bg-gray-50 rounded-full overflow-hidden relative">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#01CE91] to-transparent w-full"
                />
            </div>

            {/* Status Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 text-xs font-bold text-gray-300 uppercase tracking-[0.3em] ml-1"
            >
                Sanitizing Your Experience...
            </motion.p>
        </motion.div>
    );
};

export default LoadingScreen;
