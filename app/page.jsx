import "./globals.css";
// import { NohaSection } from "./ignore/Noha-section";
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
// import Section3 from "./ignore/Section3";
import FeaturesSection from "./components/FeaturesSection";
import HNW from "./components/HNW"
import SpotlightSection from "./components/SpotlightSection";
import RevealAnimation from "./components/RevealAnimation";
import { FinalCTASection } from "./components/final-cta-section";
import Landingpage from "./components/Landingpage";
import Problems from "./components/Problems";
import NS from "./components/NS"
import WNH from './components/WNH'

export default function Home() {
  return (
    <>
      <RevealAnimation delay={0.1}>
      <Landingpage />
        {/* <Problems /> */}
      </RevealAnimation>

      {/* Features Section with Card Hover Effect */}
      <RevealAnimation delay={0.1}>
        <FeaturesSection />
      </RevealAnimation>

      {/* HNW Section with Lottie Animation */}
      <RevealAnimation delay={0.1}>
        <HNW />
      </RevealAnimation>

      {/* Noha's Solution Section */}
      <RevealAnimation delay={0.1}>
        <NS />
      </RevealAnimation>

      {/* Spotlight Section with Card Spotlight Effect */}
      <RevealAnimation delay={0.1}>
        <SpotlightSection />
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <WNH />
      </RevealAnimation>

      <FinalCTASection />
    </>
  );
}
