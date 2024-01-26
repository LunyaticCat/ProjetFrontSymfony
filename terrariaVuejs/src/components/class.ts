import type { Craft, GroupFragment, Item, ItemGroup, User } from "./types";


/**
 * Gère le lien récursif entre les items
 */
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

/**
 * Gère les appels à l'API pour les items
 */
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

/**
 * Gère les appels à l'API pour les groups fragments
 */
export class GroupFragmentManager {
    /**
      * Demande à l'API la liste des groupFragments
      * Attention, prévoir la latence de l'appel
      * @returns Une liste contenant tous les groupes fragment de l'API
      */
    static getAllGroupFragment(): GroupFragment[] {
     let groupFragments : GroupFragment[] = [];
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/group_fragments')
         .then(reponsehttp => reponsehttp.json())
         .then(reponseJSON => {
            groupFragments = reponseJSON["hydra:member"];
     });
 
     return groupFragments;
 } 
}

/**
 * Gère les appels à l'API pour les items groups
 */
export class ItemGroupManager {
    /**
      * Demande à l'API la liste des groupFragments
      * Attention, prévoir la latence de l'appel
      * @returns Une liste contenant tous les groupes fragment de l'API
      */
    static getAllItemGroups(): ItemGroup[] {
     let itemGroups : ItemGroup[] = [];
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/item_groups')
         .then(reponsehttp => reponsehttp.json())
         .then(reponseJSON => {
            itemGroups = reponseJSON["hydra:member"];
     });
 
     return itemGroups;
 } 

 
}

/**
 * Gère les appels à l'API pour les crafts
 */
export class CraftManager {
    /**
      * Demande à l'API la liste des groupFragments
      * Attention, prévoir la latence de l'appel
      * @returns Une liste contenant tous les groupes fragment de l'API
      */
    static getAllCrafts(): Craft[] {
     let crafts: Craft[] = [];
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/crafts')
         .then(reponsehttp => reponsehttp.json())
         .then(reponseJSON => {
            crafts = reponseJSON["hydra:member"];
     });
 
     return crafts;
 } 


    /**
     * Demande la création d'un craft en base de données
     */
    static createCraft(){
        
    }
}