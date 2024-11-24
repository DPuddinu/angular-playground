import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { DestinationInputComponent } from "../name-input/name-input.component";

@Component({
  selector: 'app-base-form',
  imports: [ReactiveFormsModule, DestinationInputComponent],
  template: `
    <form [formGroup]="flightForm" (ngSubmit)="onSubmit()">
      <div formGroupName="flightDetails">
        <label for="origin">Origin</label>
        <input id="origin" type="text" formControlName="origin" />
        <app-destination-input
          [control]="destinationControl"
        ></app-destination-input>

        <div formGroupName="departure">
          <input type="datetime-local" formControlName="date" />
          <input type="datetime-local" formControlName="time" />
        </div>

        <div formGroupName="arrival">
          <input type="datetime-local" formControlName="date" />
          <input type="datetime-local" formControlName="time" />
        </div>
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
      origin: new FormControl(['', Validators.required]),
      destination: new FormControl(['', Validators.required]),
      departure: new FormGroup({
        date: new FormControl(['', Validators.required]),
        time: new FormControl(['', Validators.required]),
      }),
      arrival: new FormGroup({
        date: new FormControl(['', Validators.required]),
        time: new FormControl(['', Validators.required]),
      }),
    }),
    // passengers: new FormGroup({
    //   count: new FormControl(''),
    //   details: new FormArray([
    //     new FormGroup({
    //       firstName: new FormControl(''),
    //       lastName: new FormControl(''),
    //       dateOfBirth: new FormControl(''),
    //     }),
    //   ]),
    // }),
  });

  get destinationGroup() {
    return this.flightForm.get('flightDetails') as FormGroup;
  }
  get destinationControl() {
    return this.flightForm.get('flightDetails.destination') as FormControl;
  }
  // get passengers() {
  //   return this.flightForm.get('passengers.details') as FormArray;
  // }

  onSubmit() {
    console.log(this.flightForm.getRawValue());
    // save the form data
  }
}
