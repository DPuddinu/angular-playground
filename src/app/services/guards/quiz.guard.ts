import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';
import { inject } from '@angular/core';

export const quizGuard: CanActivateFn = () => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (!userService.getUser()) {
    router.navigate(['/user-info']);
    return false;
  }
  
  return true;
};
