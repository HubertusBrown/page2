import { LinkItem } from "app/links/link-item.model";
import { Group } from "app/shared/group";

export class LinkGroup implements Group {
    id: number;
    name: string;
    items: LinkItem[];

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

    setItems(items: LinkItem[]) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }


    addItem(link: LinkItem) {
        this.items.push(link);
    }

    getItem(index: number): LinkItem {
        throw new Error('not implemented');
    }

    removeItem(index: number): LinkItem {
        // link
        throw new Error('not implemented');
        // return link
    }
}