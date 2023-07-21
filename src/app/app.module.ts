import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TaskEffects } from './task.effect';
import { taskReducer } from './task.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TaskListComponent } from './component/task-list/task-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(taskReducer),
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
    EffectsModule.forRoot([TaskEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
