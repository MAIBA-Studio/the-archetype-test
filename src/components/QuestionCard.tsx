
import React from 'react';
import { Question, Option } from '@/lib/questions';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  selectedAnswer?: number;
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onAnswer,
  selectedAnswer,
  className,
}) => {
  return (
    <div 
      className={cn(
        'w-full max-w-2xl mx-auto rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-slate-100 p-8 transition-all',
        className
      )}
    >
      <h3 className="text-xl md:text-2xl font-medium mb-8 text-center">
        {question.text}
      </h3>
      
      <div className="space-y-3">
        {question.options.map((option: Option, index) => (
          <OptionButton
            key={index}
            option={option}
            onSelect={() => onAnswer(option.value)}
            isSelected={selectedAnswer === option.value}
          />
        ))}
      </div>
    </div>
  );
};

interface OptionButtonProps {
  option: Option;
  onSelect: () => void;
  isSelected: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({ option, onSelect, isSelected }) => {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center',
        isSelected 
          ? 'border-primary/30 bg-primary/5 shadow-sm' 
          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
      )}
    >
      <div className={cn(
        'h-5 w-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center transition-all',
        isSelected ? 'border-primary bg-primary' : 'border-slate-300'
      )}>
        {isSelected && (
          <div className="h-2 w-2 rounded-full bg-white animate-scale-in" />
        )}
      </div>
      <span className="text-sm md:text-base">{option.text}</span>
    </button>
  );
};

export default QuestionCard;
