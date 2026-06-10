import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { FeaturesSection } from "./sections/FeaturesSection";

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
