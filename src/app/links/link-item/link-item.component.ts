import { Component, OnInit, Input } from '@angular/core';
import { LinkItem } from "app/links/link-item.model";
import { GroupService } from "app/shared/group.service";

@Component({
  selector: 'app-link-item',
  templateUrl: './link-item.component.html'
})
export class LinkItemComponent implements OnInit {

  @Input() link : LinkItem;
  @Input() groupId: number;

  editMode = false;

  constructor(private groupService: GroupService) { }

  ngOnInit() {
  }

  onFinishedEditing(event) {
    this.editMode = false;
  }

  onEdit() {
    this.editMode = true;
  }

  onDelete() {    
    this.groupService.removeItem(this.link, this.groupId);
  }

}
