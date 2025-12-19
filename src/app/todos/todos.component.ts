import { Component} from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  show: boolean = false;
  selectval: string = 'All';
  constructor(private _totaltasks: AlltasksService, public openform: AlltasksService, public selectfilter: AlltasksService) { }

  showform(value) {
    this.openform.opentaskpopup(value);
  }

  /* Total Tasks */
  gettotaltasks() {
    return this._totaltasks.getalltask().length;
  }

  /* Active Tasks */
  getActivetasks() {
    let activetask = this._totaltasks.getalltask().filter(task => !task.isCompleted);
    return activetask.length;
  }

  /* Completed Tasks */
  getCompletedtasks() {
    let activetask = this._totaltasks.getalltask().filter(task => task.isCompleted );
    return activetask.length;
  }

  /* */
  selecttab(tabvalue) {
    this.selectval = tabvalue;
    this.selectfilter.SelectedTasks(tabvalue);
  }

}
