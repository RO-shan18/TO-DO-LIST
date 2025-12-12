import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordpopup',
  templateUrl: './passwordpopup.component.html',
  styleUrls: ['./passwordpopup.component.css']
})
export class PasswordpopupComponent {

  password: string = null;

  checkpassword(pass) {
    console.log(pass);
  }
}
