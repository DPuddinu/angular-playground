import { Injectable, signal, computed } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Question } from '../models/question.interface';
import { QUESTIONS } from '../data/questions';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  // RxJS implementation
  private currentQuestionIndexSubject = new BehaviorSubject<number>(0);
  private scoreSubject = new BehaviorSubject<number>(0);
  private selectedDifficultySubject = new BehaviorSubject<string>('beginner');

  currentQuestion$ = this.currentQuestionIndexSubject.pipe(
    map(index => QUESTIONS[index])
  );
  score$ = this.scoreSubject.asObservable();
  
  // Signals implementation
  private currentQuestionIndex = signal<number>(0);
  private score = signal<number>(0);
  private selectedDifficulty = signal<string>('beginner');

  currentQuestion = computed(() => QUESTIONS[this.currentQuestionIndex()]);
  currentScore = computed(() => this.score());

  filteredQuestions = computed(() => 
    QUESTIONS.filter(q => q.difficulty === this.selectedDifficulty())
  );

  setDifficulty(difficulty: string) {
    // RxJS
    this.selectedDifficultySubject.next(difficulty);
    // Signals
    this.selectedDifficulty.set(difficulty);
    this.resetQuiz();
  }

  checkAnswer(selectedAnswer: number): boolean {
    const correct = this.currentQuestion().correctAnswer === selectedAnswer;
    if (correct) {
      // RxJS
      this.scoreSubject.next(this.scoreSubject.value + 1);
      // Signals
      this.score.update(score => score + 1);
    }
    return correct;
  }

  nextQuestion() {
    // RxJS
    this.currentQuestionIndexSubject.next(this.currentQuestionIndexSubject.value + 1);
    // Signals
    this.currentQuestionIndex.update(index => index + 1);
  }

  resetQuiz() {
    // RxJS
    this.currentQuestionIndexSubject.next(0);
    this.scoreSubject.next(0);
    // Signals
    this.currentQuestionIndex.set(0);
    this.score.set(0);
  }
} 