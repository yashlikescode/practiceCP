import { Component, Input} from '@angular/core';
import blind75Data from './blind75.json';
import neetcodeData from './neetcode.json';

@Component({
  standalone: true,
  selector: 'question-item',
  template: `
    @if(questionCategory==='blind75'){ @for(question of blind75; track
    question){
    <div class="question-class">
      <span class="question-name">{{ question.qname }} </span>
      <span>
        <button class="question-copy">Copy Link</button
        ><a href="{{ question.link }}" target="_blank"
          ><button class="question-visit">Solve Question</button></a
        ></span
      >
    </div>
    } } @else if(questionCategory==='neetcode'){ @for(question of neetcode;
    track question){
    <div class="question-class">
      <span class="question-name">{{ question.qname }} </span>
      <span>
        <button class="question-copy">Copy Link</button
        ><a href="{{ question.link }}" target="_blank"
          ><button class="question-visit">Solve Question</button></a
        ></span
      >
    </div>
    } }
  `,
  styles: ``,
})
export class QuestionItem {
  @Input() questionCategory = '';
  // Assuming both blind75Data and neetcodeData are arrays of questions
  blind75 = blind75Data;
  neetcode = neetcodeData;

  // Take the union of both arrays
  combinedQuestions = [...this.blind75, ...this.neetcode];

  // Generate a random question from the combined array
  randomQuestion =
    this.combinedQuestions[
      Math.floor(Math.random() * this.combinedQuestions.length)
    ];
};
