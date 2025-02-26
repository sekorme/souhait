'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Do I need to go through an agent to apply for a visa?",
        answer:
            "No! We empower you to apply directly, avoiding extra charges from middlemen.",
    },
    {
        question: "How can I access job listings?",
        answer: "Subscribe to our job portal to unlock verified job opportunities.",
    },
    {
        question: "Can you guarantee visa approval?",
        answer:
            "No one can guarantee approval, but our expertise significantly improves your chances.",
    },
    {
        question: "How do I book a consultation?",
        answer: "Click on our Consultation Booking page and schedule an appointment.",
    },
    {
        question: "What documents do I need for a visa application?",
        answer:
            "Required documents vary by country and visa type but typically include a valid passport, proof of funds, job offer (if applicable), and other supporting documents. We provide detailed guidance for each case.",
    },
    {
        question: "How long does the visa application process take?",
        answer:
            "Processing times depend on the country and visa type. We help you submit a complete application to avoid delays.",
    },
    {
        question: "Do you provide travel itinerary services?",
        answer:
            "Yes, we assist in planning a structured travel itinerary to strengthen your visa application.",
    },
];

export default function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index:any) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h2 className="md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <Card
                        key={index}
                        className={`p-4 cursor-pointer transition-all duration-300 dark:bg-neutral-800 `}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="md:text-lg font-semibold text-[#ff3d57]">{faq.question}</h3>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </div>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-2 overflow-hidden"
                                >
                                    <CardContent>{faq.answer}</CardContent>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                ))}
            </div>
        </div>
    );
}
