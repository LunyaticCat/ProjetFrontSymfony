<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import BlocUser from './BlocUser.vue';
import { UserManager } from '@/components/class';
import type { User } from '@/components/types';
/**
 * Affiche tous les utilisateurs à partir des données hard-codés. 
 * Permet de tester l'affichage de la liste des utilisateurs
 */


const usersApi :Ref<User[]> = ref([{
    id: 1,
    login:"Gaston Lagafe",
    email: "email@bg.fr",
    picture_url: "/src/assets/tiny.png"
},
{
    id: 2,
    login:"Aloe Verra",
    email: "Gabou@bg.fr",
    picture_url: "/src/assets/mirana.png"
}]);

onMounted(() => {
    fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/users')    
    .then(reponsehttp => reponsehttp.json())
    .then(reponseJSON => {
        usersApi.value = reponseJSON["hydra:member"];
    });
  })
</script>


<template>
    <section>
        <div v-for="user in usersApi" :key="user.id">
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