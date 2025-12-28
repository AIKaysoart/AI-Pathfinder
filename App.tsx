
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Questionnaire } from './components/Questionnaire';
import { ResultsView } from './components/ResultsView';
import { Phase, UserAnswers, StrategyProfile } from './types';
import { generatePathfinderReport, generateProfileVisual } from './services/geminiService';

const App: React.FC = () => {
  const [phase, setPhase] = useState<Phase>(Phase.ORIENTATION);
  const [answers, setAnswers] = useState<UserAnswers | null>(null);
  const [report, setReport] = useState<StrategyProfile | null>(null);
  const [loadingStep, setLoadingStep] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const startJourney = () => {
    setShowWelcome(false);
  };

  const handleCompleteQuestionnaire = async (finalAnswers: UserAnswers) => {
    setAnswers(finalAnswers);
    setIsLoading(true);
    setPhase(Phase.DIAGNOSIS);
    
    try {
      setLoadingStep('Synthesizing strategic direction...');
      const generatedReport = await generatePathfinderReport(finalAnswers);
      
      setLoadingStep('Generating graphical strategic visual...');
      const imageUrl = await generateProfileVisual(generatedReport);
      
      setReport({ ...generatedReport, imageUrl });
      setPhase(Phase.STRATEGY);
    } catch (error) {
      console.error("Error generating pathfinder report:", error);
      setLoadingStep('Finalizing your path...');
    } finally {
      setIsLoading(false);
    }
  };

  if (showWelcome) {
    return (
      <Layout>
        <div className="text-center fade-in py-12 md:py-24">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">Premium Strategic Guide</p>
          <h2 className="serif text-4xl md:text-6xl text-neutral-900 mb-8 leading-tight">
            Turn uncertainty into clarity.<br/>
            Ambition into path.
          </h2>
          <p className="text-neutral-500 max-w-md mx-auto mb-12 leading-relaxed font-light">
            Welcome to AI Pathfinder. I am here to help you navigate the landscape of artificial intelligence. We will define your profile and build a solid 7-day implementation plan together.
          </p>
          <button 
            onClick={startJourney}
            className="px-12 py-4 bg-neutral-900 text-white text-xs tracking-[0.2em] uppercase hover:bg-neutral-800 transition-all rounded shadow-lg"
          >
            Begin Orientation
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 text-center fade-in">
          <div className="w-12 h-12 border border-neutral-200 border-t-neutral-800 rounded-full animate-spin mb-8" />
          <p className="serif text-2xl text-neutral-800 mb-4 tracking-tight">Consulting AI Pathfinder</p>
          <p className="text-neutral-400 text-sm font-light max-w-xs mx-auto animate-pulse">
            {loadingStep}
          </p>
        </div>
      ) : (
        <>
          {phase === Phase.ORIENTATION && (
            <Questionnaire onComplete={handleCompleteQuestionnaire} />
          )}
          
          {(phase === Phase.STRATEGY || phase === Phase.ACTION) && report && (
            <ResultsView profile={report} />
          )}
        </>
      )}
    </Layout>
  );
};

export default App;
