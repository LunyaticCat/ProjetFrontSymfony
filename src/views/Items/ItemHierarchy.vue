<script setup lang="ts">
import {type Item, type Craft, type ItemGroup, type GroupFragment} from '@/components/types';
import ItemTree from './ItemTree.vue';
import { ItemFamily, ItemManager } from '@/components/class';
import { ref } from 'vue';
import { useRoute } from 'vue-router'


const route = useRoute()
let idItemToBuild: number;
if(typeof(route.params.id)==="string"){
  idItemToBuild = parseInt(route.params.id);
} else{
  idItemToBuild = parseInt(route.params.id[0]);
}


/**
 * Affiche un item ainsi que ses enfants en appelant ItemTree.
 * Contient également les fonctions de traitement des données nécessaire à l'affichage de ces items
 */

let items = ref([
  {"idItem": 1, "nameItem": "Item 1"},
  {"idItem": 2, "nameItem": "Item 2"},
  {"idItem": 3, "nameItem": "Item 3"},
  {"idItem": 4, "nameItem": "Item 4"},
  {"idItem": 5, "nameItem": "Item 5"},
  {"idItem": 6, "nameItem": "Item 6"},
  {"idItem": 7, "nameItem": "Item 7"}

]);

let groupFragments = ref([
  {"idGroup": 0, "idItem": 2},
  {"idGroup": 1, "idItem": 3},
  {"idGroup": 2, "idItem": 4},
  {"idGroup": 3, "idItem": 5},
  {"idGroup": 4, "idItem": 6},
  {"idGroup": 5, "idItem": 7}


]);
let itemGroups = ref([
  {"idGroup": 0, "idCraft": 0},
  {"idGroup": 1, "idCraft": 0},
  {"idGroup": 2, "idCraft": 1},
  {"idGroup": 3, "idCraft": 1},
  {"idGroup": 4, "idCraft": 1},
  {"idGroup": 5, "idCraft": 2}
]);

let crafts = ref([
  {"idCraft": 0, "idResult": 1},
  {"idCraft": 1, "idResult": 3},
  {"idCraft": 2, "idResult": 2}
]);

let itemsFamily: ItemFamily;
console.log(ItemManager.getItemById(idItemToBuild));

try{
  itemsFamily = getItemFamily(ItemManager.getItemById(idItemToBuild));
} catch(e){
  console.log(e);
}


/**
 * Renvoie tous les items composants un craft ainsi que les crafts les composant récursivement
 */
function getItemFamily(item: Item): ItemFamily {
  if (item === null) {
    throw new Error("The item cannot be null");
  }
  let itemFamily: ItemFamily = new ItemFamily();
  itemFamily.item = item;
  new Array<ItemFamily>();

  //On récupère le craft lié à l'item
  let craft = getCraftOfItem(item.idItem);

  //On va chercher les parents du craft
  if (craft === null) {
    return itemFamily;
  }
  let groups = getGroupsFromCraft(craft);

  for (let group in groups) {
    const childItem = getFirstItemFromGroup(groups[group]);
    itemFamily.childrens.push(getItemFamily(childItem));
  }


  return itemFamily;
}


/**
 * Donne tous les groupes necessaire à un craft
 * @param craft un craft
 */
function getGroupsFromCraft(craft: Craft): Array<ItemGroup> {
  const groupsReturn = [];
  let j = 0;
  for (let i = 0; i < itemGroups.value.length; i++) {
    if (itemGroups.value[i].idCraft === craft.idCraft) {
      groupsReturn[j] = itemGroups.value[i];
      j++;
    }
  }
  return groupsReturn;
}

/**
 * Renvoie la liste des fragments de l'itemGroup
 * @param group Un element de itemGroup
 */
function getFragmentFromGroup(group: ItemGroup): Array<GroupFragment> {
  const groupFragmentsReturn = [];
  let j = 0;
  for (let i = 0; i < groupFragments.value.length; i++) {
    if (groupFragments.value[i].idGroup === group.idGroup) {
      groupFragmentsReturn[j] = groupFragments.value[i];
      j++;
    }
  }
  return groupFragmentsReturn;
}

/**
 * Renvoie l'item contenu dans le groupFragment, leve une erreur sinon
 * @param fragment Un element de groupFragment
 */
function getItemFromFragment(fragment: GroupFragment): Item {
  for (let i = 0; i < items.value.length; i++) {
    if (items.value[i].idItem === fragment.idItem) {
      return items.value[i];
    }
  }
  throw new Error("No item found for this fragment");
}

/**
 * Renvoie le premier élement de l'item group
 * Utile tant qu'on a pas l'api et qu'on a pas implémenté plusieurs items dans un itemGroup
 * @param group un element de itemGroups
 */
function getFirstItemFromGroup(group: ItemGroup): Item {
  return getItemFromFragment(getFragmentFromGroup(group)[0])
}

/**
 * Return the craft that make the item
 * @param itemId the id of the item
 */
function getCraftOfItem(itemId: number): Craft | null {

  for (let i = 0; i < crafts.value.length; i++) {
    if (crafts.value[i].idResult == itemId) {
      return crafts.value[i];
    }
  }
  return null;
  // throw new Error("No craft found for this item");
}

function getMaxNbGeneration(craft: Craft | null): number {
  if (craft === null) return 0;
  return 1 + getMaxNbGeneration(getCraftOfItem(craft.idResult));
}


</script>

<template>
  <main>
    <section>
      <div v-if="itemsFamily===null">
        Aucun item à afficher
      </div>
      <ItemTree v-if="itemsFamily!==null" :itemsOrdered="itemsFamily" :generation="0"></ItemTree>
    </section>
  </main>
</template>


<style scoped>

section {
  background-color: var(--bg-aqua);
  width: 100%;
  height: 425px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

main {
  height: 100%;

}

div .groupContener {
  background-color: blue;
  width: 100%;
}

div .itemContener {
  background-color: pink;
  width: 100%;
}


</style>
