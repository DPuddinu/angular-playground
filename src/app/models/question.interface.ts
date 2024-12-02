export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  explanation: string;
} 