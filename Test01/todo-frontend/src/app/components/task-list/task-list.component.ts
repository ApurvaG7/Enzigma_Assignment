import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  standalone: true
})
export class TaskListComponent {
  tasks = [
    { id: 1, assigned_to: 'Alice', status: 'Pending', due_date: '2025-05-01', priority: 'High', comments: 'Finish soon' },
    { id: 2, assigned_to: 'Bob', status: 'Completed', due_date: '2025-05-02', priority: 'Medium', comments: 'All done' }
  ];

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(`Deleted task with id ${id}`);
    // Add backend call to delete from DB
  }
}
