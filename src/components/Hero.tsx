import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-law-firm.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            ONCHIRI Z. & CO.
            <span className="block text-accent">ADVOCATES</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
            Premier Legal Services in Kenya • Trusted Excellence Since Establishment
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
            Expert legal representation and advisory services across real estate, family law, 
            corporate matters, and litigation. Your trusted partners in navigating complex legal challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="gold" size="lg" className="text-lg px-8 py-4 group">
              <MessageCircle className="w-5 h-5 mr-3" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-3" />
              Call +254 700 123 456
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide">Cases Handled</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm uppercase tracking-wide">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="gold" size="lg" className="rounded-full shadow-elegant animate-pulse">
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};