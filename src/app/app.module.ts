import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LinkPanelComponent } from './links/link-panel/link-panel.component';
import { HeaderComponent } from './header/header.component';
import { LinkService } from "app/links/link.service";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { TaskPanelComponent } from './tasks/task-panel/task-panel.component';
import { TaskService } from "app/tasks/task.service";
import { GroupService } from "app/shared/group.service";
import { PanelAreaComponent } from "app/panel-area/panel-area.component";
import { LinkItemComponent } from './links/link-item/link-item.component';
import { AppRoutingModule } from "app/app-routing.module";
import { SettingsComponent } from './settings/settings/settings.component';
import { LinkItemEditComponent } from './links/link-item-edit/link-item-edit.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkPanelComponent,
    HeaderComponent,
    PanelAreaComponent,
    DropdownDirective,
    TaskPanelComponent,
    LinkItemComponent,
    SettingsComponent,
    LinkItemEditComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GroupService, LinkService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
