import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionList } from './question-list.component';
import { RandomQuestion } from "./random-question.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionList, RandomQuestion],
  template: `<RandomQuestion /><question-list />`,
  styles: ``,
})
export class AppComponent {}
