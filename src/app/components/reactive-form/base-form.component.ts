import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DestinationInputComponent } from '../reactive-input/name-input.component';
import { ConditionalInputsComponent } from '../conditional-inputs/conditional-inputs.component';

@Component({
  selector: 'app-base-form',
  imports: [
    ReactiveFormsModule,
    DestinationInputComponent,
    ConditionalInputsComponent
  ],
  template: `
    <form [formGroup]="flightForm" (ngSubmit)="onSubmit()">
      <div formGroupName="flightDetails">
        <label for="origin">Origin</label>
        <input id="origin" type="text" formControlName="origin" />
        <app-destination-input></app-destination-input>

        <div formGroupName="departure">
          <input type="datetime-local" formControlName="date" />
          <input type="datetime-local" formControlName="time" />
        </div>

        <div formGroupName="arrival">
          <input type="datetime-local" formControlName="date" />
          <input type="datetime-local" formControlName="time" />
        </div>
        <app-conditional-inputs></app-conditional-inputs>
      </div>
      <button type="submit">Book Flight</button>
    </form>
  `,
  styleUrl: './base-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseFormComponent {
  flightForm = new FormGroup({
    flightDetails: new FormGroup({
      origin: new FormControl('', Validators.required),
      departure: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required),
      }),
      arrival: new FormGroup({
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required),
      }),
    }),
  });

  onSubmit() {
    console.log(this.flightForm.value);
    // save the form data
  }
}
