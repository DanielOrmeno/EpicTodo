import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  version: string;
  enableAdd: boolean;
  todos: TodoItem [];

  ngOnInit() {

      this.version = 'V2';
      this.enableAdd = false;
      this.todos = [
        new TodoItem('Daily Stand Up'),
        new TodoItem('Srpint Planning'),
        new TodoItem('Pick Lunch'),
        new TodoItem('Get checked for melanoma')
      ];
  }

  ngOnDestroy() {
      console.log('App Component destroyed.');
  }

  add(todoTitle: string) {
    this.todos.push(new TodoItem(todoTitle));
    this.enableAdd = false;
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }

  check(todo: TodoItem) {
    todo.completed = !todo.completed;
  }

}

export class TodoItem {
    title: string;
    completed: boolean;

    constructor(title: string) {
      this.completed = false;
      this.title = title;
    }
}
