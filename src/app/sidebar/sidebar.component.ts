import { Component, Input } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
//import { TaskEventService } from '../services/task-event-service/task-event-service.service';
import { NgFor } from '@angular/common';
import { Task } from '../task';
//import { TaskEventService } from '../services/task-event-service/task-event-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemComponent, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 // constructor(private taskEventService: TaskEventService){}
  @Input() tasks = [];
  //tasks:Array<Object> = new Array<Object>(); // will add more attributes to it later

  trackByFn (task:any) {
    return task.id;
  }

  /*ngOnInit(){
    this.taskEventService.addTaskListener().subscribe(value => {
      if(value === ''){
        return;
      }
      this.tasks.push(value);
    })
  } */
}
