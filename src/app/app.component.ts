import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TaskEventService } from './services/task-event-service/task-event-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private taskEventService: TaskEventService){}
  tasks: Array<string> = [];

  ngOnInit(){
    this.taskEventService.addTaskListener().subscribe(value => {
      if(value === ''){
        return;
      }
      console.log(value);
      this.tasks.push(value);
    })
  }
}
