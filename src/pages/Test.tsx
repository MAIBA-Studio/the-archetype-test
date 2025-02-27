
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import QuestionCard from '@/components/QuestionCard';
import ProgressBar from '@/components/ProgressBar';
import { Button } from '@/components/Button';
import { questions } from '@/lib/questions';
import { useTest } from '@/context/TestContext';

const Test = () => {
  const navigate = useNavigate();
  const { 
    currentQuestionIndex, 
    answers, 
    progress, 
    goToNextQuestion, 
    goToPreviousQuestion, 
    saveAnswer,
    results
  } = useTest();

  const [animationState, setAnimationState] = useState<'entering' | 'active' | 'exiting'>('entering');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  // Redirect to results if test is complete
  useEffect(() => {
    if (results) {
      navigate('/results');
    }
  }, [results, navigate]);

  useEffect(() => {
    // Start with entering animation
    setAnimationState('entering');
    // After entering animation is complete, set to active
    const timer = setTimeout(() => {
      setAnimationState('active');
    }, 300);
    return () => clearTimeout(timer);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    setAnimationState('exiting');
    setDirection('forward');
    setTimeout(() => {
      goToNextQuestion();
    }, 300);
  };

  const handlePrevious = () => {
    setAnimationState('exiting');
    setDirection('backward');
    setTimeout(() => {
      goToPreviousQuestion();
    }, 300);
  };

  const handleAnswer = (score: number) => {
    setAnimationState('exiting');
    setDirection('forward');
    setTimeout(() => {
      saveAnswer(score);
    }, 300);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const hasAnswer = answers.some(answer => answer.questionId === currentQuestion.id);
  const selectedAnswer = answers.find(answer => answer.questionId === currentQuestion.id)?.score;

  // Animation classes based on state
  const getAnimationClasses = () => {
    if (animationState === 'entering') {
      return direction === 'forward' 
        ? 'opacity-0 translate-x-8' 
        : 'opacity-0 -translate-x-8';
    }
    if (animationState === 'exiting') {
      return direction === 'forward' 
        ? 'opacity-0 -translate-x-8' 
        : 'opacity-0 translate-x-8';
    }
    return 'opacity-100 translate-x-0';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header />
      
      <main className="flex-1 pt-28 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <ProgressBar value={progress} />
          </div>
          
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </h2>
            <p className="text-muted-foreground">
              Select the option that best describes you
            </p>
          </div>
          
          <div
            className={`transform transition-all duration-300 ease-in-out ${getAnimationClasses()}`}
          >
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              selectedAnswer={selectedAnswer}
            />
          </div>
          
          <div className="mt-12 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1 || !hasAnswer}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Test;
