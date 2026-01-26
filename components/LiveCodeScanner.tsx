"use client";

import { useEffect, useState } from "react";

export default function LiveCodeScanner() {
    const codeSnippet = `import { VibeCheck } from '@cortex/core';
import { analyzeAesthetics } from './visual-engine';

export async function scanProject(url: string) {
  // Initializing visual cortex...
  const designSystem = await detectDesignTokens(url);
  
  if (!designSystem.consistency) {
    return { score: 12, reason: "INCONSISTENT_PADDING" };
  }

  // verifying responsiveness
  const mobileScore = await checkViewports(['375px', '768px']);
  
  // deeply analyzing a11y compliance
  const contrastRatio = checkContrast(designSystem.colors);
  
  if (contrastRatio < 4.5) {
     console.warn("ACCESSIBILITY_FAIL");
  }

  return {
    status: "OPTIMAL",
    vibe: "SHIPPABLE_QUALITY"
  };
}`;

    return (
        <section id="live-scan" className="py-24 bg-black text-white overflow-hidden relative border-y border-zinc-900">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Code Terminal Visual - Left Side */}
                <div className="relative group order-1 lg:order-1">
                    {/* Glowing effect behind */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-yellow-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden min-h-[400px]">
                        {/* Terminal Header */}
                        <div className="flex justify-between items-center p-4 border-b border-zinc-900 bg-zinc-900/50">
                            <span className="text-zinc-500 text-xs">scanner.ts</span>
                            <span className="text-green-500 text-xs uppercase tracking-wider flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                SCANNING ACTIVE
                            </span>
                        </div>

                        {/* Static Code Content */}
                        <div className="p-6 font-mono text-sm leading-relaxed relative">
                            <pre className="text-zinc-300 whitespace-pre-wrap">
                                {codeSnippet}
                            </pre>

                            {/* Scan Line Animation */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_20px_rgba(245,217,10,0.8)] animate-scan z-10"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent animate-scan-overlay pointer-events-none z-0"></div>
                        </div>
                    </div>
                </div>

                {/* Text Content - Right Side */}
                <div className="order-2 lg:order-2">
                    <div className="hidden lg:flex items-center gap-3 mb-6">
                        <span className="flex h-3 w-3 rounded-full bg-red-500"></span>
                        <span className="flex h-3 w-3 rounded-full bg-yellow-500"></span>
                        <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                        <span className="ml-4 text-xs font-mono text-zinc-500">Analysis Output</span>
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter mb-6 leading-tight">
                        REAL-TIME <br />
                        <span className="text-accent">VIBE ANALYSIS.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Our proprietary algorithm scans your deployment for visual consistency, code cleanliness, and UX best practices. Get instant feedback on your build before it hits the production server.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-zinc-300 font-medium">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">✓</div>
                            AUTOMATED UI AUDIT
                        </li>
                        <li className="flex items-center gap-3 text-zinc-300 font-medium">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">✓</div>
                            MOBILE-FIRST VERIFICATION
                        </li>
                        <li className="flex items-center gap-3 text-zinc-300 font-medium">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">✓</div>
                            LIGHTHOUSE SCORE SYNC
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
