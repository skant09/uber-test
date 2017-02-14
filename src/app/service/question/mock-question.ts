export class Question {
  constructor(
    public id: number,
    public text: string,
    public options: string[],
    public answer: number,
    public answerSubmitted: number
  ) { }
}
