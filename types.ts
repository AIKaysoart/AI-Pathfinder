
export enum Phase {
  ORIENTATION = 'ORIENTATION',
  DIAGNOSIS = 'DIAGNOSIS',
  STRATEGY = 'STRATEGY',
  ACTION = 'ACTION'
}

export interface UserAnswers {
  description: string;
  industry: string;
  goal: string;
  level: string;
  timeCommitment: string;
  priority: string;
}

export interface StrategyProfile {
  name: string;
  diagnosisSummary: string;
  strategicDirection: string;
  leverageModel: string;
  risksToAvoid: string;
  thinkingShift: string;
  imageUrl?: string;
  actionPath: {
    day1: string;
    day2: string;
    day3: string;
    day4: string;
    day5: string;
    day6: string;
    day7: string;
    toLearn: string;
    toBuild: string;
    tools: string[];
    expectedOutcome: string;
  };
}

export interface Question {
  id: keyof UserAnswers;
  text: string;
  options?: string[];
  placeholder?: string;
}
