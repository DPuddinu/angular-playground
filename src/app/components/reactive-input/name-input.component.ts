import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupName,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-destination-input',
  imports: [ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
  template: `
    <label for="destination">destination</label>
    <input id="destination" type="text" formControlName="destination" />
  `,
  styleUrl: './name-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationInputComponent {
  parentContainer = inject(ControlContainer);

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl('destination', new FormControl(''));
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl('destination');
  }
}
