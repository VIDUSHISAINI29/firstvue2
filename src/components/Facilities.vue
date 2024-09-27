<script setup>
    import {ref, reactive} from 'vue';
    const facilitiesArray = reactive([
        {
            id: 1,
            name: 'Free Shipping',
            detail: 'Free on order over $300',
            icon: "ri-truck-fill"
        },
        {
            id: 2,
            name: 'Security Payment',
            detail: '100% Security Payments',
            icon: "ri-lock-star-fill"
        },
        {
            id: 3,
            name: '30 Days Return',
            detail: '30 days money guarantee',
            icon: "ri-arrow-left-right-line"
        },
        {
            id: 4,
            name: '24/7 Support',
            detail: 'Support everytime fast',
            icon: "ri-phone-fill"
        }

    ])
</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-my-10  tw-py-12 tw-justify-center tw-items-center">
    <div class=" tw-w-3/4 tw-p-2  hero_section tw-flex tw-justify-between tw-gap-8">
        <div v-for="facility in facilitiesArray" :key="facility.id" class="tw-rounded-lg tw-w-1/5 tw-py-5 tw-px-10 tw-bg-gray-100 tw-flex tw-flex-col tw-justify-center tw-items-center" >
            <div :class="facility.icon" class="icons tw-text-7xl tw-mb-8"></div>
            <span class="tw-text-gray-700 tw-font-semibold tw-block tw-text-xl">{{ facility.name }}</span>
            <span class="tw-text-md tw-block tw-text-gray-400  tw-text-center">{{ facility.detail }}</span>
        </div>
    </div>
   
  </div>
</template>

<style scoped>
.icons{
    color: #FFA726;
}
</style>
