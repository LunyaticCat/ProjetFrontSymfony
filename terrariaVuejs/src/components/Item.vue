<script setup lang="ts">

const carac = defineProps<{
  idItem: number
}>();
console.log(carac.idItem);


</script>

<template>

    <section id="item">
        <div>
            Voici l'item numéro {{ idItem }}
        </div>
    </section>

</template>



<style scoped>

  section #item{
    background-color: var(--bg-sky);
    border: 2px black solid;
    width: 300px;
    height: 100px;
    padding: 10px 0 10px 0;
    margin: 5px;
}



</style>
