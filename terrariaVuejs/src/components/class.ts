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

/**
 * Gère les appels à l'API pour les utilisateurs
 */
export class UserManager {



    /**
     * Demande à l'API la liste des utilisateurs
     * Attention, prévoir la latence de l'appel
     * @returns Une liste contenant tous les utilisateurs de l'API
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

    /**
     * 
     * @param id l'identifiant de l'utilisateur en base de donnée
     * @returns Un utilisateur
     */
    static getUsersById(idUser: number): User {
        let user : User = {
            idUser: 1,
            login:"Gaston Lagafe",
            email: "email@bg.fr",
            pictureUrl: "../assets/tiny.png"
        };

        fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/user/'+idUser)
            .then(reponsehttp => reponsehttp.json())
            .then(reponseJSON => {
                user = reponseJSON["hydra:member"];
        });

        return user;
    } 


}


export class ItemManager {


   /**
     * Demande à l'API la liste des items
     * Attention, prévoir la latence de l'appel
     * @returns Une liste contenant tous les utilisateurs de l'API
     */
   static getAllItems(): Item[] {
    let items : Item[] = [];

    fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/items')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
            items = reponseJSON["hydra:member"];
    });

    return items;
} 

    /**
     * Demande à l'API un item par son identifiant en bd
     * Attention, prévoir la latence de l'appel
     * @param idItem L'identifiant de l'item à demander à l'api
     */
    public static getItemById(idItem: number): Item{
        let item : Item = {
            idItem : 1,
            nameItem : "The One Ring"
        };
    
            fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/item/'+idItem)
                .then(reponsehttp => reponsehttp.json())
                .then(reponseJSON => {
                    item = reponseJSON["hydra:member"];
            });
    
            return item;
        } 

}