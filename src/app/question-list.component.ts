import { Component } from "@angular/core";
import { QuestionItem } from "./question-item.component";
@Component({
    standalone:true,
    imports:[QuestionItem],
    selector: 'question-list',
    template:`
    <div>
        <question-item />
    </div>`,
    styles:``
})
export class QuestionList{

}