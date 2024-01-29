<script setup lang="ts">
import type { Item } from '@/components/types';
import {useRouter} from 'vue-router';
const router = useRouter();


/**
 * Affiche un item
 */

const carac = defineProps<{
  item: Item
}>();

function deleteItem(){
  fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/items/'+carac.item.id, {
            method: "DELETE"})
    .then(reponsehttp => {
      if(reponsehttp.status!==204){
        alert("La suppression n'a pas marchée");
      } else{
        alert("Item supprimé");
        carac.item.id = -1;
      }
   
    })
}

</script>

<template>

    <div id="item" v-if="item.id!=-1">
        <div>
           {{ item?.id }}
            
        </div>
        <div>
          <a @click="router.push('/itemhierarchy/'+item?.id)">{{ item?.nameItem }}</a>
        </div>
        <div>
          <button v-on:click="deleteItem()">Delete item</button>
        </div>
      </div>

</template>



<style scoped>

  div #item{
    background-color: var(--bg-sky);
    border: 2px black solid;
    width: 100px;
    padding: 10px 0 10px 0;
    margin: 5px;
    text-align: center;
}
div#item div{
  padding-top: 10px;
}

a{
  color: blue;
}



</style>
