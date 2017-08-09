import { Component, OnInit, Input } from '@angular/core';
import { TaskGroup } from "app/tasks/task-group.model";

@Component({
  selector: 'app-task-panel',
  templateUrl: '../../shared/group-panel.template.html'
})
export class TaskPanelComponent implements OnInit {

  @Input() group: TaskGroup;

  editMode = false;

  addingEnabled: boolean = false;
  addButtonText = "Add";
  editButtonText = "Edit";
  hover = false;
  groupName;

  constructor() { }

  ngOnInit() {
  }

  isLink() {
    return false;
  }

  isTask() {
    return true;
  }

}
