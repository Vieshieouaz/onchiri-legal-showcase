import { Link } from "react-router-dom";
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  "Real Estate Law",
  "Family Law", 
  "Succession & Probate",
  "Civil & Criminal Litigation",
  "Employment Law",
  "Corporate Law"
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Resources", href: "/resources" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" }
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg gradient-red">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ONCHIRI Z. & CO.</h3>
                <p className="text-sm opacity-90">ADVOCATES</p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premier law firm in Kenya providing comprehensive legal services with integrity, 
              professionalism, and client-focused solutions since establishment.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link 
                    to="/practice-areas" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>ABC Building, 5th Floor</p>
                  <p>Waiyaki Way, Westlands</p>
                  <p>P.O. Box 12345-00100</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+254 720 849 431</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">info@onchiriz.co.ke</span>
              </div>
            </div>
            
            <Button variant="accent" className="mt-6 w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 ONCHIRI Z. & CO. ADVOCATES. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-smooth">
                Terms of Service
              </Link>
              <span className="text-primary-foreground/60">
                Licensed by Law Society of Kenya
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};