import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  Addtasks = [];

  constructor() {
    this.loadfromlocalstorage();
  }

  /* add tasks into a localStorage*/
  addTasks(task) {
    this.Addtasks.push(task)
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
}
