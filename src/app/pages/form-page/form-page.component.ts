import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseFormComponent } from '../../components/base-form/base-form.component';

@Component({
  selector: 'app-form-page',
  imports: [BaseFormComponent],
  template: `<div>
    <app-base-form>
    
    </app-base-form>
  </div>`,
  styleUrl: './form-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPageComponent {}
