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

                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} VibeCheck.
                </p>
            </div>
        </footer>
    );
}
