<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
import { globalInput } from "@/stores/global";
const global = globalInput()

const uriValue = ref(route.params.id)

import appleImg from '@/FruitablesAssets/asset 22.jpeg';
import bananaImg from '@/FruitablesAssets/asset 14.png';
import orangeImg from '@/FruitablesAssets/asset 17.jpeg';
import tomatoImg from '@/FruitablesAssets/asset 13.jpeg';
import spinachImg from '@/FruitablesAssets/asset 12.jpeg';
import broccoliImg from '@/FruitablesAssets/asset 10.jpeg';
import almondImg from '@/FruitablesAssets/asset 20.jpeg';
import cashewImg from '@/FruitablesAssets/asset 21.jpeg';
import walnutImg from '@/FruitablesAssets/asset 1.jpeg';


// const Products = [
//   // Fruits
//   {
//     id: "1",
//     name: "Apple",
//     category: "Fruit",
//     details: "A sweet, edible fruit produced by an apple tree. Apples are high in fiber and vitamin C.",
//     pricePerKg: '$150',
//     image: appleImg
//   },
//   {
//     id: 2,
//     name: "Banana",
//     category: "Fruit",
//     details: "A tropical fruit that's rich in potassium, making it great for energy and muscle health.",
//     pricePerKg: 60,
//     image: bananaImg,
//   },
//   {
//     id: 3,
//     name: "Orange",
//     category: "Fruit",
//     details: "A juicy tropical stone fruit, known for its sweetness and vibrant orange flesh.",
//     pricePerKg: 200,
//     image: orangeImg,
//   },
  
//   // Vegetables
//   {
//     id: 4,
//     name: "Tomato",
//     category: "Vegetable",
//     details: "A tomato is red in colour and rich in protein, and it is almost used in ever dish.",
//     pricePerKg: 50,
//     image: tomatoImg
//   },
//   {
//     id: 5,
//     name: "Spinach",
//     category: "Vegetable",
//     details: "A leafy green vegetable that is a great source of iron and other vitamins.",
//     pricePerKg: 40,
//     image: spinachImg
//   },
//   {
//     id: 6,
//     name: "Broccoli",
//     category: "Vegetable",
//     details: "A green vegetable rich in vitamins and minerals, known for its high fiber content.",
//     pricePerKg: 70,
//     image: broccoliImg
//   },
//   // Nuts
//   {
//     id: 10,
//     name: "Almond",
//     category: "Nut",
//     details: "A highly nutritious nut, rich in healthy fats, fiber, protein, magnesium, and vitamin E.",
//     pricePerKg: 1200,
//     image: almondImg
//   },
//   {
//     id: 11,
//     name: "Cashew",
//     category: "Nut",
//     details: "A creamy nut that is often used in cooking and snacks, high in healthy fats and minerals.",
//     pricePerKg: 1000,
//     image: cashewImg
//   },
//   {
//     id: 12,
//     name: "Walnut",
//     category: "Nut",
//     details: "A highly nutritious nut, known for being rich in antioxidants and omega-3 fatty acids.",
//     pricePerKg: 1500,
//     image: walnutImg
//   }
// ];
let ifProducts = reactive([])
let Products = reactive([])
let fruitsCategoryStatus = ref(false)
let vegetablesCategoryStatus = ref(false)
let allCategoryStatus = ref(false)

