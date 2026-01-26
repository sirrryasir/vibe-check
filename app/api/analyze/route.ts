import { OpenAI } from "openai";
import { NextResponse } from "next/server";

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json(
                {
                    error: "Missing OpenAI API Key",
                    mock: true,
                    score: 404,
                    status: "NEEDS POLISH",
                    insights: [
                        "Reviewer mode active: No OpenAI API Key found.",
                        "Add OPENAI_API_KEY to .env.local to enable real AI.",
                        "Visuals look clean, but we can't judge the vibe deeply yet."
                    ]
                },
                { status: 200 } // Return 200 for mock response to prevent client error, or handle 500 gracefully
            );
        }

        if (!url) {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        // System prompt to define the persona and output format
        const systemPrompt = `
      You are VibeCheck, an elite Senior Frontend Architect and Design Critic.
      Your job is to analyze website concepts based on their URL and description (in this case, just the URL as a proxy for the project).
      
      Since you cannot browse the live web, you will infer the "vibe" and quality based on the domain name patterns, common frameworks associated with it, or generic best practices if the URL is generic.
      
      **CRITICAL**: You must simulate a deep, professional analysis.
      
      Output JSON format:
      {
        "score": number (0-100),
        "status": "CLEAN VIBES" | "NEEDS POLISH" | "SHIP READY",
        "insights": [
          "string (short, specific, design-focused observation)",
          "string (critique on typography, spacing, or color)",
          "string (UX or performance tip)"
        ]
      }
      
      Rules for Scoring:
      - 90-100: Exceptional, modern, production-ready.
      - 75-89: Good, but needs minor tweaks.
      - Below 75: Needs work.
      
      Tone: Professional, slightly strict, but constructive. No fluff.
    `;

        // User prompt
        const userPrompt = `Analyze the "vibe" and potential quality of a web project deployed at: ${url}. 
    If it's a localhost or generic link, give general best practice advice but treat it seriously.`;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // or gpt-3.5-turbo if 4o is not available
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            response_format: { type: "json_object" },
        });

        const result = JSON.parse(completion.choices[0].message.content || "{}");

        return NextResponse.json(result);
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json(
            { error: "Failed to analyze project vibes." },
            { status: 500 }
        );
    }
}
