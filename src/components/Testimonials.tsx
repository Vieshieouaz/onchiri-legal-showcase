import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    role: "Property Developer",
    content: "ONCHIRI Z. & CO. handled my property acquisition with exceptional professionalism. Their expertise in real estate law saved me from potential legal complications and ensured a smooth transaction.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "David Kimani",
    role: "Business Owner",
    content: "When I needed to incorporate my company and draft employment contracts, their corporate law team provided invaluable guidance. The process was efficient and thoroughly explained at every step.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Grace Muthoni",
    role: "Individual Client",
    content: "During my divorce proceedings, the family law team showed great compassion while maintaining strong advocacy for my rights. They achieved better results than I had hoped for regarding child custody.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "James Ochieng",
    role: "Estate Executor",
    content: "The succession process seemed overwhelming until I engaged ONCHIRI Z. & CO. They guided us through each step, handled all documentation, and made what could have been a stressful experience manageable.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Mary Nyambe",
    role: "HR Manager",
    content: "Their employment law expertise helped us restructure our workplace policies and handle a complex labor dispute. Their advice was practical, legally sound, and delivered with excellent timing.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Peter Mwangi",
    role: "Land Owner",
    content: "Facing a boundary dispute that had dragged on for years, ONCHIRI Z. & CO. resolved it efficiently through skilled negotiation and legal strategy. Highly recommend their land law services.",
    rating: 5,
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our clients' success stories and satisfaction are testament to our commitment 
            to providing exceptional legal services across all practice areas.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-card border-0 bg-gradient-to-b from-card to-muted/30 hover:shadow-elegant transition-smooth">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Satisfied Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};