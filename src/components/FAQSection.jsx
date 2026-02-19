import { useState } from "react";

const faqs = [
    {
        question: "Is dental treatment painful?",
        answer:
            "We use modern anesthesia and sedation techniques to ensure your comfort throughout every procedure. Most patients report little to no discomfort.",
    },
    {
        question: "How long does a typical appointment take?",
        answer:
            "Most appointments take between 30 to 60 minutes, depending on the treatment.",
    },
    {
        question: "Do you accept dental insurance?",
        answer:
            "Yes, we work with most major dental insurance providers. Contact us and we'll help verify your coverage before your appointment.",
    },
    {
        question: "Can I get braces or aligners as an adult?",
        answer:
            "Absolutely. We offer a range of orthodontic options for adults including clear aligners that are discreet and comfortable.",
    },
    {
        question: "What should I do in a dental emergency?",
        answer:
            "Call our clinic immediately. We reserve appointment slots for emergency cases and will guide you through next steps over the phone.",
    },
];

function FAQItem({ question, answer, open, onClick }) {
    return (
        <div
            className={`rounded-2xl border px-6 py-5 cursor-pointer transition-all duration-200 ${open ? "border-gray-200 bg-white shadow-sm" : "border-gray-100 bg-white"
                }`}
            onClick={onClick}
        >
            <div className="flex items-center justify-between gap-4">
                <span className={`text-sm font-semibold ${open ? "text-gray-900" : "text-gray-700"}`}>
                    {question}
                </span>
                <button className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400">
                    {open ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )}
                </button>
            </div>
            {open && (
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{answer}</p>
            )}
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(1);

    return (
        <section className="bg-white">
            <div className="px-8 py-16 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6" style={{ minWidth: "280px", maxWidth: "300px" }}>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                                <span className="italic font-bold">Frequently</span> Asked
                                <br />
                                Questions
                            </h2>
                            <p className="mt-4 text-sm text-gray-400 text-center leading-relaxed">
                                Clear answers to common concerns about comfort, timing, emergencies, insurance,
                                and modern orthodontic treatments.
                            </p>
                        </div>

                        {/* Contact Form */}
                        <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
                            <p className="text-sm font-semibold text-gray-800">Still have a question?</p>
                            <input
                                type="email"
                                placeholder="Write your email..."
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-gray-300 transition-colors"
                            />
                            <textarea
                                placeholder="Write your question..."
                                rows={4}
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-gray-300 transition-colors resize-none"
                            />
                            <button className="w-full bg-gray-900 text-white text-sm font-medium rounded-full py-3 hover:bg-gray-800 transition-colors">
                                Send question
                            </button>
                        </div>
                    </div>

                    {/* Right Column — FAQ List */}
                    <div className="flex-1 flex flex-col gap-3">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                question={faq.question}
                                answer={faq.answer}
                                open={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}