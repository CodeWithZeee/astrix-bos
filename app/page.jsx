import "./globals.css";
import { NovaSection } from "./components/Nova-section";
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
import Banner from "./components/banner";
import SaxSection from "./components/SaxSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b0f17" }}>
      <Banner />
      {/* Problems Section */}
      <section className="py-20 mt-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-destructive/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-destructive/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-card subtle-glow text-red-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Critical Business Issues
              <Sparkles className="w-4 h-4 ml-1" />
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Problems
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Service Businesses Aren't Failing — They're Drowning in Operations
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up animate-delay-200">
            <p className="text-lg text-slate-200 text-center max-w-4xl mx-auto leading-relaxed">
              You didn't start your business to chase missed calls, wrangle
              spreadsheets, or watch leads disappear. Yet every day:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Missed follow-ups = revenue slipping away
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Calls vanish after hours
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <MessageSquareX className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Leads go cold before anyone responds
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <Settings className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Disconnected tools drain time and focus
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Admin staff is costly and still needs oversight
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in-up animate-delay-500">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border-red-500/20">
              <p className="text-xl font-semibold text-red-400">
                The result? Lost momentum. Lost opportunities. Lost growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-card subtle-glow text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              Nova's Solutions
              <Sparkles className="w-4 h-4 ml-1" />
            </div>
            <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
              Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              An Entire Operations Team — In a Single AI
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up animate-delay-200">
            <p className="text-lg text-slate-200 text-center max-w-4xl mx-auto leading-relaxed">
              Nova is powered by AstrixBOS, the first AI-native operating system
              built for service businesses. Together, they clear every
              operational bottleneck so you can scale without scaling your
              headaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    AI Voice Agents for inbound & outbound calls
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Automated follow-ups, bookings, and pipeline updates
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    One central hub for your daily operations
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Proactive suggestions, reminders, and instant summaries
                  </h3>
                </div>
              </div>
            </div>

            <div className="glass-card clean-hover rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Replace 5+ disconnected tools with one intelligent system
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center animate-fade-in-up animate-delay-500">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto border-blue-500/20">
              <p className="text-xl font-semibold text-blue-400">
                The result: more closed deals, more time to grow, and zero
                micromanagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add NovaSection */}
      <NovaSection />

      <SaxSection />
    </div>
  );
}
