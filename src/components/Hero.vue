<script setup>


</script>

<template>
  <div class="tw-w-full tw-flex tw-justify-center tw-pb-12 tw-items-center">
    <div class="tw-w-full hero_section tw-flex tw-justify-center">

     <div class="overlay tw-w-full tw-flex tw-justify-center tw-items-center">

        <div class="overlay_content tw-w-4/5 tw-p-2  tw-flex">
            <div class="overlay_text   tw-w-1/2 tw-flex tw-flex-col tw-gap-16 tw-justify-center tw-items-center">
                <span class="tw-text-7xl tw-font-bold">Organic Veggies & Fruits Foods</span>
                <div class="tw-w-full tw-flex tw-justify-start  tw-items-center ">
                    <input class="tw-w-3/5 tw-text-lg tw-p-3 search_input tw-rounded-tl-3xl tw-rounded-bl-3xl" type="text" placeholder="Search">
                    <button class="tw-w-36 tw-text-lg tw-text-white search_btn tw-p-3  tw-rounded-tr-3xl tw-rounded-br-3xl">Submit Now</button>
                </div>
            </div>
            <div class="overlay_slider tw-w-1/2 tw-p-10 tw-flex tw-bg-white">
                <img class="" src="@/FruitablesAssets/asset 0.png" alt="">
            </div>
        </div>

     </div>
   
      
      
</div>
  </div>
</template>


<style scoped>
 .overlay_text span{
        color: #8bc34a;
        line-height: 80px;
    }
    .search_btn{
        background-color: #8bc34a;
        transition: ease-in 0.2s;
    }
    .search_btn:hover{
        background-color:#FFA726 ;
        transition: ease-in 0.2s;
    }
    .search_btn, .search_input{
        border: 1px solid #FFA726;
    }
.overlay{
    background:#ffffffe4;
}
  .hero_section{
    background-image: url('@/FruitablesAssets/fruitsbg2.jpg');
    background-position: center;
    /* background-size: clip; */
    background-size: cover;
    background-repeat: no-repeat;
    height: 58vh;
  }
</style>

