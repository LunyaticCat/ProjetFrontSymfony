
<script setup lang="ts">
import { onMounted, ref } from 'vue';


/**
 * Affiche un utilisateur avec sa photo et ses infos
 */
    const caracs = defineProps<{
        login: string,
        email: string,
        pictureUrl: string
    }>()


    const usersApi = ref([{
        idUser: 1,
        login:"Gaston Lagafe",
        email: "email@bg.fr",
        pictureUrl: "../assets/tiny.png"
    },
    {
        idUser: 2,
        login:"Gaston Lagafe",
        email: "email2@bg.fr",
        pictureUrl: "../assets/tiny.png"
    }]);

    


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
    <template>
    <div class="contentBox">
        <div class="top">
        Profil de {{ caracs.login }}
        </div>
        <div class="content">
        <div class="group">
            <label>Login</label>
            <input :value="caracs.login" >
        </div> 
        <div class="group">
            <label>Adresse e-mail</label>
            <input :value="caracs.email" > 
        </div> 
        </div>
    </div>
</template>
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
  