
import { Component, EventEmitter,  Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Ialltasks } from '../alltasks.interface';
import { AlltasksService } from '../alltasks.service';
import { TaskLimitService } from '../task-limit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css'],
})
export class AddtasksComponent  {
  

  /* add tasks*/
  constructor(private _tasks: AlltasksService,
    public updtask: AlltasksService,
    private priority: TaskLimitService,
    private toastr: ToastrService) { }

  success() {
    this.toastr.success('Task Added successfully', 'Success');
  }

  closeform: boolean = false;
  updlength = Object.keys(this.updtask.updatetasks).length

  @Output() customevent: EventEmitter<boolean> = new EventEmitter<boolean>();

  closebtn() {
    this.customevent.emit(this.closeform);

    this.updtask.updatetasks = {}; //Empty a service object
  }

  /* tasks here */
  tasks: Ialltasks = {
    id: null,
    email: null,
    password: null,
    title: this.updlength ? this.updtask.updatetasks.title : null,
    description: this.updlength ? this.updtask.updatetasks.description : null,
    priority: this.updlength ? this.updtask.updatetasks.priority : null,
    category: this.updlength ? this.updtask.updatetasks.category : null,
    date: this.updlength ? this.updtask.updatetasks.date : null,
    isCompleted: false,
  }

  /* Add Tasks to the alltasks services */
  addtask(task: Ialltasks): void {
    let taskdate = task.date.toString()
    let date = this.priority.priority_limit[taskdate]

    if (date && (date['hard'] === 1 && task.priority === 'hard') ||  date[task.priority] === 2 ) {
      alert(`Can't add more than ${task.priority === 'hard' ? '1 hard' : `2 ${task.priority}`} task`)
    }
    else {
      /* Add that task is priority is less than the given limit */
      this._tasks.Addtasks.length > 0 ? this._tasks.addTasks({
        ...task,
        id: uuidv4(),
        email: this.updtask.storedemailpassword().email,
        password: this.updtask.storedemailpassword().password
      }) :
        this._tasks.addTasks({
          ...task,
          id: uuidv4(),
        })

      /* Add Priority limits to the task-limit services */
      this.priority.addpriority(task.date, task.priority)
      this.closebtn();
    }

    this.success();
  }

  /* Update task to all alltasks services */
  updatetask(task: Ialltasks): void {
    let taskdate = task.date.toString()
    let date = this.priority.priority_limit[taskdate]

    if (date && (date['hard'] === 1 && task.priority === 'hard') || date[task.priority] === 2) {
      alert(`Can't add more than ${task.priority === 'hard' ? '1 hard' : `2 ${task.priority}`} task`)
    }
    else {
      this._tasks.updatetask({
        ...task,
        email: this.updtask.updatetasks.email,
        password: this.updtask.updatetasks.password,
        id: this.updtask.updatetasks.id
      });

      /* updating limit */
      this.priority.updatelimitPriority(this.updtask.updatetasks.date,
        task.date,
        this.updtask.updatetasks.priority,
        task.priority,
      )

      this.updtask.updatetasks = {}; //Empty a service object
      this.closebtn();
    }

  }

}
