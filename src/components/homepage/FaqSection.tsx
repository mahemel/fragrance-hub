"use client";
import SectionHeader from "@/ui/SectionHeader";
import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const FAQS = [
    {
        q: "What is the difference between EDT and EDP?",
        a: "EDT (Eau de Toilette) contains 5–15% fragrance concentration and typically lasts 3–5 hours. EDP (Eau de Parfum) contains 15–20%, lasting 5–8 hours. EDP is generally more intense and longer-lasting, making it better suited for cooler weather and evening wear.",
    },
    {
        q: "How long does perfume last on skin?",
        a: "Longevity depends on fragrance type and your skin chemistry. EDTs last 3–5 hours, EDPs last 5–8 hours, and Parfums can last 8+ hours. Dry skin tends to absorb fragrance faster than oily skin, so moisturizing before application extends wear.",
    },
    {
        q: "Can I add my own fragrance to FragranceHub?",
        a: "Yes! Registered users can contribute fragrances to our database. Navigate to Add Fragrance after logging in and fill in the details including notes, performance metrics, and imagery. All submissions are reviewed before going live.",
    },
    {
        q: "How are ratings calculated?",
        a: "Ratings are calculated as a weighted average of all community ratings for a fragrance. We factor in review recency and reviewer activity level to ensure authenticity and prevent rating manipulation.",
    },
    {
        q: "Is FragranceHub free?",
        a: "Yes, FragranceHub is completely free to use. You can browse, explore, and read all reviews without creating an account. Register for free to write reviews, build your personal collection, and contribute fragrances.",
    },
    {
        q: "How do I find fragrances similar to one I love?",
        a: "Visit any fragrance detail page and scroll to the Similar Fragrances section. We match fragrances by shared notes, family classification, and community ratings to surface the most relevant alternatives.",
    },
];
const FaqSection = () => {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <div id="faqs">
            <div className="max-w-4xl mx-auto px-4 section-padding">
                <SectionHeader
                    label="Help Center"
                    title="Frequently Asked Questions"
                    center
                ></SectionHeader>
                <div className="border border-border divide-y divide-border">
                    {FAQS.map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary transition-colors"
                            >
                                <span className="font-medium text-foreground pr-6 leading-snug">
                                    {faq.q}
                                </span>
                                <BiChevronDown
                                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            {open === i && (
                                <div className="px-6 py-5 bg-card">
                                    <p className="text-sm leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
