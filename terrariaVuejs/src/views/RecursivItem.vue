
<script setup lang="ts">
import ItemVue from './Item.vue';
import {ref} from 'vue';
import type {Item, ItemsOrdered} from '../components/types.ts';
/**
  * Affiche un item ainsi que tous ses enfants sous forme d'un arbre vertical
  * TODO : Refaire TOUT les commentaires de ce fichier
  */

const carac = defineProps<{
    itemsOrdered: ItemsOrdered
    generation: number 
}>();

const item:Item = carac.itemsOrdered.item;
const childrens:Array<ItemsOrdered> = carac.itemsOrdered.childrens;

</script>

<template>
<!-- Affiche l'item -->
    <div v-if="item!==null" class="verticalHierarchy">
        generation = {{ generation }}
        <ItemVue :idItem="item.idItem"></ItemVue>
        <section>
            <RecursivItem v-for="groupItems in childrens" v-bind:key="groupItems.item?.nameItem" :itemsOrdered="groupItems" :generation="generation+1"></RecursivItem>
        </section>

    </div>
        


</template>

<style scoped>

section {
    background-color: var(--bg-sky);
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
  }

  div .verticalHierarchy{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
