import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ialltasks } from '../alltasks.interface';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {

  /* add tasks*/
  constructor(private _tasks: AlltasksService) { }

  ngOnInit() {}

  closeform: boolean = false;

  @Output() customevent: EventEmitter<boolean> = new EventEmitter<boolean>();

  closebtn() {
    this.customevent.emit(this.closeform)
  }

  /* tasks here */
  tasks: Ialltasks = {
    email: null,
    password: null,
    title: null,
    description: null,
    priority: null,
    category: null,
    date: null
  }

  addtask(task: Ialltasks) : void {
    this._tasks.addTasks(task)
    this.closebtn();
  }
}
