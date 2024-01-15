export type Item = {
    idItem: number;
    nameItem: string;
} | null;

export interface User {
    login: string;
    email: string;
    pictureUrl: string;
}


export interface ItemGroup{
    idGroup: number;
    idCraft: number;
}

export interface Craft{
    idCraft: number;
    idResult: number;
}

export interface GroupFragment{
    idGroup: number;
    idItem: number;
}

export class ItemFamily {
    item: Item;
    childrens: Array<ItemFamily>;

    constructor(){
        this.item = null;
        this.childrens = new Array<ItemFamily>();
    }
}