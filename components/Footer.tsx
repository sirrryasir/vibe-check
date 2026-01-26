export default function Footer() {
    return (
        <footer className="py-12 bg-card border-t border-border text-center">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-xl font-bold tracking-tighter text-foreground">
                        VIBE<span className="text-accent">CHECK</span>
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                        Start Shipped
                    </span>
                </div>

                <div className="flex justify-center gap-6 mb-8 text-gray-400">
                    {/* Social Placeholders */}
                    <a href="#" className="hover:text-foreground transition-colors"><div className="w-5 h-5 bg-current rounded-sm opacity-50"></div></a>
                    <a href="#" className="hover:text-foreground transition-colors"><div className="w-5 h-5 bg-current rounded-sm opacity-50"></div></a>
                    <a href="#" className="hover:text-foreground transition-colors"><div className="w-5 h-5 bg-current rounded-sm opacity-50"></div></a>
                </div>

                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} VibeCheck. Not affiliated with Bashi Academy.
                </p>
            </div>
        </footer>
    );
}
