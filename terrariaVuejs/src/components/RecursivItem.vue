
<script setup lang="ts">
import ItemVue from './Item.vue';
import {ref} from 'vue';
import type {Item, ItemsOrdered} from './types.ts';
/**
//  * Affiche un item ainsi que tous ses enfants sous forme d'un arbre vertical
 */

// Args : l'item, ses enfants 
//sous forme {"item": Item, "children": [{...}, {...}]}
const carac = defineProps<{
    itemsOrdered: ItemsOrdered
//   items: Map<string, Item>,
  generation: number //TODO : Trouver un meilleur nom : représente l
}>();

console.log(carac.itemsOrdered);
let item:Item = carac.itemsOrdered.item;
// let childrens: Array<ItemsOrdered> = carac.itemsOrdered.childrens; //Est un dictionnaire dont la forme est préciser juste au dessus. TODO : Rendre ça propre

// if(item!==undefined){
//     item = ref(carac.items.get("item"));
//     childrens = carac.items.get("childrens");

//     console.log(item);
//     console.log(childrens);

//     // Relance la boucle 
// }
</script>

<template>
<!-- Affiche l'item -->
<!-- <div v-for="(value, key) in items"> -->
    <div v-if="item!==null">
        generation = {{ generation }}
        <ItemVue :idItem="item.idItem"></ItemVue>
        <section>
            <RecursivItem v-for="groupItems in carac.itemsOrdered.childrens" :itemsOrdered="groupItems" :generation="generation+1"></RecursivItem>
        </section>
    <!-- <ItemVue v-bind:idItem="value.id"></ItemVue> -->

    </div>
        

<!-- </div> -->

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
