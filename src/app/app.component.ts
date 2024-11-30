import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
  <div class="p-4">
    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4 w-fit ">
      <label for="name">Name</label>
      <input id="name" formControlName="name" class="text-black" />
      @if(nameControl?.hasError('minlength')) {
        <p class="text-red-500">Name must be at least {{nameControl?.errors?.['minlength']?.requiredLength}} characters</p>
      }
      <button type="button" (click)="edit()" class="bg-blue-500 text-white p-2 rounded-md">Edit</button>
      <button type="button" (click)="reset()" class="bg-red-500 text-white p-2 rounded-md">Reset</button>
    </form>
  </div>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get nameControl(){
    return this.form.get('name');  
  }

  edit(){
    this.nameControl?.setValidators([Validators.minLength(5)])
    this.nameControl?.updateValueAndValidity()
  }
  reset(){
    this.nameControl?.setValidators([Validators.minLength(3)])
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
