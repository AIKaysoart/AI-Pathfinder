
import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 'description',
    text: 'What best describes you right now?',
    options: ['Professional', 'Business Owner', 'Student', 'Creator', 'Ministry', 'Organization', 'Other']
  },
  {
    id: 'industry',
    text: 'What industry or field are you mainly in?',
    placeholder: 'e.g. Finance, Marketing, Education, Health...'
  },
  {
    id: 'goal',
    text: 'What is your main goal with AI right now?',
    options: ['Save time', 'Increase income', 'Improve content', 'Automate work', 'Learn new skills', 'Grow a business', 'Explore opportunities']
  },
  {
    id: 'level',
    text: 'What is your current level with AI?',
    options: ['Beginner', 'Some experience', 'Advanced']
  },
  {
    id: 'timeCommitment',
    text: 'How much time can you realistically commit per week?',
    options: ['Less than 2 hours', '2–5 hours', '5–10 hours', '10+ hours']
  },
  {
    id: 'priority',
    text: 'What matters more to you right now?',
    options: ['Speed', 'Depth', 'Low cost', 'High impact', 'Long-term advantage']
  }
];
