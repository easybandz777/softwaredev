"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedSection({ children, className, delay = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
