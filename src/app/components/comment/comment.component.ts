import { User } from '@/app/models/user';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-comment',
  imports: [],
  template: `<p>comment works!</p>`,
  styleUrl: './comment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentComponent { 

  user = input.required<User>();
  
}
