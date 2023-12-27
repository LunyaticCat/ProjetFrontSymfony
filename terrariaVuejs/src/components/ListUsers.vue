<script setup lang="ts">
import User from './User.vue';
/**
 * Affiche tous les utilisateurs à partir des données hard-codés. 
 * Permet de tester l'affichage de la liste des utilisateurs
 */


let users = [{
    idUser: 1,
    login:"Gaston Lagafe",
    email: "email@bg.fr",
    pictureUrl: "../assets/tiny.png"
},
{
    idUser: 2,
    login:"Aloe Verra",
    email: "Gabou@bg.fr",
    pictureUrl: "../assets/mirana.png"
},{
    idUser: 1,
    login:"Gaston Lagafe",
    email: "email@bg.fr",
    pictureUrl: "../assets/tiny.png"
},
{
    idUser: 2,
    login:"Aloe Verra",
    email: "Gabou@bg.fr",
    pictureUrl: "../assets/mirana.png"
},{
    idUser: 1,
    login:"Gaston Lagafe",
    email: "email@bg.fr",
    pictureUrl: "../assets/tiny.png"
},
{
    idUser: 2,
    login:"Aloe Verra",
    email: "Gabou@bg.fr",
    pictureUrl: "../assets/mirana.png"
},{
    idUser: 1,
    login:"Gaston Lagafe",
    email: "email@bg.fr",
    pictureUrl: "../assets/tiny.png"
},
{
    idUser: 2,
    login:"Aloe Verra",
    email: "Gabou@bg.fr",
    pictureUrl: "../assets/mirana.png"
}]

</script>


<template>
    <section>
        <div v-for="user in users" :key="user.idUser">
            <User v-bind:login="user.login" v-bind:email="user.email" 
            v-bind:picture-url="user.pictureUrl"></User>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>