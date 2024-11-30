import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  imports: [],
  template: `<p>post-detail works!</p>`,
  styleUrl: './post-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailComponent { }
