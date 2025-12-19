import { Injectable } from '@angular/core';
import { Ialltasks } from './alltasks.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlltasksService {
  Addtasks = [];
  opentask: boolean = false;
  selectedtabvalue: string = 'All';
  updatetasks: any = {};
  selectedID: string;
  enteredpass: string;

  /* Behavior Subject to emit the changes */
  private filteredTasksSubject = new BehaviorSubject<Ialltasks[]>([]);
  filteredTasks$ = this.filteredTasksSubject.asObservable();

  constructor() {
    this.loadfromlocalstorage();
    this.filteredTasksSubject.next([...this.getalltask()]);
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


  loadfromlocalstorage() {
    const saved = localStorage.getItem('Tasks');
    this.Addtasks = saved ? JSON.parse(saved) : []
    this.filteredTasksSubject.next([...this.getalltask()]);
  }

  loadtoLocalstorage(){
    localStorage.setItem('Tasks', JSON.stringify(this.getalltask()) || '[]');
    this.filteredTasksSubject.next([...this.getalltask()]);
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
    completetask.isCompleted = !completetask.isCompleted;
    this.loadtoLocalstorage();
  }

  /* Filter by searchvalue */
  searchtasks(searchvalue :string): void {
    let value = searchvalue.toLowerCase().trim();

    let filteredtasks = [...this.getalltask()];

    filteredtasks =  filteredtasks.filter(task => {
     return (
       task.title.toLowerCase().includes(value) ||
       task.category.toLowerCase().includes(value) ||
       task.description.toLowerCase().includes(value) ||
       task.priority.toLowerCase().includes(value)
      )
    })

    this.filteredTasksSubject.next(filteredtasks);
  }

  /*Task based on tab clicked*/
  SelectedTasks(selectedval) {
    let filtertasks = [...this.getalltask()];

    this.selectedtabvalue = selectedval;

    if (selectedval === 'Active') {
      filtertasks = filtertasks.filter(task => !task.isCompleted);
    }
    else if (selectedval === 'Completed') {
      filtertasks = filtertasks.filter(task => task.isCompleted);
    }

    this.filteredTasksSubject.next(filtertasks);
  }
  /* find and compare password */
  findpassword(pass): boolean {
    if (this.storedemailpassword().password === pass)
      return true;

    return false;
  }

  storedemailpassword(){
    const email = this.Addtasks[0].email
    const password = this.Addtasks[0].password

    return { email, password, };
  }
}
