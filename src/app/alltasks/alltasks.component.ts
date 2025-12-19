import {  OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AlltasksService } from '../alltasks.service';
import { TaskLimitService } from '../task-limit.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit{
  tasksarr = [];
  totaltasks: number;
  openpassword: boolean = false;

  constructor(private removetask: AlltasksService,
    public _alltasks: AlltasksService,
    private findpass: AlltasksService,
    private limit: TaskLimitService  ) { }

    ngOnInit(){
      this._alltasks.filteredTasks$.subscribe(tasks => {
        this.tasksarr = tasks;
      });

  }

  openpasspopup(open, id) {
    this.openpassword = open
    this._alltasks.selectedID = id
  }

  passwordpopup(value) {
    this.openpassword = value;
  }

  deletetask(task) {
     /* called removetask method */
     this.removetask.removedtask(task.id)

     /* Get updated task */
    this.tasksarr = this._alltasks.getalltask();

    /* Add Tasks to the alltasks services */
    let taskdate = task.date.toString()
    this.limit.deletelimitPriority(taskdate, task.priority)
  }

  /* Completed Tasks */
  completetask(index) {
     this._alltasks.completetask(index)
  }
}
