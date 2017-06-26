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
    <div *ngFor="let item of todos; let i = index;">
      <todo-item [todo]="item"
                 (checked)="check(item, $event)"
                 (deleted)="delete(i)"></todo-item>
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

  check(todo: TodoItem, state: boolean) {
    console.log(`Todo ${todo.title} is ` + (state ? 'checked' : 'not checked'));
  }
}
