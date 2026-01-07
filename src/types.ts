// src/types.ts

export interface Option {
  id: number;
  content: string;
  isCorrect: boolean;
  created_at: string;
}

export interface Question {
  id: number;
  content: string;
  type: string;
  status: boolean;
  point: number;
  difficulty: number;
  optionTests: Option[];
}

export interface QuizData {
  id: number;
  testName: string;
  status: boolean;
  time: number; // minutes
  type: string;
  created_at: string;
  questionTests: Question[];
}

export interface RootObject {
  data: QuizData;
}
