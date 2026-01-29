export type AnalysisResult = {
    score: number;
    status: "CLEAN VIBES" | "NEEDS POLISH" | "SHIP READY" | "SYSTEM ERROR";
    insights: string[];
};

interface ResultSectionProps {
    result: AnalysisResult;
}

export default function ResultSection({ result }: ResultSectionProps) {
    const getScoreColor = (score: number) => {
        if (score === 404) return "text-red-500 border-red-500 dark:text-red-500 dark:border-red-500";
        if (score >= 90) return "text-green-500 border-green-500";
        if (score >= 80) return "text-accent border-accent";
        return "text-orange-500 border-orange-500";
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-12 animate-fade-in text-center">
            <div className="bg-white/80 dark:bg-card p-8 rounded-2xl shadow-2xl dark:shadow-xl border border-zinc-200 dark:border-border backdrop-blur-sm">
                <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-8">
                    The Verdict
                </h2>

                {/* Circular Score */}
                <div className="relative flex items-center justify-center w-48 h-48 mx-auto mb-8 rounded-full border-8 border-border">
                    {/* Progress Circle (Simple SVG for now) */}
                    <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
                        <circle
                            cx="50%"
                            cy="50%"
                            r="40%"
                            fill="transparent"
                            stroke="currentColor"
                            strokeWidth="8"
                            strokeDasharray={`${2.51 * 80}, ${2.51 * 100}`} /* Rough approx for visual */
                            className={`text-accent ${getScoreColor(result.score).split(' ')[0]}`}
                            style={{ strokeDasharray: `${(result.score / 100) * 251} 251` }} // 2 * PI * r (approx 40% of 192px width is ~38px radius in svg units? No, let's just use simple percentage for now or standard SVG circle math)
                        />
                    </svg>
                    <div className="text-center z-10">
                        <span className={`text-5xl font-black ${getScoreColor(result.score).split(' ')[0]}`}>
                            {result.score}%
                        </span>
                        <p className="text-xs font-bold text-zinc-400 mt-1 uppercase">Vibe Score</p>
                    </div>
                </div>

                {/* Status Label */}
                <div className="mb-10">
                    {/* Content */}
                    <div className="flex-grow text-center md:text-left">
                        <div className="mb-6">
                            <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase mb-2">
                                Analysis Complete
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white uppercase tracking-tight">
                                {result.status}
                            </h3>
                        </div>

                        <div className="space-y-4 mb-8">
                            {result.insights.map((insight, index) => (
                                <div key={index} className="flex items-start gap-4 text-left p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 shadow-sm dark:shadow-none">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-zinc-900 text-xs font-bold mt-0.5">
                                        {index + 1}
                                    </div>
                                    <p className="text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                                        {insight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Actions */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={() => window.open('https://github.com/new', '_blank')}
                        className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                        REFACTOR
                    </button>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: 'VibeCheck Result',
                                    text: `I scored ${result.score}% on VibeCheck!`,
                                    url: window.location.href
                                }).catch(console.error);
                            } else {
                                alert("Link copied to clipboard!");
                                navigator.clipboard.writeText(window.location.href);
                            }
                        }}
                        className="px-6 py-3 bg-card border border-border text-foreground font-bold rounded-lg hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
                    >
                        SHARE RESULT
                    </button>
                </div>
            </div>
        </div>
    );
}
