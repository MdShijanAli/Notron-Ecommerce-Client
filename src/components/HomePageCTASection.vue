<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <RouterLink to="/shop" class="overflow-hidden">
              <div class="h-[430px] bg-no-repeat bg-cover overflow-hidden hover:scale-105 transition duration-500 ease-in-out " style="background-image: url(../src/assets/images/1.webp);">
              <div class=" text-white text-center pt-10">
                <h1 class="text-ctah1 font-semibold">Sports Shoes</h1>
                <h4 class="text-bannerParagraph">From $95.00</h4>
              </div>
            </div>
            </RouterLink>
            <RouterLink to="/shop" class="overflow-hidden">
              <div class="h-[430px] bg-no-repeat bg-cover overflow-hidden hover:scale-105 transition duration-500 ease-in-out" style="background-image: url(../src/assets/images/cta2.webp);">
              <div class=" text-white text-center pt-10">
                <h1 class="text-ctah1 font-semibold">Latest Shoes</h1>
                <h4 class="text-bannerParagraph">From $90.00</h4>
              </div>
            </div>
            </RouterLink>
            <RouterLink to="/shop" class="overflow-hidden">
              <div class="h-[430px] bg-no-repeat bg-cover overflow-hidden hover:scale-105 transition duration-500 ease-in-out" style="background-image: url(../src/assets/images/3.webp);">
              <div class=" text-white text-center pt-10">
                <h1 class="text-ctah1 font-semibold">Office Shoes</h1>
                <h4 class="text-bannerParagraph">From $82.00</h4>
              </div>
            </div>
            </RouterLink>
           
        </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';

export default {
    name: "HomePageCTASection",
    components: { RouterLink }
}
</script>
<style>
  
</style>