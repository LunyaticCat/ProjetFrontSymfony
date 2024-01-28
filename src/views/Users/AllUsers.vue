<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import BlocUser from './BlocUser.vue';
import { UserManager } from '@/components/class';
import type { User } from '@/components/types';
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

const usersApi :Ref<User[]> = ref([{
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
}]);

onMounted(() => {
    usersApi.value = UserManager.getAllUsers()
})
</script>


<template>
    <section>
        <div v-for="user in usersApi" :key="user.idUser">
            <BlocUser v-bind:user=user></BlocUser>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    flex-wrap: wrap;
}
</style>