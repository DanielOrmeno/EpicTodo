import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoItem } from '../../classes/TodoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  version: string;
  list: TodoItem[];

  ngOnInit() {
      this.version = 'V3';
      this.list = [
        new TodoItem('Daily Stand Up'),
        new TodoItem('Srpint Planning'),
        new TodoItem('Pick Lunch'),
        new TodoItem('Get checked for melanoma')
      ];
  }

  ngOnDestroy() {
      console.log('App Component destroyed.');
  }
}
