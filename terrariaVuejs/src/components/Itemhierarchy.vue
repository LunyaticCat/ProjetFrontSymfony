<script setup lang="ts">
import Item from './Item.vue';

let name = "Name";
let soul = "Not owned";
let rick = "Roll";

const baseItemId = 0;

let items = [
  {"idItem": 1, "nameItem": "Item 1"},
  {"idItem": 2, "nameItem": "Item 2"},
  {"idItem": 3, "nameItem": "Item 3"},
  {"idItem": 4, "nameItem": "Item 4"},
  {"idItem": 5, "nameItem": "Item 5"},
  {"idItem": 6, "nameItem": "Item 6"}

];

let groupFragments = [
  {"idGroup": 0, "idItem": 2},
  {"idGroup": 1, "idItem": 3},
  {"idGroup": 2, "idItem": 4},
  {"idGroup": 3, "idItem": 5},
  {"idGroup": 4, "idItem": 6}


];
let itemGroups = [
  {"idGroup": 0, "idCraft": 0},
  {"idGroup": 1, "idCraft": 0},
  {"idGroup": 2, "idCraft": 1},
  {"idGroup": 3, "idCraft": 1},
  {"idGroup": 4, "idCraft": 1}
];

let crafts = [
  {"idCraft": 0, "idResult": 0},
  {"idCraft": 1, "idResult": 3}
];

function childOf(idCraft: any){ //TODO : Mettre en integer l'argument
  console.log("idCraft");
  console.log(idCraft);
  let itemsReturn = [];
  let i=0;
  console.log("itemGroups");
  console.log(itemGroups);
  for (let i=0; i<5; i++){
    console.log("item");
    console.log(itemGroups[i]);
    if(itemGroups[i].idCraft===idCraft){

      itemsReturn[i] = itemGroups[i];
    i++;
    }
  }
  return itemsReturn;
};

</script>

<template>
    <main>
      <section>
        <Item></Item>
      </section>
      <section v-for="craft in crafts">
          <div class="childContener" v-for="item in childOf(craft.idCraft)">
            <Item>  </Item>
          </div>
      </section>
  </main>
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

main{
  background-color: black;
}

div .childContener{
  background-color: pink;
  width: 100%;
}



</style>
