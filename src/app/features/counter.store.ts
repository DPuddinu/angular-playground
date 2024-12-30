import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { interval } from 'rxjs';

export const CounterStore = signalStore(
  { providedIn: 'root' },
  withState({ count: 0 }),
  withMethods((store) => ({
    increment(): void {
      patchState(store, (state) => ({ count: state.count + 1 }));
    },
  })),
  withHooks({
    onInit(store) {
      // 👇 Increment the `count` every 2 seconds.
      interval(2_000)
        // 👇 Automatically unsubscribe when the store is destroyed.
        .pipe(takeUntilDestroyed())
        .subscribe(() => store.increment());
    },
    onDestroy(store) {
      console.log('count on destroy', store.count());
    },
  })
);
