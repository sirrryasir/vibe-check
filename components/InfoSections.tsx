export default function InfoSections() {
    return (
        <>
            {/* Algorithm Section - "Stitch" Aesthetic */}
            <section id="algorithm" className="py-32 bg-zinc-50 dark:bg-black relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-800 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-zinc-900 dark:from-zinc-400 dark:to-white">ALGORITHM</span>.
                        </h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400 font-medium">
                            Our proprietary engine analyzes 50+ data points to determine if your project is truly ready for the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Card 1 */}
                        <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 hover:from-accent hover:to-yellow-500 transition-all duration-500">
                            <div className="relative h-full bg-white dark:bg-zinc-950 rounded-[22px] p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        🤖
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-accent transition-colors">AI Analysis</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Scans visual hierarchy, contrast ratios (@WCAG), and responsive integrity. It simulates a senior designer's eye at 100x speed.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 hover:from-blue-400 hover:to-blue-600 transition-all duration-500">
                            <div className="relative h-full bg-white dark:bg-zinc-950 rounded-[22px] p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        🧬
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-blue-500 transition-colors">Code DNA</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Parses semantic HTML structure and CSS efficiency. We check regular patterns that suggest a robust, maintainable codebase.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative p-1 rounded-3xl bg-gradient-to-b from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 hover:from-green-400 hover:to-emerald-600 transition-all duration-500">
                            <div className="relative h-full bg-white dark:bg-zinc-950 rounded-[22px] p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                        ⚡
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 mt-8 group-hover:text-green-500 transition-colors">Vibe Velocity</h3>
                                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    Speed matters. We verify initial content paint (LCP) and interaction readiness to ensure your user isn't waiting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Removed Criteria Section */}
        </>
    );
}
