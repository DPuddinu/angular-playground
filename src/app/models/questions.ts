import { Difficulty } from "../data/questions";

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
  explanation: string;
} 