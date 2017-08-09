import { Group } from "app/shared/group";
import { Item } from "app/shared/item";
import { TaskItem } from "app/tasks/task-item.model";

export class TaskGroup implements Group {
    id: number;
    name: string;
    items: Item[];

    constructor(id: number) {
        this.id = id;
        this.items = [];
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    setItems(items: TaskItem[]) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    addItem(task: TaskItem) {
        this.items.push(task);
    }

    getItem(index: number): TaskItem {
        throw new Error('not implemented');
    }

    removeItem(index: number): TaskItem {
        // link
        throw new Error('not implemented');
        // return link
    }
}