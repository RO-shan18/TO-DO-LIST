import { Component, OnInit } from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  show: boolean = false;
  Totaltasks : number = 0;

  constructor(private _totaltasks: AlltasksService) { }

  showform(value){
    this.show = value;
  }

}
