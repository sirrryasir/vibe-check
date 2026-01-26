export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center">
            {/* Background Elements (Subtle Glow) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-100/50 dark:bg-yellow-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase">
                    System Operational
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-6 max-w-4xl mx-auto leading-[0.9]">
                VIBE <span className="text-accent">CHECK</span>.
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                Automated design & UX analysis for shipped projects.
                <br className="hidden md:block" /> Check the vibe. Submit the link. Improve fast.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                    href="#scanner"
                    className="px-8 py-4 bg-accent text-foreground font-bold rounded-lg shadow-[0_0_20px_rgba(245,217,10,0.4)] hover:shadow-[0_0_30px_rgba(245,217,10,0.6)] hover:-translate-y-1 transition-all duration-300 min-w-[160px] flex items-center justify-center"
                >
                    SCAN NOW →
                </a>
                <a
                    href="#algorithm"
                    className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:-translate-y-1 transition-all duration-300 min-w-[160px] flex items-center justify-center border border-zinc-200 dark:border-zinc-700"
                >
                    HOW IT WORKS
                </a>
            </div>

            {/* Code Snippet Decoration (Optional, adds "dev" feel) */}
            <div className="mt-16 opacity-60">
                <code className="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-zinc-900 px-4 py-2 rounded-md border border-gray-100 dark:border-zinc-800">
          // Automated code review and design auditing
                </code>
            </div>
        </section>
    );
}
