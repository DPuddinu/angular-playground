import { CommonModule } from '@angular/common';
import { Component, effect, inject, NgZone, OnDestroy, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuizService } from '../../services/quiz.service';
import { Difficulty, difficultyLevels } from '../../data/questions';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="max-w-2xl mx-auto p-6">
      <div class="mb-6">
        <h1 class="text-2xl font-bold mb-4">Angular Quiz</h1>

        <select
          #difficultySelect
          [value]="quizService.currentDifficulty"
          (input)="setDifficulty(difficultySelect.value)"
          class="border rounded p-2 mb-4"
        >
          @for (difficulty of levels; track difficulty) {
          <option [value]="difficulty">{{ difficulty }}</option>
          }
        </select>

        <div class="text-lg mb-2">Score: {{ quizService.currentScore() }}</div>
      </div>

      @if (quizService.currentQuestion(); as question) {
      <div class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-xl mb-4">{{ question.text }}</h2>
        <form [formGroup]="answerForm" class="space-y-4">
          @for (option of question.options; track option; let i = $index) {
          <div class="flex items-center">
            <input
              type="radio"
              [id]="'option' + i"
              [value]="i"
              formControlName="answer"
              class="mr-2"
            />
            <label [for]="'option' + i">{{ option }}</label>
          </div>
          }
        </form>

        <div class="mt-6 flex gap-4">
          <button
            (click)="submitAnswer()"
            [disabled]="!answerForm.valid"
            class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Submit Answer
          </button>
        </div>
      </div>
      } @if (showExplanation) {
      <div
        class="mt-4 p-4 rounded"
        [class.bg-green-100]="isCorrect"
        [class.bg-red-100]="!isCorrect"
      >
        <p>{{ quizService.currentQuestion().explanation }}</p>
        @if (showNextButton()) {
        <button
          (click)="nextQuestion()"
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Question
        </button>
        }
      </div>
      }
    </div>
  `,
})
export class QuizComponent {
  quizService = inject(QuizService);

  levels = difficultyLevels;

  answerForm = new FormGroup({
    answer: new FormControl<number | null>(null, [Validators.required]),
  });

  showExplanation = false;
  isCorrect = false;
  showNextButton = signal(false);

  setDifficulty(level: string) {
    this.quizService.setDifficulty(level as Difficulty);
  }

  submitAnswer() {
    const answer = Number(this.answerForm.get('answer')?.value);
    if (answer >= 0) {
      this.isCorrect = this.quizService.checkAnswer(answer);
      console.log(this.isCorrect);
      this.showExplanation = true;
      this.showNextButton.set(true);
    }
  }

  nextQuestion() {
    this.showExplanation = false;
    this.showNextButton.set(false);
    this.quizService.nextQuestion();
    this.answerForm.reset();
  }
} 