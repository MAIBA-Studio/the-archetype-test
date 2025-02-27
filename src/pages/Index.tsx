
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/Button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 px-6 flex-1 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft [animation-delay:2s]"></div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft [animation-delay:4s]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-secondary rounded-full animate-fade-in">
            Discover Your True Self
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in [animation-delay:200ms]">
            Uncover Your Personality Patterns
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:400ms]">
            Our scientifically designed assessment reveals your unique traits and provides
            insights to help you thrive in relationships, career, and personal growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:600ms]">
            <Button 
              onClick={() => navigate('/test')}
              size="lg"
              className="font-medium"
            >
              Take the Test
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Take Our Personality Test?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our assessment goes beyond simple categorization to provide actionable insights
              that can transform your understanding of yourself and others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Self-Awareness"
              description="Gain deeper insights into your natural tendencies, strengths, and areas for growth."
            />
            <FeatureCard 
              title="Career Insights"
              description="Discover career paths and work environments where your personality type typically thrives."
            />
            <FeatureCard 
              title="Relationship Dynamics"
              description="Understand how you naturally interact with others and how to improve your relationships."
            />
            <FeatureCard 
              title="Scientific Basis"
              description="Our assessment draws from established psychological frameworks and research."
            />
            <FeatureCard 
              title="Personal Development"
              description="Receive tailored suggestions for growth based on your unique personality profile."
            />
            <FeatureCard 
              title="Quick & Insightful"
              description="Complete the assessment in under 5 minutes and get immediate, detailed results."
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft [animation-delay:3s]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Personality Type?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of others who have gained valuable insights through our personality assessment.
          </p>
          <Button
            onClick={() => navigate('/test')}
            size="lg"
            className="font-medium"
          >
            Start the Test Now
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-50 border-t">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-semibold tracking-tight mb-4 md:mb-0">
            <span className="font-bold">Persona</span>
            <span className="font-light">Lens</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PersonaLens. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-slate-200">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
