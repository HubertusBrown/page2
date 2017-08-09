import { Item } from "app/shared/item";

export interface Group {
    id: number;
    name: string;
    items: any[];

    getId(): number;
    getItems(): Item[];
    setItems(items: Item[]);

}

