import { Component } from "@angular/core";
import { QuestionItem } from "./question-item.component";
@Component({
  standalone: true,
  imports: [QuestionItem],
  selector: 'question-list',
  template: ` <div class="question-category">
    Category:
      <button class="blind75-button" (click)="handleBlind75Click()">
        Blind 75
      </button>
      <button class="neetcode-button" (click)="handleNeetcodeClick()">
        Neetcode 150
      </button>
    </div>
    <div class="question-panel">
        <div class="question-banner">{{banner}}</div>
      <question-item [questionCategory]="list" />
    </div>`,
  styles: ``,
})
export class QuestionList {
  list = 'blind75';
  banner='Blind 75'
  handleBlind75Click() {
    this.list = 'blind75';
    this.banner = 'Blind 75';
  }
  handleNeetcodeClick() {
    this.list = 'neetcode';
    this.banner = 'Neetcode 150';
  }
}