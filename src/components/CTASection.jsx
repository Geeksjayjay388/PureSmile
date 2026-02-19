import { useState } from "react";
import { Plus, X, ArrowUpRight, Mail, MessageSquare } from "lucide-react";
import footerBg from "../assets/footer.png";

const faqs = [
    {
        question: "Is dental treatment painful?",
        answer: "We use modern anesthesia and sedation techniques to ensure your comfort throughout every procedure. Most patients report little to no discomfort.",
    },
    {
        question: "How long does a typical appointment take?",
        answer: "Most appointments take between 30 to 60 minutes, depending on the treatment.",
    },
    {
        question: "Do you accept dental insurance?",
        answer: "Yes, we work with most major dental insurance providers. Contact us and we'll help verify your coverage before your appointment.",
    },
    {
        question: "Can I get braces or aligners as an adult?",
        answer: "Absolutely. We offer a range of orthodontic options for adults including clear aligners that are discreet and comfortable.",
    },
    {
        question: "What should I do in a dental emergency?",
        answer: "Call our clinic immediately. We reserve appointment slots for emergency cases and will guide you through next steps over the phone.",
    },
];

function FAQItem({ question, answer, open, onClick, index }) {
    return (
        <div
            className={`group rounded-[32px] border px-10 py-8 cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl ${open
                ? "border-[#01CE91]/40 bg-white shadow-xl"
                : "border-gray-100 bg-white hover:border-[#01CE91]/20 hover:bg-[#FAFAFA]"
                }`}
            onClick={onClick}
            style={{
                transform: open ? "scale(1.03)" : "scale(1)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
        >
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    {/* Animated number indicator */}
                    <span className={`text-sm font-black w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${open ? "bg-[#01CE91] text-white rotate-[360deg]" : "bg-gray-100 text-gray-400 group-hover:bg-[#01CE91]/10 group-hover:text-[#01CE91]"}`}>
                        0{index + 1}
                    </span>
                    <span className={`text-base md:text-lg lg:text-xl font-bold transition-all duration-300 ${open ? "text-gray-900" : "text-gray-700 group-hover:text-[#01CE91]"}`}>
                        {question}
                    </span>
                </div>

                {/* Animated icon button */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${open ? "bg-[#01CE91] text-white rotate-0" : "bg-gray-100 text-gray-400 group-hover:bg-[#01CE91] group-hover:text-white rotate-0"}`}>
                    {open ? (
                        <X size={24} className="transition-transform duration-300 rotate-90" />
                    ) : (
                        <Plus size={24} className="transition-transform duration-300 group-hover:rotate-90" />
                    )}
                </div>
            </div>

            {/* Expandable answer with smooth animation */}
            <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                <div className="overflow-hidden">
                    <div className="pl-16 pr-4 pb-4">
                        <p className="text-base md:text-lg text-gray-500 leading-relaxed font-medium">{answer}</p>

                        {/* Helpful actions that appear when open */}
                        <div className={`flex items-center gap-4 mt-8 transition-all duration-500 delay-100 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <button className="flex items-center gap-3 text-sm font-bold text-[#01CE91] hover:underline group/btn">
                                <MessageSquare size={18} className="group-hover/btn:scale-110 transition-transform" />
                                Was this helpful?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CTASection({ onBookClick }) {
    return (
        <section className="relative w-full px-6 md:px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-[32px] overflow-hidden min-h-[400px] md:min-h-[450px] flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src={footerBg}
                            alt="Dental clinic"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-6xl lg:text-5xl font-medium text-white leading-tight mb-4">
                            <span className="italic font-light">Book Your Dental </span>
                            <span className="italic font-light">Consultation</span>
                            <span className="font-medium"> Today</span>
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
                            Quick, comfortable, and personalized care from experienced professionals using modern dental technologies.
                        </p>

                        <button
                            onClick={onBookClick}
                            className="group inline-flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white pl-8 pr-3 py-3 rounded-full transition-all duration-500 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 active:scale-95"
                        >
                            <span className="font-light text-lg lg:text-xl tracking-wider">Book a Consultation</span>
                            <div className="w-12 h-12 bg-[#01CE91] rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-500 group-hover:rotate-45">
                                <ArrowUpRight size={22} className="text-white group-hover:text-[#01CE91]" />
                            </div>
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-8 left-8 w-3 h-3 bg-[#01CE91] rounded-full animate-pulse" />
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
            </div>
        </section>
    );
}

export default function FAQSection({ onBookClick }) {
    const [openIndex, setOpenIndex] = useState(1);
    const [formData, setFormData] = useState({ email: "", question: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
        setFormData({ email: "", question: "" });
    };

    return (
        <section className="bg-white">
            <div className="px-6 md:px-8 py-24 max-w-[1700px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col gap-8 lg:sticky lg:top-8 lg:self-start w-full md:w-auto" style={{ maxWidth: "480px" }}>
                        <div>
                            <span className="text-[#01CE91] text-sm font-semibold tracking-widest uppercase mb-6 inline-block">
                                Support
                            </span>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#1A1A1A] leading-[1.1] tracking-tight">
                                <span className="italic font-light">Frequently</span> Asked
                                <br />
                                <span className="font-medium">Questions</span>
                            </h2>
                            <p className="mt-8 text-lg md:text-xl text-gray-500 leading-relaxed">
                                Clear answers to common concerns about comfort, timing, emergencies, insurance,
                                and modern orthodontic treatments.
                            </p>
                        </div>

                        {/* Enhanced Contact Form */}
                        <form onSubmit={handleSubmit} className="border border-gray-200 rounded-[32px] p-8 flex flex-col gap-6 hover:border-[#01CE91]/30 hover:shadow-2xl transition-all duration-500 bg-white">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-14 h-14 rounded-2xl bg-[#01CE91]/10 flex items-center justify-center">
                                    <Mail size={24} className="text-[#01CE91]" />
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-gray-800">Still have a question?</p>
                                    <p className="text-sm text-gray-400">We'll get back to you within 24h</p>
                                </div>
                            </div>

                            <input
                                type="email"
                                placeholder="Write your email..."
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border border-gray-200 rounded-2xl px-6 py-4 text-base text-gray-700 placeholder-gray-400 outline-none focus:border-[#01CE91] focus:ring-2 focus:ring-[#01CE91]/20 transition-all font-medium"
                                required
                            />
                            <textarea
                                placeholder="Write your question..."
                                rows={4}
                                value={formData.question}
                                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                className="w-full border border-gray-200 rounded-2xl px-6 py-4 text-base text-gray-700 placeholder-gray-400 outline-none focus:border-[#01CE91] focus:ring-2 focus:ring-[#01CE91]/20 transition-all resize-none font-medium"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#1A1A1A] text-white text-base font-bold rounded-full py-5 hover:bg-[#2A2A2A] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
                            >
                                Send question
                                <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>

                    {/* Right Column — FAQ List */}
                    <div className="flex-1 flex flex-col gap-5">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                index={i}
                                question={faq.question}
                                answer={faq.answer}
                                open={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <CTASection onBookClick={onBookClick} />
        </section>
    );
}