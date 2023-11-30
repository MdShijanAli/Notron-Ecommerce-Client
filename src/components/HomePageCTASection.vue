<template>
  <div>
    <div class="max-w-7xl mx-auto px-6 pb-10 sm:pt-20 pt-10">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <RouterLink v-for="item in items" :key="item.id" to="/shop" class="overflow-hidden">
              <div class="h-[430px] bg-no-repeat bg-cover overflow-hidden hover:scale-105 transition duration-500 ease-in-out " :style="{ backgroundImage: 'url(' + item.img + ')' }">
              <div class=" text-white text-center pt-10">
                <h1 class="text-ctah1 font-semibold">{{ item.title }}</h1>
                <h4 class="text-bannerParagraph">From ${{ item.price }}</h4>
              </div>
            </div>
            </RouterLink>

        </div>
    </div>
  </div>
</template>
<script>
import { RouterLink } from 'vue-router';
import img1 from "../assets/images/1.webp"
import img2 from "../assets/images/cta2.webp"
import img3 from "../assets/images/3.webp"


export default {
    name: "HomePageCTASection",
  components: { RouterLink },

  data() {
    return {
      items: [
        {
          id: 1,
          title: "Sports Shoes",
          price: "95.00",
          img: img1
        },
        {
          id: 2,
          title: "Latest Shoes",
          price: "90.00",
          img: img2
        },
        {
          id: 1,
          title: "Office Shoes",
          price: "82.00",
          img: img3
        },
      ]
    }
  }
}
</script>
<style>
  
</style>