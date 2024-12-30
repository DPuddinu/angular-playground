import { Component, inject } from '@angular/core';
import { CounterStore } from './features/counter.store';

@Component({
  selector: 'app-root',
  imports: [],
  providers: [CounterStore],
  template: `<div>{{ store.count() }}
<button (click)="store.increment()" class="px-4 py-2 bg-blue-500 text-white rounded-md">Increment</button></div>`,
})
export class AppComponent {
  readonly store = inject(CounterStore);
}
