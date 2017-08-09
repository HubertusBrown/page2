import { Component, OnInit, Input } from '@angular/core';
import { TaskItem } from "app/tasks/task-item.model";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {

  @Input() task : TaskItem;
  @Input() groupId: number;
  
  constructor() { }

  ngOnInit() {
  }

}
