
<script setup lang="ts">
import type { ItemFamily } from '@/components/class';
import ItemVue from './Item.vue';
import type {Item} from '@/components/types';
/**
  * Affiche un item ainsi que tous ses enfants sous forme d'un arbre vertical
  */

const carac = defineProps<{
    itemsOrdered: ItemFamily
    generation: number 
}>();

const item:Item = carac.itemsOrdered.item;
const childrens:Array<ItemFamily> = carac.itemsOrdered.childrens;

</script>

<template>
<!-- Affiche l'item -->
    <div v-if="item!==null" class="verticalHierarchy">
        generation = {{ generation }}
        <ItemVue :idItem="item.idItem"></ItemVue>
        <section>
            <ItemTree v-for="groupItems in childrens" v-bind:key="groupItems.item?.nameItem" :itemsOrdered="groupItems" :generation="generation+1"></ItemTree>
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
