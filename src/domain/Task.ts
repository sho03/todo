
export class Task {

  title: string;
  done: boolean;
  dueDate: Date;

  constructor(title: string, done: boolean = false, dueDate = new Date()) {
    this.title = title;
    this.done = done;
    this.dueDate = dueDate;
  }
}