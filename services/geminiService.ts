
import { GoogleGenAI, Type } from "@google/genai";
import { UserAnswers, StrategyProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePathfinderReport = async (answers: UserAnswers): Promise<StrategyProfile> => {
  const prompt = `
    Analyze this user and provide a premium strategic guide.
    
    User Profile:
    - Description: ${answers.description}
    - Industry: ${answers.industry}
    - Main Goal: ${answers.goal}
    - AI Level: ${answers.level}
    - Time Commitment: ${answers.timeCommitment}
    - Priority: ${answers.priority}

    Follow the AI Pathfinder process:
    1. DIAGNOSIS: Summarize their situation and classify into a strategic profile.
    2. STRATEGY DESIGN: Clear direction, leverage model, risks, and thinking shift.
    3. ACTION PATH: Create a SOLID and SIMPLE 7-day implementation plan (Day 1 to Day 7, learn, build/apply, tools, outcomes).

    Tone: Calm, intelligent, clear, modern, premium, minimalist.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: [{ parts: [{ text: prompt }] }],
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          diagnosisSummary: { type: Type.STRING },
          strategicDirection: { type: Type.STRING },
          leverageModel: { type: Type.STRING },
          risksToAvoid: { type: Type.STRING },
          thinkingShift: { type: Type.STRING },
          actionPath: {
            type: Type.OBJECT,
            properties: {
              day1: { type: Type.STRING },
              day2: { type: Type.STRING },
              day3: { type: Type.STRING },
              day4: { type: Type.STRING },
              day5: { type: Type.STRING },
              day6: { type: Type.STRING },
              day7: { type: Type.STRING },
              toLearn: { type: Type.STRING },
              toBuild: { type: Type.STRING },
              tools: { type: Type.ARRAY, items: { type: Type.STRING } },
              expectedOutcome: { type: Type.STRING }
            }
          }
        },
        required: ["name", "diagnosisSummary", "strategicDirection", "leverageModel", "risksToAvoid", "thinkingShift", "actionPath"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};

export const generateProfileVisual = async (profile: StrategyProfile): Promise<string> => {
  const prompt = `A premium, high-end minimalist digital art piece representing "${profile.name}". 
    Aesthetic: Clean architectural lines, sophisticated neutral palette, abstract geometric composition. 
    Theme: ${profile.strategicDirection}. 
    Style: Minimalist consulting firm branding, no text, no characters, pure conceptual elegance.`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9"
      },
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  return '';
};
