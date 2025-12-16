import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Ialltasks } from '../alltasks.interface';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {
  
  /* add tasks*/
  constructor(private _tasks: AlltasksService, public updtask: AlltasksService) {}

  ngOnInit() {}

  closeform: boolean = false;
  updlength = Object.keys(this.updtask.updatetasks).length

  @Output() customevent: EventEmitter<boolean> = new EventEmitter<boolean>();

  closebtn() {
    this.customevent.emit(this.closeform);

    this.updtask.updatetasks = {}; //Empty a service object
  }

  /* tasks here */
  tasks: Ialltasks = {
    id: null,
    email: null,
    password: null,
    title: null,
    description: null,
    priority: null,
    category: null,
    date: null,
    isCompleted: false,
  }

  addtask(task: Ialltasks): void {
   this._tasks.addTasks({
      ...task,
      id: uuidv4(),
   })
    this.closebtn();
  }

  updatetask(task: Ialltasks): void {
    this._tasks.updatetask({
      ...task,
      email: this.updtask.updatetasks.email,
      password: this.updtask.updatetasks.password,
      id: this.updtask.updatetasks.id
    });

    this.updtask.updatetasks = {}; //Empty a service object
    this.closebtn();
  }

}
