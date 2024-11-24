import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TemplateDrivenInputComponent } from "../template-driven-input/template-driven-input.component";


export class Actor {
  constructor(
    public id: number,
    public name: string,
    public skill: string,
    public studio?: string
  ) {}
}

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, TemplateDrivenInputComponent, NgFor],
  template: `
    <form #actorForm="ngForm" (ngSubmit)="onSubmit()">
      <app-template-driven-input [model]="model"></app-template-driven-input>
      <div class="form-group">
        <label for="studio">Studio</label>
        <input
          type="text"
          class="form-control"
          id="studio"
          [(ngModel)]="model.studio"
          name="studio"
        />
      </div>
      <div class="form-group">
        <label for="skill">Skill</label>
        <select
          class="form-control"
          id="skill"
          required
          [(ngModel)]="model.skill"
          name="skill"
        >
          <option *ngFor="let skill of skills" [value]="skill">
            {{ skill }}
          </option>
        </select>
      </div>
      <button>submit</button>
    </form>
  `,
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');

  onSubmit() {
    console.log(this.model);
  }
}
