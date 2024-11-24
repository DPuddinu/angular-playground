import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination-input',
  imports: [ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
  template: `
    <label for="destination">destination</label>
    <input
      [formControl]="control"
      id="destination"
      type="text"
      formControlName="destination"
    />
  `,
  styleUrl: './name-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationInputComponent {
  @Input() control = new FormControl('');
}
