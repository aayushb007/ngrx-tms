import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { TaskListComponent } from './component/task-list/task-list.component';

const routes: Routes = [
  {path:'new',component: AddTaskComponent},
  {path:'tasks',component: TaskListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
