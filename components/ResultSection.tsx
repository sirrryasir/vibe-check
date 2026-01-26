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
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
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
                    <span className={`inline-block px-6 py-2 rounded-full text-sm font-black tracking-wide uppercase 
                        ${result.status === "SYSTEM ERROR"
                            ? "bg-red-50 dark:bg-red-900/40 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700/50"
                            : "bg-yellow-50 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700/50"
                        }`}>
                        {result.status}
                    </span>
                </div>

                {/* Insights */}
                <div className="text-left max-w-xl mx-auto space-y-4 mb-10">
                    {result.insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 text-xs font-bold">
                                {index + 1}
                            </span>
                            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                                {insight}
                            </p>
                        </div>
                    ))}
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
