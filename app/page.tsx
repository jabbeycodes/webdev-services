import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { AboutSection } from "./sections/AboutSection";
import { PricingSection } from "./sections/PricingSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioSection />
      <FeaturesSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
