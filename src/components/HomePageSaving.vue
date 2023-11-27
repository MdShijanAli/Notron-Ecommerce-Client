<template>
  <div class="bg-savingBG">
    <div class="max-w-7xl mx-auto px-6 py-20">
        <div class="grid lg:grid-cols-2 justify-center gap-10">
            <div class="relative">
              <div class="">
              <div class=" absolute sm:bottom-[60px] lg:bottom-[110px] lg:left-[130px] md:bottom-[100px] md:left-[120px] bottom-[100px] left-[30px] sm:left-[100px] z-20">
                <span>
                  <img class="w-[200px] h-[150px]" src="../assets/images/shape-img.webp" alt="Image-HasTech">
                </span>
              </div>
              <div class="absolute left-0 bottom-[20px] z-10" >
                <img class="w-[532px] h-[326px]" src="../assets/images/shape.webp" alt="Image-HasTech">
              </div>
              <div class="sm:ml-20 ">
                <img src="../assets/images/shape-1.webp" width="280" height="339" alt="Image-HasTech">
              </div>
            </div>
            </div>
            <div class="text-center">
              <div class="lg:pb-20 pb-10">
                <h2 class="lg:text-h1 text-xl md:text-2xl text-primary font-light">Saving 50%</h2>
              <h1 class="lg:text-head text-4xl md:text-5xl font-bold text-white py-5">All Online Store</h1>
              <p class="lg:text-bannerParagraph text-xl text-white">OFFER AVAILABLE ALL SHOES & PRODUCTS</p>

              </div>
          
                <div class="lg:pb-10 pb-5">
                  <RouterLink to="/shop" class="lg:px-20 px-8 py-3 lg:py-5 text-white font-semibold rounded-sm bg-primary">
                  Shop Now
                </RouterLink>
                </div>
          
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePageSaving",
  data() {
    return {
      msg: "HomePageSaving"
    }
  }
}
</script>
<style scoped>

</style>