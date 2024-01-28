<script setup lang="ts">
import {type Item, type Craft, type ItemGroup, type GroupFragment} from '@/components/types';
import ItemTree from './ItemTree.vue';
import { ItemFamily, ItemManager } from '@/components/class';
import { onMounted, ref, type Ref } from 'vue';
import { useRoute } from 'vue-router'
import BlocItem from './BlocItem.vue'


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

// let items = ref([
//   {"id": 1, "nameItem": "Item 1"},
//   {"id": 2, "nameItem": "Item 2"},
//   {"id": 3, "nameItem": "Item 3"},
//   {"id": 4, "nameItem": "Item 4"},
//   {"id": 5, "nameItem": "Item 5"},
//   {"id": 6, "nameItem": "Item 6"},
//   {"id": 7, "nameItem": "Item 7"}

// ]);

// let groupFragments = ref([
//   {"idGroup": 0, "id": 2},
//   {"idGroup": 1, "id": 3},
//   {"idGroup": 2, "id": 4},
//   {"idGroup": 3, "id": 5},
//   {"idGroup": 4, "id": 6},
//   {"idGroup": 5, "id": 7}


// ]);
// let itemGroups = ref([
//   {"idGroup": 0, "idCraft": 0},
//   {"idGroup": 1, "idCraft": 0},
//   {"idGroup": 2, "idCraft": 1},
//   {"idGroup": 3, "idCraft": 1},
//   {"idGroup": 4, "idCraft": 1},
//   {"idGroup": 5, "idCraft": 2}
// ]);

// let crafts = ref([
//   {"idCraft": 0, "idResult": 1},
//   {"idCraft": 1, "idResult": 3},
//   {"idCraft": 2, "idResult": 2}
// ]);

let items: Ref<Item[]> = ref([
]);

let groupFragments : Ref<GroupFragment[]>= ref([
]);
let itemGroups : Ref<ItemGroup[]>= ref([

]);

let crafts: Ref<Craft[]> = ref([

]);

let itemsFamilyApi: Ref<ItemFamily> = ref(new ItemFamily());

//On remplie toutes nos données et une fois que c'est fait on met en forme l'itemFamily
//GetAllItems

onMounted(() => {
  fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/items')
    .then(reponsehttp => reponsehttp.json())
    .then(reponseJSON => {
      items.value = reponseJSON["hydra:member"];

      //GetGroupFragments
      fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/group_fragments')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          groupFragments.value = reponseJSON["hydra:member"];

        //GetItemGroups
        fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/item_groups')
        .then(reponsehttp => reponsehttp.json())
        .then(reponseJSON => {
          itemGroups.value = reponseJSON["hydra:member"];

          //GetCrafts
          fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/crafts')
          .then(reponsehttp => reponsehttp.json())
          .then(reponseJSON => {
            crafts.value = reponseJSON["hydra:member"];

            //TRANSFORMATION ITEMFAMILY

            
            itemsFamilyApi.value = getItemFamily(getItemById(idItemToBuild));

          });
        });
      });
    });
  });

// fetch('https://webinfo.iutmontp.univ-montp2.fr/~campsa/ProjetApiSymfony/public/api/items/'+encodeURI(String(idItemToBuild)))
//                 .then(reponsehttp => reponsehttp.json())
//                 .then(reponseJSON => {
//                     itemsFamily = reponseJSON["hydra:member"];
//                     try{
//                       itemsFamily = getItemFamily(ItemManager.getItemById(idItemToBuild));
//                     } catch(e){
//                       console.log(e);
//                     }
//             });

// console.log(ItemManager.getItemById(idItemToBuild));

// try{
//   itemsFamily = getItemFamily(ItemManager.getItemById(idItemToBuild));
// } catch(e){
//   console.log(e);
// }


/**
 * Converti une donnée reçu de cette forme /~campsa/ProjetApiSymfony/public/api/items/4
 * à celle là 4
 * C'est horrible mais les données reçu sont incohérentes
 */
function convertBadData(data : number|undefined){
let splited = String(data).split('/');
return Number(splited[splited.length-1]);
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
  let craft = getCraftOfItem(item.id);

  //On va chercher les parents du craft
  if (craft === null) {
    return itemFamily;
  }
  let groups = getGroupsFromCraft(craft);
  for (let group in groups) {
    const childItem = getFirstItemFromGroup(groups[group]); //TODO Ajouter la prise en charge des 'OU'
    itemFamily.childrens.push(getItemFamily(childItem));
  }

  console.log(itemFamily);
  return itemFamily;
}

function getItemById(idItem : number){
  for(let i=0; i<items.value.length; i++){
    if(convertBadData(items.value[i]?.id)==idItem){
      return items.value[i];
    }
  };
  return items.value[0];
}

/**
 * Donne tous les groupes necessaire à un craft
 * @param craft un craft
 */
function getGroupsFromCraft(craft: Craft): Array<ItemGroup> {
  const groupsReturn : ItemGroup[] = [];
  let j = 0;
  for (let i = 0; i < itemGroups.value.length; i++) {
    if (convertBadData(itemGroups.value[i].idCraft) === convertBadData(craft.id)) {
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
  const groupFragmentsReturn : GroupFragment[] = [];
  let j = 0;
  for (let i = 0; i < groupFragments.value.length; i++) {
    if (convertBadData(groupFragments.value[i].idGroup) === convertBadData(group.id)) {
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
    if (convertBadData(items.value[i]?.id) === convertBadData(fragment.idItem)) {
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
function getCraftOfItem(itemId: number): Craft | null { //TODO : enlever le OU NULL
  for (let i = 0; i < crafts.value.length; i++) {
    if (convertBadData(crafts.value[i].idResult) == itemId) {
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
      <div v-if="itemsFamilyApi===null">
        Aucun item à afficher
      </div>
      <p>
        Item to build : {{ idItemToBuild }}
      </p>
      <p>
        {{ itemsFamilyApi.item }}
      </p>
      
      <ItemTree :itemsOrdered="itemsFamilyApi" :generation="0"></ItemTree>
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
