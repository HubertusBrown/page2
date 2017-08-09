import { Component, OnInit } from '@angular/core';
import { LinkGroup } from "app/links/link-group.model";
import { GroupService } from "app/shared/group.service";
import { Group } from "app/shared/group";
import { TaskGroup } from "app/tasks/task-group.model";

@Component({
  selector: 'app-panel-area',
  templateUrl: './panel-area.component.html',

})
export class PanelAreaComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.groups = this.groupService.getGroups();
  }

  isLinkGroup(group) {
    return group instanceof LinkGroup;
  }

  isTaskGroup(group) {
    return group instanceof TaskGroup;
  }

}
