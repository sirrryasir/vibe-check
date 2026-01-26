import Hero from "@/components/Hero";
import Scanner from "@/components/Scanner";
import InfoSections from "@/components/InfoSections";
import LiveCodeScanner from "@/components/LiveCodeScanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Hero />
      <Scanner />
      <LiveCodeScanner />
      <InfoSections />
      <Footer />
    </div>
  );
}
