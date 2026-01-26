"use client";

import { useState } from "react";
import ResultSection, { AnalysisResult } from "./ResultSection";

const LOADING_STEPS = [
    "Analyzing visual hierarchy...",
    "Checking mobile responsiveness...",
    "Evaluating color harmony...",
    "Reading typography scale...",
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

        // Simulate loading steps locally for immediate feedback
        // In a real app, this might be driven by server-sent events or just a timer while fetching
        const stepInterval = setInterval(() => {
            setLoadingStep((prev) => {
                if (prev >= LOADING_STEPS.length - 1) {
                    clearInterval(stepInterval);
                    return prev;
                }
                return prev + 1;
            });
        }, 800);

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
            // Fallback for demo if API fails or no key provided
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
        <section id="scanner" className="w-full py-20 bg-gray-50/50 dark:bg-black/50">
            <div className="container mx-auto px-4 flex flex-col items-center">

                {/* Input Area */}
                <div className="w-full max-w-2xl">
                    <form onSubmit={handleScan} className="relative flex items-center">
                        <input
                            type="url"
                            placeholder="https://your-project.com"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full h-16 pl-6 pr-40 rounded-xl bg-card border border-border shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-lg text-foreground placeholder-zinc-400"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-2 h-12 px-6 bg-accent hover:bg-yellow-300 text-foreground font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "SCANNING..." : "ANALYZE"}
                        </button>
                    </form>
                </div>

                {/* Loading State */}
                {isLoading && (
                    <div className="mt-12 text-center animate-pulse">
                        <div className="inline-block w-16 h-16 border-4 border-zinc-200 dark:border-zinc-800 border-t-accent rounded-full animate-spin mb-6"></div>
                        <h3 className="text-xl font-medium text-zinc-700 dark:text-zinc-300">
                            {LOADING_STEPS[loadingStep]}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2">Powered by OpenAI gpt-4o</p>
                    </div>
                )}

                {/* Results */}
                {!isLoading && result && (
                    <ResultSection result={result} />
                )}

            </div>
        </section>
    );
}
