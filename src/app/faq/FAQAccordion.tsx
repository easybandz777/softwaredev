"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqCategories, type FAQItem } from "./faq-data";

export function FAQAccordion() {
    return (
        <div className="space-y-12">
            {faqCategories.map((cat) => (
                <div key={cat.label}>
                    <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        {cat.label}
                    </h2>
                    <div className="space-y-2">
                        {cat.questions.map((qa, idx) => (
                            <FAQRow key={idx} qa={qa} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

function FAQRow({ qa }: { qa: FAQItem }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm overflow-hidden transition-colors hover:border-white/12">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 text-left px-5 py-4 group"
                aria-expanded={open}
            >
                <h3 className="text-base md:text-lg font-semibold text-white leading-snug pr-2 group-hover:text-sky-100 transition-colors m-0">
                    {qa.q}
                </h3>
                <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border border-white/10 text-sky-400 mt-0.5 transition-colors"
                    style={{
                        background: open
                            ? "rgba(56,189,248,0.12)"
                            : "rgba(255,255,255,0.03)",
                    }}
                >
                    {open ? (
                        <Minus className="w-3.5 h-3.5" />
                    ) : (
                        <Plus className="w-3.5 h-3.5" />
                    )}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-1 text-gray-400 text-sm md:text-base leading-relaxed">
                            {qa.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
