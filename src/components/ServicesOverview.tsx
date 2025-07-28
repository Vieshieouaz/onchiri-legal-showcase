import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Heart, Users, Gavel, Briefcase, Building } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Property transactions, conveyancing, and land disputes with expert legal guidance.",
    features: ["Property Purchases", "Title Transfers", "Land Disputes"]
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Compassionate support for divorce, custody, and matrimonial property matters.",
    features: ["Divorce Proceedings", "Child Custody", "Property Division"]
  },
  {
    icon: Users,
    title: "Succession & Probate",
    description: "Estate planning, will drafting, and succession certificate applications.",
    features: ["Will Drafting", "Estate Planning", "Succession Certificates"]
  },
  {
    icon: Gavel,
    title: "Litigation Services",
    description: "Skilled court representation for civil and criminal legal proceedings.",
    features: ["Court Representation", "Appeals", "Legal Advocacy"]
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Comprehensive workplace legal services for employers and employees.",
    features: ["Employment Contracts", "Dispute Resolution", "Labor Relations"]
  },
  {
    icon: Building,
    title: "Corporate Law",
    description: "Business formation, contracts, compliance, and corporate governance services.",
    features: ["Company Formation", "Contract Drafting", "Compliance"]
  }
];

export const ServicesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide expert legal representation across multiple practice areas, 
            ensuring your legal needs are met with professionalism and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30 hover:shadow-elegant transition-smooth group"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-smooth">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/practice-areas">
            <Button variant="hero" size="lg" className="group">
              View All Practice Areas
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};