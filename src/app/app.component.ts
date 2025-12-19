import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Just do it';

  /* Toast notification */
   constructor(private messageService: MessageService) { }

  showToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Task Added successfully!!!'
    });
  }
}
