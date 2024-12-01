import { AuthService } from '@/app/services/auth.service';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  providers: [
    AuthService
  ],
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" class="flex flex-col gap-4 w-fit [&>label]:text-sm [&>label]:font-medium [&>label]:text-white" (ngSubmit)="login()">
      <label for="username">Username</label>
      <input formControlName="username" type="email" placeholder="Email" />
      @if(loginForm.controls.username.hasError('email')) {
      <p class="text-red-500">Invalid email</p>
      }
      <label for="password">Password</label>
      <input
        formControlName="password"
        type="password"
        placeholder="Password"
      />
      @if(loginForm.controls.password.hasError('minlength')) {
      <p class="text-red-500">Password must be at least 12 characters long</p>
      }
      <button class="bg-blue-500 text-white p-2 rounded-md">Login</button>
    </form>
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
  authService = inject(AuthService);
 
  login() {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.controls.username.value!,
        this.loginForm.controls.password.value!
      );
    }
  }
}
