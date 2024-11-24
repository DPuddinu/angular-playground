import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupName,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type City = 'rome' | 'paris' | 'newYork';
@Component({
  selector: 'app-conditional-inputs',
  imports: [ReactiveFormsModule],
  standalone: true,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupName }],
  template: `
    <fieldset formGroupName="route">
      <label for="departure">destination</label>
      <select
        id="departure"
        name="departure"
        formControlName="departure"
        (change)="onSelectCity($event)"
      >
        @for (city of cities; track city) {
        <option value="{{ city }}">{{ city }}</option>
        } @empty {
        <li>There are no cities.</li>
        }
      </select>

      <label for="arrival">arrival</label>
      <select id="arrivals" name="arrival" formControlName="arrival">
        @for (departure of departures[selectedCity]; track departure) {
        <option value="{{ departure }}">{{ departure }}</option>
        } @empty {
        <li>There are no cities.</li>
        }
      </select>
    </fieldset>
  `,
  styleUrl: './conditional-inputs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionalInputsComponent {
  cities = ['rome', 'paris', 'newYork'] as const;
  selectedCity: City = 'rome';

  parentContainer = inject(ControlContainer);
  departures: Record<City, string[]> = {
    rome: ['milan', 'naples'],
    paris: ['toulouse', 'marseille'],
    newYork: ['dubai', 'new jersey'],
  };

  onSelectCity(event: Event) {
    const selected = (event.target as HTMLSelectElement).value as City;
    this.selectedCity = selected;
    this.parentFormGroup.get('route.arrival')?.reset();
  }
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit() {
    this.parentFormGroup.addControl(
      'route',
      new FormGroup({
        departure: new FormControl('', Validators.required),
        arrival: new FormControl('', Validators.required),
      })
    );
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl('route');
  }
}
