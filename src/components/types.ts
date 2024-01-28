export type Item = {
    id: number;
    nameItem: string;
} | null;

export interface User {
    idUser: number;
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
    id: number;
}
