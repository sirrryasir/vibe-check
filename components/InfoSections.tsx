"use client";

import { motion, Variants } from "framer-motion";

export default function InfoSections() {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <>
            {/* Algorithm Section - "Stitch" Aesthetic */}
            <section id="algorithm" className="py-32 relative overflow-hidden">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-8"
                        >
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-400 dark:to-white">ALGORITHM</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-2xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed"
                        >
                            Our proprietary engine analyzes 50+ data points to determine if your project is truly ready for the world.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
                    >
                        {/* Card 1 */}
                        <motion.div variants={cardVariants} className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-b from-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-md" />
                            <div className="relative h-full bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-3xl p-10 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 shadow-xl dark:shadow-none">
                                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    🤖
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">AI Analysis</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                                    Scans visual hierarchy, contrast ratios (@WCAG), and responsive integrity. It simulates a senior designer's eye at 100x speed.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div variants={cardVariants} className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-md" />
                            <div className="relative h-full bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-3xl p-10 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 shadow-xl dark:shadow-none">
                                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    🧬
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Code DNA</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                                    Parses semantic HTML structure and CSS efficiency. We check regular patterns that suggest a robust, maintainable codebase.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div variants={cardVariants} className="group relative">
                            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-md" />
                            <div className="relative h-full bg-white dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-3xl p-10 overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 shadow-xl dark:shadow-none">
                                <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    ⚡
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">Vibe Velocity</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                                    Speed matters. We verify initial content paint (LCP) and interaction readiness to ensure your user isn't waiting.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
