"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Activity, Code2, Zap } from "lucide-react";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "circOut" },
        },
    };

    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center overflow-hidden min-h-[90vh]">
            {/* Dynamic Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center z-10"
            >
                {/* Live Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-2 px-4 py-1.5 bg-white shadow-md dark:shadow-none dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-full mb-10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-700 dark:text-zinc-400 uppercase">
                        System Operational
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-7xl md:text-9xl font-black tracking-tighter text-foreground mb-8 max-w-5xl mx-auto leading-[0.85] select-none"
                >
                    VIBE <span className="text-transparent bg-clip-text bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 dark:from-accent dark:to-yellow-200">CHECK</span>.
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-2xl text-zinc-700 dark:text-zinc-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    Automated design & UX analysis for shipped projects.
                    <br className="hidden md:block" /> Check the vibe. Submit the link. Improve fast.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <motion.a
                        href="#scanner"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-accent text-zinc-950 font-bold text-lg rounded-full shadow-[0_0_40px_-10px_rgba(245,217,10,0.5)] hover:shadow-[0_0_60px_-15px_rgba(245,217,10,0.7)] transition-all duration-300 min-w-[180px] flex items-center justify-center gap-2"
                    >
                        SCAN NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>

                    <motion.a
                        href="#algorithm"
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-transparent text-zinc-900 dark:text-zinc-300 font-bold text-lg rounded-full border-2 border-zinc-900/10 dark:border-white/10 hover:border-zinc-900 hover:bg-zinc-900/5 dark:hover:border-white/20 transition-all duration-300 min-w-[180px] flex items-center justify-center gap-2 backdrop-blur-sm"
                    >
                        <Activity className="w-5 h-5" /> HOW IT WORKS
                    </motion.a>
                </motion.div>

                {/* Stats / Trust Badges (New Addition for Credibility) */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-zinc-500" />
                        <span className="text-sm font-mono text-zinc-500">CODE ANALYSIS</span>
                    </div>
                    <div className="w-px h-4 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-zinc-500" />
                        <span className="text-sm font-mono text-zinc-500">INSTANT AUDIT</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
