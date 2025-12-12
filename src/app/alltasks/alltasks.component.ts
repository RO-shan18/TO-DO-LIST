import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  tasksarr = [];

  constructor(private _alltasks: AlltasksService) {}

  ngOnInit() {
    this.tasksarr = this._alltasks.getalltask();
  }

}
