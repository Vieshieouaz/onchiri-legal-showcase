import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Send 
} from "lucide-react";
import consultationImage from "@/assets/consultation-scene.jpg";

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Take the first step towards resolving your legal matter. Our experienced team 
              is ready to provide you with expert guidance and representation.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Call Us Directly</h3>
                  <p className="text-muted-foreground">+254 720 849 431</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground">info@onchiriz.co.ke</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office Hours</h3>
                  <p className="text-muted-foreground">Mon-Fri: 8AM-6PM | Sat: 9AM-1PM</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-3" />
                Request Callback
              </Button>
            </div>

            {/* Consultation Image */}
            <div className="mt-8">
              <img 
                src={consultationImage} 
                alt="Legal consultation" 
                className="rounded-lg shadow-card w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <Card className="shadow-elegant border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Book Your Free Consultation</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+254 7XX XXX XXX" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="legalMatter">Legal Matter *</Label>
                    <Input id="legalMatter" placeholder="e.g., Real Estate, Family Law, Corporate" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Brief Description *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please provide a brief description of your legal matter..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-3" />
                    Submit Consultation Request
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. 
                    All consultations are confidential and privileged.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};