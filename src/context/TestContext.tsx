
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { questions } from '@/lib/questions';
import { personalityTypes } from '@/lib/personality-types';

export type AnswerType = {
  questionId: number;
  score: number;
};

export type ResultsType = {
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerOptions: string[];
};

type TestContextType = {
  currentQuestionIndex: number;
  answers: AnswerType[];
  results: ResultsType | null;
  progress: number;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  saveAnswer: (score: number) => void;
  calculateResults: () => void;
  resetTest: () => void;
};

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [results, setResults] = useState<ResultsType | null>(null);

  const progress = Math.round((currentQuestionIndex / questions.length) * 100);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const saveAnswer = (score: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    setAnswers((prevAnswers) => {
      // Check if we already have an answer for this question
      const existingAnswerIndex = prevAnswers.findIndex(
        (answer) => answer.questionId === currentQuestion.id
      );
      
      if (existingAnswerIndex !== -1) {
        // Update existing answer
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = {
          questionId: currentQuestion.id,
          score,
        };
        return updatedAnswers;
      } else {
        // Add new answer
        return [
          ...prevAnswers,
          {
            questionId: currentQuestion.id,
            score,
          },
        ];
      }
    });
    
    // Auto advance to next question
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 500);
    } else {
      // Last question, calculate results
      setTimeout(() => {
        calculateResults();
      }, 500);
    }
  };

  const calculateResults = () => {
    // Simple scoring algorithm - can be made more sophisticated
    const totalScores: { [key: string]: number } = {};
    
    // Initialize scores for each trait
    personalityTypes.forEach(type => {
      totalScores[type.id] = 0;
    });
    
    // Sum up scores for each trait
    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question) {
        question.traits.forEach(trait => {
          totalScores[trait.id] += answer.score * trait.weight;
        });
      }
    });
    
    // Find the dominant personality type
    let maxScore = -Infinity;
    let dominantType = '';
    
    Object.entries(totalScores).forEach(([typeId, score]) => {
      if (score > maxScore) {
        maxScore = score;
        dominantType = typeId;
      }
    });
    
    const result = personalityTypes.find(type => type.id === dominantType);
    
    if (result) {
      setResults(result);
    }
  };

  const resetTest = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResults(null);
  };

  return (
    <TestContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        results,
        progress,
        goToNextQuestion,
        goToPreviousQuestion,
        saveAnswer,
        calculateResults,
        resetTest,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
