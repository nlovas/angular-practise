import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// for components to emit or listen for a created task
// or other task related events
// (avoids creating a chain of event binding to grandparent)
export class TaskEventService {

  private taskAddedEvent = new BehaviorSubject<string>('');

  constructor() { }

  emitCreatedTask(task: string){
    this.taskAddedEvent.next(task);
  }

  addTaskListener(){
    return this.taskAddedEvent.asObservable();
  }
}
