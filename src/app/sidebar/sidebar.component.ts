import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { TaskEventService } from '../services/task-event-service/task-event-service.service';
//import { TaskEventService } from '../services/task-event-service/task-event-service.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private taskEventService: TaskEventService){}
  //tasks: Array<string> = [];

  /*addItem(newItem: string){
    console.log("got! " + newItem);
    this.tasks.push(newItem);
  }*/
}
