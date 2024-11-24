import { Routes } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

export const routes: Routes = [
  { path: '', component: FormPageComponent },
  { path: 'tdf', component: TemplateDrivenFormComponent },
];
