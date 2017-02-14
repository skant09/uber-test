import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuestionService } from '../../service/question/question.service';
import { Question } from '../../service/question/mock-question';


@Component({
  selector: 'app-jiffle-now',
  templateUrl: './jiffleNow.html',
  styleUrls: ['./jiffleNow.scss']
})

export class JiffleNowComponent implements OnInit {
  public selectedQuestion: Question;
  public submit: Boolean = false;
  //  = new Question('waiting for questions', ['', '', ''], 1, 1);

  @Input() questionCollection: Question[];
  //  = [this.selectedQuestion];
  constructor(private questionService: QuestionService) {
  }

  selectAnswer(value) {
    console.log(value);
    this.selectedQuestion.answerSubmitted = value;
    if (this.selectedQuestion.id === this.questionCollection.length) {
      return this.submit = true;
    }
    this.selectedQuestion = this.questionCollection[this.selectedQuestion.id++];
  }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(res => {
      console.log(res);
      this.questionCollection = res;
      this.selectedQuestion = this.questionCollection[0];
    });
  }
}
