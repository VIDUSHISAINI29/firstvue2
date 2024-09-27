<script setup>
import { ref, reactive, onMounted } from 'vue';

import { useRoute } from "vue-router";
const route = useRoute();
const uriValue = ref(route.params.id)

import { globalInput } from "@/stores/global";
const global = globalInput()






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

let Products = reactive([])

async function fetchData(){
  const api = 'https://post-api.hrarmy.in/vidushi_fruits'
  try {
    const resp = await fetch(api);
    const data = await resp.json(); // Wait for the data
    // Update the array reactively
      Products.splice(0, Products.length, ...data);
    
    console.log('yeye', Products)
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
onMounted( () =>{
  fetchData()
  console.log('fxn k bhaar ka products', Products)
});



</script>

<template>
   <div class="tw-w-full tw-flex tw-flex-col tw-items-center  tw-p-1 tw-justify-center">
  
    <div  class="tw-w-full tw-flex  tw-flex-col tw-items-center  tw-p-1 tw-justify-center">
      <div class="heading tw-w-4/5 tw-mt-10 tw-mb-6">
        <span class="tw-text-4xl tw-text-gray-800 tw-font-semibold">Our Organic Products</span>
    </div>
        <div class="img tw-w-10/12 tw-p-2 tw-flex tw-flex-wrap card_gap">
          
          <div v-for="item in Products" :key="item.id" class="tw-w-1/5 tw-flex-col tw-overflow-hidden item_container tw-flex tw-justify-center tw-items-center tw-gap-2  tw-bg-white tw-rounded-xl">
            <img class="tw-rounded-tl-xl tw-rounded-tr-xl" :src="item.image " :alt="item.id">
            <span class="name tw-text-center tw-font-semibold tw-text-gray-700 tw-text-xl tw-block">{{ item.name }}</span>
            <span  class="name tw-text-center tw-text-gray-500 tw-block tw-cursor-pointer">{{item.details}}</span>
            <router-link :to="`home/${item.id}`"  class="tw-w-40 tw-text-center tw-rounded-md  tw-p-1  tw-text-white bg tw-bg-orange-400 tw-mb-3">See Details</router-link>
          </div>
        </div>
    </div>
   
   </div>
</template>
<style scoped>
.card_gap{
  gap: 90px;
}
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