<script setup>
import hero from '@/components/Hero.vue'
import itemsShow from './Products/ItemsShow.vue'
import facilities from '@/components/Facilities.vue'

import { useRoute } from "vue-router";
import { ref } from 'vue';
const route = useRoute();
const uriValue = ref(route.params.id)

</script>

<template>

<div class="tw-flex tw-justify-center tw-items-center tw-flex-col">
    <div v-if="!route.params.id">
    <hero />
<itemsShow />

  <facilities />
  
</div>
<router-view :id="uriValue"  v-else/>
</div>
 
 
</template>

<style scoped></style>