<script setup lang="ts">
import Item from './Item.vue';

let name = "Name";
let soul = "Not owned";
let rick = "Roll";

let items = [1, 2, 3, 4, 5];

</script>

<template>
    <main>

      <Item v-for="idItem in items"></Item>

    </main>
</template>



<style scoped>

  section {
    background-color: var(--bg-sky);
    border: 2px black solid;
    width: 300px;
    height: 100px;
    padding: 10px 0 10px 0;
    margin: 5px;
  }

main{
  display: flex;
  flex-wrap: wrap;
}



</style>
