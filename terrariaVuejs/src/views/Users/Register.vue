
<script setup lang="ts">
    import {ref} from 'vue'; 
import { UserManager } from '@/components/class';

    const registerInfo = ref({
        login: "",
        password:"",
        email: "",
        pictureUrl: ""
    });
    
</script>


<template>
 <div class="wrapper">
    <div class="top">
      <h3>Création du profil</h3>
    </div>

    <form  @submit.prevent="UserManager.register(registerInfo.login, registerInfo.password, registerInfo.email, registerInfo.pictureUrl)" class="content">
        <div class="group">
            <label>Login</label>
            <input v-model="registerInfo.login" >
        </div> 
        <div class="group">
            <label>Mot de passe</label>
            <input type="password" v-model="registerInfo.password" > 
        </div> 
        <div class="group">
            <label>email</label>
            <input v-model="registerInfo.email" >
        </div> 
        <div class="group">
            <label>url image de profil</label>
            <input v-model="registerInfo.pictureUrl" >
        </div> 
        <button type="submit">
            s'enregister
        </button>
    </form>
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
  