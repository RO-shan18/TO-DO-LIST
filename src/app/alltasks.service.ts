import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  Addtasks = [];
  opentask: boolean = false;
  updatetasks = {};

  constructor() {
    this.loadfromlocalstorage();
  }

  /* add tasks into a localStorage*/
  addTasks(task) {
    this.Addtasks.unshift(task)
    this.loadtoLocalstorage();
  }

  /* update task into a localStorage*/
  updatetask(updtask) {
    this.Addtasks.forEach((task) => {
      if (task.id === updtask.id) {
        Object.assign(task, updtask);
      }
    })

    this.loadtoLocalstorage();
  }

  /* get all tasks */
  getalltask(): any {
    return this.Addtasks;
  }

  loadtoLocalstorage() {
    localStorage.setItem('Tasks', JSON.stringify(this.Addtasks));
  }

  loadfromlocalstorage() {
    const saved = localStorage.getItem('Tasks');
    this.Addtasks = saved ? JSON.parse(saved) : [];
  }

  /* open task popup*/
  opentaskpopup(value) {
    return this.opentask = value;
  }
}
