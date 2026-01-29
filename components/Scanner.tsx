"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, Zap, ArrowRight, Loader2 } from "lucide-react";
import ResultSection, { AnalysisResult } from "./ResultSection";

const LOADING_STEPS = [
    "Compiling visual data...",
    "Analyzing layout harmony...",
    "Checking responsiveness...",
    "Verifying accessibility compliance...",
    "Calculating Vibe Score...",
];

export default function Scanner() {
    const [url, setUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loadingStep, setLoadingStep] = useState(0);
    const [result, setResult] = useState<AnalysisResult | null>(null);

    const handleScan = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setIsLoading(true);
        setResult(null);
        setLoadingStep(0);

        const stepInterval = setInterval(() => {
            setLoadingStep((prev) => {
                if (prev >= LOADING_STEPS.length - 1) {
                    clearInterval(stepInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 1500); // Slower steps to show off the animation

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Analysis failed");
            }

            setResult(data);

        } catch (error) {
            console.error("Scan failed", error);
            setResult({
                score: 404,
                status: "SYSTEM ERROR",
                insights: [
                    "Could not reach the VibeCheck server.",
                    "Ensure your OpenAI API key is set in .env.local.",
                    "Check server logs for details."
                ]
            });
        } finally {
            clearInterval(stepInterval);
            setIsLoading(false);
        }
    };

    return (
        <section id="scanner" className="relative w-full py-32 overflow-hidden">
            {/* Background glow for this section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 flex flex-col items-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full max-w-3xl"
                >
                    {/* Input Card */}
                    <div className="relative group rounded-2xl p-[1px] bg-gradient-to-b from-zinc-300/80 to-zinc-200/20 dark:from-white/20 dark:to-white/5 backdrop-blur-xl shadow-2xl dark:shadow-none">
                        <div className="bg-white/95 dark:bg-zinc-950/90 rounded-2xl p-2 sm:p-4 shadow-xl border border-white/50 dark:border-transparent">
                            <form onSubmit={handleScan} className="relative flex items-center gap-2">
                                <div className="absolute left-6 text-zinc-500 dark:text-zinc-500">
                                    <Search className="w-5 h-5" />
                                </div>
                                <input
                                    type="url"
                                    placeholder="https://"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full h-14 pl-14 pr-32 sm:pr-40 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 text-lg text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-600 font-mono transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`absolute right-2 h-10 sm:h-11 px-6 ${isLoading ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-400' : 'bg-accent hover:bg-yellow-400 text-zinc-950'} font-bold rounded-lg transition-all flex items-center gap-2 disabled:cursor-not-allowed`}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span className="hidden sm:inline">SCANNING</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="hidden sm:inline">ANALYZE</span>
                                            <Zap className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                {/* Loading / Results Area */}
                <div className="w-full max-w-4xl mt-12 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="w-full"
                            >
                                <div className="flex flex-col items-center mb-8">
                                    <h3 className="text-xl font-mono text-accent mb-2 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        {LOADING_STEPS[loadingStep]}
                                    </h3>
                                    <div className="w-64 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-accent"
                                            initial={{ width: "0%" }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ) : result ? (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ResultSection result={result} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center text-zinc-500 mt-20"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900/50 mb-4 border border-zinc-800">
                                    <ArrowRight className="w-6 h-6 text-zinc-600 -rotate-90" />
                                </div>
                                <p>Enter a URL above to start the Vibe Check protocol.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section >
    );
}
