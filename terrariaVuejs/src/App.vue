<script setup lang="ts">

</script>

<template>

<head>
    <meta charset="UTF-8">
    <title>Terraria Vuejs</title>

</head>

<body>
    <header>
        <h1>Logo carre</h1>
        <nav>
        <a href="#section1">Ma page 1</a>
        <a href="#section2">Tous les items 2</a>
        <a href="#section3">S'inscrire 3</a>
        <a href="#section4">Se connecter 4</a>
    </nav>
    </header>

</body>


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


  nav a:hover {
    background-color: #e64747;
    color: black;
  }


</style>
