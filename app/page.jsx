import "./globals.css";
import { NohaSection } from "./ignore/Noha-section";
import Navbar from "./components/Navbar";
import {
  AlertTriangle,
  Phone,
  Calendar,
  Users,
  Zap,
  Target,
  TrendingDown,
  Clock,
  MessageSquareX,
  Settings,
  DollarSign,
  Sparkles,
  Bot,
} from "lucide-react";
import Section3 from "./components/Section3";
import FeaturesSection from "./components/FeaturesSection";
import SpotlightSection from "./components/SpotlightSection";
import RevealAnimation from "./components/RevealAnimation";
import { FinalCTASection } from "./components/final-cta-section";
import Landingpage from "./components/Landingpage";
import Problems from "./components/Problems";

export default function Home() {
  return (
    <>
      <Landingpage />
      {/* Add NohaSection */}
      <RevealAnimation delay={0.1}>
        <Problems />
      </RevealAnimation>

      {/* Features Section with Card Hover Effect */}
      <RevealAnimation delay={0.1}>
        <FeaturesSection />
      </RevealAnimation>

      {/* Spotlight Section with Card Spotlight Effect */}
      <RevealAnimation delay={0.1}>
        <SpotlightSection />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <Section3 />
      </RevealAnimation>

      <FinalCTASection />
    </>
  );
}
