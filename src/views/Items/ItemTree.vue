
<script setup lang="ts">
import type { ItemFamily } from '@/components/class';
import type {Item} from '@/components/types';
import { type Ref, ref } from 'vue';
import BlocItem from './BlocItem.vue';
/**
  * Affiche un item ainsi que tous ses enfants sous forme d'un arbre vertical
  */

const carac = defineProps<{
    itemsOrdered: ItemFamily
    generation: number 
}>();

</script>

<template>

    <div class="verticalHierarchy">
        <BlocItem :item="itemsOrdered.item"></BlocItem>
        <section v-if="itemsOrdered.childrens.length!==0">
            <ItemTree v-for="groupItems in itemsOrdered.childrens" v-bind:key="groupItems.item.nameItem" :itemsOrdered="groupItems" :generation="generation+1"></ItemTree>
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
