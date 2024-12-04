import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [FormsModule],
  template: `
    <section class="h-full grid place-items-center">
      <div
        class="flex justify-center items-center flex-col gap-4 border border-transparent shadow-lg shadow-red-950/30 w-fit p-6 rounded-md bg-white/10 backdrop-blur-sm"
      >
        <h1 class="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Welcome to Angular Quiz
        </h1>

        <p class="mt-4 leading-relaxed text-white/90">
          Enter your name to start the quiz
        </p>

        <form
          class="space-y-4 w-full"
          #userForm="ngForm"
          (ngSubmit)="onSubmit()"
        >
          <div class="col-span-6 sm:col-span-3">
            <label
              for="username"
              class="block text-sm font-medium text-white/90 transition-transform group-focus-within:text-white"
            >
              Player Name
            </label>

            <input
              type="text"
              id="username"
              name="username"
              autocomplete="off"
              required
              minlength="3"
              maxlength="20"
              [(ngModel)]="form.username"
              class="mt-1 w-full rounded-md border-2 border-white/20 p-2.5 bg-white/10 
              backdrop-blur-sm text-sm text-white placeholder-white/50 
              transition-all duration-300 ease-in-out
              shadow-[0_0_0_0_rgba(255,255,255,0.1)]
              hover:border-white/30 hover:bg-white/15
              focus:border-white/40 focus:bg-white/20 focus:outline-none 
              focus:shadow-[0_0_20px_5px_rgba(255,255,255,0.1)]
              focus:placeholder-white/70"
            />
          </div>

          <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              [disabled]="userForm.invalid"
              class="inline-block w-full shrink-0 rounded-md border-2 border-white/20
              disabled:opacity-50 disabled:cursor-not-allowed
              bg-white/10 backdrop-blur-sm px-12 py-3 text-sm font-medium text-white 
              transition-all duration-300 ease-in-out
              shadow-[0_0_0_0_rgba(255,255,255,0.1)]
              hover:border-white/30 hover:bg-white/20 
              hover:shadow-[0_0_20px_5px_rgba(255,255,255,0.1)]
              focus:outline-none focus:border-white/40 
              active:scale-[0.98] active:bg-white/25"
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
  userService = inject(UserService);
  router = inject(Router);
  form = {
    username: '',
  };
  onSubmit() {
    this.userService.setUser({
      name: this.form.username,
    });
    this.router.navigate(['/quiz']);
  }
}
