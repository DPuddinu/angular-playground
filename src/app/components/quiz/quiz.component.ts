import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Difficulty, difficultyLevels } from '../../data/questions';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="h-full grid place-items-center">
      <div class="max-w-2xl mx-auto p-6">
        <div class="mb-6">
          <select
            #difficultySelect
            [value]="quizService.currentDifficulty"
            (input)="setDifficulty(difficultySelect.value)"
            class="border-2 border-white/20 rounded-md p-2.5 mb-4 bg-white/10 
            backdrop-blur-sm text-white placeholder-white/50
            hover:border-white/30 hover:bg-white/15
            focus:border-white/40 focus:bg-white/20 focus:outline-none"
          >
            @for (difficulty of levels; track difficulty) {
            <option [value]="difficulty" class="bg-gray-800">
              {{ difficulty | titlecase }}
            </option>
            }
          </select>

          <div class="text-lg mb-2 text-white/90">
            Score: {{ quizService.currentScore() }}
          </div>
        </div>

        @if (quizService.currentQuestion(); as question) {
        <div
          class="border border-transparent shadow-lg shadow-red-950/30 rounded-lg p-6 bg-white/10 backdrop-blur-sm"
        >
          <h2 class="text-xl mb-4 text-white">{{ question.text }}</h2>
          <form [formGroup]="answerForm" class="space-y-4">
            @for (option of randomizedOptions(); track option; let i = $index) {
            <div class="flex items-center">
              <input
                type="radio"
                [id]="'option' + i"
                [value]="i"
                formControlName="answer"
                class="mr-2"
              />
              <label [for]="'option' + i" class="text-white/90">{{
                option
              }}</label>
            </div>
            }
          </form>

          <div class="mt-6 flex gap-4">
            <button
              (click)="submitAnswer()"
              [disabled]="!answerForm.valid"
              class="inline-block shrink-0 rounded-md border-2 border-white/20
                disabled:opacity-50 disabled:cursor-not-allowed
                bg-white/10 backdrop-blur-sm px-12 py-3 text-sm font-medium text-white 
                transition-all duration-300 ease-in-out
                shadow-[0_0_0_0_rgba(255,255,255,0.1)]
                hover:border-white/30 hover:bg-white/20 
                hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.1)]
                focus:outline-none focus:border-white/40 
                active:scale-[0.98] active:bg-white/25"
            >
              Submit Answer
            </button>
          </div>
        </div>
        } @if (showExplanation) {
        <div
          class="mt-4 p-4 rounded-md border-2 backdrop-blur-sm"
          [ngClass]="{
              'bg-green-500/10 border-green-500/20': isCorrect,
              'bg-red-500/10 border-red-500/20': !isCorrect,
            }"
        >
          <p class="text-white/90">
            {{ quizService.currentQuestion().explanation }}
          </p>
          @if (showNextButton()) {
          <button
            (click)="nextQuestion()"
            class="mt-4 inline-block shrink-0 rounded-md border-2 border-white/20
                bg-white/10 backdrop-blur-sm px-12 py-3 text-sm font-medium text-white 
                transition-all duration-300 ease-in-out
                shadow-[0_0_0_0_rgba(255,255,255,0.1)]
                hover:border-white/30 hover:bg-white/20 
                hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.1)]
                focus:outline-none focus:border-white/40 
                active:scale-[0.98] active:bg-white/25"
          >
            Next Question
          </button>
          }
        </div>
        }
      </div>
    </section>
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

  private originalIndices: number[] = [];
  randomizedOptions = signal<string[]>([]);

  setDifficulty(level: string) {
    this.quizService.setDifficulty(level as Difficulty);
  }

  private randomizeOptions() {
    const currentQuestion = this.quizService.currentQuestion();
    if (!currentQuestion) return;

    // Create array of indices and options
    this.originalIndices = currentQuestion.options.map((_, i) => i);
    const optionsWithIndices = currentQuestion.options.map((opt, i) => ({
      opt,
      i,
    }));

    // Shuffle the array
    for (let i = optionsWithIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsWithIndices[i], optionsWithIndices[j]] = [
        optionsWithIndices[j],
        optionsWithIndices[i],
      ];
    }

    // Update the tracking arrays
    this.originalIndices = optionsWithIndices.map((item) => item.i);
    this.randomizedOptions.set(optionsWithIndices.map((item) => item.opt));
  }

  submitAnswer() {
    const selectedRandomIndex = Number(this.answerForm.get('answer')?.value);
    if (selectedRandomIndex >= 0) {
      // Convert randomized index back to original index
      const originalIndex = this.originalIndices[selectedRandomIndex];
      this.isCorrect = this.quizService.checkAnswer(originalIndex);
      this.showExplanation = true;
      this.showNextButton.set(true);
    }
  }

  nextQuestion() {
    this.showExplanation = false;
    this.showNextButton.set(false);
    this.quizService.nextQuestion();
    this.answerForm.reset();
    this.randomizeOptions();
  }

  constructor() {
    this.randomizeOptions();
  }
} 