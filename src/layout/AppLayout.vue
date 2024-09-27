<script setup>
import navbar from "@/layout/Navbar.vue";


import Footer from './Footer.vue'
</script>

<template>
<div class="tw-w-full tw-flex tw-flex-col tw-relative">
<navbar />
<router-view/>
   
<Footer />
  </div>
</template>

<style scoped>
/* .routed{
      height: 86vh;
   } */
</style>
