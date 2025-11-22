"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrendingUp, Users, Building2, Phone, FileText } from "lucide-react";
import Link from "next/link";

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
      className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20"
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
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sans tracking-tight px-4">
            Invest in the Future of Business Intelligence
          </h2>
          <p className=" text-gray-400 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
           Whether you're looking to invest, partner, or scale, AstrixBOS is your opportunity to be ahead of the curve — helping build the AI-native operating system SMBs has the potential to be the next unicorn
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-16">
          {targetAudiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 group bg-gradient-to-br ${audience.bgGradient} backdrop-blur-sm h-full border-0`}
              >
                <CardHeader className="text-center pb-4 sm:pb-6 pt-6 sm:pt-8">
                  <div className="mx-auto mb-4 sm:mb-6 p-2 sm:p-3 rounded-2xl bg-background/80 w-fit shadow-sm">
                    <IconComponent
                      className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 ${audience.iconColor}`}
                    />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-card-foreground font-sans mb-2">
                    {audience.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm sm:text-base font-medium">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-6 sm:pb-8">
                  <p className="text-sm sm:text-base text-card-foreground leading-relaxed mb-6">
                    {audience.highlight}
                  </p>
                  {/* <Button
                    variant="outline"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  >
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join the revolution in business operations. Contact us today to
              learn how Noha can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="transform transition-transform duration-300 ease-in-out 
               hover:scale-110 hover:shadow-lg cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                  {/* <Phone className="h-4 w-4 sm:h-5 sm:w-5 " /> */}
                  Contact Us
                </Button>
              </Link>
              <Button
                variant="outline"
                className="transform transition-transform duration-300 ease-in-out 
               hover:scale-110 hover:shadow-lg w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base cursor-pointer"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Astrix-BOS-Technical-Documentation (1).pdf";
                  link.download = "Astrix-BOS-Technical-Documentation.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
