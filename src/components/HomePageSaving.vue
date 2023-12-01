<template>
  <div class="bg-savingBG">
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
            <ImageHoverBox />
            <div class="text-center">
              <div class="lg:pb-20 pb-10">
                <h2 class="lg:text-h1 text-xl md:text-2xl text-primary font-light">Saving 50%</h2>
              <h1 class="lg:text-head text-3xl md:text-4xl font-bold text-white py-5">All Online Store</h1>
              <p class="lg:text-bannerParagraph text-lg text-white">OFFER AVAILABLE ALL SHOES & PRODUCTS</p>

              </div>
          
                <div class="lg:pb-10 pb-5">
                  <RouterLink to="/shop" class="lg:px-20 px-8 py-3 lg:py-5 hover:bg-white border-2 border-black transition duration-500 ease-in-out hover:text-black hover:border-primary hover:border-2 text-white font-semibold rounded-sm bg-primary">
                  Shop Now
                </RouterLink>
                </div>
          
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import ImageHoverBox from './ImageHoverBox.vue';

export default {
    name: "HomePageSaving",
    data() {
        return {
            msg: "HomePageSaving"
        };
    },
    components: { ImageHoverBox }
}
</script>
<style scoped>

</style>