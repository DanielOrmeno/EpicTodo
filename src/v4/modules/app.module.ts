import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app/app.component';
import { ListComponent } from '../components/list/list.component';
import { TodoComponent } from '../components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
