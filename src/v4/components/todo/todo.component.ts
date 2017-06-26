import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../../classes/TodoItem';

@Component({
  selector: 'todo-item',
  template: `
    <div class="row list-row">
        <i class="ion-ios-checkmark completed-check" *ngIf="todo.completed"></i>
        <span class="todo">{{ todo.title }}</span>
        <button type="button"
                class="btn btn-success action-btn ml-auto"
                (click)="check()"><i class="ion-ios-checkmark-empty"></i></button>
        <button type="button"
                class="btn btn-danger action-btn"
                (click)="delete()"><i class="ion-ios-trash-outline"></i></button>
    </div>
  `,
  styleUrls: ['../app/app.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

    @Input() todo: TodoItem;
    @Output() checked = new EventEmitter<boolean>();
    @Output() deleted = new EventEmitter<void>();

    ngOnInit() {
        console.log('Init Todo Component');
    }

    ngOnDestroy() {
        console.log('Todo Component destroyed.');
    }

    delete() {
        this.deleted.emit();
    }

    check() {
        this.todo.completed = !this.todo.completed;
        this.checked.emit(this.todo.completed);
    }
}
