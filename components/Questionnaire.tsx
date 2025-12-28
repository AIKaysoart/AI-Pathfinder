
import React, { useState, useEffect } from 'react';
import { Question, UserAnswers } from '../types';
import { QUESTIONS } from '../constants';

interface QuestionnaireProps {
  onComplete: (answers: UserAnswers) => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<UserAnswers>>({});
  const [inputValue, setInputValue] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const currentQuestion = QUESTIONS[step];

  const handleNext = (value: string) => {
    if (!value.trim()) return;
    
    setIsAnimating(true);
    const updatedAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(updatedAnswers);
    setInputValue('');

    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
        setIsAnimating(false);
      } else {
        onComplete(updatedAnswers as UserAnswers);
      }
    }, 600);
  };

  useEffect(() => {
    setInputValue('');
  }, [step]);

  return (
    <div className={`w-full max-w-xl transition-all duration-700 ease-out transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      <div className="mb-12 flex items-center justify-center gap-2">
        {QUESTIONS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${i <= step ? 'w-8 bg-neutral-800' : 'w-4 bg-neutral-200'}`} 
          />
        ))}
      </div>
      
      <div className="text-center space-y-12">
        <h2 className="serif text-3xl md:text-5xl text-neutral-900 leading-tight tracking-tight">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options ? (
            <div className="flex flex-col gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleNext(option)}
                  className="w-full py-5 px-8 text-center border border-neutral-100 hover:border-neutral-900/10 rounded-2xl bg-white text-neutral-600 hover:text-neutral-900 hover:shadow-lg transition-all duration-300 font-light tracking-wide text-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={currentQuestion.placeholder}
                onKeyDown={(e) => e.key === 'Enter' && handleNext(inputValue)}
                className="w-full py-6 px-0 text-2xl md:text-4xl text-center border-b border-neutral-200 focus:border-neutral-900 outline-none bg-transparent placeholder:text-neutral-200 transition-colors font-light serif italic"
              />
              <button
                disabled={!inputValue.trim()}
                onClick={() => handleNext(inputValue)}
                className="self-center px-12 py-4 bg-neutral-900 text-white text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-neutral-800 transition-all disabled:opacity-10 disabled:grayscale shadow-xl"
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
