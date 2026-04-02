import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IntroSection } from "./components/IntroSection";
import { SuccessStories } from "./components/SuccessStories";
import { CapabilitiesGrid } from "./components/CapabilitiesGrid";
import { UseCases } from "./components/UseCases";
import { Platforms } from "./components/Platforms";
import { Insights } from "./components/Insights";
import { Testimonial } from "./components/Testimonial";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink selection:bg-accent/20">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <SuccessStories />
        <CapabilitiesGrid />
        <UseCases />
        <Platforms />
        <Insights />
        <Testimonial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
