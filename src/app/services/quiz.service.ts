import { computed, Injectable, signal } from '@angular/core';
import { Difficulty, QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private currentQuestionIndex = signal<number>(0);
  private score = signal<number>(0);
  private selectedDifficulty = signal<Difficulty>('beginner');

  currentQuestion = computed(() => QUESTIONS[this.selectedDifficulty()][this.currentQuestionIndex()]);
  currentScore = computed(() => this.score());

  get currentDifficulty() {
    return this.selectedDifficulty();
  }

  setDifficulty(difficulty: Difficulty) {
    this.selectedDifficulty.set(difficulty);
    this.resetQuiz();
  }

  checkAnswer(selectedAnswer: number): boolean {
    const correct = this.currentQuestion().correctAnswer === selectedAnswer;
    if (correct) {
      this.score.update((score) => score + 1);
    }
    return correct;
  }

  nextQuestion() {
    this.currentQuestionIndex.update((index) => index + 1);
  }

  resetQuiz() {
    this.currentQuestionIndex.set(Math.floor(Math.random() * QUESTIONS[this.selectedDifficulty()].length));
    this.score.set(0);
  }
}
