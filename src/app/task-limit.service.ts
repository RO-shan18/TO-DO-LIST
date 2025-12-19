import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskLimitService {

  /* Array for storing the limited task for a particular date */
  priority_limit = {};
 
  Initialpriority = {
    'easy': 0,
    'medium': 0,
    'hard': 0
  }

  constructor() {
    this.loadfromlocalstorage();
  }

  // Load from Local Storage for fetching
  loadfromlocalstorage() {
    const saved = localStorage.getItem('Priority_Limit');
    this.priority_limit = saved ? JSON.parse(saved) : {};
  }

  // Load to local storage while adding, updating & deleting 
  loadtoLocalstorage() {
    localStorage.setItem('Priority_Limit', JSON.stringify(this.priority_limit) || '{}');
  }

  /* add tasks priority for a particular date */
  addpriority(taskdate, priority) {
    let dates = Object.keys(this.priority_limit)

    if (this.isdatepresent(dates, taskdate)) {
      // Add in a existing object
      console.log(this.isdatepresent(dates, taskdate))
      let obj = this.priority_limit[taskdate];
      obj[priority]++;
    }
    else {
      // Add in a new date with
      if (priority === 'easy')
        this.priority_limit[taskdate] = { ...this.Initialpriority, easy: 1 }
      else if (priority === 'medium')
        this.priority_limit[taskdate] = { ...this.Initialpriority, medium: 1 }
      else
        this.priority_limit[taskdate] = { ...this.Initialpriority, hard: 1 }

    }
    // save to local Storage
    this.loadtoLocalstorage()
  }

  // Update into a local storage
  updatelimitPriority(prevtaskdate, currtaskdate, prevpriority, currpriority) {

  }

  // Deleting from Local Storage
  deletelimitPriority(taskdate, priority) {
    let date = this.priority_limit[taskdate];
    date[priority]--;

    this.loadtoLocalstorage();
  }


  /* Check if the date is new or not*/
  isdatepresent(dates, taskdate): boolean {
    for (let date of dates) {
      if (date == taskdate)
        return true;
    }

    return false;
  }

}
