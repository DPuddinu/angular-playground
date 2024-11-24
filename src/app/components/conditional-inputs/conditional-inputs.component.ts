import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-conditional-inputs',
  imports: [],
  template: `<p>conditional-inputs works!</p>`,
  styleUrl: './conditional-inputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionalInputsComponent { }
