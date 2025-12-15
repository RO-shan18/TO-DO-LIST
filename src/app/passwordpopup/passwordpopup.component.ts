import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Ialltasks } from '../alltasks.interface';
import { AlltasksService } from '../alltasks.service';

@Component({
  selector: 'app-passwordpopup',
  templateUrl: './passwordpopup.component.html',
  styleUrls: ['./passwordpopup.component.css']
})
export class PasswordpopupComponent {
  Alltasks: [];

  constructor(private _alltasks: AlltasksService, private openform: AlltasksService, private updatetask: AlltasksService) { }

  ngOnInit() {
    this.Alltasks = this._alltasks.getalltask();
  }

  /* Password */
  Password: string = null;

  /* Send popup value */
  popupval: boolean = false;

  @Output() customevent: EventEmitter<boolean> = new EventEmitter<boolean>();

  raiseevent() {
    this.customevent.emit(this.popupval);
  }

  showpopup(value) {
    this.popupval = value;
  }

  /* Compare password */
  checkpassword(pass){
    if (this.findpassword(pass, this.Alltasks)) {
       /*close password popup*/
      this.raiseevent();

      /* open form for edit using services */
      this.openform.opentask = true;

      /* Put existing values inside the form */
      let findtask = this.Alltasks.find((task: Ialltasks) => task.password === pass)
      this.updatetask.updatetasks = findtask;  /* put a value inside the alltasks service variable */
    }
  }

  /* find and compare password */
  findpassword(Password : string, Tasks: any ):boolean{
    let findtask = Tasks.find((task) => task.password === Password);

    /* Put values object values */
    let values = Object.values(findtask);

    for (let pass of values) {
      if (pass === Password) return true;
    }

    return false;
  }
}
