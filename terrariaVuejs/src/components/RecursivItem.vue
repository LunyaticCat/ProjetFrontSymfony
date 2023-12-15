
<script setup lang="ts">
import ItemVue from './Item.vue';
import {ref} from 'vue';


// Args : l'item, ses enfants 
//sous forme {"item": Item, "children": [{...}, {...}]}
const carac = defineProps<{
  items: any,
  index: number
}>();

console.log(carac.items);
let item:any;
let childrens:any;

if(carac.items!==undefined){
    item = ref(carac.items.get("item"));
    childrens = carac.items.get("childrens");

    console.log(item);
    console.log(childrens);

    // Relance la boucle 
}
</script>

<template>
<!-- Affiche l'item -->
<!-- <div v-for="(value, key) in items"> -->
    <div v-if="carac.items!==undefined">
        index = {{ index }}
        <ItemVue :idItem="item.idItem"></ItemVue>
        <section>
            <RecursivItem v-for="groupItems in childrens" :items="groupItems" :index="index+1"></RecursivItem>
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
