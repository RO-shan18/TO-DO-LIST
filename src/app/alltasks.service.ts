import { Injectable } from '@angular/core';
import { Ialltasks } from './alltasks.interface';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  Addtasks = [];
  opentask: boolean = false;
  updatetasks: any = {};

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
    let findtask = this.Addtasks.find((task) => task.id === updtask.id);

    if (findtask) {
      Object.assign(findtask, updtask);
    }

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

  /* remove from localstorage */
  removedtask(id) {
    /* removed an object based on id using filter */
    this.Addtasks = this.Addtasks.filter(task => task.id !== id);
    this.loadtoLocalstorage();
  }

  /* complete task */
  completetask(index) {
    let completetask = this.Addtasks[index]
    completetask.isCompleted = true;

    this.loadtoLocalstorage();
  }

  /* Filter by searchvalue */
  searchtasks(searchvalue :string): any[] {
    let value = searchvalue.toLowerCase().trim();

    let filteredtasks = [...this.getalltask()];

    return filteredtasks = filteredtasks.filter((task) => {
      task.title.toLowerCase().includes(value) ||
        task.category.toLowerCase().includes(value) ||
        task.description.toLowerCase().includes(value) ||
        task.priority.toLowerCase().includes(value)
    })
  }

  /*Task based on tab clicked*/
  SelectedTasks(selectedval) {
    let filtertasks = [...this.getalltask()];

    if (selectedval === 'Active') {
      filtertasks = filtertasks.filter(task => !task.isCompleted);
    }
    else if (selectedval === 'Completed') {
      filtertasks = filtertasks.filter(task => task.isCompleted);
    }

    return filtertasks;
  }
}
