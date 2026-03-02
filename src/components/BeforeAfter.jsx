import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";

const BeforeAfter = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef(null);

    const handleMove = (e) => {
        if (!isResizing || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.pageX || (e.touches && e.touches[0].pageX);
        const position = ((x - rect.left) / rect.width) * 100;

        if (position >= 0 && position <= 100) {
            setSliderPos(position);
        }
    };

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);

    useEffect(() => {
        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("touchmove", handleMove);
        window.addEventListener("touchend", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleMouseUp);
        };
    }, [isResizing]);

    return (
        <section className="py-24 pb-48 px-6 md:px-12 bg-white overflow-hidden">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-12">
                {/* Left Side: Content Card */}
                <div className="bg-[#F2F2F2] rounded-[40px] p-5 md:p-10 relative overflow-hidden flex flex-col justify-center min-h-[460px]">
                    {/* Decorative Quote Mark - Scaled and Positioned like Design */}
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 opacity-10 pointer-events-none select-none">
                        <svg width="180" height="142" viewBox="0 0 180 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72 0V102C72 124.091 54.0914 142 32 142H0V102C0 79.9086 17.9086 62 40 62H72V0Z" fill="#1A1A1A" />
                            <path d="M180 0V102C180 124.091 162.091 142 140 142H108V102C108 79.9086 125.909 62 148 62H180V0Z" fill="#1A1A1A" />
                        </svg>
                    </div>

                    <div className="relative z-10 space-y-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#1a1a1a] leading-[1.1]">
                            Giving Your Smile a <br />
                            <span className="text-[#00DDA3] italic">Brilliant</span> Second <br />
                            Chance ✨
                        </h2>

                        <div className="flex gap-6 items-end">
                            <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed max-w-[280px] ml-auto">
                                Thousands of happy patients worldwide now smile with confidence
                                thanks to PureSmile's modern dental transformations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Before/After Slider */}
                <div
                    ref={containerRef}
                    className="relative aspect-square md:aspect-[4/3] w-full rounded-[40px] overflow-hidden cursor-col-resize select-none border-2 border-[#F2F2F2] lg:mt-96 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    {/* After Image (Background) */}
                    <img
                        src={afterImg}
                        alt="After treatment"
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable="false"
                    />

                    {/* Before Image (Clipped) */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    >
                        <img
                            src={beforeImg}
                            alt="Before treatment"
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable="false"
                        />
                    </div>

                    {/* Slider Line & Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-col-resize z-20"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center border-[1px] border-gray-100">
                            <div className="flex items-center gap-1 text-gray-400">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur rounded-full text-xs md:text-sm font-medium text-gray-800 shadow-sm">
                        Before
                    </div>
                    <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-[#1A1A1A]/80 backdrop-blur rounded-full text-xs md:text-sm font-medium text-white shadow-lg">
                        After
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
