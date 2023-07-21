import { Component } from '@angular/core';
import * as TasksAction from '../../task.actions';
import { Store, select } from '@ngrx/store';
import { Task } from '../../task.model';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state.interface';
import { errorSelector, isLoadingSelector, tasksSelector } from 'src/app/task.selectors';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  constructor(
    private store: Store<AppState>) {
    
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.tasks$ = this.store.pipe(select(tasksSelector));
    
  }

  ngOnInit(): void {
    this.store.dispatch(TasksAction.loadTasks());
    console.log(this.tasks$);
    
  }

  deleteTask(taskId: string): void {
    this.store.dispatch(TasksAction.deleteTask({ taskId: taskId }));
  }
}