async function fetchData(){
  const api = 'https://post-api.hrarmy.in/vidushi_fruits'
  try {
    const resp = await fetch(api);
    const data = await resp.json(); // Wait for the data
    // Update the array reactively
      Products.splice(0, Products.length, ...data);
      allCategoryStatus.value = true
    console.log('yeye', Products)
    console.log('all status is', allCategoryStatus.value)

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function categorizeFruits(){
  ifProducts.length = 0
  Products.forEach(elem => {
  if(elem.category === 'Fruit'){
    ifProducts.push(elem)
  }
})
fruitsCategoryStatus.value = true;
  vegetablesCategoryStatus.value = false;
  allCategoryStatus.value = false;
console.log('ye hai ifProducts fruits ka array',ifProducts)
console.log('fruits ka status is', fruitsCategoryStatus.value)
}
function categorizeVegetables(){
  ifProducts.length = 0
  Products.forEach(elem => {
  if(elem.category === 'Vegetables'){
    ifProducts.push(elem)
  }
})
vegetablesCategoryStatus.value = true;
  fruitsCategoryStatus.value = false;
  allCategoryStatus.value = false;
console.log('ye hai ifProducts vegetables ka array',ifProducts)
console.log('vegetables ka status is', vegetablesCategoryStatus.value)
}

onMounted( () =>{
  fetchData()
  console.log('fxn k bhaar ka products', Products)
});

// console.log('here is global showDetail value before click',global.showDetail)
// function changeShowDetail(id){
//     global.idForDetail = id
//     console.log('heelo')
//     console.log('here is global showDetail value after click',global.showDetail)
// }
</script>

<template>
    <div v-if="!route.params.id" class="tw-w-full tw-flex  tw-flex-col tw-p-1 tw-justify-center">
      <div class="tw-w-full tw-flex tw-gap-10">
        <span @click="categorizeFruits" >Fruits</span>
        <span @click="categorizeVegetables">Vegetables</span>
      </div>
        <div v-if="allCategoryStatus.value" class="img tw-w-10/12 tw-p-2 tw-flex tw-flex-wrap tw-gap-16">
          {{ route.params.id }}
          <div v-for="item in Products" :key="item.id" class="tw-w-1/5 tw-flex-col tw-overflow-hidden item_container tw-flex tw-justify-center tw-items-center tw-gap-2  tw-bg-white tw-rounded-xl">
            <img class="tw-rounded-tl-xl tw-rounded-tr-xl" :src="item.image " :alt="item.id">
            <span class="name tw-text-center tw-font-semibold tw-text-gray-700 tw-text-xl tw-block">{{ item.name }}</span>
            <span  class="name tw-text-center tw-text-gray-500 tw-block tw-cursor-pointer">{{item.details}}</span>
            <router-link :to="`home/${item.id}`"  class="tw-w-40 tw-text-center tw-rounded-md  tw-p-1  tw-text-white bg tw-bg-orange-400 tw-mb-3">See Details</router-link>
          </div>
        </div>
        <div v-else-if="fruitsCategoryStatus.value" class="img tw-w-10/12 tw-p-2 tw-flex tw-flex-wrap tw-gap-16">
          {{ route.params.id }}
          <div v-for="item in ifProducts" :key="item.id" class="tw-w-1/5 tw-flex-col tw-overflow-hidden item_container tw-flex tw-justify-center tw-items-center tw-gap-2  tw-bg-white tw-rounded-xl">
            <img class="tw-rounded-tl-xl tw-rounded-tr-xl" :src="item.image " :alt="item.id">
            <span class="name tw-text-center tw-font-semibold tw-text-gray-700 tw-text-xl tw-block">{{ item.name }}</span>
            <span  class="name tw-text-center tw-text-gray-500 tw-block tw-cursor-pointer">{{item.details}}</span>
            <router-link :to="`home/${item.id}`"  class="tw-w-40 tw-text-center tw-rounded-md  tw-p-1  tw-text-white bg tw-bg-orange-400 tw-mb-3">See Details</router-link>
          </div>
        </div>
        <div v-else-if="vegetablesCategoryStatus.value" class="img tw-w-10/12 tw-p-2 tw-flex tw-flex-wrap tw-gap-16">
          {{ route.params.id }}
          <div v-for="item in ifProducts" :key="item.id" class="tw-w-1/5 tw-flex-col tw-overflow-hidden item_container tw-flex tw-justify-center tw-items-center tw-gap-2  tw-bg-white tw-rounded-xl">
            <img class="tw-rounded-tl-xl tw-rounded-tr-xl" :src="item.image " :alt="item.id">
            <span class="name tw-text-center tw-font-semibold tw-text-gray-700 tw-text-xl tw-block">{{ item.name }}</span>
            <span  class="name tw-text-center tw-text-gray-500 tw-block tw-cursor-pointer">{{item.details}}</span>
            <router-link :to="`home/${item.id}`"  class="tw-w-40 tw-text-center tw-rounded-md  tw-p-1  tw-text-white bg tw-bg-orange-400 tw-mb-3">See Details</router-link>
          </div>
        </div>
        <div v-else>
  <p>No products to display</p>
</div>
    </div>
   <router-view :uri="uriValue"  v-else/>
</template>
<style scoped>
    .item_container{
        border: 1px solid #ffa726;
    }
    .item_container img{
        transition: ease 0.2s;
    }
    .item_container img:hover{
        transition: ease 0.5s;
    transform: scale(1.05);
    }
</style>