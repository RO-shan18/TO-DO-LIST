import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  searchvalue: string;

  constructor(public alltasks: AlltasksService) { }

  onSearch(value) {
    this.alltasks.searchtasks(value);
  }
}
