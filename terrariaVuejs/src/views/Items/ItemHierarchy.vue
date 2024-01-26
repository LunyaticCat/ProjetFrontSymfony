<script setup lang="ts">
import {type Item, type Craft, type ItemGroup, type GroupFragment} from '@/components/types';
import ItemTree from './ItemTree.vue';
import { ItemFamily } from '@/components/class';


/**
 * Affiche un item ainsi que ses enfants en appelant ItemTree.
 * Pour cela, se base sur une copie de la BDD hard-codés.
 * Contient également les fonctions de traitement des données nécessaire à l'affichage de ces items
 */

let items = [
  {"idItem": 1, "nameItem": "Item 1"},
  {"idItem": 2, "nameItem": "Item 2"},
  {"idItem": 3, "nameItem": "Item 3"},
  {"idItem": 4, "nameItem": "Item 4"},
  {"idItem": 5, "nameItem": "Item 5"},
  {"idItem": 6, "nameItem": "Item 6"},
  {"idItem": 7, "nameItem": "Item 7"}

];

let groupFragments = [
  {"idGroup": 0, "idItem": 2},
  {"idGroup": 1, "idItem": 3},
  {"idGroup": 2, "idItem": 4},
  {"idGroup": 3, "idItem": 5},
  {"idGroup": 4, "idItem": 6},
  {"idGroup": 5, "idItem": 7}


];
let itemGroups = [
  {"idGroup": 0, "idCraft": 0},
  {"idGroup": 1, "idCraft": 0},
  {"idGroup": 2, "idCraft": 1},
  {"idGroup": 3, "idCraft": 1},
  {"idGroup": 4, "idCraft": 1},
  {"idGroup": 5, "idCraft": 2}
];

let crafts = [
  {"idCraft": 0, "idResult": 1},
  {"idCraft": 1, "idResult": 3},
  {"idCraft": 2, "idResult": 2}
];


let itemsOrdererCraft0 = getItemFamily(items[0]);


/**
 * Renvoie tous les items composants un craft ainsi que les crafts les composant récursivement
 */
function getItemFamily(item: Item): ItemFamily {
  if (item === null) {
    throw new Error("The item cannot be null");
  }
  let itemsOrder: ItemFamily = new ItemFamily();
  itemsOrder.item = item;
  new Array<ItemFamily>();

  //On récupère le craft lié à l'item
  let craft = getCraftOfItem(item.idItem);

  //On va chercher les parents du craft
  if (craft === null) {
    return itemsOrder;
  }
  let groups = getGroupsFromCraft(craft);

  for (let group in groups) {
    const childItem = getFirstItemFromGroup(groups[group]); //TODO Ajouter la prise en charge des 'OU'
    itemsOrder.childrens.push(getItemFamily(childItem));
  }


  return itemsOrder;
}


/**
 * Donne tous les groupes necessaire à un craft
 * @param craft un craft
 */
function getGroupsFromCraft(craft: Craft): Array<ItemGroup> {
  const groupsReturn = [];
  let j = 0;
  for (let i = 0; i < itemGroups.length; i++) {
    if (itemGroups[i].idCraft === craft.idCraft) {
      groupsReturn[j] = itemGroups[i];
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
  for (let i = 0; i < groupFragments.length; i++) {
    if (groupFragments[i].idGroup === group.idGroup) {
      groupFragmentsReturn[j] = groupFragments[i];
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
  for (let i = 0; i < items.length; i++) {
    if (items[i].idItem === fragment.idItem) {
      return items[i];
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
function getCraftOfItem(itemId: number): Craft | null { //TODO : enlever le OU NULL

  for (let i = 0; i < crafts.length; i++) {
    if (crafts[i].idResult == itemId) {
      return crafts[i];
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
      <ItemTree :itemsOrdered="itemsOrdererCraft0" :generation="0"></ItemTree>
    </section>
  </main>
</template>


<style scoped>

section {
  background-color: var(--bg-aqua);
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

main {
  background-color: black;
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
