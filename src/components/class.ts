import type { Craft, GroupFragment, Item, ItemGroup, User } from "./types";
import {authentificationToken} from '@/components/TokenStore';
import {Md5} from 'ts-md5';

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
 * Demande la création d'un utilisateur
 */
    static register(login:string, password: string, email: string){
        let pictureUrl = Md5.hashStr(email);
        fetch("https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/users", {
            method: "POST",  
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: login, plainPassword: password, email: email, pictureUrl: pictureUrl}),
        }).then(reponsehttp => {
            reponsehttp.json().then(reponseJson => {
                if(reponsehttp.status == 201) alert("Utilisateur créé !");
                else alert(reponseJson["hydra:description"]);
            })
        })
    }
}

/**
 * Gère les appels à l'API pour les items
 */
export class ItemManager {
    /**
     * Demande à l'API un item par son identifiant en bd
     * Attention, prévoir la latence de l'appel
     * Si pas de réponse du serveur, renvoie un item de test
     * @param idItem L'identifiant de l'item à demander à l'api
     */
    public static getItemById(idItem: number): Item{
        let item : Item = {
            id : 0,
            nameItem : "Item Factice"
        };
    
            fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/items/'+encodeURI(String(idItem)))
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
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/group_fragments')
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
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/item_groups')
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
 
     fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/crafts')
         .then(reponsehttp => reponsehttp.json())
         .then(reponseJSON => {
            crafts = reponseJSON["hydra:member"];
     });
 
     return crafts;
 } 


    /**
     * Demande la création d'un craft en base de données
     * @param idResult L'identifiant de l'item à créer
     * @param idCreator Facultatif : l'identifiant de l'utilisateur qui l'a créé
     */
    static createCraft(idResult: number, idCreator: number|null){
        fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/crafts', {
            method: "POST",  
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ authentificationToken.JWT
            },
            body: JSON.stringify({
                idResult: "path/실례.html"
            }),
        });
    }
}