"use client";
import { useState } from "react";
import Image from "next/image";

const faqData = [
    {
        question: "What Medical Services Do You Provide?",
        answer:
            "Appropriately promote enterprise-wide vortals through innovative information evolve go forward markets whereas synergistic applications power full sound quality vectors without equity invested best practices revolutionize enterprise-wide vortals through innovative.",
    },
    {
        question: "What is your customer geography?",
        answer:
            "Our services span across multiple continents including North America, Europe, and Asia, ensuring global support and scalable IT infrastructure.",
    },
    {
        question: "What are the main industries we serve?",
        answer:
            "We primarily serve healthcare, finance, education, and retail sectors by delivering secure and robust digital solutions tailored to industry needs.",
    },
];

export default function BusinessSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-[#ffffff] py-20 px-4">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e1630] mb-4">
                        Keeping Your Business <br />
                        Safe and <span className="text-[#ff4a17]">Available.</span>
                    </h2>

                    <div className="mt-8">
                        <Image
                            src="/images/faq1.png"
                            alt="Business Meeting"
                            width={500}
                            height={300}
                            className="rounded-xl h-auto"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-[#0e1630]">
                        A Comprehensive <span className="text-[#ff4a17]">Guide.</span>
                    </h3>
                    <p className="text-gray-500 mt-2 mb-6 text-sm">
                        Alternative innovation network environmental whiteboard pursue for
                        premier methods empowerment go forward opportunities
                    </p>

                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 border ${openIndex === index ? "border-[#ff4a17]" : "border-transparent"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-[#0e1630]"
                                >
                                    <span>{item.question}</span>
                                    <span
                                        className={`text-2xl transition-transform duration-300 ${openIndex === index ? "text-[#ff4a17]" : "text-gray-400"
                                            }`}
                                    >
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <div className="px-5 pb-4 text-sm text-gray-600 border-t pt-4">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
