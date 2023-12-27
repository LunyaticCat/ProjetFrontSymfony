
<script setup lang="ts">
import ItemVue from './Item.vue';
import {ref} from 'vue';
import type {Item, ItemsOrdered} from './types.ts';
/**
  * Affiche un item ainsi que tous ses enfants sous forme d'un arbre vertical
  * TODO : Refaire TOUT les commentaires de ce fichier
  */

const carac = defineProps<{
    itemsOrdered: ItemsOrdered
    generation: number 
}>();

console.log(carac.itemsOrdered);
let item:Item = carac.itemsOrdered.item;

</script>

<template>
<!-- Affiche l'item -->
    <div v-if="item!==null">
        generation = {{ generation }}
        <ItemVue :idItem="item.idItem"></ItemVue>
        <section>
            <RecursivItem v-for="groupItems in carac.itemsOrdered.childrens" :itemsOrdered="groupItems" :generation="generation+1"></RecursivItem>
        </section>

    </div>
        


</template>

<style scoped>

section {
    background-color: var(--bg-sky);
    border: 2px black solid;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

</style>
