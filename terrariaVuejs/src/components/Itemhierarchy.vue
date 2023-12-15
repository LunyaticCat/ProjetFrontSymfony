<script setup lang="ts">
import Item from './Item.vue';
import RecursivItem from './RecursivItem.vue';

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


let itemsOrdererCraft0= getItemAndHisChildrens(items[0]);

console.log("itemsOrdererCraft0");
console.log(itemsOrdererCraft0);
console.log("-----------------");

/**
 * Met en forme les données de sorte à avoir une architecture simple à afficher :
 * [ //Tableau lignes
 *  [ //groupes de crafts (Pour chaque craft à cette génération) 
 *  [
 *    //Items
 *   ],
 *  []
 *  ],
 *  []
 * ]
 */
function formatCrafts(){
  let itemsToShow = [];
  
}

/**
 * Renvoie tous les items composants un craft ainsi que les crafts les composant récursivement
 * getItemAndHisChildrens = 
 * {
 * 
 *  "item": ITEM,
 *  "enfants":{
 *    "item": ITEM_PARENT,
 *    "enfants": null
 *  }, 
 *  {
 *    "item": ITEM_PRENT2,
 *    "enfants": {
 *      "item": "ITEM_ANCETRE",
 *      "enfants": null
 *    }
 *  }
 * }
 * 
 * [
 *  
 *  []
 * ]
 */
  function getItemAndHisChildrens(item: any){
    if(item===null) {
      return null
    }
    let itemsOrder = new Map();
    let j=0;
    itemsOrder.set("item", item);
    const childrens = [];

    //On récupère le craft lié à l'item
    let craft = getCraftOfItem(item);
    if(craft===null){
      itemsOrder.set("childrens", []);
    }
    else{
      //On va chercher les parents du craft
      let groups = getGroupsFromCraft(craft);

      for(let i in groups){
        const childItem = getFirstItemFromGroup(groups[i]); //TODO : A changer : ne prend pas en compte les 'OU'
        childrens[j] = getItemAndHisChildrens(childItem);
        j++;
      }

      itemsOrder.set("childrens", childrens);
      // for(let i=0; i<itemGroups.length; i++){
      //   if(itemGroups[i].idCraft===craft.idCraft){
      //     let item = items[groupFragments[itemGroups[i].idGroup].idItem];
      //     itemsOrder.set("item", item);
      //     const childrenCraft = getCraftOfItem(item); //On récupere les enfants de l'item
      //       itemsOrder.set("childrens", getItemAndHisChildrens(childrenCraft));
      //     // items[] = items[i];
      //     j++;
        // }
    }

    return itemsOrder;
  }


/**
 * Donne tous les groupes necessaire à un craft
 * @param craft un craft
 */
function getGroupsFromCraft(craft: any){
  const groupsReturn = [];
  let j=0;
  for(let i=0; i<itemGroups.length; i++){
    if(itemGroups[i].idCraft===craft.idCraft){
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
function getFragmentFromGroup(group: any){
  const groupFragmentsReturn = [];
  let j=0;
  for(let i=0; i<groupFragments.length; i++){
    if(groupFragments[i].idGroup===group.idGroup){
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
function getItemFromFragment(fragment: any){
  for(let i=0; i<items.length; i++){
    if(items[i].idItem===fragment.idItem){
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
function getFirstItemFromGroup(group: any){
  return getItemFromFragment(getFragmentFromGroup(group)[0])
}

/**
 * 
 * @param item 
 */
function getCraftOfItem(item: any){

  for(let i=0; i<crafts.length; i++){
    if(crafts[i].idResult==item.idItem){
      return crafts[i];
    }
  }
  return null;
//  throw new Error("No craft found for this item");
}

function getMaxNbGeneration(craft: any): number{
  return 1+getMaxNbGeneration(getCraftOfItem(craft.idResult));
}



</script>

<template>
    <main>
      <section>
        <!-- <Item v-bind:idItem="baseItemId"></Item> -->
          <RecursivItem :items="itemsOrdererCraft0" :index="0"></RecursivItem>
        <!-- Deuxième version -->

      <!-- <section v-for="group in getItemAndHisChildrens(crafts[0])"> -->

      <section>

      </section>
      </section>
      <section>
        
      </section>
      <section>
        
      </section>
      <section>
        
      </section>
      <!-- Première version : Pas ouf -->

            <!-- Séparateur par niveau d'héritage -->
      <!-- <section v-for="craft in crafts">


         Séparateur par crafts -->
          <!-- <div class="groupContener" v-for="group in getGroupsFromCraft(craft)"> -->
            
            <!-- Différents items -->
            <!-- <div class="itemContener" > -->
              
              <!-- <Item v-bind:idItem="getFirstItemFromGroup(group).idItem"></Item> -->
            <!-- </div> -->
            
          <!-- </div> -->
      <!-- </section> -->
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
div .groupContener{
  background-color: blue;
  width: 100%;
}

div .itemContener{
  background-color: pink;
  width: 100%;
}



</style>
