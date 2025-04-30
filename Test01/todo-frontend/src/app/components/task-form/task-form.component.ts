import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  standalone: true
})
export class TaskFormComponent {
  task = {
    assigned_to: '',
    status: '',
    due_date: '',
    priority: '',
    comments: ''
  };

  onSubmit() {
    console.log('Task submitted:', this.task);
    // Add service call to save task to backend here
  }
}
