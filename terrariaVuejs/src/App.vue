<script setup lang="ts">
import Itemhierarchy from './views/Itemhierarchy.vue';
import type ListUsersVue from './views/ListUsers.vue';
import RecursivItem from './views/RecursivItem.vue';



//import router from './router/index.ts';

//app.use(router) //ATTENTION, il faut récupérer le contenu d'un fichier ici https://matthieu-rosenfeld.github.io/assets/App.vue
let menu2 = "#Menu2"



//router.push({name: 'nomDeLaRoute'})
</script>

<template>
<head>
    <meta charset="UTF-8">
    <title>Terraria Vuejs</title>

</head>


    <header>
        <h1>Logo carre</h1>
        <nav>
        <a href="#section1">Item Hierarchy exemple</a>
        <a v-bind:href="menu2">User exemple</a>
        <a href="#section3">Login</a>
        <a href="#section4">Connect 4</a>
    </nav>
    </header>

    <Itemhierarchy></Itemhierarchy>

</template>



<style scoped>

  header {
    background-color: var(--bg-purple);
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
}

  header h1{
    margin: 10px;
    text-align: center;
    color: var(--txt-red);
    text-shadow: 1px 1px 6px black;
  }

  header nav {
    display: flex;
    background-color: var(--bg-purple);
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    }

    header nav a{
      color: black;

    }

    body{
      display: block;
    }


  nav a:hover {
    background-color: #e64747;
    color: black;
  }


</style>
