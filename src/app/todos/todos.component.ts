import { Component} from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  show: boolean = false;
  Totaltasks : number = 0;

  constructor(private _totaltasks: AlltasksService, public openform: AlltasksService) { }

  showform(value) {
    this.openform.opentaskpopup(value);
  }

}
