import type { Item, User } from "./types";
import { ref } from 'vue';



export class ItemFamily {
    item: Item;
    childrens: Array<ItemFamily>;

    constructor(){
        this.item = null;
        this.childrens = new Array<ItemFamily>();
    }
}

export class UserManager {


    /**
     * getAllI
     */
     static getAllUsers(): User[] {
        let users : User[] = [];

        fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/users')
            .then(reponsehttp => reponsehttp.json())
            .then(reponseJSON => {
            users = reponseJSON["hydra:member"];
        });

        return users;
    } 


}


export class ItemManager {
    /**
     * Renvoie un item en le demandant à l'api.
     * Attention, temps de reception potentielement long
     * @param idItem L'identifiant de l'item à demander à l'api
     */
    public static getItemById(idItem: number){

    }

}