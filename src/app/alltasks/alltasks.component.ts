import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit{
  tasksarr = [];
  totaltasks: number;
  openpassword: boolean = false;

  constructor(private removetask: AlltasksService, private _alltasks: AlltasksService) { }

  ngOnInit() {
    this.tasksarr = this._alltasks.getalltask();
  }

  passwordpopup(value) {
    this.openpassword = value;
  }

  deletetask(index) {
    /* Find deleted task and delete it */
    let finddeletedtask = this._alltasks.Addtasks[index];
    this.removetask.removedtask(finddeletedtask.id)

    /* Get updated task */
    this.tasksarr = this._alltasks.getalltask();
  }

  /* Completed Tasks */
  completetask(index) {
     this._alltasks.completetask(index)
  }
}
