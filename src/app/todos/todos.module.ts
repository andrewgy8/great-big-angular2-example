import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SortablejsModule } from 'angular-sortablejs';
import { AsyncPipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { TodosPage } from './todos.page';
import { routing } from './todos.routing';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { UserSelectorComponent } from './user-selector/user-selector.component';

@NgModule({
  declarations: [
    TodoItemComponent,
    AddTodoFormComponent,
    UserSelectorComponent
  ],
  imports: [
    SharedModule,
    routing
  ],
  providers: [
  ]
})
export class TodosModule { }
