import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LinkGroup } from "app/links/link-group.model";
import { NgForm } from "@angular/forms";
import { LinkService } from "app/links/link.service";
import { Observable } from "rxjs/Observable";
import { GroupService } from "app/shared/group.service";
import { LinkItem } from "app/links/link-item.model";

@Component({
  selector: 'app-link-panel',
  templateUrl: '../../shared/group-panel.template.html'  
})
export class LinkPanelComponent implements OnInit {

  @Input() group: LinkGroup;

  @ViewChild('f') form: NgForm;

  editMode = false;

  addingEnabled: boolean = false;
  addButtonText = "Add";
  editButtonText = "Edit";
  hover = false;
  groupName;
  

  constructor(private linkService: LinkService, private groupService: GroupService) { }

  ngOnInit() {
    this.groupName = this.group.getName()
   
  }

  onAdd() {
    this.addingEnabled = !this.addingEnabled;
    if (this.addingEnabled) {
      this.addButtonText = "Cancel";
    } else {
      this.addButtonText = "Add";
    }
  }

  onAddLink() {
    let link = new LinkItem(this.linkService.validateLinkUrl(this.form.value.url), this.form.value.name, this.linkService.resolveFavicon(this.form.value.url));
    this.group.addItem(link);
    this.onAdd();
  }

  onDeleteGroup() {
    this.groupService.removeGroup(this.group.getId());
  }

  onEdit() {
    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editButtonText = "Done Editing";
    } else {
      this.group.setName(this.groupName);
      this.addingEnabled = false;
      this.addButtonText = "Add";
      this.editButtonText = "Edit";
    }
  }

  onShiftLeft() {
    this.groupService.shiftLeft(this.group.getId());
  }

  onShiftRight() {
    this.groupService.shiftRight(this.group.getId());
  }

  isLink() {
    return true;
  }

  isTask() {
    return false;
  }

}
