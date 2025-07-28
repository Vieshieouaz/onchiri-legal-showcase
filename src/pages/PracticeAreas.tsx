import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Heart, 
  Users, 
  Gavel, 
  Briefcase, 
  Building, 
  MapPin, 
  UserCheck 
} from "lucide-react";

const practiceAreas = [
  {
    icon: Home,
    title: "Real Estate Law",
    description: "Comprehensive property law services including conveyancing, land transactions, property disputes, and title registration.",
    services: ["Property Purchases & Sales", "Title Transfers", "Land Disputes Resolution", "Property Development Law"]
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Compassionate legal support for family matters including divorce, child custody, and matrimonial property disputes.",
    services: ["Divorce & Separation", "Child Custody & Support", "Matrimonial Property", "Domestic Violence Protection"]
  },
  {
    icon: Users,
    title: "Succession & Probate",
    description: "Expert guidance through inheritance matters, estate planning, and succession procedures under Kenyan law.",
    services: ["Will Drafting", "Estate Administration", "Succession Certificates", "Inheritance Disputes"]
  },
  {
    icon: Gavel,
    title: "Civil & Criminal Litigation",
    description: "Skilled representation in court proceedings for both civil and criminal matters with a strong track record.",
    services: ["Court Representation", "Appeals", "Arbitration", "Mediation Services"]
  },
  {
    icon: Briefcase,
    title: "Employment Law",
    description: "Comprehensive employment law services for both employers and employees in workplace matters.",
    services: ["Employment Contracts", "Wrongful Termination", "Labor Disputes", "Workplace Policies"]
  },
  {
    icon: Building,
    title: "Corporate & Commercial Law",
    description: "Business law services including company formation, contracts, mergers, and corporate governance.",
    services: ["Company Incorporation", "Commercial Contracts", "Mergers & Acquisitions", "Corporate Compliance"]
  },
  {
    icon: MapPin,
    title: "Land Disputes & Conveyancing",
    description: "Specialized services in land law, boundary disputes, and property conveyancing processes.",
    services: ["Boundary Disputes", "Land Title Issues", "Conveyancing Services", "Property Surveys"]
  },
  {
    icon: UserCheck,
    title: "Immigration & Citizenship",
    description: "Immigration law services including visa applications, citizenship matters, and residency permits.",
    services: ["Visa Applications", "Work Permits", "Citizenship Applications", "Immigration Appeals"]
  }
];

const PracticeAreas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Practice Areas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal services across multiple practice areas, 
            delivering expert representation and advisory services.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30 hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <IconComponent className="w-8 h-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-accent">
                        Key Services:
                      </h4>
                      <ul className="space-y-1">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experienced legal team is ready to provide you with expert advice 
              and representation across all our practice areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Book Consultation
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PracticeAreas;