import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Scale, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About ONCHIRI Z. & CO. ADVOCATES
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A premier law firm in Kenya dedicated to providing exceptional legal services 
            with integrity, professionalism, and client-focused solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established with a vision to provide comprehensive legal services to individuals and businesses in Kenya, 
                ONCHIRI Z. & CO. ADVOCATES has grown to become a trusted name in the legal industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our firm combines decades of legal expertise with modern approaches to deliver results that matter. 
                We understand the complexities of Kenyan law and navigate them skillfully for our clients.
              </p>
              <Button variant="gold" size="lg">
                Schedule Consultation
              </Button>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Law firm office" 
                className="rounded-lg shadow-elegant w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30">
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide exceptional legal services that protect our clients' interests and 
                  contribute to the development of a just society in Kenya.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading law firm in Kenya, recognized for excellence, integrity, 
                  and innovative legal solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30">
              <CardContent className="p-8 text-center">
                <Scale className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, Excellence, Client Focus, Professional Ethics, 
                  and Commitment to Justice guide everything we do.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced legal professionals bring diverse expertise and unwavering dedication to every case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Mr. Onchiri Z." 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Mr. Onchiri Z.</h3>
                <p className="text-accent font-semibold mb-4">Founding Partner</p>
                <p className="text-muted-foreground">
                  Over 20 years of experience in corporate law, litigation, and legal advisory services. 
                  Admitted to the Bar in Kenya and member of the Law Society of Kenya.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Senior Associate" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Ms. Jane Wanjiku</h3>
                <p className="text-accent font-semibold mb-4">Senior Associate</p>
                <p className="text-muted-foreground">
                  Specializes in family law, succession, and employment law. 
                  Committed to providing compassionate and effective legal representation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Associate" 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">Mr. David Mwangi</h3>
                <p className="text-accent font-semibold mb-4">Associate</p>
                <p className="text-muted-foreground">
                  Expert in real estate law, conveyancing, and land disputes. 
                  Dedicated to helping clients navigate complex property matters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;