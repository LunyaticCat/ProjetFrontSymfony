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



</script>

<template>

    <div id="item">
        <div>
           {{ item?.id }}
            
        </div>
        <div>
          <a @click="router.push('/itemhierarchy/'+item?.id)">{{ item?.nameItem }}</a>
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

a{
  color: blue;
}



</style>
