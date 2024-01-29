
<script setup lang="ts">
import type { User } from '@/components/types';
import { onMounted, ref } from 'vue';
import {Md5} from 'ts-md5';

/**
 * Affiche un utilisateur avec sa photo et ses infos
 */
    // const caracs = defineProps<{
    //     login: string,
    //     email: string,
    //     pictureUrl: string
    // }>()
    const external = defineProps<{
        user: User
    }>();


    


</script>

<template>
    <div id="userReclangle">
        <h1>{{external.user.login}}</h1>
        <div id="userInfo">

        <img :src="'https://webinfo.iutmontp.univ-montp2.fr/~pujadej/ProjetWebSymphonyMyAvatar/public/avatar/'+Md5.hashStr(external.user.email)">
                <p>{{external.user.email}}</p>
            
        </div>
    </div>
    <template>
    <div class="contentBox">
        <div class="top">
        Profil de {{ external.user.login }}
        </div>
        <div class="content">
        <div class="group">
            <label>Login</label>
            <input :value="external.user.login" >
        </div> 
        <div class="group">
            <label>Adresse e-mail</label>
            <input :value="external.user.email" > 
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
  