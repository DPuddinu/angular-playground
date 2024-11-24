import { Component, Input, input } from '@angular/core';
import { ControlContainer, FormsModule, NgForm, NgModel } from '@angular/forms';
import { Actor } from '../template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-template-driven-input',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }], 
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        [(ngModel)]="model.name"
        name="name"
      />
    </div>
  `,
  styleUrl: './template-driven-input.component.css',
})
export class TemplateDrivenInputComponent {
  @Input() model!: Actor;
}
