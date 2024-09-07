import { Component} from '@angular/core';
import blind75Data from './blind75.json';
import neetcodeData from './neetcode.json';
@Component({
  standalone: true,
  selector: 'RandomQuestion',
  template: `
    <div class="random-question">
      Question of the day:<br />
      <div class="question-class">
        <span class="question-name">{{ randomQuestion.qname }} </span>
        <span>
          <button class="question-copy">Copy Link</button
          ><a href="{{ randomQuestion.link }}" target="_blank"
            ><button class="question-visit">Solve Question</button></a
          >
          <button class="random-generate" (click)="generateRandom()">
            Generate New
          </button>
        </span>
      </div>
    </div>
  `,
  styles: `
`,
})
export class RandomQuestion {
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

  generateRandom() {
    this.randomQuestion =
      this.combinedQuestions[
        Math.floor(Math.random() * this.combinedQuestions.length)
      ];
  }
}
