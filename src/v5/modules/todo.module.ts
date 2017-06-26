import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from '../components/list/list.component';
import { TodoComponent } from '../components/todo/todo.component';

@NgModule({
  declarations: [
    ListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ListComponent,
    TodoComponent
  ],
  providers: [],
})
export class TodoModule { }
