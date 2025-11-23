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
import NS from "./components/NS";
import EG from "./components/EG";
import SpotlightSection from "./components/Intelligence";
import RevealAnimation from "./components/RevealAnimation";
import { FinalCTASection } from "./components/final-cta-section";
import Landingpage from "./components/Landingpage";
import MN from "./components/MN";
import WNH from "./components/Industries";
import Noids from "./components/Noids";
import Roadmap from "./components/Roadmap";

export default function Home() {
  return (
    <>
      <RevealAnimation delay={0.1}>
        <Landingpage />
      </RevealAnimation>


      {/* Meet Noha Section */}
      <RevealAnimation delay={0.1}>
        <MN />
      </RevealAnimation>

      {/* Features Section with Card Hover Effect */}
      <RevealAnimation delay={0.1}>
        <NS />
      </RevealAnimation>

      {/* Noids Section */}
      <RevealAnimation delay={0.1}>
        <Noids />
      </RevealAnimation>

      {/* Roadmap Section */}
      <RevealAnimation delay={0.1}>
        <Roadmap />
      </RevealAnimation>

      {/* HNW Section with Lottie Animation */}
      <RevealAnimation delay={0.1}>
        <EG />
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
