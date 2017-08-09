import { Item } from "app/shared/item";

export class LinkItem implements Item {

    constructor(private url: string, private name: string, private icon: string) { }

    getUrl(): string {
        return this.url;
    }
    
    setUrl(url: string) {
        this.url = url;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getIcon() {
        return this.icon;
    }
}