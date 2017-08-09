import { Injectable } from '@angular/core';
import { Group } from "app/shared/group";
import { LinkItem } from "app/links/link-item.model";
import { LinkGroup } from "app/links/link-group.model";
import { TaskGroup } from "app/tasks/task-group.model";
import { Item } from "app/shared/item";
import { TaskItem } from "app/tasks/task-item.model";

@Injectable()
export class GroupService {

  private groups: Group[];
  private lastId: number = 0;

  constructor() { this.groups = []; this.onInit(); }

  private onInit() {
    let group = this.addLinkGroup();
    group.setName('Recreation');
    group.addItem(new LinkItem('http://www.youtube.com', 'YouTube', 'http://www.youtube.com/favicon.ico'));
    group.addItem(new LinkItem('http://www.twitch.tv', 'Twitch', 'http://www.twitch.tv/favicon.ico'));

    let group2 = this.addLinkGroup();
    group2.addItem(new LinkItem('http://www.onet.pl', 'Onet', 'http://www.onet.pl/favicon.ico'));
    group2.setName('News');

    let taskGroup = this.addTaskGroup();
    taskGroup.setName("Task Group");
    taskGroup.addItem(new TaskItem("Task number 1"));

    let group3 = this.addLinkGroup();
    group3.addItem(new LinkItem('https://jira3.int.net.nokia.com/secure/RapidBoard.jspa?rapidView=3563&view=planning&selectedIssue=NPODEVF-697&epics=visible', 'Project Hub dev', 'http://jira3.int.net.nokia.com/favicon.ico'));
    group3.setName('JIRA');
  }

  removeItem(item: Item, groupId: number) {
    let groupIndex = this.getGroupIndex(groupId);
    let group = this.groups[groupIndex];


    group.setItems(group.getItems().filter(obj => obj !== item));

  }

  removeGroup(id: number): Group {
    let index = this.getGroupIndex(id);
    return this.groups.splice(index, 1)[0];
  }

  addLinkGroup(): LinkGroup {
    let group = new LinkGroup(this.lastId++);
    group.setName("New Link Group");
    this.groups.push(group);
    return group;
  }

  addTaskGroup(): TaskGroup {
    let group = new TaskGroup(this.lastId++);
    group.setName("New Task Group");
    this.groups.push(group);
    return group;
  }

  getGroups() {
    return this.groups;
  }

  getGroupIndex(id: number) {
    let foundIndex = null;
    let index = 0;
    this.groups.forEach(group => {
      if (group.getId() === id) {
        foundIndex = index;
      } else {
        index++;
      }
    });

    

    return foundIndex;
  }

  getGroupIndex2(group: Group) {
    let index = this.groups.findIndex(obj => obj === group);
    return index;
  }

  shiftLeft(id: number) {
    let index = this.getGroupIndex(id);
    if (index !== 0) {
      let groupToShift = this.removeGroup(id);
      this.groups.splice(index - 1, 0, groupToShift);
    }
  }

  shiftRight(id: number) {
    let index = this.getGroupIndex(id);
    if (index !== this.groups.length - 1) {
      let groupToShift = this.removeGroup(id);
      this.groups.splice(index + 1, 0, groupToShift);
    }
  }


}
