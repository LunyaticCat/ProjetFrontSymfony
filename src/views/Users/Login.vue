
<script setup lang="ts">
    import {ref} from 'vue'; 
    import {authentificationToken} from '@/components/TokenStore';

    const connectingUser = ref({
        login: "",
        password:""
    });
    
</script>


<template>
 <div class="wrapper">
    <div class="top">
      <h3>Connection</h3>
    </div>

    <form  @submit.prevent="authentificationToken.connexion(connectingUser.login, connectingUser.password, ()=>{console.log('succes');}, ()=>{console.log('echec')})" class="content">
        <div class="group">
            <label>Login</label>
            <input v-model="connectingUser.login" >
        </div> 
        <div class="group">
            <label>Mot de passe</label>
            <input type="password" v-model="connectingUser.password" > 
        </div> 
        <button type="submit">
            Connexion
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
  