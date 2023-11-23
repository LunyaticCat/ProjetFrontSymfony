<script setup lang="ts">
import UserRectangle from './UserRectangle.vue';


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
}]

</script>


<template>
    <div v-for="user in users" :key="user.idUser">
        <UserRectangle v-bind:login="user.login" v-bind:email="user.email" 
        v-bind:picture-url="user.pictureUrl"></UserRectangle>
    </div>
</template>

<style scoped></style>