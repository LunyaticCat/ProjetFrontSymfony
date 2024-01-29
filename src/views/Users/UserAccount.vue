
<script setup lang="ts">
import { UserManager } from '@/components/class';
import type { User } from '@/components/types';
import { ref, type Ref } from 'vue';
import { useRoute } from 'vue-router'
import type BlocUserVue from './BlocUser.vue';
import BlocUser from "@/views/Users/BlocUser.vue";


    const route = useRoute()
    let id: number;
    //Conversion car mon id est un number et que les url parametres sont soit des string soit des string[]
    if(typeof(route.params.id)==="string"){
    id = parseInt(route.params.id);
    } else{
    id = parseInt(route.params.id[0]);
}


    const userApi: Ref<User> = ref({
        id: 1,
        login:"Gaston Lagafe",
        email: "email@bg.fr",
        picture_url: "/src/assets/tiny.png"
    });


        fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/user/'+encodeURI(String(id)))
            .then(reponsehttp => reponsehttp.json())
            .then(reponseJSON => {
                userApi.value = reponseJSON["hydra:member"];
        });


</script>

<template>
    <BlocUser v-bind:user=userApi></BlocUser>
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
  