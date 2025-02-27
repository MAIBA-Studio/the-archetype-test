
import React from 'react';
import { ResultsType } from '@/context/TestContext';
import { Button } from '@/components/Button';
import { Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResultsViewProps {
  results: ResultsType;
  onRetake: () => void;
  className?: string;
}

const ResultsView: React.FC<ResultsViewProps> = ({ 
  results, 
  onRetake,
  className 
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My PersonaLens Result',
        text: `I took the PersonaLens test and my personality type is: ${results.type}!`,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(
        `I took the PersonaLens test and my personality type is: ${results.type}! ${window.location.href}`
      );
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Your Personality Type Is</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{results.type}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {results.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-6 md:p-8 animate-fade-in [animation-delay:200ms]">
          <h3 className="text-xl font-semibold mb-4">Your Strengths</h3>
          <ul className="space-y-2">
            {results.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-primary/10 text-primary flex-shrink-0 mr-3 flex items-center justify-center text-xs">
                  +
                </span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card p-6 md:p-8 animate-fade-in [animation-delay:400ms]">
          <h3 className="text-xl font-semibold mb-4">Growth Areas</h3>
          <ul className="space-y-2">
            {results.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block h-5 w-5 rounded-full bg-accent/10 text-accent-foreground flex-shrink-0 mr-3 flex items-center justify-center text-xs">
                  ↗
                </span>
                <span>{weakness}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-card p-6 md:p-8 mt-8 animate-fade-in [animation-delay:600ms]">
        <h3 className="text-xl font-semibold mb-4">Career Pathways That Might Suit You</h3>
        <div className="flex flex-wrap gap-3">
          {results.careerOptions.map((career, index) => (
            <div key={index} className="bg-secondary px-4 py-2 rounded-full text-sm">
              {career}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 animate-fade-in [animation-delay:800ms]">
        <Button onClick={onRetake} variant="outline">
          Retake the Test
        </Button>
        
        <Button onClick={handleShare} className="group">
          <Share2 className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
          Share Results
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;
