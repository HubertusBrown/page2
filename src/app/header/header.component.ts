import { Component, OnInit } from '@angular/core';
import { GroupService } from "app/shared/group.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'  
})
export class HeaderComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

  onNewLinkGroup() {
    this.groupService.addLinkGroup();
  }

    onNewTaskGroup() {
    this.groupService.addTaskGroup();
  }

}
