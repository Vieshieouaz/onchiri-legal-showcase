import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Target, 
  Handshake 
} from "lucide-react";
import lawyerImage from "@/assets/lawyer-professional.jpg";

const reasons = [
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Over 20 years of legal expertise with a track record of successful case outcomes and client satisfaction."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified advocates admitted to the Kenyan Bar with specialized knowledge across multiple practice areas."
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Efficient case handling with clear timelines and regular updates on your legal matter's progress."
  },
  {
    icon: Shield,
    title: "Client Protection",
    description: "Confidential and secure handling of all client information with the highest ethical standards."
  },
  {
    icon: Target,
    title: "Results-Focused",
    description: "Strategic approach tailored to achieve the best possible outcomes for each unique legal situation."
  },
  {
    icon: Handshake,
    title: "Personal Touch",
    description: "Personalized service with direct access to your legal team and responsive communication."
  }
];

const achievements = [
  { label: "LSK Licensed", value: "Certified" },
  { label: "Success Rate", value: "98%" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Years Experience", value: "20+" }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Why Choose ONCHIRI Z. & CO.
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted Legal Partners in Kenya
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence, integrity, and client success has made us 
              a preferred choice for individuals and businesses seeking reliable legal representation.
            </p>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-card border-0 text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-accent mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Professional Image */}
            <div className="relative">
              <img 
                src={lawyerImage} 
                alt="Professional legal team" 
                className="rounded-lg shadow-elegant w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Right Content - Reasons */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};