import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { LinkItem } from "app/links/link-item.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-link-item-edit',
  templateUrl: './link-item-edit.component.html'
})
export class LinkItemEditComponent implements OnInit {

  @Input() link: LinkItem;
  @ViewChild('f') form: NgForm;
  @Output() finishedEditing : EventEmitter<any> = new EventEmitter();

  submitButtonText = "Update Link";
  
  constructor() {}

  ngOnInit() {
  }

  onSubmit() {    
    this.link.setUrl(this.form.value.url);
    this.link.setName(this.form.value.name);
    this.finishedEditing.emit();
  }

}
