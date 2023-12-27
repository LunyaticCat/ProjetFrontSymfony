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

// export type ItemsOrderedV1 ={
// [x: string]: {};
//     item: Item;
//     childrens: ItemsOrdered;
// }|null;


export class ItemsOrdered{
    item: Item;
    childrens: Array<ItemsOrdered>; //TODO : Vérifier si cette variable ne devrait pas etre ancestor

    constructor(){
        this.item = null;
        this.childrens = new Array<ItemsOrdered>();
    }
}
/**
 * Réactiver si soltion pour extend number trouvée
 * export interface Id extends number{ 
 * }
 * */

//TODO : trouver comment fonctionnent les enum
