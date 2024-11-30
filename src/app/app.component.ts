import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ValidationErrors {
  minlength: { requiredLength: number; actualLength: number };
  maxlength: { requiredLength: number; actualLength: number };
}

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" class="flex flex-col gap-4 w-fit">
      <label for="name">Name</label>
      <input formControlName="name" class="border rounded p-1" />
      @for(error of nameErrors; track error) {
        <div class="text-red-500">{{ error }}</div>
      }
      <label for="description">Description</label>
      <input formControlName="description" class="border rounded p-1" />
      @for(error of descriptionErrors; track error) {
        <div class="text-red-500">{{ error }}</div>
      }
    </form>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(3)]),
    description: new FormControl('', Validators.maxLength(10)),
  });

  private errorMessages: {
    [K in keyof ValidationErrors]: (error: ValidationErrors[K]) => string;
  } = {
    minlength: (error) => `Minimum length is ${error.requiredLength} characters`,
    maxlength: (error) => `Maximum length is ${error.requiredLength} characters`,
  };

  get nameErrors() {
    const errors = this.form.get('name')?.errors ?? {};
    return Object.entries(errors).map(([key, value]) => 
      this.errorMessages[key as keyof ValidationErrors]?.(value as ValidationErrors[keyof ValidationErrors]) ?? key
    );
  }

  get descriptionErrors() {
    const errors = this.form.get('description')?.errors ?? {};
    return Object.entries(errors).map(([key, value]) => 
      this.errorMessages[key as keyof ValidationErrors]?.(value as ValidationErrors[keyof ValidationErrors]) ?? key
    );
  }
}
