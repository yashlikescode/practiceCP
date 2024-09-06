import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionList } from './question-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,QuestionList],
  template: `<question-list />`,
  styleUrl: './app.component.css'
})
export class AppComponent {
}
