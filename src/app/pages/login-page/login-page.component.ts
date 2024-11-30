import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  template: `
    <div class="space-y-4">
      <form [formGroup]="loginForm">
        <label for="username">Username</label>
        <input formControlName="username" type="email" placeholder="Email" />
        @if(loginForm.controls.username.hasError('email')) {
          <p class="text-red-500">Invalid email</p>
        }
        <label for="password">Password</label>
        <input formControlName="password" type="password" placeholder="Password" />
        @if(loginForm.controls.password.hasError('minlength')) {
          <p class="text-red-500">Password must be at least 12 characters long</p>
        }
      </form>
    </div>
  `,
  styleUrl: './login-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
    ]),
  });
}
