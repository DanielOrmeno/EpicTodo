import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TodoItem } from '../../classes/TodoItem';

@Component({
  selector: 'todo-list',
  template: `
    <div class="row header-row">
        Epic TODO
        <button type="button" class="btn btn-header ml-auto" (click)="enableAdd=!enableAdd"><i class="ion-ios-plus-empty"></i></button>
    </div>
    <div class="row list-row" *ngIf="enableAdd">
        <input type="text" class="form-control" placeholder="what's up next?" #addTodo (keyup.enter)="add(addTodo.value)">
    </div>
    <div class="row list-row" *ngFor="let item of todos; let i = index;">
        <i class="ion-ios-checkmark completed-check" *ngIf="item.completed"></i>
        <span class="todo">{{ item.title }}</span>
        <button type="button"
            class="btn btn-success action-btn ml-auto"
            (click)="check(item)"><i class="ion-ios-checkmark-empty"></i></button>
        <button type="button"
            class="btn btn-danger action-btn"
            (click)="delete(i)"><i class="ion-ios-trash-outline"></i></button>
    </div>
  `,
  styleUrls: ['../app/app.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  version: string;
  enableAdd: boolean;

  @Input()
  todos: TodoItem [];

  ngOnInit() {
      this.enableAdd = false;
  }

  ngOnDestroy() {
      console.log('List Component destroyed.');
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
