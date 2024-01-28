<script setup lang="ts">
import type { Item } from '@/components/types';
import { ref, onMounted } from 'vue';
import BlocItem from './BlocItem.vue';


/**
 * Affiche tous les items
 */

 const itemsApi = ref([{
    idItem: 1,
    nameItem: "Item factice"
 },
 {
    idItem: 2,
    nameItem: "Item factice"
 }]);

 onMounted(() => {
  fetch('https://webinfo.iutmontp.univ-montp2.fr/~bruny/ApiProjet/public/api/items')
    .then(reponsehttp => reponsehttp.json())
    .then(reponseJSON => {
      itemsApi.value = reponseJSON["hydra:member"];
    });
  })
</script>

<template>
  <section class="item-wrapper">
    <div v-for="item in itemsApi" :key="item.idItem">
      <BlocItem v-bind:item=item></BlocItem>
    </div>
  </section>

</template>



<style scoped>

  div #item{
    background-color: var(--bg-sky);
    border: 2px black solid;
    width: 100px;
    height: 100px;
    padding: 10px 0 10px 0;
    margin: 5px;
}



</style>
