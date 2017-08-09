import { Item } from "app/shared/item";

export class TaskItem implements Item {

    constructor(private name: string) {}

    getName() {
        return this.name;
    }
}