"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
                    VIBE<span className="text-accent">CHECK</span>.
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="#scanner"
                        className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors"
                    >
                        SCANNER
                    </Link>
                    <Link
                        href="#live-scan"
                        className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors"
                    >
                        LIVE SCAN
                    </Link>
                    <Link
                        href="#algorithm"
                        className="text-sm font-medium text-gray-600 hover:text-foreground transition-colors"
                    >
                        ALGORITHM
                    </Link>
                </nav>

                {/* CTA & Theme Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-foreground"
                        aria-label="Toggle Theme"
                    >
                        {mounted && theme === "dark" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>
                        )}
                    </button>
                    <a
                        href="#live-scan"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('live-scan')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-gray-900 border-2 border-transparent hover:border-gray-200 rounded-full transition-all bg-accent hover:bg-yellow-300 shadow-[0_0_15px_rgba(245,217,10,0.4)] hover:shadow-[0_0_25px_rgba(245,217,10,0.6)]"
                    >
                        LIVE SCAN
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-2xl p-4 flex flex-col gap-4 animate-fade-in">
                    <nav className="flex flex-col gap-4">
                        <Link href="#scanner" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold hover:text-accent transition-colors">SCANNER</Link>
                        <Link href="#algorithm" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold hover:text-accent transition-colors">ALGORITHM</Link>
                        <Link href="#live-scan" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold hover:text-accent transition-colors">LIVE SCAN</Link>
                    </nav>
                    <div className="h-px bg-border my-2" />
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Theme</span>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-foreground"
                        >
                            {mounted && theme === "dark" ? "Switch to Light" : "Switch to Dark"}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
