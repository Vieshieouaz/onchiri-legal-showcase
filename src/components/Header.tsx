import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Scale, Phone, MessageCircle } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Resources", href: "/resources" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-red">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">ONCHIRI Z. & CO.</h1>
              <p className="text-sm text-muted-foreground">ADVOCATES</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-accent transition-smooth font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button variant="accent" size="sm">
              <MessageCircle className="w-4 h-4 mr-2" />
              Consult
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg gradient-red">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-primary">ONCHIRI Z. & CO.</h2>
                    <p className="text-sm text-muted-foreground">ADVOCATES</p>
                  </div>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-accent transition-smooth py-2"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="flex flex-col gap-3 mt-6">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    +254 720 849 431
                  </Button>
                  <Button variant="accent" className="w-full">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};