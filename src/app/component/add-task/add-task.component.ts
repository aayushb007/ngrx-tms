import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { Store, select } from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import { AppState } from 'src/app/app.state.interface';
import { addTask } from 'src/app/task.actions';


const myId = uuid();

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  task!: Task[];
  constructor(private taskService: TaskService, private router: Router,private store: Store<AppState>) { }
  newForm!: FormGroup;
  userId!:string | null;
  user_id!:string;
  title!:string;
  desc!:string;
  due_date!:string;
  status!:string;
  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    let title = '';
    let desc = '';
    let user_id = '';
    let due_date;
    let status = '';


    this.newForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'desc': new FormControl(desc, Validators.required),
      'user_id': new FormControl(user_id,Validators.required),
      'due_date': new FormControl(due_date, Validators.required),
      'status': new FormControl(status, Validators.required)
    })
  }
  onSubmit() {
    this.userId = localStorage.getItem('id');
    const user = this.userId !== null ? this.userId : '';
    console.log(user);
    
    const newTask = {
     _id : myId,
     title : this.newForm.value['title'],
     user_id : this.newForm.value['user_id'],
      desc : this.newForm.value['desc'],
      due_date : this.newForm.value['due_date'],
      status : this.newForm.value['status']
    }
    console.log('task',newTask);
   
     this.store.dispatch(addTask({task : newTask}))
   
  }

}
