<script setup lang="ts">
import {useRouter} from 'vue-router';


const router = useRouter();

</script>

<template>
<head>
    <meta charset="UTF-8">
    <title>Terraria Vuejs</title>

</head>


    <header>
        <img src="../assets/logo.png" alt="logo" class="logo">
        <nav>
        <a @click="router.push('/allusers')">All Users</a>
        <a @click="router.push('/itemhierarchy')">Item Hierarchy</a>
        <a @click="router.push('/user')">My Account</a>
    </nav>
    </header>
    <router-view />

</template>



<style scoped>

  .logo {
    width: 80px;
    border-radius: 10px;
  }

  header {
    background-color: var(--bg-grey);
    position: sticky;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    box-shadow: 0 5px 5px black;
    font-family: "DejaVu Sans",serif;
    user-select: none;
}

  header h1{
    margin: 10px;
    text-align: center;
    color: var(--txt-red);
    text-shadow: 1px 1px 6px black;
  }

  header nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    }

    header nav a{
      color: black;
      background: var(--bg-aqua);
      padding: 10px 10px 10px 10px;
      border-radius: 10px;
      box-shadow: 0 2px 2px black;
    }

    body{
      display: block;
    }


  nav a:hover {
    background-color: #e64747;
    color: black;
  }


</style>
