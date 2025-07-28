import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Scale } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Property Rights in Kenya: A Comprehensive Guide",
    excerpt: "Navigate the complexities of property ownership, land laws, and your rights as a property owner in Kenya.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Real Estate Law",
    featured: true
  },
  {
    title: "New Employment Laws in Kenya: What Employers Need to Know",
    excerpt: "Recent changes to employment legislation and their impact on workplace policies and procedures.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Employment Law"
  },
  {
    title: "Succession Planning: Preparing Your Estate for the Future",
    excerpt: "Essential steps for effective estate planning and succession preparation under Kenyan law.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Succession Law"
  },
  {
    title: "Corporate Compliance in Kenya: Key Requirements for Businesses",
    excerpt: "Understanding regulatory requirements and maintaining compliance for Kenyan businesses.",
    date: "2023-12-28",
    readTime: "7 min read",
    category: "Corporate Law"
  },
  {
    title: "Family Law Updates: Recent Court Decisions and Their Impact",
    excerpt: "Analysis of recent family law cases and how they affect family legal proceedings in Kenya.",
    date: "2023-12-20",
    readTime: "5 min read",
    category: "Family Law"
  },
  {
    title: "Immigration Law Changes: New Visa and Work Permit Procedures",
    excerpt: "Updates to immigration procedures and requirements for foreign nationals in Kenya.",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Immigration Law"
  }
];

const legalGuides = [
  {
    icon: FileText,
    title: "How to File for Succession in Kenya",
    description: "Step-by-step guide to the succession process, required documents, and timeline expectations."
  },
  {
    icon: Scale,
    title: "Understanding Your Rights in Employment Disputes",
    description: "Comprehensive overview of employee rights and available legal remedies in workplace conflicts."
  },
  {
    icon: BookOpen,
    title: "Property Purchase Checklist",
    description: "Essential checklist for property buyers to ensure a smooth and legally compliant transaction."
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Legal Resources & Insights
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest legal developments, expert insights, 
            and practical guides from our experienced legal team.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Featured Article</h2>
            <Card className="shadow-elegant border-0 bg-gradient-to-r from-card to-muted/30">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {blogPosts[0].category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {blogPosts[0].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                    <Button variant="gold" size="lg" className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <div>
                    <img 
                      src="/placeholder.svg" 
                      alt="Featured article" 
                      className="rounded-lg shadow-card w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 h-auto group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Guides */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Legal Guides</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guides to help you understand common legal processes and your rights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {legalGuides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Card key={index} className="shadow-card border-0 text-center hover:shadow-elegant transition-smooth">
                  <CardContent className="p-8">
                    <div className="p-4 rounded-lg bg-accent/10 w-fit mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{guide.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {guide.description}
                    </p>
                    <Button variant="outline" className="group">
                      Download Guide
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;