
<script setup lang="ts">
/**
 * Affiche un utilisateur avec sa photo et ses infos
 */
    const caracs = defineProps<{
    login: string,
    email: string,
    pictureUrl: string
    }>()


</script>

<template>
    <div id="userReclangle">
        <h1>{{caracs.login}}</h1>
        <div id="userInfo">

        <img src="../assets/tiny.png">
                <p>{{caracs.email}}</p>
                <p>L'image est pas défaut, à modifier</p>
                <p>info 3</p>
            
        </div>
    </div>
  </template>
  
  <style scoped>


#userReclangle{
    border: 2px black solid;
    width: 300px;
    padding: 10px 0 10px 0;
    background-color: brown;
    margin: 5px;
}

h1{
    text-align: center;
}

img{
    height: 70px;
}

#userInfo{
    display: flex;
    flex-direction: column;
    align-items: center;
}

  </style>
  