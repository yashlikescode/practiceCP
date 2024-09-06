import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'question-item',
  template: `
  @for(question of blind75; track question){
    <div class="question-class">
      <span class="question-name">{{question.qname}} </span>
      <span class="question-link">{{question.link}}</span>
    </div>
  }
  `,
  styles: `
    li {
      color: red;
      font-weight: 300;
    }
  `,
})
export class QuestionItem {
  blind75 = [
      {'qname': 'Two Sum',
      'link': 'https://leetcode.com/problems/two-sum/description/'},
      {'qname': 'Best Time',
      'link': 'https://leetcode.com/problems/two-sum/description/'},
      {'qname': 'Contains Duplicate',
      'link': 'https://leetcode.com/problems/two-sum/description/'},
      {'qname': 'Product of Array',
      'link': 'https://leetcode.com/problems/two-sum/description/'},
      {'qname': 'Maximum Sub-Array',
      'link': 'https://leetcode.com/problems/two-sum/description/'},
  ];
};
