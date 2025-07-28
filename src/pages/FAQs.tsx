import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What types of legal services do you offer?",
        answer: "We provide comprehensive legal services including real estate law, family law, succession and probate, civil and criminal litigation, employment law, corporate and commercial law, land disputes and conveyancing, and immigration and citizenship matters."
      },
      {
        question: "How much do your legal services cost?",
        answer: "Our fees vary depending on the complexity and nature of the legal matter. We offer transparent pricing and will provide you with a detailed fee structure during your initial consultation. We also offer flexible payment arrangements where possible."
      },
      {
        question: "Do you offer free consultations?",
        answer: "We offer an initial consultation to discuss your legal matter and provide preliminary advice. Contact us to schedule your consultation and learn about our fee structure for ongoing representation."
      },
      {
        question: "How long does it typically take to resolve a legal matter?",
        answer: "The timeline varies significantly depending on the type and complexity of the legal issue. Simple matters like document preparation may take a few weeks, while complex litigation can take several months to years. We'll provide realistic timelines during your consultation."
      }
    ]
  },
  {
    category: "Real Estate",
    questions: [
      {
        question: "What documents do I need when buying property in Kenya?",
        answer: "Essential documents include the title deed, survey plan, valuation report, consent from relevant authorities, clearance certificates from local authorities, and proof of payment of rates and taxes. We'll guide you through the complete documentation process."
      },
      {
        question: "How long does property conveyancing take?",
        answer: "Property conveyancing typically takes 30-60 days, depending on the complexity of the transaction and the efficiency of government processes. Factors that may affect timing include consent approvals, searches, and documentation verification."
      },
      {
        question: "What are the costs involved in property transfer?",
        answer: "Costs include stamp duty (4% of property value), legal fees, registration fees, valuation fees, and search fees. We provide a detailed breakdown of all costs upfront so you can budget appropriately."
      }
    ]
  },
  {
    category: "Family Law",
    questions: [
      {
        question: "What grounds exist for divorce in Kenya?",
        answer: "Grounds for divorce in Kenya include irretrievable breakdown of marriage, which can be proven through adultery, cruelty, desertion, separation for more than two years, or other circumstances that make it unreasonable to continue the marriage."
      },
      {
        question: "How is child custody determined?",
        answer: "Child custody decisions are based on the best interests of the child, considering factors such as the child's welfare, emotional and physical needs, the ability of each parent to provide care, and where applicable, the child's own wishes."
      },
      {
        question: "How is matrimonial property divided?",
        answer: "Matrimonial property is divided based on contributions made by each spouse, whether monetary or non-monetary. The court considers factors such as duration of marriage, contributions to the acquisition of property, and the needs of the children."
      }
    ]
  },
  {
    category: "Succession",
    questions: [
      {
        question: "What is the process for obtaining a succession certificate?",
        answer: "The process involves filing a petition in court, providing necessary documentation including death certificate and asset details, publication of notice, and court hearings. The process typically takes 6-12 months depending on case complexity."
      },
      {
        question: "Do I need a will in Kenya?",
        answer: "While not mandatory, having a will is highly recommended as it ensures your assets are distributed according to your wishes, simplifies the succession process for your beneficiaries, and can help avoid family disputes."
      },
      {
        question: "What happens if someone dies without a will?",
        answer: "When someone dies intestate (without a will), their estate is distributed according to the Law of Succession Act, which provides specific rules for distribution among surviving spouse(s), children, and other relatives."
      }
    ]
  },
  {
    category: "Employment",
    questions: [
      {
        question: "What constitutes wrongful termination in Kenya?",
        answer: "Wrongful termination occurs when an employee is dismissed without following proper procedures, without valid reasons, or in violation of their contract terms. This includes dismissal without notice, failure to follow disciplinary procedures, or termination based on discrimination."
      },
      {
        question: "What are my rights if I'm unfairly dismissed?",
        answer: "You have the right to file a complaint with the Employment and Labour Relations Court, seek reinstatement or compensation, and claim for unpaid benefits. You must file your complaint within 60 days of dismissal."
      },
      {
        question: "How much notice should an employer give for termination?",
        answer: "Notice periods depend on the length of service and contract terms. Generally, employees are entitled to one month's notice or payment in lieu, though senior employees or those with specific contracts may have longer notice periods."
      }
    ]
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Find answers to common legal questions. If you don't find what you're looking for, 
            don't hesitate to contact us directly.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                {category.category} Questions
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-6 py-2 shadow-card bg-card"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our legal team is here to help. Contact us for personalized advice and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-lg bg-accent/10 w-fit mx-auto mb-6">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-muted-foreground mb-6">
                  Speak directly with our legal team for immediate assistance.
                </p>
                <Button variant="outline">
                  +254 720 849 431
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-lg bg-accent/10 w-fit mx-auto mb-6">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-muted-foreground mb-6">
                  Send us your questions and we'll respond promptly.
                </p>
                <Button variant="outline">
                  info@onchiriz.co.ke
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="p-4 rounded-lg bg-accent/10 w-fit mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">Book Consultation</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a consultation to discuss your legal matter in detail.
                </p>
                <Button variant="gold">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;