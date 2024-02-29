import { NgClass, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { TaskEventService } from '../services/task-event-service/task-event-service.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {

  constructor(private taskEventService: TaskEventService){}

  //@ViewChild('taskNameElement') taskNameElement!: ElementRef;
  //@Output() taskAddedEvent = new EventEmitter<string>();
  taskAdded:boolean = false;
  taskName:string = '';


  addTask(){
    if(this.taskName.trim() === ''){
      return;
    }
    this.taskAdded = true;
    //this.taskName=value;
    //this.taskAddedEvent.emit(value);
    this.taskEventService.emitCreatedTask(this.taskName);
  }
}
