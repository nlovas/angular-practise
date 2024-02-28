import { NgClass } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.css'
})
export class SidebarItemComponent {

  @ViewChild('taskName') taskName!: ElementRef;
  taskAdded = false;

  addTask(){
    console.log(this.taskName.nativeElement.value);
    this.taskAdded = true;
  }
}
