import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrendingUp, Users, Building2, Phone, FileText } from "lucide-react";

export function FinalCTASection() {
  const targetAudiences = [
    {
      icon: TrendingUp,
      title: "Investors",
      description: "Seeking high-growth AI ventures",
      highlight:
        "Be ahead of the curve with cutting-edge AI technology that's transforming service businesses.",
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/10 to-blue-600/5",
    },
    {
      icon: Users,
      title: "Agencies",
      description: "Searching for a game-changing partner",
      highlight:
        "Partner with innovation leaders to deliver unprecedented value to your clients.",
      iconColor: "text-emerald-500",
      bgGradient: "from-emerald-500/10 to-emerald-600/5",
    },
    {
      icon: Building2,
      title: "Business Owners",
      description: "Ready to scale without scaling complexity",
      highlight:
        "Transform your operations with AI that grows your business, not your headaches.",
      iconColor: "text-violet-500",
      bgGradient: "from-violet-500/10 to-violet-600/5",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-background to-muted/20"
      style={{
        "--background": "oklch(0.067 0.024 240)",
        "--foreground": "oklch(0.985 0 0)",
        "--card": "oklch(0.1 0.02 240)",
        "--card-foreground": "oklch(0.985 0 0)",
        "--popover": "oklch(0.067 0.024 240)",
        "--popover-foreground": "oklch(0.985 0 0)",
        "--primary": "oklch(0.985 0 0)",
        "--primary-foreground": "oklch(0.067 0.024 240)",
        "--secondary": "oklch(0.646 0.222 280.116)",
        "--secondary-foreground": "oklch(0.985 0 0)",
        "--muted": "oklch(0.15 0.02 240)",
        "--muted-foreground": "oklch(0.708 0 0)",
        "--accent": "oklch(0.646 0.222 280.116)",
        "--accent-foreground": "oklch(0.985 0 0)",
        "--destructive": "oklch(0.577 0.245 27.325)",
        "--destructive-foreground": "oklch(0.985 0 0)",
        "--border": "oklch(0.2 0.02 240)",
        "--input": "oklch(0.15 0.02 240)",
        "--ring": "oklch(0.646 0.111 280.116 / 0.5)",
        "--radius": "0.5rem",
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sans tracking-tight">
            Invest in the Future of Service Businesses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're looking to invest, partner, or scale your business,
            Noha is your opportunity to be ahead of the curve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {targetAudiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 group bg-gradient-to-br ${audience.bgGradient} backdrop-blur-sm h-full`}
              >
                <CardHeader className="text-center pb-6 pt-8">
                  <div className="mx-auto mb-6 p-3 rounded-2xl bg-background/80 w-fit shadow-sm">
                    <IconComponent
                      className={`h-7 w-7 ${audience.iconColor}`}
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground font-sans mb-2">
                    {audience.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base font-medium">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <p className="text-card-foreground/90 leading-relaxed mb-8 text-sm">
                    {audience.highlight}
                  </p>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 transition-all duration-200 shadow-sm hover:shadow-md"
                      size="default"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Book a Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-muted/50 hover:text-foreground font-medium py-2.5 bg-background/50 transition-all duration-200"
                      size="default"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Get Investor Deck
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-8">
          <p className="text-base text-muted-foreground mb-6 font-medium">
            Ready to transform your business with AI? Let's discuss your
            specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 transition-all duration-200 shadow-sm hover:shadow-md flex-1"
            >
              <Phone className="mr-2 h-4 w-4" />
              Schedule Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-muted/50 hover:text-foreground font-medium px-6 py-3 bg-background/50 transition-all duration-200 flex-1"
            >
              <FileText className="mr-2 h-4 w-4" />
              Get Materials
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
