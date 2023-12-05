<script setup lang="ts">
import Item from './components/Item.vue';
import ItemHierarchy from './components/Itemhierarchy.vue';
import ItemPage from './components/ItemsPage.vue';
import ItemsPage from './components/ItemsPage.vue';
import ListUsersVue from './components/ListUsers.vue';
let menu2 = "#Menu2"


const click = function() {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
}
</script>

<template>
<head>
    <meta charset="UTF-8">
    <title>Terraria Vuejs</title>

</head>


    <header>
        <h1>Logo carre</h1>
        <nav>
        <a href="#section1">My page 1</a>
        <a v-bind:href="menu2">Menu 2</a>
        <a href="#section3" v-on:click="click">Login</a>
        <a href="#section4">Connect 4</a>
    </nav>
    </header>

    <ItemHierarchy></ItemHierarchy>

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
